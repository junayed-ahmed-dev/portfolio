import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

console.log('[Avatar] Three.js r' + THREE.REVISION);

(function initAvatar() {
  const canvas  = document.getElementById('avatar-canvas');
  const wrapper = document.getElementById('avatar-canvas-wrap');
  if (!canvas || !wrapper) { console.error('[Avatar] elements missing'); return; }

  const mobile = () => window.innerWidth < 720;

  // ── Renderer ─────────────────────────────────────────────────────
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: !mobile(),
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled  = true;
  renderer.shadowMap.type     = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace   = THREE.SRGBColorSpace;
  renderer.toneMapping        = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  // ── Scene + Camera ───────────────────────────────────────────────
  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, 3 / 4, 0.05, 50);
  camera.position.set(0, 1.4, 2.4);
  camera.lookAt(0, 1.0, 0);

  // ── Resize ────────────────────────────────────────────────────────
  function resize() {
    const w = wrapper.clientWidth  || wrapper.offsetWidth  || 360;
    const h = wrapper.clientHeight || wrapper.offsetHeight || 480;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  [50, 200, 600].forEach(ms => setTimeout(resize, ms));
  new ResizeObserver(resize).observe(wrapper);

  // ── Lights ────────────────────────────────────────────────────────
  scene.add(new THREE.AmbientLight(0xffffff, 2.5));

  const key = new THREE.DirectionalLight(0xfff6e8, 2.5);
  key.position.set(2, 5, 3);
  key.castShadow = true;
  key.shadow.mapSize.setScalar(1024);
  key.shadow.bias = -0.001;
  scene.add(key);

  const rim  = new THREE.PointLight(0x7C3AED, 4.0, 7, 2);
  rim.position.set(-1.8, 2.5, -1.0);
  scene.add(rim);

  const fill = new THREE.PointLight(0x06B6D4, 2.5, 6, 2);
  fill.position.set(2.0, 0.8, 1.5);
  scene.add(fill);

  // ── Diagnostic sphere — visible immediately to confirm THREE works ─
  const diagSphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 16, 16),
    new THREE.MeshStandardMaterial({
      color: 0x7C3AED,
      emissive: 0x7C3AED,
      emissiveIntensity: 2.0,
      roughness: 0.4,
      metalness: 0.0,
    })
  );
  diagSphere.position.set(0, 1.0, 0);
  scene.add(diagSphere);

  // ── Shadow disc ───────────────────────────────────────────────────
  const disc = new THREE.Mesh(
    new THREE.CircleGeometry(0.65, 40),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.35, depthWrite: false })
  );
  disc.rotation.x = -Math.PI / 2;
  disc.position.y = 0.001;
  disc.renderOrder = -1;
  scene.add(disc);

  // ── Particles ─────────────────────────────────────────────────────
  const NP  = mobile() ? 30 : 55;
  const pos = new Float32Array(NP * 3);
  const col = new Float32Array(NP * 3);
  const ang = new Float32Array(NP);
  const rad = new Float32Array(NP);
  const spd = new Float32Array(NP);
  const py  = new Float32Array(NP);

  const pal = [
    new THREE.Color(0x7C3AED), new THREE.Color(0x06B6D4),
    new THREE.Color(0xFBBF24), new THREE.Color(0xC4B5FD), new THREE.Color(0x67E8F9),
  ];

  for (let i = 0; i < NP; i++) {
    ang[i] = Math.random() * Math.PI * 2;
    rad[i] = 0.4 + Math.random() * 1.0;
    spd[i] = 0.1  + Math.random() * 0.2;
    py[i]  = 0.1  + Math.random() * 2.4;
    pos[i*3]   = Math.cos(ang[i]) * rad[i];
    pos[i*3+1] = py[i];
    pos[i*3+2] = Math.sin(ang[i]) * rad[i];
    const c = pal[i % pal.length];
    col[i*3] = c.r; col[i*3+1] = c.g; col[i*3+2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color',    new THREE.BufferAttribute(col, 3));
  const mat = new THREE.PointsMaterial({
    size: 0.045, vertexColors: true,
    transparent: true, opacity: 0.9,
    sizeAttenuation: true, depthWrite: false,
  });
  scene.add(new THREE.Points(geo, mat));

  // ── State ─────────────────────────────────────────────────────────
  const clock = new THREE.Clock();
  let mixer=null, idleAction=null, waveAction=null;
  let headBone=null, spineBone=null, root=null;
  let isWaving=false, sectionSeen=false;
  const mouse={x:0,y:0}, mSm={x:0,y:0};

  document.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth)  *  2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
  }, { passive: true });

  // ── Load GLB ──────────────────────────────────────────────────────
  new GLTFLoader().load(
    'assets/avatar/junayed-avatar.glb',
    gltf => {
      const model = gltf.scene;
      root = model;

      // Auto-fit
      const box = new THREE.Box3().setFromObject(model);
      const sz  = new THREE.Vector3(); box.getSize(sz);
      const ctr = new THREE.Vector3(); box.getCenter(ctr);
      console.log('[Avatar] GLB loaded. Size:', sz.x.toFixed(2), sz.y.toFixed(2), sz.z.toFixed(2));
      const sc = 1.8 / sz.y;
      model.scale.setScalar(sc);
      model.position.set(-ctr.x * sc, -box.min.y * sc, -ctr.z * sc);

      // Shadows + bones
      model.traverse(child => {
        if (child.isMesh) {
          child.castShadow    = true;
          child.receiveShadow = true;
          // Fix potential double-sided material issue
          if (child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(m => { if (m.side === THREE.FrontSide) m.side = THREE.DoubleSide; });
          }
        }
        const n = child.name.toLowerCase();
        if (!headBone  && (n === 'head'  || n.includes('head')))               headBone  = child;
        if (!spineBone && (n === 'spine2'|| n === 'chest' || n === 'spine1'))  spineBone = child;
      });

      // Remove diagnostic sphere once model is in
      scene.remove(diagSphere);
      scene.add(model);

      // Animations — play whatever clips exist
      console.log('[Avatar] clips:', gltf.animations.map(c => c.name));
      if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(model);
        // First clip = idle/gesture, second (if exists) = wave
        const idleClip = gltf.animations[0];
        const waveClip = gltf.animations.length > 1 ? gltf.animations[1] : null;

        idleAction = mixer.clipAction(idleClip);
        idleAction.play();

        if (waveClip) {
          waveAction = mixer.clipAction(waveClip);
          waveAction.setLoop(THREE.LoopOnce);
          waveAction.clampWhenFinished = true;
          mixer.addEventListener('finished', e => { if (e.action === waveAction) returnToIdle(); });
        }
      }

      // Hide loading
      const el = document.getElementById('avatar-loading');
      if (el) { el.style.opacity = '0'; setTimeout(() => el.style.display = 'none', 520); }

      if (sectionSeen) setTimeout(playWave, 700);
      resize();
    },
    xhr => {
      if (xhr.total) {
        const pct = Math.round(xhr.loaded / xhr.total * 100);
        const lbl = document.querySelector('#avatar-loading span');
        if (lbl) lbl.textContent = `Loading… ${pct}%`;
      }
    },
    err => {
      console.error('[Avatar] Load error:', err);
      const el = document.getElementById('avatar-loading');
      if (el) {
        el.querySelector('span').textContent = 'Avatar unavailable';
        const r = el.querySelector('.al-dot-ring'); if (r) r.style.display = 'none';
      }
    }
  );

  // ── Wave ──────────────────────────────────────────────────────────
  function playWave() {
    if (isWaving || !waveAction) return;
    isWaving = true;
    if (idleAction) idleAction.crossFadeTo(waveAction, 0.3, true);
    waveAction.reset().play();
    pingBubble(); pingBadge();
  }
  function returnToIdle() {
    if (idleAction) { waveAction.crossFadeTo(idleAction, 0.5, true); idleAction.play(); }
    isWaving = false;
  }
  function pingBubble() {
    const el = document.getElementById('sb-hi'); if (!el) return;
    el.textContent = "Hi, I'm Junayed 👋";
    el.classList.add('speech-ping');
    setTimeout(() => { el.textContent = "Hi, I'm Junayed"; el.classList.remove('speech-ping'); }, 2600);
  }
  function pingBadge() {
    const em = document.querySelector('.wave-emoji'); if (!em) return;
    em.classList.remove('waving'); void em.offsetWidth; em.classList.add('waving');
  }
  window.avatarController = { wave: playWave };
  canvas.addEventListener('click', () => { if (!isWaving) playWave(); });

  // Auto-wave when hero canvas enters view (fires on first load since hero is above fold)
  const heroEl = document.getElementById('hero');
  if (heroEl) {
    new IntersectionObserver(([e], obs) => {
      if (e.isIntersecting) {
        sectionSeen = true; resize();
        if (root) setTimeout(playWave, 1200);
        obs.unobserve(heroEl);
      }
    }, { threshold: 0.15 }).observe(heroEl);
  }

  // ── Render loop ───────────────────────────────────────────────────
  const posArr = geo.attributes.position.array;
  function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta(), t = clock.elapsedTime;

    if (mixer) mixer.update(delta);

    // Head follow mouse — after mixer
    if (!mobile()) {
      mSm.x += (mouse.x - mSm.x) * 0.06;
      mSm.y += (mouse.y - mSm.y) * 0.06;
      if (headBone) { headBone.rotation.y = mSm.x * 0.28; headBone.rotation.x = -mSm.y * 0.15; }
      if (spineBone && !isWaving) spineBone.rotation.y = mSm.x * 0.08;
    }
    if (root && !isWaving) root.rotation.y = Math.sin(t * 0.28) * 0.025;

    // Particles
    for (let i = 0; i < NP; i++) {
      ang[i] += delta * spd[i] * 0.25;
      posArr[i*3]   = Math.cos(ang[i]) * rad[i];
      posArr[i*3+1] = py[i] + Math.sin(t * spd[i] + i * 1.3) * 0.12;
      posArr[i*3+2] = Math.sin(ang[i]) * rad[i];
    }
    geo.attributes.position.needsUpdate = true;
    mat.opacity    = 0.75 + Math.sin(t * 0.65) * 0.18;
    rim.intensity  = 3.5  + Math.sin(t * 1.2)  * 0.6;
    fill.intensity = 2.0  + Math.sin(t * 0.8 + 1.1) * 0.4;

    // Diagnostic sphere pulse (visible before model loads)
    if (diagSphere.parent) diagSphere.rotation.y += delta * 1.2;

    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
})();

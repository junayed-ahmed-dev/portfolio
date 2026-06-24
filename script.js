/* ════════════════════════════════════════════════════════
   script.js — Junayed Ahmed Portfolio v4
   Boot · Particles · Nav · Hamburger · Reveal
   Avatar Wave · Impact Counters · Project Preview/Filter
   Hero Parallax · Experience Tilt
   ════════════════════════════════════════════════════════ */

// ── Footer year ───────────────────────────────────────────
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

/* ════════════════════════════════════════════════════════
   BOOT SEQUENCE
   ════════════════════════════════════════════════════════ */
(function boot() {
  const bootEl = document.getElementById('boot');
  const canvas = document.getElementById('bg');
  const site   = document.getElementById('site');
  const skipBtn = document.getElementById('boot-skip');
  if (!bootEl) return;
  let bootDone = false;

  function exit() {
    if (bootDone) return;
    bootDone = true;
    bootEl.classList.add('out');
    if (canvas) canvas.classList.add('on');
    setTimeout(() => { if (site) site.classList.add('on'); }, 600);
    setTimeout(() => { bootEl.style.display = 'none'; }, 1500);
  }

  if (skipBtn) skipBtn.addEventListener('click', exit);

  /* ── Terminal boot (index.html) ────────────────────── */
  const termBody = document.getElementById('term-body');
  if (termBody) {
    // Skip terminal on return visits within the same session
    if (sessionStorage.getItem('ja_booted')) {
      bootEl.style.display = 'none';
      if (canvas) canvas.classList.add('on');
      if (site)   site.classList.add('on');
      return;
    }
    sessionStorage.setItem('ja_booted', '1');
    // k: cmd|out|hi|info|warn|prog|gap|load
    // CSPD varies per char for realism; prog lines flash in fast
    const LINES = [
      { k: 'cmd',  t: 'whoami' },
      { k: 'hi',   t: 'junayed-ahmed' },
      { k: 'gap' },

      { k: 'cmd',  t: 'cat ~/.profile' },
      { k: 'out',  t: 'ROLE="Computer Science Student · University of Alberta"' },
      { k: 'out',  t: 'STACK="Python · C · Java · JavaScript · SQL"' },
      { k: 'out',  t: 'LENS="Public health · advocacy · community impact"' },
      { k: 'gap' },

      { k: 'cmd',  t: 'ls selected-work/' },
      { k: 'info', t: 'byaaw-advocacy.md' },
      { k: 'info', t: 'radon-policy-infographic.pdf' },
      { k: 'info', t: 'ai-banking-call-bot.py' },
      { k: 'info', t: 'event-lottery-android/' },
      { k: 'gap' },

      { k: 'cmd',  t: 'load portfolio sections' },
      { k: 'prog', t: 'profile              ' },
      { k: 'prog', t: 'featured work        ' },
      { k: 'prog', t: 'experience timeline  ' },
      { k: 'prog', t: 'contact links        ' },
      { k: 'out',  t: 'portfolio sections ready' },
      { k: 'gap' },

      { k: 'cmd',  t: './launch-portfolio.sh' },
      { k: 'out',  t: '▸ profile summary      ··· done' },
      { k: 'out',  t: '▸ featured projects    ··· done' },
      { k: 'out',  t: '▸ experience cards     ··· done' },
      { k: 'out',  t: '▸ proof links          ··· done' },
      { k: 'out',  t: '▸ opening portfolio    ··· done' },
      { k: 'load' },
    ];

    const BASE  = 10;   // ms per keystroke (base)
    const PCMD  = 36;   // pause before output after cmd typed
    const POUT  = 14;   // pause between output lines
    const PPROG = 22;   // pause between prog lines

    let q = [...LINES], cur = null;

    function scroll() { termBody.scrollTop = termBody.scrollHeight; }

    function mk(cls, html) {
      const s = document.createElement('span');
      s.className = cls;
      if (html) s.innerHTML = html;
      termBody.appendChild(s);
      scroll();
      return s;
    }

    function addCursor() {
      removeCursor();
      cur = mk('term-cursor', '');
    }
    function removeCursor() { if (cur) { cur.remove(); cur = null; } }

    function next() {
      if (!q.length) return;
      const line = q.shift();

      if (line.k === 'gap') {
        mk('term-out', '&nbsp;');
        return setTimeout(next, POUT);
      }
      if (line.k === 'out') {
        const s = mk('term-out', ''); s.textContent = line.t;
        return setTimeout(next, POUT);
      }
      if (line.k === 'hi') {
        const s = mk('term-out term-out-hi', ''); s.textContent = line.t;
        return setTimeout(next, POUT);
      }
      if (line.k === 'info') {
        const s = mk('term-out term-info', ''); s.textContent = line.t;
        return setTimeout(next, POUT);
      }
      if (line.k === 'warn') {
        const s = mk('term-out term-warn', ''); s.textContent = line.t;
        return setTimeout(next, POUT);
      }
      if (line.k === 'prog') {
        // "✓  section loaded" flashes in with checkmark
        const s = mk('term-out term-out-hi', '');
        s.textContent = '  loading ' + line.t.trim() + '...';
        setTimeout(() => {
          s.textContent = '✓  ' + line.t + 'loaded';
          setTimeout(next, PPROG);
        }, PPROG + 30);
        return;
      }
      if (line.k === 'cmd') {
        const row = mk('term-line',
          '<span class="term-prompt">junayed</span>' +
          '<span class="term-at">@portfolio</span>' +
          '<span class="term-out"> ~ </span>' +
          '<span class="term-sym">$ </span>');
        const cmdEl = document.createElement('span');
        cmdEl.className = 'term-cmd';
        row.appendChild(cmdEl);
        addCursor();
        let i = 0;
        (function type() {
          if (i < line.t.length) {
            cmdEl.textContent += line.t[i++];
            scroll();
            // slight speed variation for realism
            const jitter = Math.random() < 0.15 ? BASE * 2.5 : BASE * (0.7 + Math.random() * 0.8);
            return setTimeout(type, jitter);
          }
          removeCursor();
          setTimeout(next, PCMD);
        })();
        return;
      }
      if (line.k === 'load') {
        mk('term-out', '<span class="term-at">▸</span> launching portfolio.sh');
        const wrap = mk('term-prog-wrap',
          '<div class="term-prog-bar"><div class="term-prog-fill" id="tpf"></div></div>' +
          '<span class="term-pct" id="tpc">0%</span>');
        const fill = document.getElementById('tpf');
        const pctEl = document.getElementById('tpc');
        let v = 0;
        // staggered increments: fast start, slow near end
        const steps = [8,12,9,14,11,10,8,6,5,4,3,4,3,2,1];
        let si = 0;
        const iv = setInterval(() => {
          const inc = si < steps.length ? steps[si++] : (Math.random() * 2 + 0.5);
          v = Math.min(v + inc, 100);
          fill.style.width = v + '%';
          pctEl.textContent = Math.floor(v) + '%';
          scroll();
          if (v >= 100) {
            clearInterval(iv);
            setTimeout(() => {
              const done = mk('term-out term-out-hi', '');
              done.textContent = '✓  Portfolio ready — welcome';
              scroll();
              setTimeout(exit, 180);
            }, 200);
          }
        }, 34);
      }
    }

    setTimeout(next, 180);
    return;
  }

  /* ── Simple boot (experience.html / project.html) ──── */
  setTimeout(exit, 900);
})();

/* ════════════════════════════════════════════════════════
   CANVAS PARTICLES (fixed background layer)
   ════════════════════════════════════════════════════════ */
(function particles() {
  const cv = document.getElementById('bg');
  if (!cv) return;

  // Disable on low-end / small screens to save battery
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.innerWidth < 600) return;

  const cx = cv.getContext('2d');
  let W = cv.width  = window.innerWidth;
  let H = cv.height = window.innerHeight;

  window.addEventListener('resize', () => {
    W = cv.width  = window.innerWidth;
    H = cv.height = window.innerHeight;
  }, { passive: true });

  const N = 44, DIST = 120;
  const pts = Array.from({ length: N }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r: Math.random() * 1.2 + 0.4,
    a: Math.random() * 0.22 + 0.06,
  }));

  (function draw() {
    cx.clearRect(0, 0, W, H);
    for (let i = 0; i < N; i++) {
      const p = pts[i];
      for (let j = i + 1; j < N; j++) {
        const q   = pts[j];
        const dx  = p.x - q.x, dy = p.y - q.y;
        const d   = Math.sqrt(dx * dx + dy * dy);
        if (d < DIST) {
          cx.beginPath();
          cx.strokeStyle = `rgba(124,58,237,${0.09 * (1 - d / DIST)})`;
          cx.lineWidth   = 0.5;
          cx.moveTo(p.x, p.y);
          cx.lineTo(q.x, q.y);
          cx.stroke();
        }
      }
      cx.beginPath();
      cx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      cx.fillStyle = `rgba(196,181,253,${p.a})`;
      cx.fill();

      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
    }
    requestAnimationFrame(draw);
  })();
})();

/* ════════════════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ════════════════════════════════════════════════════════ */
(function reveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ════════════════════════════════════════════════════════
   NAV — scroll state + hamburger + progress + active link
   ════════════════════════════════════════════════════════ */
(function nav() {
  const n           = document.getElementById('nav');
  const burger      = document.getElementById('nav-hamburger');
  const mobileMenu  = document.getElementById('mobile-menu');
  const progressBar = document.getElementById('nav-progress');
  if (!n) return;

  // Scroll state + progress bar
  window.addEventListener('scroll', () => {
    n.classList.toggle('scrolled', window.scrollY > 50);
    if (progressBar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      progressBar.style.width = pct + '%';
      progressBar.setAttribute('aria-valuenow', pct);
    }
  }, { passive: true });

  // Active section indicator
  const navLinks = document.querySelectorAll('.nav-links a[data-section]');
  const sections = [...navLinks].map(a => document.getElementById(a.dataset.section)).filter(Boolean);

  function setActive(id) {
    navLinks.forEach(a => a.classList.toggle('active', a.dataset.section === id));
  }

  if (sections.length) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    sections.forEach(s => sectionObserver.observe(s));
    // Set initial active on load
    setActive('hero');
  }

  // Hamburger toggle
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      const open = mobileMenu.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
      mobileMenu.setAttribute('aria-hidden', !open);
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!n.contains(e.target)) {
        mobileMenu.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }
})();

/* ════════════════════════════════════════════════════════
   HERO PARALLAX (ambient glows follow cursor)
   ════════════════════════════════════════════════════════ */
(function heroParallax() {
  const hero  = document.getElementById('hero');
  const glows = hero ? [...hero.querySelectorAll('.hero-glow')] : [];
  if (!glows.length) return;

  hero.addEventListener('mousemove', e => {
    const cx = e.clientX / window.innerWidth  - 0.5;
    const cy = e.clientY / window.innerHeight - 0.5;
    glows.forEach((g, i) => {
      const s = (i + 1) * 14;
      g.style.transform = `translate(${cx * s}px, ${cy * s}px)`;
    });
  });
  hero.addEventListener('mouseleave', () => {
    glows.forEach(g => { g.style.transform = ''; });
  });
})();

/* ════════════════════════════════════════════════════════
   AVATAR WAVE (triggers when section enters viewport)
   ════════════════════════════════════════════════════════ */
(function avatarWave() {
  const section  = document.getElementById('avatar-section');
  const waveEmoji = document.querySelector('.wave-emoji');
  if (!section || !waveEmoji) return;

  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      waveEmoji.classList.add('waving');
      io.unobserve(section);
    }
  }, { threshold: 0.3 });

  io.observe(section);
})();

/* ════════════════════════════════════════════════════════
   IMPACT COUNTERS (count up when visible)
   ════════════════════════════════════════════════════════ */
(function counters() {
  const nums = document.querySelectorAll('.impact-num');
  if (!nums.length) return;

  function animateNum(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1600;
    const startTs  = performance.now();

    function step(ts) {
      const progress = Math.min((ts - startTs) / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      animateNum(e.target);
      io.unobserve(e.target);
    });
  }, { threshold: 0.4 });

  nums.forEach(el => io.observe(el));
})();

/* ════════════════════════════════════════════════════════
   EXPERIENCE CARDS — 3D tilt on hover
   ════════════════════════════════════════════════════════ */
(function expTilt() {
  if (window.matchMedia('(hover: none)').matches) return; // skip on touch
  const MAX = 7;
  document.querySelectorAll('.exp-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r  = card.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width)  * 2 - 1;
      const py = ((e.clientY - r.top)  / r.height) * 2 - 1;
      card.style.transform =
        `perspective(900px) rotateX(${-py * MAX}deg) rotateY(${px * MAX}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => { card.style.transform = ''; });
  });
})();

/* ════════════════════════════════════════════════════════
   PROJECT SECTION — List + Preview crossfade + Filter
   ════════════════════════════════════════════════════════ */
(function projectSection() {
  const list      = document.getElementById('proj-list');
  const preview   = document.getElementById('proj-preview');
  const countEl   = document.getElementById('proj-count');
  const filtersEl = document.getElementById('proj-filters');
  if (!list) return;

  const items = [...list.querySelectorAll('.pl-item')];
  const imgA  = document.getElementById('pp-a');
  const imgB  = document.getElementById('pp-b');
  const numEl = document.getElementById('pp-num');
  const titEl = document.getElementById('pp-title');
  const subEl = document.getElementById('pp-sub');
  const ctaEl = document.getElementById('pp-cta');

  let frontImg = 'a';

  function setPreview(src, num, title, sub, href) {
    if (numEl) numEl.textContent = num;
    if (titEl) titEl.textContent = title;
    if (subEl) subEl.textContent = sub;
    if (ctaEl) ctaEl.href = href;

    const next = frontImg === 'a' ? imgB : imgA;
    const prev = frontImg === 'a' ? imgA : imgB;

    next.src = src;
    requestAnimationFrame(() => {
      next.classList.add('pp-active');
      prev.classList.remove('pp-active');
      frontImg = frontImg === 'a' ? 'b' : 'a';
    });
  }

  function activateItem(item) {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');

    if (preview) {
      const src  = item.dataset.img || '';
      const num  = item.dataset.num || '';
      const href = item.href || '#';
      const h3   = item.querySelector('h3');
      const tags = [...item.querySelectorAll('.pli-tags span')]
                     .map(s => s.textContent).join(' · ');
      setPreview(src, num, h3 ? h3.textContent : '', tags, href);
    }
  }

  const initialItem = list.querySelector('.pl-item:not(.is-out)') || items[0];
  if (initialItem) activateItem(initialItem);

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      if (!item.classList.contains('is-out')) activateItem(item);
    });
  });

  // Preview image parallax
  if (preview) {
    preview.addEventListener('mousemove', e => {
      const r      = preview.getBoundingClientRect();
      const x      = (e.clientX - r.left) / r.width  - 0.5;
      const y      = (e.clientY - r.top)  / r.height - 0.5;
      const active = preview.querySelector('.pp-img.pp-active');
      if (active) {
        active.style.transform = `scale(1.06) translate(${x * 14}px, ${y * 14}px)`;
      }
    });
    preview.addEventListener('mouseleave', () => {
      preview.querySelectorAll('.pp-img').forEach(img => { img.style.transform = ''; });
    });
  }

  // Sliding pill position
  function positionPill(btn) {
    const pill   = document.getElementById('pf-pill');
    const parent = btn.parentElement;
    if (!pill || !parent) return;
    const pr = parent.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    pill.style.width     = `${br.width}px`;
    pill.style.transform = `translateX(${br.left - pr.left - 4}px)`;
  }

  const activeBtn = filtersEl && filtersEl.querySelector('.pf-btn.active');
  if (activeBtn) requestAnimationFrame(() => positionPill(activeBtn));

  function filterProjects(cat, btn) {
    if (filtersEl) {
      filtersEl.querySelectorAll('.pf-btn').forEach(b =>
        b.classList.toggle('active', b === btn)
      );
      positionPill(btn);
    }

    items.forEach(item => {
      item.style.transition =
        'opacity 0.22s ease, transform 0.22s ease, max-height 0.38s ease, padding 0.28s ease, border-color 0.22s';
      item.style.opacity   = '0';
      item.style.transform = 'translateX(-8px)';
    });

    setTimeout(() => {
      let visible = 0;
      items.forEach(item => {
        const cats  = item.dataset.cats || '';
        const match = cat === 'all' || cats.includes(cat);

        if (match) {
          visible++;
          const delay = (visible - 1) * 55;
          item.classList.remove('is-out');
          item.style.opacity   = '';
          item.style.transform = '';
          item.style.transition =
            `opacity 0.35s ease ${delay}ms, transform 0.35s ease ${delay}ms,` +
            `max-height 0.38s ease, padding 0.28s ease, border-color 0.22s`;
        } else {
          item.classList.add('is-out');
          item.style.opacity   = '';
          item.style.transform = '';
          item.style.transition =
            'opacity 0.28s ease, transform 0.28s ease, max-height 0.38s ease, padding 0.28s ease, border-color 0.22s';
        }
      });

      if (countEl) {
        const labels = {
          featured: 'featured',
          tech: 'tech',
          ai: 'AI / ML',
          systems: 'systems',
          advocacy: 'advocacy',
        };
        const descriptor = cat === 'all' ? '' : `${labels[cat] || cat} `;
        countEl.textContent = `${visible} ${descriptor}project${visible === 1 ? '' : 's'}`;
      }

      const active = list.querySelector('.pl-item.active');
      if (!active || active.classList.contains('is-out')) {
        const first = list.querySelector('.pl-item:not(.is-out)');
        if (first) activateItem(first);
      }
    }, 240);
  }

  if (filtersEl) {
    filtersEl.querySelectorAll('.pf-btn').forEach(btn => {
      btn.addEventListener('click', () => filterProjects(btn.dataset.filter, btn));
    });
    if (activeBtn) {
      filterProjects(activeBtn.dataset.filter, activeBtn);
    }
  }

  window.addEventListener('resize', () => {
    const active = filtersEl && filtersEl.querySelector('.pf-btn.active');
    if (active) positionPill(active);
  }, { passive: true });
})();

/* ════════════════════════════════════════════════════════
   TIMELINE — accordion expand / collapse
   ════════════════════════════════════════════════════════ */
(function timeline() {
  const items = document.querySelectorAll('.tl-item');
  if (!items.length) return;

  // First item open by default
  items[0].classList.add('open');

  items.forEach(item => {
    const card = item.querySelector('.tl-card');
    if (!card) return;
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    function toggle() {
      const wasOpen = item.classList.contains('open');
      items.forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    }

    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();

/* ════════════════════════════════════════════════════════
   DETAIL PAGES — year footer
   ════════════════════════════════════════════════════════ */
(function detailYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

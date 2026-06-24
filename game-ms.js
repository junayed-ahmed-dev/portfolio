// game-ms.js — Live Minesweeper for the minesweeper-c project page
(function () {
  'use strict';

  // ── Difficulties ──────────────────────────────────────────────────────
  const DIFFS = {
    easy:   { w:  9, h:  9, mines: 10 },
    medium: { w: 16, h: 16, mines: 40 },
    hard:   { w: 16, h: 16, mines: 60 },
  };

  let W, H, MINES;

  // ── Canvas / cell geometry ────────────────────────────────────────────
  let canvas, ctx;
  const CELL = 32;  // px per cell
  const PAD  = 10;  // board padding

  function cx(gx) { return PAD + gx * CELL; }
  function cy(gy) { return PAD + gy * CELL; }

  // ── State ─────────────────────────────────────────────────────────────
  let board;     // -1 = mine, 0-8 = adj mine count
  let revealed;  // boolean grid
  let flagged;   // boolean grid
  let gameState; // 'idle' | 'playing' | 'won' | 'lost'
  let minesLeft;
  let elapsed;
  let timerInterval;
  let deathCell;  // [gx, gy] of the mine the player clicked
  let hoverCell;
  let flagMode = false;

  // ── Init ──────────────────────────────────────────────────────────────
  function reset(diff) {
    const d = DIFFS[diff] || DIFFS.easy;
    W = d.w; H = d.h; MINES = d.mines;
    board    = Array.from({ length: H }, () => Array(W).fill(0));
    revealed = Array.from({ length: H }, () => Array(W).fill(false));
    flagged  = Array.from({ length: H }, () => Array(W).fill(false));
    gameState = 'idle';
    minesLeft = MINES;
    elapsed   = 0;
    deathCell = null;
    hoverCell = null;
    clearInterval(timerInterval);
    sizeCanvas();
    render();
    syncPanel();
  }

  // ── Mine placement (deferred to first click to avoid instant death) ───
  function placeMines(fx, fy) {
    const safe = new Set();
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const nx = fx + dx, ny = fy + dy;
        if (nx >= 0 && nx < W && ny >= 0 && ny < H) safe.add(ny * W + nx);
      }

    let placed = 0;
    while (placed < MINES) {
      const i = Math.floor(Math.random() * W * H);
      if (!safe.has(i) && board[Math.floor(i / W)][i % W] !== -1) {
        board[Math.floor(i / W)][i % W] = -1;
        placed++;
      }
    }
    // Fill in adjacent counts
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (board[y][x] !== -1) {
          let n = 0;
          for (let dy = -1; dy <= 1; dy++)
            for (let dx = -1; dx <= 1; dx++) {
              const nx = x+dx, ny = y+dy;
              if (nx >= 0 && nx < W && ny >= 0 && ny < H && board[ny][nx] === -1) n++;
            }
          board[y][x] = n;
        }
  }

  // ── Flood-fill reveal for zero cells ─────────────────────────────────
  function floodReveal(x, y) {
    if (x < 0 || x >= W || y < 0 || y >= H) return;
    if (revealed[y][x] || flagged[y][x]) return;
    revealed[y][x] = true;
    if (board[y][x] === 0)
      for (let dy = -1; dy <= 1; dy++)
        for (let dx = -1; dx <= 1; dx++)
          floodReveal(x + dx, y + dy);
  }

  // ── Chord click: click a revealed number with enough flags → clear rest
  function chordReveal(gx, gy) {
    if (!revealed[gy][gx] || board[gy][gx] <= 0) return;
    let flags = 0;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const nx = gx+dx, ny = gy+dy;
        if (nx >= 0 && nx < W && ny >= 0 && ny < H && flagged[ny][nx]) flags++;
      }
    if (flags !== board[gy][gx]) return;
    for (let dy = -1; dy <= 1; dy++)
      for (let dx = -1; dx <= 1; dx++) {
        const nx = gx+dx, ny = gy+dy;
        if (nx >= 0 && nx < W && ny >= 0 && ny < H && !flagged[ny][nx] && !revealed[ny][nx])
          triggerReveal(nx, ny);
      }
  }

  function checkWin() {
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (!revealed[y][x] && board[y][x] !== -1) return false;
    return true;
  }

  // ── Cell reveal ───────────────────────────────────────────────────────
  function triggerReveal(gx, gy) {
    if (gameState === 'won' || gameState === 'lost') return;
    if (flagged[gy][gx]) return;

    if (revealed[gy][gx]) { chordReveal(gx, gy); return; }

    if (gameState === 'idle') {
      placeMines(gx, gy);
      gameState = 'playing';
      timerInterval = setInterval(() => { elapsed++; syncPanel(); }, 1000);
    }

    if (board[gy][gx] === -1) {
      deathCell = [gx, gy];
      gameState  = 'lost';
      clearInterval(timerInterval);
      // Reveal all unflagged mines
      for (let y = 0; y < H; y++)
        for (let x = 0; x < W; x++)
          if (board[y][x] === -1 && !flagged[y][x]) revealed[y][x] = true;
    } else {
      floodReveal(gx, gy);
      if (checkWin()) {
        gameState = 'won';
        clearInterval(timerInterval);
      }
    }
  }

  function toggleFlag(gx, gy) {
    if (gameState === 'won' || gameState === 'lost') return;
    if (revealed[gy][gx]) return;
    flagged[gy][gx] = !flagged[gy][gx];
    minesLeft += flagged[gy][gx] ? -1 : 1;
  }

  // ── Canvas sizing ─────────────────────────────────────────────────────
  function sizeCanvas() {
    const cw = PAD * 2 + W * CELL;
    const ch = PAD * 2 + H * CELL;
    canvas.width  = cw;
    canvas.height = ch;
    const avail = canvas.parentElement.clientWidth - 42;
    const sc    = Math.min(1, avail / cw);
    canvas.style.width  = Math.round(cw * sc) + 'px';
    canvas.style.height = Math.round(ch * sc) + 'px';
  }

  // ── Rendering ─────────────────────────────────────────────────────────
  const NUM_CLR = ['', '#60a5fa', '#4ade80', '#f87171',
                   '#a78bfa', '#fb923c', '#22d3ee', '#e879f9', '#94a3b8'];

  function render() {
    const cw = canvas.width, ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // Board background — dark navy, clearly elevated from site bg
    ctx.fillStyle = '#0b1220';
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(0, 0, cw, ch, 10);
    else ctx.rect(0, 0, cw, ch);
    ctx.fill();

    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        drawCell(x, y);
  }

  function drawCell(gx, gy) {
    const x = cx(gx), y = cy(gy);
    const s = CELL - 1;  // 1 px gap between cells

    const isRev   = revealed[gy][gx];
    const isFlag  = flagged[gy][gx];
    const isDeath = deathCell && deathCell[0] === gx && deathCell[1] === gy;
    const isHov   = hoverCell && hoverCell[0] === gx && hoverCell[1] === gy
                    && !isRev && !isFlag && gameState !== 'won' && gameState !== 'lost';

    if (isRev && board[gy][gx] === -1) {
      // Mine — death cell is red, others dark purple
      ctx.fillStyle = isDeath ? '#3d0e0e' : '#1a1030';
      ctx.fillRect(x, y, s, s);
      drawMine(x + s / 2, y + s / 2, s * 0.27);

    } else if (isRev) {
      // Safe revealed cell — recessed look
      ctx.fillStyle = '#0c1424';
      ctx.fillRect(x, y, s, s);
      ctx.fillStyle = 'rgba(0,0,0,0.22)';
      ctx.fillRect(x, y, s, 1);
      ctx.fillRect(x, y, 1, s);
      const n = board[gy][gx];
      if (n > 0) {
        ctx.fillStyle = NUM_CLR[n];
        ctx.font = `bold ${Math.round(CELL * 0.54)}px Sora,sans-serif`;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(n, x + s / 2, y + s / 2 + 1);
      }

    } else if (isFlag) {
      // Flagged cell
      ctx.fillStyle = '#172040';
      ctx.fillRect(x, y, s, s);
      bevel(x, y, s);
      if (gameState === 'lost' && board[gy][gx] !== -1) drawWrongFlag(x + s/2, y + s/2, s * 0.25);
      else drawFlag(x + s/2, y + s/2, s * 0.25);

    } else {
      // Hidden unrevealed cell — raised look
      ctx.fillStyle = isHov ? '#1e2e58' : '#172040';
      ctx.fillRect(x, y, s, s);
      bevel(x, y, s);
    }
  }

  function bevel(x, y, s) {
    ctx.fillStyle = 'rgba(255,255,255,0.11)';
    ctx.fillRect(x, y, s, 2);
    ctx.fillRect(x, y, 2, s);
    ctx.fillStyle = 'rgba(0,0,0,0.38)';
    ctx.fillRect(x, y + s - 2, s, 2);
    ctx.fillRect(x + s - 2, y, 2, s);
  }

  function drawMine(cx_, cy_, r) {
    // Spikes
    ctx.strokeStyle = '#dc2626';
    ctx.lineWidth   = Math.max(1.5, r * 0.44);
    ctx.lineCap     = 'round';
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4;
      ctx.beginPath();
      ctx.moveTo(cx_ + Math.cos(a) * r * 0.72, cy_ + Math.sin(a) * r * 0.72);
      ctx.lineTo(cx_ + Math.cos(a) * r * 1.62, cy_ + Math.sin(a) * r * 1.62);
      ctx.stroke();
    }
    // Body
    ctx.fillStyle = '#111';
    ctx.beginPath(); ctx.arc(cx_, cy_, r, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#dc2626';
    ctx.beginPath(); ctx.arc(cx_, cy_, r * 0.82, 0, Math.PI * 2); ctx.fill();
    // Specular
    ctx.fillStyle = 'rgba(255,255,255,0.52)';
    ctx.beginPath(); ctx.arc(cx_ - r * 0.27, cy_ - r * 0.27, r * 0.26, 0, Math.PI * 2); ctx.fill();
  }

  function drawFlag(cx_, cy_, r) {
    const pole = r * 1.15;
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth   = Math.max(1.5, r * 0.3);
    ctx.lineCap     = 'round';
    ctx.beginPath(); ctx.moveTo(cx_, cy_ + pole); ctx.lineTo(cx_, cy_ - pole); ctx.stroke();
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.moveTo(cx_, cy_ - pole);
    ctx.lineTo(cx_ + r * 1.12, cy_ - pole * 0.28);
    ctx.lineTo(cx_, cy_ - pole * 0.38);
    ctx.closePath(); ctx.fill();
    // Base
    ctx.fillStyle = '#475569';
    ctx.fillRect(cx_ - r * 0.75, cy_ + pole, r * 1.5, Math.max(2, r * 0.28));
  }

  function drawWrongFlag(cx_, cy_, r) {
    drawFlag(cx_, cy_, r);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth   = Math.max(2, r * 0.55);
    ctx.lineCap     = 'round';
    ctx.beginPath(); ctx.moveTo(cx_ - r, cy_ - r); ctx.lineTo(cx_ + r, cy_ + r); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx_ + r, cy_ - r); ctx.lineTo(cx_ - r, cy_ + r); ctx.stroke();
  }

  // ── Panel sync ────────────────────────────────────────────────────────
  function eid(id) { return document.getElementById(id); }

  function syncPanel() {
    eid('ms-mines').textContent = String(Math.max(0, minesLeft)).padStart(3, '0');
    eid('ms-timer').textContent = String(Math.min(elapsed, 999)).padStart(3, '0');

    const st    = eid('ms-status');
    const stTxt = eid('ms-status-text');
    st.className = 'ms-status';

    if (gameState === 'won') {
      stTxt.textContent = 'Board cleared!';
      st.classList.add('ms-status--win');
    } else if (gameState === 'lost') {
      stTxt.textContent = 'Hit a mine. Try again.';
      st.classList.add('ms-status--lose');
    } else if (gameState === 'playing') {
      stTxt.textContent = 'In progress…';
    } else {
      stTxt.textContent = 'Click any cell to start';
    }

    canvas.style.cursor = (gameState === 'won' || gameState === 'lost') ? 'default' : 'pointer';
  }

  // ── Grid coordinate from pointer ──────────────────────────────────────
  function toGrid(clientX, clientY) {
    const r  = canvas.getBoundingClientRect();
    const sx = canvas.width  / r.width;
    const sy = canvas.height / r.height;
    const gx = Math.floor(((clientX - r.left) * sx - PAD) / CELL);
    const gy = Math.floor(((clientY - r.top)  * sy - PAD) / CELL);
    if (gx < 0 || gx >= W || gy < 0 || gy >= H) return null;
    return [gx, gy];
  }

  // ── Events ────────────────────────────────────────────────────────────
  function onClick(e) {
    const pos = toGrid(e.clientX, e.clientY);
    if (!pos) return;
    if (flagMode) toggleFlag(pos[0], pos[1]);
    else          triggerReveal(pos[0], pos[1]);
    render(); syncPanel();
  }

  function onRightClick(e) {
    e.preventDefault();
    const pos = toGrid(e.clientX, e.clientY);
    if (!pos) return;
    toggleFlag(pos[0], pos[1]);
    render(); syncPanel();
  }

  function onMouseMove(e) {
    hoverCell = toGrid(e.clientX, e.clientY);
    render();
  }

  function onMouseLeave() { hoverCell = null; render(); }

  // ── Bootstrap ─────────────────────────────────────────────────────────
  function boot() {
    if (new URLSearchParams(location.search).get('id') !== 'minesweeper-c') return;

    const sec = eid('ms-game-section');
    if (sec) sec.hidden = false;

    canvas = eid('ms-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    canvas.addEventListener('click',       onClick);
    canvas.addEventListener('contextmenu', onRightClick);
    canvas.addEventListener('mousemove',   onMouseMove);
    canvas.addEventListener('mouseleave',  onMouseLeave);

    // Touch: tap = reveal, long-press (~500ms) = flag
    let touchTimer = null, touchPos = null;
    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      const t = e.touches[0];
      touchPos = toGrid(t.clientX, t.clientY);
      touchTimer = setTimeout(() => {
        touchTimer = null;
        if (touchPos) { toggleFlag(touchPos[0], touchPos[1]); render(); syncPanel(); }
      }, 500);
    }, { passive: false });

    canvas.addEventListener('touchend', e => {
      e.preventDefault();
      if (touchTimer !== null) {
        clearTimeout(touchTimer); touchTimer = null;
        if (touchPos) { triggerReveal(touchPos[0], touchPos[1]); render(); syncPanel(); }
      }
      touchPos = null;
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      if (touchTimer !== null) { clearTimeout(touchTimer); touchTimer = null; }
    }, { passive: false });

    eid('ms-new-game').addEventListener('click', () => reset(eid('ms-diff').value));

    eid('ms-diff').addEventListener('change', function () { reset(this.value); });

    const flagBtn = eid('ms-flag-btn');
    flagBtn.addEventListener('click', () => {
      flagMode = !flagMode;
      flagBtn.classList.toggle('ms-flag-active', flagMode);
      flagBtn.textContent = flagMode ? '🚩 Flagging ON' : '🚩 Flag Mode';
    });

    window.addEventListener('resize', () => { sizeCanvas(); render(); });

    reset('easy');
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();

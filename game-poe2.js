// game-poe2.js — PoE2 live game for the poe2-ai project page
// Rules and scoring logic ported directly from a2.py (CMPUT 455).
(function () {
  'use strict';

  // ── Config (mutable via UI) ───────────────────────────────────────────
  let W = 9, H = 9;
  let MAX_DEPTH = 4;
  const AI_P    = 2;       // AI always plays as Player 2
  const AI_MS   = 1500;    // wall-clock budget per move

  // ── State ─────────────────────────────────────────────────────────────
  let board, toPlay, gameOver, winner, lastMove, aiThinking, hoverCell;

  // ── Canvas ────────────────────────────────────────────────────────────
  let canvas, ctx;
  const CELL = 52;
  const PAD  = 40;
  function px(g) { return PAD + g * CELL; }

  // ── Score — direct port of calculate_score() from a2.py ──────────────
  // Lines score 2^(length−1). A completely isolated stone scores 1.
  // Lines are only counted from their "start" cell to avoid double counting.
  function calcScore() {
    let s1 = 0, s2 = 0;
    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const c = board[y][x];
        if (!c) continue;

        let lone = true;
        let hl = 1, vl = 1, dl = 1, al = 1;

        // Horizontal — count only from leftmost cell of a run
        if (x === 0 || board[y][x - 1] !== c) {
          for (let x1 = x + 1; x1 < W && board[y][x1] === c; x1++) hl++;
        } else { lone = false; }

        // Vertical — count only from topmost cell
        if (y === 0 || board[y - 1][x] !== c) {
          for (let y1 = y + 1; y1 < H && board[y1][x] === c; y1++) vl++;
        } else { lone = false; }

        // Diagonal ↘ — count only from top-left start
        if (y === 0 || x === 0 || board[y - 1][x - 1] !== c) {
          let x1 = x + 1, y1 = y + 1;
          while (x1 < W && y1 < H && board[y1][x1] === c) { dl++; x1++; y1++; }
        } else { lone = false; }

        // Anti-diagonal ↙ — count only from top-right start
        if (y === 0 || x === W - 1 || board[y - 1][x + 1] !== c) {
          let x1 = x - 1, y1 = y + 1;
          while (x1 >= 0 && y1 < H && board[y1][x1] === c) { al++; x1--; y1++; }
        } else { lone = false; }

        for (const ll of [hl, vl, dl, al]) {
          if (ll > 1) {
            if (c === 1) s1 += (1 << (ll - 1));
            else         s2 += (1 << (ll - 1));
          }
        }
        if (hl === 1 && vl === 1 && dl === 1 && al === 1 && lone) {
          if (c === 1) s1++; else s2++;
        }
      }
    }
    return { s1, s2 };
  }

  function checkTerminal() {
    const { s1, s2 } = calcScore();
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (!board[y][x]) return { done: false, w: 0, s1, s2 };
    return { done: true, w: s1 > s2 ? 1 : 2, s1, s2 };
  }

  // ── AI — Negamax with alpha-beta + iterative deepening (from a2.py) ──
  let deadline;

  function legalMoves() {
    const cx = (W - 1) / 2, cy = (H - 1) / 2, out = [];
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (!board[y][x]) out.push([x, y, Math.abs(x - cx) + Math.abs(y - cy)]);
    out.sort((a, b) => a[2] - b[2]);  // center-first, matching a2.py
    return out;
  }

  function heuristic(p) {
    const { s1, s2 } = calcScore();
    return p === 1 ? s1 - s2 : s2 - s1;
  }

  // Returns { v, m, timeout } where v is relative to the current player p.
  // Signs follow standard negamax convention.
  function negamax(p, d, α, β) {
    if (Date.now() > deadline) return { v: heuristic(p), m: null, timeout: true };

    const { done, w } = checkTerminal();
    if (done) return { v: w === 0 ? 0 : w === p ? 1e9 : -1e9, m: null };
    if (d === 0) return { v: heuristic(p), m: null };

    const opp   = p === 1 ? 2 : 1;
    const mvs   = legalMoves();
    let best    = { v: -Infinity, m: [mvs[0][0], mvs[0][1]] };

    for (const [x, y] of mvs) {
      board[y][x] = p;
      const { v, timeout } = negamax(opp, d - 1, -β, -α);
      board[y][x] = 0;

      const nv = -v;
      if (nv > best.v) { best.v = nv; best.m = [x, y]; }
      if (nv > α) α = nv;
      if (timeout) return { ...best, timeout: true };
      if (α >= β) break;
    }
    return best;
  }

  function getAIMove() {
    deadline = Date.now() + AI_MS;
    let best = null;
    for (let d = 1; d <= MAX_DEPTH; d++) {
      const { m, timeout } = negamax(AI_P, d, -Infinity, Infinity);
      if (m) best = m;
      if (timeout) break;
    }
    return best;
  }

  // ── Game logic ────────────────────────────────────────────────────────
  function reset() {
    board      = Array.from({ length: H }, () => Array(W).fill(0));
    toPlay     = 1;
    gameOver   = false;
    winner     = 0;
    lastMove   = null;
    aiThinking = false;
    hoverCell  = null;
  }

  function place(x, y) {
    if (board[y][x]) return false;
    board[y][x] = toPlay;
    lastMove    = [x, y];
    toPlay      = toPlay === 1 ? 2 : 1;
    const t     = checkTerminal();
    if (t.done) { gameOver = true; winner = t.w; }
    return true;
  }

  // ── Canvas rendering ──────────────────────────────────────────────────
  function sizeCanvas() {
    const cw = PAD * 2 + (W - 1) * CELL;
    const ch = PAD * 2 + (H - 1) * CELL;
    canvas.width  = cw;
    canvas.height = ch;
    const avail = canvas.parentElement.clientWidth - 42;
    const sc    = Math.min(1, avail / cw);
    canvas.style.width  = Math.round(cw * sc) + 'px';
    canvas.style.height = Math.round(ch * sc) + 'px';
  }

  function render() {
    const { s1, s2 } = calcScore();
    syncUI(s1, s2);

    const cw = canvas.width, ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // Board background — warm dark walnut, clearly distinct from the cold navy site bg
    const bg = ctx.createLinearGradient(0, 0, cw, ch);
    bg.addColorStop(0, '#3d2a10');
    bg.addColorStop(1, '#2c1e08');
    ctx.fillStyle = bg;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(0, 0, cw, ch, 12);
    else ctx.rect(0, 0, cw, ch);
    ctx.fill();

    // Grid lines — warm golden, clearly readable on the wood background
    for (let x = 0; x < W; x++) {
      const gx  = px(x);
      const vg  = ctx.createLinearGradient(gx, px(0), gx, px(H - 1));
      vg.addColorStop(0,   'rgba(210,165,65,0.12)');
      vg.addColorStop(0.5, 'rgba(210,165,65,0.55)');
      vg.addColorStop(1,   'rgba(210,165,65,0.12)');
      ctx.strokeStyle = vg; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(gx, px(0)); ctx.lineTo(gx, px(H - 1)); ctx.stroke();
    }
    for (let y = 0; y < H; y++) {
      const gy  = px(y);
      const hg  = ctx.createLinearGradient(px(0), gy, px(W - 1), gy);
      hg.addColorStop(0,   'rgba(210,165,65,0.12)');
      hg.addColorStop(0.5, 'rgba(210,165,65,0.55)');
      hg.addColorStop(1,   'rgba(210,165,65,0.12)');
      ctx.strokeStyle = hg; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(px(0), gy); ctx.lineTo(px(W - 1), gy); ctx.stroke();
    }

    // Star points — bright golden dots
    for (const [sx, sy] of starPoints()) {
      ctx.fillStyle = 'rgba(210,165,65,0.88)';
      ctx.beginPath(); ctx.arc(px(sx), px(sy), 4, 0, Math.PI * 2); ctx.fill();
    }

    // Hover ghost (human player's turn only)
    if (hoverCell && !gameOver && toPlay !== AI_P && !aiThinking) {
      const [hx, hy] = hoverCell;
      if (!board[hy][hx]) drawStone(hx, hy, toPlay, false, 0.28);
    }

    // Placed stones
    for (let y = 0; y < H; y++)
      for (let x = 0; x < W; x++)
        if (board[y][x])
          drawStone(x, y, board[y][x], lastMove && lastMove[0] === x && lastMove[1] === y, 1);
  }

  function drawStone(gx, gy, p, isLast, alpha) {
    const cx = px(gx), cy = px(gy), r = CELL * 0.42;
    ctx.globalAlpha = alpha;

    ctx.shadowColor = 'rgba(0,0,0,0.75)';
    ctx.shadowBlur  = 10;
    ctx.shadowOffsetX = 2; ctx.shadowOffsetY = 4;

    // Stone body — 3D sphere effect via off-centre radial gradient
    const g = ctx.createRadialGradient(cx - r * 0.3, cy - r * 0.35, r * 0.04, cx, cy, r);
    if (p === 1) {
      g.addColorStop(0, '#50506a'); g.addColorStop(0.5, '#18181e'); g.addColorStop(1, '#000008');
    } else {
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.5, '#dde0ec'); g.addColorStop(1, '#aab0c0');
    }
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();

    ctx.shadowBlur = 0; ctx.shadowOffsetX = 0; ctx.shadowOffsetY = 0;

    // Specular highlight (upper-left catchlight)
    const sp = ctx.createRadialGradient(
      cx - r * 0.38, cy - r * 0.40, r * 0.03,
      cx - r * 0.22, cy - r * 0.22, r * 0.52
    );
    sp.addColorStop(0, p === 1 ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.76)');
    sp.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = sp;
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();

    // Last-move purple dot
    if (isLast) {
      ctx.fillStyle = p === 1 ? 'rgba(167,139,250,0.92)' : 'rgba(124,58,237,0.82)';
      ctx.beginPath(); ctx.arc(cx, cy, r * 0.22, 0, Math.PI * 2); ctx.fill();
    }

    ctx.globalAlpha = 1;
  }

  function starPoints() {
    if (W === 9 && H === 9) return [[2, 2], [6, 2], [4, 4], [2, 6], [6, 6]];
    if (W === 7 && H === 7) return [[2, 2], [4, 2], [3, 3], [2, 4], [4, 4]];
    return [];
  }

  // ── UI sync ───────────────────────────────────────────────────────────
  function eid(id) { return document.getElementById(id); }

  function syncUI(s1, s2) {
    eid('poe2-p1-score').textContent = s1;
    eid('poe2-p2-score').textContent = Math.round(s2);

    const c1  = eid('poe2-p1-card'), c2 = eid('poe2-p2-card');
    const st  = eid('poe2-status'),  stTxt = eid('poe2-status-text');
    const bw  = canvas.parentElement;

    c1.className = 'poe2-sc'; c2.className = 'poe2-sc';
    st.className = 'poe2-status';

    if (gameOver) {
      (winner === 1 ? c1 : c2).classList.add('winner');
      st.classList.add('game-over');
      stTxt.textContent = winner === 1 ? 'Player 1 wins!' : 'AI wins!';
    } else if (aiThinking) {
      c2.classList.add('active');
      stTxt.textContent = 'AI is thinking…';
    } else {
      (toPlay === 1 ? c1 : c2).classList.add('active');
      stTxt.textContent = toPlay === 1 ? 'Your turn (Black)' : "AI's turn…";
    }

    canvas.style.cursor = (gameOver || aiThinking || toPlay === AI_P) ? 'default' : 'crosshair';
    bw.classList.toggle('poe2-thinking', aiThinking);
  }

  // ── Event handlers ────────────────────────────────────────────────────
  function toGrid(cx, cy) {
    const r  = canvas.getBoundingClientRect();
    const sx = canvas.width  / r.width;
    const sy = canvas.height / r.height;
    const gx = Math.round(((cx - r.left) * sx - PAD) / CELL);
    const gy = Math.round(((cy - r.top)  * sy - PAD) / CELL);
    if (gx < 0 || gx >= W || gy < 0 || gy >= H) return null;
    return [gx, gy];
  }

  function onMouseMove(e) {
    if (gameOver || aiThinking || toPlay === AI_P) { hoverCell = null; return; }
    hoverCell = toGrid(e.clientX, e.clientY);
    render();
  }

  function onMouseLeave() { hoverCell = null; render(); }

  function onCanvasClick(e) {
    if (gameOver || aiThinking || toPlay === AI_P) return;
    const pos = toGrid(e.clientX, e.clientY);
    if (!pos || !place(pos[0], pos[1])) return;
    hoverCell = null;
    render();
    if (!gameOver) runAI();
  }

  function runAI() {
    if (gameOver || toPlay !== AI_P) return;
    aiThinking = true;
    render();
    setTimeout(() => {
      const m = getAIMove();
      aiThinking = false;
      if (m) place(m[0], m[1]);
      render();
    }, 40);
  }

  function newGame() {
    reset();
    sizeCanvas();
    render();
  }

  // ── Bootstrap ─────────────────────────────────────────────────────────
  function boot() {
    if (new URLSearchParams(location.search).get('id') !== 'poe2-ai') return;

    const sec = eid('poe2-game-section');
    if (sec) sec.hidden = false;

    canvas = eid('poe2-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    eid('poe2-new-game').addEventListener('click', newGame);

    eid('poe2-size').addEventListener('change', function () {
      [W, H] = this.value.split('x').map(Number);
      newGame();
    });

    eid('poe2-diff').addEventListener('change', function () {
      MAX_DEPTH = +this.value;
    });

    canvas.addEventListener('click', onCanvasClick);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    canvas.addEventListener('touchend', e => {
      e.preventDefault();
      if (gameOver || aiThinking || toPlay === AI_P) return;
      const t   = e.changedTouches[0];
      const pos = toGrid(t.clientX, t.clientY);
      if (!pos || !place(pos[0], pos[1])) return;
      hoverCell = null;
      render();
      if (!gameOver) runAI();
    }, { passive: false });

    window.addEventListener('resize', () => { sizeCanvas(); render(); });

    newGame();
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', boot)
    : boot();
})();

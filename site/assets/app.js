(() => {
  const root = document.documentElement;
  const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- Audience mode: Everyone / Engineers ---- */
  const modeBtns = document.querySelectorAll('[data-set-mode]');
  const setMode = (m, save = true) => {
    root.dataset.mode = m;
    modeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.setMode === m)));
    if (save) store.set('mode', m);
  };
  setMode(root.dataset.mode || 'everyone', false);
  modeBtns.forEach((b) => b.addEventListener('click', () => setMode(b.dataset.setMode)));

  /* ---- Theme ---- */
  const themeBtn = document.querySelector('.theme-btn');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  themeBtn?.addEventListener('click', () => { const t = isDark() ? 'light' : 'dark'; root.dataset.theme = t; store.set('theme', t); arm?.refreshColors(); duck?.refreshColors(); });
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', () => { arm?.refreshColors(); duck?.refreshColors(); });

  /* ---- Project filters ---- */
  const chips = document.querySelectorAll('.chip[data-filter]');
  const projs = document.querySelectorAll('.proj');
  chips.forEach((c) => c.addEventListener('click', () => {
    const f = c.dataset.filter;
    chips.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
    projs.forEach((p) => { p.hidden = f !== 'all' && !p.dataset.domains.split(' ').includes(f); });
  }));

  /* ---- Autoplay project videos only while visible ---- */
  const vids = document.querySelectorAll('video[data-autoplay]');
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting) { if (v.preload === 'none') v.preload = 'auto'; v.play().catch(() => {}); } else v.pause();
    }), { threshold: 0.35 });
    vids.forEach((v) => io.observe(v));
  } else vids.forEach((v) => { v.controls = true; v.preload = 'metadata'; });

  /* ---- Broken / blocked video → placeholder ---- */
  document.querySelectorAll('.media video').forEach((v) => v.addEventListener('error', () => {
    const m = v.closest('.media'); if (!m || m.classList.contains('media-empty')) return;
    m.classList.add('media-empty');
    m.insertAdjacentHTML('beforeend', '<span class="mono">Video unavailable — see the repository</span>');
  }, true));

  /* ---- Relative times ---- */
  const rtf = 'Intl' in window && Intl.RelativeTimeFormat ? new Intl.RelativeTimeFormat('en', { numeric: 'auto' }) : null;
  document.querySelectorAll('time.rel').forEach((t) => {
    if (!rtf) return;
    const days = Math.round((new Date(t.dateTime) - Date.now()) / 864e5);
    t.textContent = Math.abs(days) < 30 ? rtf.format(days, 'day') : Math.abs(days) < 365 ? rtf.format(Math.round(days / 30), 'month') : rtf.format(Math.round(days / 365), 'year');
    t.title = t.dateTime.slice(0, 10);
  });

  /* ---- Interactive 3-DOF arm: CCD inverse kinematics ---- */
  const canvas = document.getElementById('arm');
  let arm = null, duck = null;
  if (canvas) arm = createArm(canvas);
  if (canvas) initDuck();

  function createArm(cv) {
    const ctx = cv.getContext('2d');
    const box = cv.parentElement;
    const roQ = document.getElementById('ro-q'), roE = document.getElementById('ro-e');
    const LIM = (150 * Math.PI) / 180;
    let W = 0, H = 0, dpr = 1, base = { x: 0, y: 0 }, L = [0, 0, 0];
    let q = [-Math.PI / 2 + 0.35, -0.9, -0.7];   // joint angles (relative)
    let goal = null, target = null, lastInput = -1e9, visible = true, t0 = performance.now();
    let col = {};
    const refreshColors = () => {
      const s = getComputedStyle(root);
      col = { ink: s.getPropertyValue('--ink').trim(), bg: s.getPropertyValue('--bg').trim(), line: s.getPropertyValue('--line-2').trim(), accent: s.getPropertyValue('--accent').trim(), muted: s.getPropertyValue('--muted').trim() };
      if (reduced) draw();
    };

    function resize() {
      const r = box.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width; H = r.height;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      base = { x: W * 0.5, y: H * 0.84 };
      const reach = Math.min(W * 0.47, H * 0.78);
      L = [reach * 0.42, reach * 0.33, reach * 0.25];
      if (!target) target = idlePoint(0);
      if (!goal) goal = { ...target };
      draw();
    }

    function fk(qs) {
      const pts = [{ ...base }]; let a = 0;
      for (let i = 0; i < 3; i++) { a += qs[i]; const p = pts[i]; pts.push({ x: p.x + L[i] * Math.cos(a), y: p.y + L[i] * Math.sin(a) }); }
      return pts;
    }

    function ccd(qs, tgt) {
      const out = qs.slice();
      for (let it = 0; it < 12; it++) {
        for (let i = 2; i >= 0; i--) {
          const pts = fk(out); const j = pts[i], e = pts[3];
          const a1 = Math.atan2(e.y - j.y, e.x - j.x), a2 = Math.atan2(tgt.y - j.y, tgt.x - j.x);
          let d = a2 - a1; d = Math.atan2(Math.sin(d), Math.cos(d));
          out[i] += d;
          if (i > 0) out[i] = Math.max(-LIM, Math.min(LIM, out[i]));
          else out[0] = Math.max(-Math.PI + 0.05, Math.min(-0.05, out[0])); // keep shoulder above the table
        }
        const e = fk(out)[3]; if (Math.hypot(e.x - tgt.x, e.y - tgt.y) < 0.3) break;
      }
      return out;
    }

    function idlePoint(t) {
      const R = L[0] + L[1] + L[2];
      return { x: base.x + Math.sin(t * 0.55) * R * 0.62, y: base.y - R * 0.6 + Math.sin(t * 1.1) * R * 0.22 };
    }

    function draw() {
      if (!W) return;
      ctx.clearRect(0, 0, W, H);
      const R = L[0] + L[1] + L[2];
      // workspace arc
      ctx.save(); ctx.setLineDash([2, 5]); ctx.strokeStyle = col.line; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(base.x, base.y, R, Math.PI, 2 * Math.PI); ctx.stroke(); ctx.restore();
      // table
      ctx.strokeStyle = col.line; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(16, base.y + 18); ctx.lineTo(W - 16, base.y + 18); ctx.stroke();
      // target crosshair
      if (goal) {
        ctx.strokeStyle = col.accent; ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(goal.x, goal.y, 9, 0, 2 * Math.PI); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(goal.x - 15, goal.y); ctx.lineTo(goal.x - 5, goal.y); ctx.moveTo(goal.x + 5, goal.y); ctx.lineTo(goal.x + 15, goal.y);
        ctx.moveTo(goal.x, goal.y - 15); ctx.lineTo(goal.x, goal.y - 5); ctx.moveTo(goal.x, goal.y + 5); ctx.lineTo(goal.x, goal.y + 15); ctx.stroke();
      }
      // base
      ctx.fillStyle = col.ink; ctx.beginPath();
      ctx.moveTo(base.x - 30, base.y + 18); ctx.lineTo(base.x - 18, base.y - 4); ctx.lineTo(base.x + 18, base.y - 4); ctx.lineTo(base.x + 30, base.y + 18); ctx.closePath(); ctx.fill();
      const pts = fk(q); const widths = [13, 10, 7];
      ctx.lineCap = 'round'; ctx.strokeStyle = col.ink;
      for (let i = 0; i < 3; i++) { ctx.lineWidth = widths[i]; ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i + 1].x, pts[i + 1].y); ctx.stroke(); }
      for (let i = 0; i < 3; i++) { ctx.fillStyle = col.bg; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(pts[i].x, pts[i].y, i === 0 ? 8 : 6, 0, 2 * Math.PI); ctx.fill(); ctx.stroke(); }
      // gripper
      const a = q[0] + q[1] + q[2], e = pts[3];
      const ux = Math.cos(a), uy = Math.sin(a), nx = -uy, ny = ux;
      ctx.strokeStyle = col.accent; ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(e.x + nx * 8, e.y + ny * 8); ctx.lineTo(e.x - nx * 8, e.y - ny * 8);
      ctx.moveTo(e.x + nx * 8, e.y + ny * 8); ctx.lineTo(e.x + nx * 8 + ux * 9, e.y + ny * 8 + uy * 9);
      ctx.moveTo(e.x - nx * 8, e.y - ny * 8); ctx.lineTo(e.x - nx * 8 + ux * 9, e.y - ny * 8 + uy * 9);
      ctx.stroke();
      if (roQ) {
        const deg = (r) => ((r * 180) / Math.PI).toFixed(1).padStart(6, ' ');
        roQ.textContent = `q = [${deg(-q[0])}°, ${deg(-q[1])}°, ${deg(-q[2])}°]`;
        roE.textContent = goal ? `‖e‖ = ${Math.hypot(e.x - goal.x, e.y - goal.y).toFixed(1)} px` : '';
      }
    }

    let stopped = false;
    function step(now) {
      if (stopped) return;
      if (visible) {
        const t = (now - t0) / 1000;
        if (now - lastInput > 2500) goal = idlePoint(t);
        target.x += (goal.x - target.x) * 0.18; target.y += (goal.y - target.y) * 0.18;
        const sol = ccd(q, target);
        for (let i = 0; i < 3; i++) q[i] += (sol[i] - q[i]) * 0.35;
        draw();
      }
      requestAnimationFrame(step);
    }

    function pointTo(ev) {
      const r = box.getBoundingClientRect();
      goal = { x: ev.clientX - r.left, y: ev.clientY - r.top }; lastInput = performance.now();
      if (reduced) { target = { ...goal }; q = ccd(q, target); draw(); }
    }
    const hero = document.querySelector('.hero');
    hero?.addEventListener('pointermove', (ev) => { if (ev.pointerType === 'mouse') pointTo(ev); });
    box.addEventListener('pointerdown', pointTo);
    box.addEventListener('pointermove', (ev) => { if (ev.pointerType !== 'mouse' && ev.buttons) pointTo(ev); });

    new ResizeObserver(resize).observe(box);
    if ('IntersectionObserver' in window) new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(box);
    refreshColors(); resize();
    if (!reduced) requestAnimationFrame(step);
    else { goal = idlePoint(0.9); target = { ...goal }; q = ccd(q, target); draw(); }
    return { refreshColors, stop() { stopped = true; }, start() { if (!stopped) return; stopped = false; if (!reduced) requestAnimationFrame(step); } };
  }

  /* ---- Robot duck (MuJoCo WASM + pretrained RL policies); the arm above stays as the fallback ---- */
  function initDuck() {
    const dc = document.getElementById('duck');
    if (!dc) return;
    const nav = navigator, conn = nav.connection || {};
    const ok = typeof WebAssembly === 'object' && !reduced && !conn.saveData && !/(^|-)2g$/.test(conn.effectiveType || '') &&
      (nav.deviceMemory || 4) >= 2 && (nav.hardwareConcurrency || 4) >= 2 &&
      !!document.createElement('canvas').getContext('webgl2') && new URLSearchParams(location.search).get('duck') !== '0';
    if (!ok) return;
    const $ = (id) => document.getElementById(id);
    const box = dc.parentElement, load = $('duck-load'), ctl = $('duck-ctl');
    const heroEl = document.querySelector('.hero');
    let started = false;
    const start = async () => {
      if (started) return; started = true;
      load.hidden = false;
      try {
        const mod = await import('./duck/duck.js');
        dc.hidden = false;
        const pol = $('dk-pol'), cmd = $('dk-cmd'), cnt = $('dk-cnt');
        duck = await mod.createDuck(dc, {
          onStats: (s, st) => {
            pol.textContent = `policy: ${s.policy} · ${s.hz} Hz`;
            cmd.textContent = `cmd vx ${s.vx.toFixed(2)} m/s · wz ${s.wz.toFixed(2)}`;
            cnt.textContent = `pushes ${s.pushes} · falls ${s.falls} · recovered ${s.recoveries}`;
          },
          onSlow: () => giveUp(),
        });
        if (location.search.includes('duckdebug')) window.__duck = duck;
        arm?.stop(); $('arm').hidden = true; $('arm-ro').hidden = true;
        $('duck-ro').hidden = false; ctl.hidden = false; load.hidden = true;
        box.querySelectorAll('canvas').forEach((c) => { c.style.cursor = c.id === 'duck' ? 'pointer' : ''; });
        document.querySelector('.arm-cap').hidden = true; document.querySelector('.duck-cap').hidden = false;
        duck.refreshColors();
        heroEl?.addEventListener('pointermove', (ev) => { if (ev.pointerType === 'mouse') duck.pointerTo(ev.clientX, ev.clientY); });
        dc.addEventListener('pointerdown', (ev) => duck.pointerTo(ev.clientX, ev.clientY));
        ctl.addEventListener('click', (ev) => { const a = ev.target.closest('[data-duck]')?.dataset.duck; if (a === 'push') duck.push(); else if (a === 'roll') duck.roll(); else if (a === 'reset') duck.reset(); });
      } catch (err) { console.warn('duck unavailable, keeping arm', err); giveUp(); }
    };
    function giveUp() {
      load.hidden = true; ctl.hidden = true; dc.hidden = true; $('duck-ro').hidden = true;
      duck?.dispose(); duck = null;
      $('arm').hidden = false; $('arm-ro').hidden = false;
      document.querySelector('.arm-cap').hidden = false; document.querySelector('.duck-cap').hidden = true;
      arm?.start();
    }
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { io.disconnect(); start(); } });
      io.observe(box);
    } else start();
  }
})();

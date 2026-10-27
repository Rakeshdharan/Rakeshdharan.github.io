// Builds the portfolio from the Obsidian vault into ./dist — no dependencies.
// Usage: node scripts/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter, markdown, inline, sections, esc, mediaTag } from './md.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VAULT = path.join(ROOT, 'vault');
const OUT = path.join(ROOT, 'dist');
const SITE_URL = (process.env.SITE_URL || 'https://rakeshdharan.github.io').replace(/\/$/, '');
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');

// ---------- load vault ----------
const read = (p) => parseFrontmatter(fs.readFileSync(p, 'utf8'));
const notes = (dir) => fs.existsSync(path.join(VAULT, dir))
  ? fs.readdirSync(path.join(VAULT, dir)).filter((f) => f.endsWith('.md')).map((f) => ({ file: f, name: f.replace(/\.md$/, ''), ...read(path.join(VAULT, dir, f)) }))
  : [];
const slugify = (s) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const list = (v) => (Array.isArray(v) ? v : v ? String(v).split(',').map((s) => s.trim()) : []).filter(Boolean);

const profile = read(path.join(VAULT, 'Site/Profile.md'));
const P = profile.data; const aboutSec = sections(profile.body);

const projects = notes('Projects')
  .filter((n) => n.data.status === 'published')
  .map((n) => ({ ...n.data, name: n.name, body: n.body, slug: n.data.slug || slugify(n.name), domains: list(n.data.domains), stack: list(n.data.stack), links: list(n.data.links) }))
  .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));

const hackathons = notes('Hackathons')
  .filter((n) => n.data.status === 'published')
  .map((n) => ({ ...n.data, name: n.name, body: n.body, links: list(n.data.links) }))
  .sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')) || (a.order ?? 99) - (b.order ?? 99));

const experience = notes('Experience').map((n) => ({ ...n.data, body: n.body }))
  .sort((a, b) => String(b.start).localeCompare(String(a.start)));
const work = experience.filter((e) => e.kind !== 'education');
const education = experience.filter((e) => e.kind === 'education');

const noteIndex = new Map(projects.map((p) => [p.name.toLowerCase(), `${BASE}/work/${p.slug}/`]));
const mdOpts = { base: BASE, resolve: (t) => noteIndex.get(t.toLowerCase()) || null };

// ---------- GitHub data (build-time, optional) ----------
async function gh(url) {
  try {
    const headers = { 'User-Agent': 'portfolio-build', Accept: 'application/vnd.github+json' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 8000);
    const r = await fetch(url, { headers, signal: ctrl.signal }); clearTimeout(t);
    return r.ok ? await r.json() : null;
  } catch { return null; }
}
const repoData = {};
await Promise.all(projects.filter((p) => p.repo).map(async (p) => { repoData[p.repo] = await gh(`https://api.github.com/repos/${p.repo}`); }));
const recent = ((await gh(`https://api.github.com/users/${P.github}/repos?sort=pushed&per_page=20`)) || [])
  .filter((r) => !r.fork && !r.private && r.name.toLowerCase() !== `${P.github}.github.io`.toLowerCase()).slice(0, 4);

// ---------- helpers ----------
const domainKey = (d) => slugify(d);
const allDomains = [...new Set(projects.flatMap((p) => p.domains))];
const fmtYM = (v) => {
  const s = String(v ?? '');
  const m = s.match(/^(\d{4})-(\d{2})$/);
  if (!m) return esc(s.replace(/^present$/i, 'Now'));
  return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][+m[2] - 1]} ${m[1]}`;
};
const mediaSrc = (f) => (/^https?:/.test(f) ? f : `${BASE}/media/${encodeURI(f)}`);
const isVideo = (f) => /\.(mp4|webm|mov)$/i.test(f || '');
const repoStats = (repo) => {
  const d = repoData[repo]; if (!d) return '';
  return `<span class="gh-stats mono">★ ${d.stargazers_count}${d.language ? ` · ${esc(d.language)}` : ''} · updated <time class="rel" datetime="${esc(d.pushed_at)}">${esc(d.pushed_at.slice(0, 10))}</time></span>`;
};

function media(p, { big = false, autoplay = false } = {}) {
  const cls = `media${big ? ' media-big' : ''}`;
  if (p.video) {
    const poster = p.poster ? ` poster="${esc(mediaSrc(p.poster))}"` : '';
    return `<div class="${cls}"><video${autoplay ? ' data-autoplay muted loop playsinline preload="none"' : ' controls muted playsinline preload="metadata"'}${poster} src="${esc(mediaSrc(p.video))}" aria-label="Demo video: ${esc(p.title)}"></video></div>`;
  }
  if (p.image) return `<div class="${cls}"><img src="${esc(mediaSrc(p.image))}" alt="${esc(p.title)}" loading="lazy"></div>`;
  return `<div class="${cls} media-empty" aria-hidden="true"><svg viewBox="0 0 160 90" class="ph-glyph"><path d="M40 70h80M60 70V52l18-18 22 10" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="60" cy="52" r="4" fill="var(--bg)" stroke="currentColor" stroke-width="2"/><circle cx="78" cy="34" r="4" fill="var(--bg)" stroke="currentColor" stroke-width="2"/><path d="M100 44l8-4m-8 4l6 7" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/></svg><span class="mono">Demo video coming soon</span></div>`;
}

const dual = (plain, tech, tag = 'p') => `${plain ? `<${tag} class="only-everyone">${inline(plain, mdOpts)}</${tag}>` : ''}${tech ? `<${tag} class="only-engineers">${inline(tech, mdOpts)}</${tag}>` : ''}`;

const icon = {
  github: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33c-2.23.48-2.7-1.07-2.7-1.07-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.23.83 1.23.83.72 1.23 1.88.87 2.34.67.07-.52.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.2c0 .21.15.46.55.38A8 8 0 0 0 16 8c0-4.42-3.58-8-8-8Z"/></svg>',
  linkedin: '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M0 1.15C0 .52.53 0 1.18 0h13.64C15.47 0 16 .52 16 1.15v13.7c0 .63-.53 1.15-1.18 1.15H1.18C.53 16 0 15.48 0 14.85V1.15Zm4.94 12.24V6.17H2.53v7.22h2.4ZM3.73 5.18c.84 0 1.36-.55 1.36-1.25-.01-.71-.52-1.25-1.34-1.25-.82 0-1.36.54-1.36 1.25 0 .7.52 1.25 1.33 1.25h.01Zm2.46 8.21h2.4V9.36c0-.22.02-.43.08-.59.18-.43.57-.88 1.23-.88.87 0 1.22.66 1.22 1.63v3.87h2.4V9.25c0-2.22-1.18-3.25-2.77-3.25-1.29 0-1.86.71-2.18 1.21v.03h-.02l.02-.03V6.17H6.2c.03.68 0 7.22 0 7.22Z"/></svg>',
  hf: '<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="5.6" cy="6.6" r="1" fill="currentColor"/><circle cx="10.4" cy="6.6" r="1" fill="currentColor"/><path d="M5 9.6c.8 1.4 1.8 2 3 2s2.2-.6 3-2" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  mail: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.5 3.5h13v9h-13z M1.5 4l6.5 5 6.5-5" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  arrow: '<svg viewBox="0 0 16 16" aria-hidden="true" class="arr"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

const logo = `<svg viewBox="0 0 24 24" class="logo" aria-hidden="true"><path d="M5 19V5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M5 19h14" stroke="var(--accent)" stroke-width="2" stroke-linecap="round"/><path d="M5 19l8-8" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity=".45"/><circle cx="5" cy="19" r="2.2" fill="currentColor"/></svg>`;

// ---------- layout ----------
function layout({ title, description, body, pathName = '/', image }) {
  const url = `${SITE_URL}${BASE}${pathName}`;
  return `<!doctype html>
<html lang="en" data-mode="everyone">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${url}">
${image ? `<meta property="og:image" content="${esc(image.startsWith('http') ? image : SITE_URL + image)}">` : ''}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0b0c0e" media="(prefers-color-scheme: dark)">
<link rel="icon" href="${BASE}/assets/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${BASE}/assets/style.css?v=${BUILD_ID}">
<script>try{var d=document.documentElement,m=localStorage.getItem('mode'),t=localStorage.getItem('theme');if(m)d.dataset.mode=m;if(t)d.dataset.theme=t}catch(e){}</script>
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: P.name, jobTitle: P.role, url: SITE_URL, email: `mailto:${P.email}`, sameAs: [`https://github.com/${P.github}`, `https://www.linkedin.com/in/${P.linkedin}`, P.huggingface ? `https://huggingface.co/${P.huggingface}` : null].filter(Boolean) })}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="top">
  <div class="wrap top-in">
    <a class="brand" href="${BASE}/">${logo}<span>${esc(P.name)}</span></a>
    <nav class="nav" aria-label="Main">
      <a href="${BASE}/#work">Work</a><a href="${BASE}/#experience">Experience</a><a href="${BASE}/#skills">Skills</a>${hackathons.length ? `<a href="${BASE}/#hackathons">Hackathons</a>` : ''}<a href="${BASE}/#contact">Contact</a>
    </nav>
    <div class="controls">
      <div class="seg" role="group" aria-label="Explain for">
        <span class="seg-label mono">Explain for</span>
        <button type="button" data-set-mode="everyone" aria-pressed="true">Everyone</button>
        <button type="button" data-set-mode="engineers" aria-pressed="false">Engineers</button>
      </div>
      <button type="button" class="theme-btn" aria-label="Toggle dark mode" title="Toggle dark mode"><svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 1.8a6.2 6.2 0 0 1 0 12.4z" fill="currentColor"/></svg></button>
    </div>
  </div>
</header>
<main id="main">
${body}
</main>
<footer class="foot">
  <div class="wrap foot-in mono">
    <span>© ${new Date().getFullYear()} ${esc(P.name)}</span>
    <span>Built from an Obsidian vault with a dependency-free Node script · no cookies, no trackers · hero duck: model &amp; policies from <a href="https://github.com/00make/microduck-arena">microduck-arena</a> (MIT) · updated <time datetime="${new Date().toISOString()}">${new Date().toISOString().slice(0, 10)}</time></span>
  </div>
</footer>
<script src="${BASE}/assets/app.js?v=${BUILD_ID}" defer></script>
</body>
</html>`;
}

const section = (id, idx, label, inner, extra = '') => `<section class="sec${extra}" id="${id}" aria-labelledby="${id}-h">
  <div class="wrap sec-in">
    <div class="rail"><span class="idx mono">${idx}</span><h2 id="${id}-h">${label}</h2></div>
    <div class="sec-body">${inner}</div>
  </div>
</section>`;

// ---------- home ----------
function projectRow(p) {
  const feat = !!p.featured;
  return `<article class="proj${feat ? ' proj-feat' : ''}" data-domains="${p.domains.map(domainKey).join(' ')}">
    <a class="proj-link" href="${BASE}/work/${p.slug}/" aria-label="${esc(p.title)} — read more"></a>
    ${media(p, { autoplay: true })}
    <div class="proj-text">
      <p class="proj-meta mono"><span>${esc(p.year ?? '')}</span>${p.context ? `<span>${esc(p.context)}</span>` : ''}</p>
      <h3>${esc(p.title)}</h3>
      ${dual(p.plain, p.technical)}
      ${p.outcome ? `<p class="outcome"><span class="mono">Result</span>${inline(p.outcome, mdOpts)}</p>` : ''}
      <ul class="tags" aria-label="Areas">${p.domains.map((d) => `<li>${esc(d)}</li>`).join('')}</ul>
      <span class="more mono">Read the case study ${icon.arrow}</span>
    </div>
  </article>`;
}

function expRow(e) {
  const bullets = markdown(e.body, mdOpts);
  return `<li class="exp">
    <p class="exp-when mono">${fmtYM(e.start)} — ${fmtYM(e.end)}</p>
    <div class="exp-what">
      <h3>${esc(e.role)}</h3>
      <p class="exp-org">${esc(e.org)}${e.place ? ` <span class="muted">· ${esc(e.place)}</span>` : ''}${e.grade ? ` <span class="muted">· Grade ${esc(e.grade)}</span>` : ''}</p>
      ${e.plain ? `<p class="only-everyone exp-plain">${inline(e.plain, mdOpts)}</p>` : ''}
      <div class="only-engineers exp-detail">${bullets}</div>
    </div>
  </li>`;
}

function hackathonRow(h) {
  const proj = h.project && noteIndex.get(String(h.project).replace(/^\[\[|\]\]$/g, '').toLowerCase());
  const links = [
    proj ? `<a href="${proj}">Case study →</a>` : '',
    ...h.links.map((l) => { const [label, url] = l.split('|').map((x) => x.trim()); return url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>` : ''; }),
  ].filter(Boolean).join(' · ');
  const bullets = h.body.trim() ? `<div class="only-engineers exp-detail">${markdown(h.body, mdOpts)}</div>` : '';
  return `<li class="exp">
    <p class="exp-when mono">${esc(h.date ?? '')}</p>
    <div class="exp-what">
      <h3>${esc(h.title)}</h3>
      <p class="exp-org">${esc(h.org ?? '')}${h.result ? ` <span class="muted">· ${esc(h.result)}</span>` : ''}${h.role ? ` <span class="muted">· ${esc(h.role)}</span>` : ''}</p>
      ${h.plain ? `<p class="only-everyone exp-plain">${inline(h.plain, mdOpts)}</p>` : ''}
      ${h.technical ? `<p class="only-engineers exp-plain">${inline(h.technical, mdOpts)}</p>` : ''}
      ${bullets}
      ${links ? `<p class="mono exp-links">${links}</p>` : ''}
    </div>
  </li>`;
}

function skillsBlock() {
  const s = sections(read(path.join(VAULT, 'Site/Skills.md')).body);
  return `<div class="skills">${Object.entries(s).filter(([k]) => k !== '_intro').map(([name, txt]) => {
    const plain = (txt.match(/^>\s?(.*)$/m) || [])[1] || '';
    const items = [...txt.matchAll(/^\s*[-*]\s+(.*)$/gm)].map((m) => m[1]);
    return `<div class="skill"><h3>${esc(name)}</h3>${plain ? `<p class="only-everyone muted">${inline(plain, mdOpts)}</p>` : ''}<ul>${items.map((i) => `<li>${inline(i, mdOpts)}</li>`).join('')}</ul></div>`;
  }).join('')}</div>`;
}

function recognitionBlock() {
  const s = sections(read(path.join(VAULT, 'Site/Recognition.md')).body);
  return `<div class="recog">${Object.entries(s).filter(([k, v]) => k !== '_intro' && v).map(([k, v]) => `<div><h3>${esc(k)}</h3>${markdown(v, mdOpts)}</div>`).join('')}</div>`;
}

const earlyBody = fs.existsSync(path.join(VAULT, 'Site/Early work.md')) ? read(path.join(VAULT, 'Site/Early work.md')).body : '';

const BUILD_ID = Date.now().toString(36);

const hero = `<section class="hero">
  <div class="wrap hero-in">
    <div class="hero-text">
      <p class="eyebrow mono"><span class="dot" aria-hidden="true"></span>${esc(P.role)} · ${esc(P.location)}</p>
      <h1>${esc(P.name)}</h1>
      <p class="lede">${esc(P.headline)}</p>
      <dl class="status mono">
        ${P.now ? `<div><dt>Now</dt><dd>${esc(P.now)}</dd></div>` : ''}
        ${P.study ? `<div><dt>Study</dt><dd>${esc(P.study)}</dd></div>` : ''}
        ${P.focus ? `<div><dt>Focus</dt><dd>${esc(P.focus)}</dd></div>` : ''}
        ${P.open_to ? `<div><dt>Open to</dt><dd>${esc(P.open_to)}</dd></div>` : ''}
      </dl>
      <div class="cta">
        <a class="btn btn-solid" href="#work">See my work ${icon.arrow}</a>
        <a class="btn" href="mailto:${esc(P.email)}">${icon.mail} Email me</a>
        ${P.cv ? `<a class="btn" href="${esc(mediaSrc(P.cv))}" download>Download CV</a>` : ''}
      </div>
    </div>
    <figure class="arm-fig">
      <div class="arm-box">
        <canvas id="arm" aria-label="Interactive robot arm that reaches toward your cursor" role="img"></canvas>
        <canvas id="duck" hidden aria-label="A small robot duck walking in a physics simulation, controlled by a trained neural network" role="img"></canvas>
        <div class="arm-readout mono only-engineers" id="arm-ro" aria-hidden="true"><span id="ro-q"></span><span id="ro-e"></span></div>
        <div class="arm-readout mono only-engineers" id="duck-ro" hidden aria-hidden="true"><span id="dk-pol"></span><span id="dk-cmd"></span><span id="dk-cnt"></span></div>
        <div class="duck-ctl" id="duck-ctl" hidden>
          <button type="button" class="btn btn-sm" data-duck="push">Push it</button>
          <button type="button" class="btn btn-sm" data-duck="roll">Roll</button>
          <button type="button" class="btn btn-sm" data-duck="reset">Reset</button>
        </div>
        <div class="duck-load mono" id="duck-load" hidden>loading RL policy…</div>
      </div>
      <figcaption class="mono">
        <span class="arm-cap">
          <span class="only-everyone">Move your cursor or tap: this arm works out how to bend its three joints to reach it — the same problem every robot arm solves.</span>
          <span class="only-engineers">3-DOF planar arm · cyclic coordinate descent (CCD) inverse kinematics · joint limits ±150° · running live in your browser.</span>
        </span>
        <span class="duck-cap" hidden>
          <span class="only-everyone">This little robot duck learned to walk by trial and error in simulation. Move your cursor or tap to send it somewhere, shove it, and watch it get back up. Runs live in your browser.</span>
          <span class="only-engineers">Open Duck–style biped · pretrained RL policies (walk / get-up / roll, MLP 61→512→256→128→14) · MuJoCo WASM physics 200 Hz, policy 50 Hz · all client-side. Model &amp; policies: <a href="https://github.com/00make/microduck-arena">microduck-arena</a> (MIT).</span>
        </span>
      </figcaption>
    </figure>
  </div>
</section>`;

const about = section('about', '00', 'About', `<div class="about">
  <div class="only-everyone prose">${markdown(aboutSec['For everyone'] || '', mdOpts)}</div>
  <div class="only-engineers prose">${markdown(aboutSec['For engineers'] || '', mdOpts)}</div>
  <p class="mode-hint mono">${'Reading the <b class="only-everyone">plain-language</b><b class="only-engineers">technical</b> version — switch with “Explain for” at the top.'}</p>
</div>`);

const workSec = section('work', '01', 'Selected work', `
  <div class="filters" role="group" aria-label="Filter projects by area">
    <button type="button" class="chip" data-filter="all" aria-pressed="true">All <span>${projects.length}</span></button>
    ${allDomains.map((d) => `<button type="button" class="chip" data-filter="${domainKey(d)}" aria-pressed="false">${esc(d)} <span>${projects.filter((p) => p.domains.includes(d)).length}</span></button>`).join('')}
  </div>
  <div class="projects">${projects.map(projectRow).join('')}</div>
  ${earlyBody.trim() ? `<details class="early"><summary><span class="mono">Earlier projects & leadership</span>${icon.arrow}</summary>${markdown(earlyBody, mdOpts)}</details>` : ''}
`);

const expSec = section('experience', '02', 'Experience', `<ol class="exps">${work.map(expRow).join('')}</ol>
  <h3 class="sub mono">Education</h3><ol class="exps">${education.map(expRow).join('')}</ol>`);

const skillSec = section('skills', '03', 'Skills', skillsBlock());
const hackSec = hackathons.length ? section('hackathons', '04', 'Hackathons', `<ol class="exps">${hackathons.map(hackathonRow).join('')}</ol>`) : '';
const recogSec = section('recognition', hackathons.length ? '05' : '04', 'Recognition', recognitionBlock());

const ghRecent = recent.length ? `<div class="recent"><p class="mono muted">Recently active on GitHub</p><ul>${recent.map((r) => `<li><a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(r.name)}</a><span class="mono muted">${r.language ? esc(r.language) + ' · ' : ''}<time class="rel" datetime="${esc(r.pushed_at)}">${esc(r.pushed_at.slice(0, 10))}</time></span></li>`).join('')}</ul></div>` : '';

const contactSec = section('contact', hackathons.length ? '06' : '05', 'Contact', `<div class="contact">
  <p class="contact-lede">${esc(P.open_to ? `Open to ${P.open_to.charAt(0).toLowerCase()}${P.open_to.slice(1)}.` : '')} The fastest way to reach me is email.</p>
  <a class="big-mail" href="mailto:${esc(P.email)}">${esc(P.email)}</a>
  <ul class="links">
    <li><a href="https://www.linkedin.com/in/${esc(P.linkedin)}" target="_blank" rel="noopener">${icon.linkedin}LinkedIn</a></li>
    <li><a href="https://github.com/${esc(P.github)}" target="_blank" rel="noopener">${icon.github}GitHub</a></li>
    ${P.huggingface ? `<li><a href="https://huggingface.co/${esc(P.huggingface)}" target="_blank" rel="noopener">${icon.hf}Hugging Face</a></li>` : ''}
  </ul>
  ${P.languages ? `<p class="mono muted langs">Languages · ${esc(P.languages)}</p>` : ''}
  ${ghRecent}
</div>`);

const firstVisual = projects.find((p) => p.poster || p.image);
const homeHtml = layout({
  title: `${P.name} — ${P.role}`,
  description: `${P.name}, ${P.role.toLowerCase()} in ${P.location}. ${P.headline}`,
  body: hero + about + workSec + expSec + skillSec + hackSec + recogSec + contactSec,
  image: firstVisual ? mediaSrc(firstVisual.poster || firstVisual.image) : undefined,
});

// ---------- project pages ----------
function projectPage(p, i) {
  const prev = projects[i - 1]; const next = projects[i + 1];
  const links = [
    p.repo ? `<a class="repo-card" href="https://github.com/${esc(p.repo)}" target="_blank" rel="noopener">${icon.github}<span><b>${esc(p.repo)}</b>${repoStats(p.repo)}</span>${icon.arrow}</a>` : '',
    ...p.links.map((l) => { const [label, url] = l.split('|').map((s) => s.trim()); return url ? `<a class="repo-card" href="${esc(url)}" target="_blank" rel="noopener"><span><b>${esc(label)}</b><span class="mono muted">${esc(url.replace(/^https?:\/\//, ''))}</span></span>${icon.arrow}</a>` : ''; }),
  ].join('');
  const body = `<article class="case">
  <div class="wrap">
    <a class="back mono" href="${BASE}/#work">← All work</a>
    <header class="case-head">
      <p class="proj-meta mono"><span>${esc(p.year ?? '')}</span>${p.context ? `<span>${esc(p.context)}</span>` : ''}</p>
      <h1>${esc(p.title)}</h1>
      <div class="case-summary">${dual(p.plain, p.technical)}</div>
      ${p.outcome ? `<p class="outcome"><span class="mono">Result</span>${inline(p.outcome, mdOpts)}</p>` : ''}
    </header>
    ${media(p, { big: true })}
    <div class="case-grid">
      <aside class="case-meta">
        <dl class="mono">
          <div><dt>Areas</dt><dd>${p.domains.map(esc).join(', ')}</dd></div>
          ${p.stack.length ? `<div><dt>Stack</dt><dd>${p.stack.map(esc).join(', ')}</dd></div>` : ''}
        </dl>
        ${links ? `<div class="case-links">${links}</div>` : ''}
      </aside>
      <div class="prose case-body">${markdown(p.body, mdOpts)}</div>
    </div>
    <nav class="pager" aria-label="More projects">
      ${prev ? `<a href="${BASE}/work/${prev.slug}/"><span class="mono muted">← Previous</span>${esc(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a class="nx" href="${BASE}/work/${next.slug}/"><span class="mono muted">Next →</span>${esc(next.title)}</a>` : ''}
    </nav>
  </div>
</article>`;
  return layout({ title: `${p.title} — ${P.name}`, description: p.plain || p.technical || p.title, body, pathName: `/work/${p.slug}/`, image: p.poster || p.image ? mediaSrc(p.poster || p.image) : undefined });
}

// ---------- write ----------
try { fs.rmSync(OUT, { recursive: true, force: true }); } catch { /* stale files are overwritten below */ }
const copyDir = (src, dst) => { fs.mkdirSync(dst, { recursive: true }); for (const e of fs.readdirSync(src, { withFileTypes: true })) { if (e.name.startsWith('.')) continue; const a = path.join(src, e.name), b = path.join(dst, e.name); e.isDirectory() ? copyDir(a, b) : fs.writeFileSync(b, fs.readFileSync(a)); } };
const write = (rel, content) => { const f = path.join(OUT, rel); fs.mkdirSync(path.dirname(f), { recursive: true }); fs.writeFileSync(f, content); };
write('index.html', homeHtml);
projects.forEach((p, i) => write(`work/${p.slug}/index.html`, projectPage(p, i)));
write('404.html', layout({ title: `Not found — ${P.name}`, description: 'Page not found', body: `<section class="sec"><div class="wrap nf"><p class="mono idx">404</p><h1>This path has no valid solution.</h1><p class="muted">The inverse kinematics failed — the page you’re looking for doesn’t exist.</p><a class="btn btn-solid" href="${BASE}/">Back to the homepage ${icon.arrow}</a></div></section>`, pathName: '/404.html' }));
write('robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}${BASE}/sitemap.xml\n`);
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/', ...projects.map((p) => `/work/${p.slug}/`)].map((u) => `<url><loc>${SITE_URL}${BASE}${u}</loc></url>`).join('')}</urlset>\n`);
write('.nojekyll', '');
copyDir(path.join(ROOT, 'site/assets'), path.join(OUT, 'assets'));
if (fs.existsSync(path.join(VAULT, 'Attachments'))) copyDir(path.join(VAULT, 'Attachments'), path.join(OUT, 'media'));

console.log(`Built ${projects.length} projects, ${work.length} roles, ${education.length} degrees → dist/  (GitHub data: ${Object.values(repoData).filter(Boolean).length}/${Object.keys(repoData).length} repos${recent.length ? ', recent activity ok' : ''})`);

// Minimal, dependency-free Markdown + frontmatter parser tuned for Obsidian notes.
// Supports: headings, paragraphs, lists (ul/ol, one level + simple nesting by indent),
// blockquotes, fenced code, tables, hr, bold/italic/code/links/images,
// Obsidian embeds ![[file.mp4]] and wikilinks [[Note|label]].

export function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: src };
  return { data: parseYaml(m[1]), body: src.slice(m[0].length) };
}

function scalar(v) {
  v = v.trim();
  if (v === '') return '';
  if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) return v.slice(1, -1);
  if (v === 'true') return true;
  if (v === 'false') return false;
  if (v === 'null' || v === '~') return null;
  if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
  if (v.startsWith('[') && v.endsWith(']')) {
    const inner = v.slice(1, -1).trim();
    if (!inner) return [];
    return splitTopLevel(inner).map(scalar);
  }
  return v;
}

function splitTopLevel(s) {
  const out = []; let cur = ''; let q = null;
  for (const ch of s) {
    if (q) { cur += ch; if (ch === q) q = null; continue; }
    if (ch === '"' || ch === "'") { q = ch; cur += ch; continue; }
    if (ch === ',') { out.push(cur); cur = ''; continue; }
    cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out;
}

// Flat YAML: `key: value`, `key: [a, b]`, `key:` followed by `  - item` lines, and `key: >`/`|` blocks.
function parseYaml(text) {
  const data = {}; const lines = text.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim() || line.trim().startsWith('#')) continue;
    const km = line.match(/^([A-Za-z0-9_\-]+):\s?(.*)$/);
    if (!km) continue;
    const [, key, rest] = km;
    if (rest.trim() === '' ) {
      const items = [];
      while (i + 1 < lines.length && /^\s+-\s/.test(lines[i + 1])) { i++; items.push(scalar(lines[i].replace(/^\s+-\s/, ''))); }
      data[key] = items.length ? items : '';
    } else if (rest.trim() === '>' || rest.trim() === '|') {
      const fold = rest.trim() === '>'; const buf = [];
      while (i + 1 < lines.length && (/^\s+/.test(lines[i + 1]) || lines[i + 1].trim() === '')) { i++; buf.push(lines[i].trim()); }
      data[key] = fold ? buf.join(' ').replace(/\s+/g, ' ').trim() : buf.join('\n').trim();
    } else data[key] = scalar(rest);
  }
  return data;
}

export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const VIDEO = /\.(mp4|webm|mov)$/i;

export function mediaTag(file, alt = '', base = '') {
  const src = /^https?:\/\//.test(file) ? file : `${base}/media/${encodeURI(file)}`;
  if (VIDEO.test(file)) return `<video src="${esc(src)}" controls muted playsinline preload="metadata"></video>`;
  return `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
}

export function inline(s, opts = {}) {
  const { base = '', resolve = () => null } = opts;
  const codes = [];
  s = s.replace(/`([^`]+)`/g, (_, c) => { codes.push(`<code>${esc(c)}</code>`); return `\u0000${codes.length - 1}\u0000`; });
  s = esc(s);
  s = s.replace(/!\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, f, a) => mediaTag(f.trim(), a || '', base));
  s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, (_, a, u) => mediaTag(u.replace(/^(\.\.\/)*Attachments\//, ''), a, base));
  s = s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, l) => {
    const href = resolve(t.trim());
    const label = l || t;
    return href ? `<a href="${href}">${label}</a>` : label;
  });
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, t, u) => {
    const ext = /^https?:/.test(u);
    return `<a href="${u}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`;
  });
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/(^|[^*])\*([^*\s][^*]*)\*/g, '$1<em>$2</em>');
  s = s.replace(/(^|\W)_([^_\s][^_]*)_(?=\W|$)/g, '$1<em>$2</em>');
  s = s.replace(/==([^=]+)==/g, '<mark>$1</mark>');
  s = s.replace(/\u0000(\d+)\u0000/g, (_, i) => codes[i]);
  return s;
}

export function markdown(src, opts = {}) {
  const lines = src.replace(/\r/g, '').split('\n');
  const out = []; let i = 0;
  const isBlockStart = (l) => /^(#{1,6}\s|```|>\s?|\s*[-*+]\s|\s*\d+\.\s|\|.*\||---\s*$|!\[\[)/.test(l);
  while (i < lines.length) {
    let l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (/^%%/.test(l)) { // Obsidian comment block — never published
      i++; while (i < lines.length && !/%%/.test(lines[i])) i++; i++; continue;
    }
    let m;
    if ((m = l.match(/^(#{1,6})\s+(.*)$/))) {
      const lvl = m[1].length; const text = m[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      out.push(`<h${lvl} id="${id}">${inline(text, opts)}</h${lvl}>`); i++; continue;
    }
    if (l.startsWith('```')) {
      const lang = l.slice(3).trim(); const buf = []; i++;
      while (i < lines.length && !lines[i].startsWith('```')) buf.push(lines[i++]);
      i++; out.push(`<pre><code${lang ? ` class="lang-${esc(lang)}"` : ''}>${esc(buf.join('\n'))}</code></pre>`); continue;
    }
    if (/^---\s*$/.test(l)) { out.push('<hr>'); i++; continue; }
    if (/^>\s?/.test(l)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
      const callout = buf[0]?.match(/^\[!(\w+)\]\s*(.*)$/);
      if (callout) {
        const body = markdown(buf.slice(1).join('\n'), opts);
        out.push(`<aside class="callout callout-${esc(callout[1].toLowerCase())}">${callout[2] ? `<p class="callout-title">${inline(callout[2], opts)}</p>` : ''}${body}</aside>`);
      } else out.push(`<blockquote>${markdown(buf.join('\n'), opts)}</blockquote>`);
      continue;
    }
    if (/^\|.*\|\s*$/.test(l) && i + 1 < lines.length && /^\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
      const row = (r) => r.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const head = row(l); i += 2; const rows = [];
      while (i < lines.length && /^\|.*\|\s*$/.test(lines[i])) rows.push(row(lines[i++]));
      out.push(`<div class="table-wrap"><table><thead><tr>${head.map((h) => `<th>${inline(h, opts)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c, opts)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
      continue;
    }
    if ((m = l.match(/^(\s*)([-*+]|\d+\.)\s+/))) {
      const ordered = /\d/.test(m[2]); const items = [];
      while (i < lines.length && (lines[i].match(/^(\s*)([-*+]|\d+\.)\s+/) || (/^\s{2,}\S/.test(lines[i]) && items.length))) {
        const li = lines[i].match(/^(\s*)([-*+]|\d+\.)\s+(.*)$/);
        if (li && li[1].length < 2) items.push([li[3]]);
        else items[items.length - 1].push(lines[i].trim().replace(/^([-*+]|\d+\.)\s+/, '• '));
        i++;
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.map((it) => {
        let first = it[0].replace(/^\[( |x)\]\s*/, (_, c) => (c === 'x' ? '✓ ' : '○ '));
        const sub = it.slice(1).filter((x) => x.startsWith('• ')).map((x) => `<li>${inline(x.slice(2), opts)}</li>`);
        const cont = it.slice(1).filter((x) => !x.startsWith('• ')).join(' ');
        return `<li>${inline(first + (cont ? ' ' + cont : ''), opts)}${sub.length ? `<ul>${sub.join('')}</ul>` : ''}</li>`;
      }).join('')}</${tag}>`);
      continue;
    }
    if (/^!\[\[[^\]]+\]\]\s*$/.test(l)) { out.push(`<figure class="embed">${inline(l.trim(), opts)}</figure>`); i++; continue; }
    const buf = [l]; i++;
    while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) buf.push(lines[i++]);
    out.push(`<p>${inline(buf.join(' '), opts)}</p>`);
  }
  return out.join('\n');
}

// Split a note body into { heading: markdownText } by `## ` headings.
export function sections(body) {
  const res = {}; let cur = '_intro'; res[cur] = [];
  for (const line of body.replace(/\r/g, '').split('\n')) {
    const m = line.match(/^##\s+(.*)$/);
    if (m) { cur = m[1].trim(); res[cur] = []; continue; }
    res[cur].push(line);
  }
  for (const k of Object.keys(res)) res[k] = res[k].join('\n').trim();
  return res;
}

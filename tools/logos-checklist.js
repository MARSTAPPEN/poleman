#!/usr/bin/env node
/* Checklist de logos: lista TODAS las rutas de logo que usan los archivos data/season-*.js, qué identidad las usa
   (equipo/era o categoría/era) y si el archivo ya existe en assets/logos/.
   Uso:  node tools/logos-checklist.js     ->  docs/logos.md
   Para sumar un logo: guardalo en assets/logos/ con EXACTAMENTE el nombre de la ruta (no hay que tocar los datos).
   Si el archivo no existe, el juego muestra las iniciales del equipo sobre su color. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), DATA = path.join(ROOT, 'data'), LOGOS = path.join(ROOT, 'assets', 'logos');
const uses = new Map(); // ruta -> Set de descripciones
const add = (p, d) => { if (!p) return; if (!uses.has(p)) uses.set(p, new Set()); uses.get(p).add(d); };
fs.readdirSync(DATA).filter(f => /^season-\d{4}\.js$/.test(f)).sort().forEach(f => {
  const sb = {}; sb.window = sb; vm.createContext(sb); vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sb);
  const year = +f.match(/\d{4}/)[0], D = sb.SEASON_DATA[year];
  [...D.teams, ...(D.entries || []).map(e => e.team)].forEach(t => t.eras.forEach(e => add(e.logo, `F1 · ${e.name} (desde ${e.from})`)));
  (D.ladder || []).forEach(c => {
    if (c.eras) c.eras.forEach(e => (e.teams || []).forEach(t => add(t.logo, `${c.id.toUpperCase()} · ${t.name} (${e.name}, desde ${e.from})`)));
    else ((D.juniorTeams || {})[c.id] || []).forEach(t => add(t.logo, `${c.id.toUpperCase()} · ${t.name} (${c.name})`));
  });
});
const rows = [...uses.entries()].map(([p, s]) => ({ p, ok: fs.existsSync(path.join(LOGOS, p)), who: [...s] })).sort((a, b) => a.p.localeCompare(b.p));
const dirs = [...new Set(rows.map(r => r.p.split('/')[0]))];
const L = ['# Checklist de logos', '',
  '> Generado con `node tools/logos-checklist.js`. Guardá cada logo en `assets/logos/` con **exactamente** el nombre de la ruta indicada; no hay que tocar ningún dato.',
  '> Mientras falte un archivo, el juego muestra las iniciales del equipo sobre su color (no se rompe nada). Un mismo archivo sirve para todas las temporadas que lo mencionan.', '',
  `**Total:** ${rows.length} rutas · ✅ ${rows.filter(r => r.ok).length} existen · ⬜ ${rows.filter(r => !r.ok).length} faltan`, ''];
dirs.forEach(d => {
  const rs = rows.filter(r => r.p.startsWith(d + '/'));
  L.push(`## ${d.toUpperCase()}  (${rs.filter(r => !r.ok).length} faltan de ${rs.length})`, '', '| Estado | Archivo (en assets/logos/) | Lo usan |', '|---|---|---|');
  rs.forEach(r => L.push(`| ${r.ok ? '✅' : '⬜'} | \`${r.p}\` | ${r.who.slice(0, 4).join(' · ')}${r.who.length > 4 ? ` · (+${r.who.length - 4} más)` : ''} |`));
  L.push('');
});
fs.writeFileSync(path.join(ROOT, 'docs', 'logos.md'), L.join('\n'));
console.log(`docs/logos.md generado: ${rows.length} rutas, ${rows.filter(r => !r.ok).length} faltan`);

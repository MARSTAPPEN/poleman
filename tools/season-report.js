#!/usr/bin/env node
/* Genera una lista legible (Markdown) con TODOS los datos de una temporada, para revisarlos.
   Uso:  node tools/season-report.js 2020      ->  docs/season-2020.md
   Los cambios se hacen en data/season-AAAA.js (este archivo se regenera, no se edita). */
const fs = require('fs'), path = require('path'), vm = require('vm');
const year = +process.argv[2]; if (!year) { console.log('Uso: node tools/season-report.js AAAA'); process.exit(1); }
const ROOT = path.join(__dirname, '..'), sb = {}; sb.window = sb; vm.createContext(sb);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', `season-${year}.js`), 'utf8'), sb);
const D = sb.SEASON_DATA[year], seats = D.seatsPerTeam;
const has = rel => rel && fs.existsSync(path.join(ROOT, 'assets', 'logos', rel));
const rng = r => r ? `${r[0]}-${r[1]}` : '—';
const dRow = (d, extra) => `| ${d.name} | ${d.age} | **${d.ovr}** | ${rng(d.potRange)} | ${rng(d.retireRange)} | ${d.rep} | ${d.nat || '—'} |${extra ? ' ' + extra(d) + ' |' : ''}`;
const L = [];
L.push(`# Temporada ${year} — datos para revisar`, '',
  `> Generado automáticamente desde \`data/season-${year}.js\`. **Para cambiar algo, editá ese archivo** (o pedímelo) y regenerá con \`node tools/season-report.js ${year}\`.`, '',
  '## Cómo leer los números', '',
  '- **tier** (equipos): nivel base del auto, 0-100. Es el valor hacia el que tira la evolución del equipo (referencia: 2026 va de 50 a 93).',
  '- **ovr** (pilotos): nivel al arrancar la temporada, 0-100 (campeón dominante ≈ 95-98, titular promedio ≈ 77-84).',
  '- **pot**: rango del que se sortea el techo del piloto (si tiene margen para crecer). **retiro**: rango del que se sortea la edad de retiro.',
  '- **rep**: reputación 0-100. **edad**: al arrancar la temporada. **nac**: código de bandera.', '',
  '## Parámetros', '',
  `- Asientos por equipo: **${seats}** · Equipos: **${D.teams.length}** · Autos: **${D.teams.length * seats}** · Carreras de F1: **${D.f1Races}**`,
  `- topTeamTier: ${D.topTeamTier} · gridRefTier: ${D.gridRefTier} · refuerzo tardío desde la temporada ${D.latePoolFromSeason} de la partida`,
  `- Equipos con chance de "proyecto sorpresa": ${(D.surpriseTeams || []).join(', ')}`, '',
  '## Escuderías y pilotos titulares (de mejor a peor auto)', '');
[...D.teams].sort((a, b) => b.tier - a.tier).forEach(t => {
  const eras = t.eras.map(e => `${e.name} (${e.from === t.eras[0].from ? 'desde ' + e.from : e.from})`).join(' → ');
  L.push(`### ${t.eras[0].name} — tier ${t.tier}`, `id \`${t.id}\` · identidad: ${eras}${t.iconic ? ' · icónico (nunca cambia al azar)' : ''}`, '',
    '| Piloto | Edad | ovr | pot | retiro | rep | nac |', '|---|---|---|---|---|---|---|');
  t.drivers.forEach(d => L.push(dRow(d)));
  L.push('');
});
if ((D.entries || []).length) {
  L.push('## Altas reales de equipos (solo modo "cambios reales")', '', '| Año | Equipo | tier | id |', '|---|---|---|---|');
  D.entries.forEach(en => L.push(`| ${en.year} | ${en.team.eras[0].name} | ${en.team.tier} | \`${en.team.id}\` |`));
  L.push('');
}
if ((D.exits || []).length) {
  const nameOf = id => { const t = [...D.teams, ...(D.entries || []).map(e => e.team)].find(x => x.id === id); return t ? t.eras[0].name : id; };
  L.push('## Bajas de equipos (solo modo "cambios reales")', '', '| Primer año sin el equipo | Equipo | id |', '|---|---|---|');
  D.exits.forEach(x => L.push(`| ${x.year} | ${nameOf(x.id)} | \`${x.id}\` |`));
  L.push('');
}
if ((D.arrivals || []).length || (D.moves || []).length) {
  const allTeams = [...D.teams, ...(D.entries || []).map(e => e.team)];
  const tname = (id, yr) => { const t = allTeams.find(x => x.id === id); if (!t) return id || 'libre'; let e = t.eras[0]; t.eras.forEach(x => { if (x.from <= yr) e = x; }); return e.name; };
  if ((D.arrivals || []).length) {
    L.push('## Debuts reales por año (solo modo "cambios reales")', '',
      'En su año de debut el piloto entra al equipo con el que debutó (si el equipo está completo, desplaza al más flojo siempre que el debutante no sea mucho peor). *Cantera* = ya está libre desde el arranque y debuta en su año; *nuevo* = aparece ese año.', '',
      '| Año | Piloto | Equipo | Origen | Edad | ovr | pot |', '|---|---|---|---|---|---|---|');
    D.arrivals.forEach(a => { const d = a.d; L.push(`| ${a.year} | ${d ? d.name : a.name} | ${tname(a.team, a.year)} | ${d ? 'nuevo' : 'cantera'} | ${d ? d.age : '—'} | ${d ? d.ovr : '—'} | ${d ? rng(d.potRange) : '—'} |`); });
    L.push('');
  }
  if ((D.moves || []).length) {
    L.push('## Fichajes reales de las figuras (solo modo "cambios reales")', '', 'Cada fichaje se aplica en su año si el piloto sigue en carrera. *Fuera de F1* = deja la F1 hasta el año indicado.', '');
    const by = new Map(); D.moves.forEach(m => { if (!by.has(m.name)) by.set(m.name, []); by.get(m.name).push(m); });
    by.forEach((ms, n) => L.push(`- **${n}**: ` + ms.map(m => m.team === null ? `${m.year} fuera de F1${m.until && m.until < 2100 ? ' (vuelve ' + m.until + ')' : ''}` : `${m.year} ${tname(m.team, m.year)}`).join(' → ')));
    L.push('');
  }
}
L.push(`## Cantera libre al arrancar (${D.reservePool.length})`, '',
  'Pilotos sin asiento que esperan una vacante. *ex* = ya corrió antes en F1. *Prefiere* = equipos donde es más probable que fiche.', '',
  '| Piloto | Edad | ovr | pot | retiro | rep | nac | Prefiere |', '|---|---|---|---|---|---|---|---|');
D.reservePool.forEach(d => L.push(dRow(d, x => (x.exPiloto ? '*ex* · ' : '') + ((x.targetTeams || []).join(', ') || '—'))));
L.push('', `## Refuerzo tardío (${D.latePool.length} pilotos ficticios)`, '',
  `Entran a partir de la temporada ${D.latePoolFromSeason} de la partida. ${year === 2020 ? 'Es el mismo grupo que usa 2026.' : ''}`, '',
  D.latePool.map(d => d.name).join(', '), '',
  '');
L.push('## Categorías previas a F1', '', 'Cada escalón puede cambiar de nombre y de equipos según el año calendario (⚠ = falta el logo; se muestran las iniciales).', '');
const missing = new Set();
const teamList = (cat, teams) => (teams || []).map(t => { const ok = has(t.logo); if (!ok) missing.add(`${cat}: ${t.name} → assets/logos/${t.logo}`); return `${t.name}${ok ? '' : ' ⚠'}`; }).join(' · ');
D.ladder.forEach(c => {
  const eras = c.eras || [{ from: year, name: c.name, short: c.short, races: c.races, tierBase: c.tierBase, fieldSize: c.fieldSize, teams: (D.juniorTeams || {})[c.id] }];
  L.push(`### Escalón \`${c.id}\``, '');
  eras.forEach(e => L.push(`**${c.eras ? 'Desde ' + e.from : 'Toda la partida'}: ${e.name}** (${e.short}) — ${e.races} carreras/temp. · tier base ${e.tierBase} · ${e.fieldSize} autos`, '', teamList(c.id, e.teams), ''));
});
L.push('## Palmarés previo (pestaña "Historia")', '', D.baseChampions.map(c => `${c.name}: ${c.titles}`).join(' · '), '');
[...D.teams, ...(D.entries || []).map(e => e.team)].forEach(t => t.eras.forEach(e => { if (!has(e.logo)) missing.add(`F1: ${e.name} (id ${t.id}, desde ${e.from}) → assets/logos/${e.logo}`); }));
L.push('## Logos que faltan (⚠ = se muestran las iniciales)', '', ...[...missing].map(m => `- ${m}`), '');
fs.writeFileSync(path.join(ROOT, 'docs', `season-${year}.md`), L.join('\n'));
console.log(`docs/season-${year}.md generado (${L.length} líneas)`);

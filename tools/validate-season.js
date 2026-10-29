#!/usr/bin/env node
/* Validador de temporadas de Poleman. Sin dependencias.
   Uso:  node tools/validate-season.js            (valida todos los data/season-AAAA.js)
         node tools/validate-season.js 2020       (solo ese año)
   Errores (✖) = el juego se rompería o se comportaría mal. Avisos (⚠) = conviene revisar. */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.join(__dirname, '..'), DATA = path.join(ROOT, 'data'), LOGOS = path.join(ROOT, 'assets', 'logos');
const html = fs.readFileSync(path.join(ROOT, 'carrera.html'), 'utf8');
const FLAGS = new Set([...html.matchAll(/"([a-z]{2}(?:-[a-z]+)?)":\s*"<svg/g)].map(m => m[1]));
const HEX = /^#[0-9a-fA-F]{6}$/;
const only = process.argv[2];
const files = fs.readdirSync(DATA).filter(f => /^season-\d{4}\.js$/.test(f) && (!only || f === `season-${only}.js`));
if (!files.length) { console.log('No encontré archivos season-AAAA.js para validar.'); process.exit(1); }
let totalErr = 0;
for (const f of files) {
  const errs = [], warns = [];
  const E = m => errs.push(m), W = m => warns.push(m);
  const sandbox = { window: {} }; sandbox.window = sandbox; vm.createContext(sandbox);
  try { vm.runInContext(fs.readFileSync(path.join(DATA, f), 'utf8'), sandbox, { filename: f }); }
  catch (e) { console.log(`\n${f}\n  ✖ no se pudo leer el archivo: ${e.message}`); totalErr++; continue; }
  const year = +f.match(/\d{4}/)[0], D = sandbox.SEASON_DATA && sandbox.SEASON_DATA[year];
  if (!D) { console.log(`\n${f}\n  ✖ no registra SEASON_DATA[${year}]`); totalErr++; continue; }
  if (!html.includes(`data/${f}`)) E(`carrera.html no incluye <script src="data/${f}"></script>`);
  if (D.year !== year) E(`year (${D.year}) no coincide con el nombre del archivo (${year})`);
  const int = (v, min, max) => Number.isInteger(v) && v >= min && v <= max;
  if (!int(D.seatsPerTeam, 1, 4)) E('seatsPerTeam debe ser un entero 1-4');
  if (!int(D.f1Races, 1, 30)) E('f1Races debe ser un entero 1-30');
  if (!int(D.topTeamTier, 1, 100)) E('topTeamTier inválido'); if (!int(D.gridRefTier, 1, 100)) E('gridRefTier inválido');
  const checkLogo = (rel, where) => {
    if (!rel) return W(`${where}: sin logo (se mostrarán las iniciales)`);
    if (!fs.existsSync(path.join(LOGOS, rel))) W(`${where}: no existe assets/logos/${rel} (se mostrarán las iniciales)`);
  };
  // escalera
  const ladderIds = new Set();
  if (!Array.isArray(D.ladder) || !D.ladder.length) E('ladder vacía o ausente');
  (D.ladder || []).forEach((c, i) => {
    if (ladderIds.has(c.id)) E(`ladder[${i}]: id repetido "${c.id}"`); ladderIds.add(c.id);
    if (!c.name || !c.short) E(`ladder[${i}] (${c.id}): faltan name/short`);
    if (!int(c.races, 1, 40)) E(`ladder ${c.id}: races inválido`);
    if (!int(c.tierBase, 1, 100)) E(`ladder ${c.id}: tierBase inválido`);
    if (!int(c.fieldSize, 2, 60)) E(`ladder ${c.id}: fieldSize inválido`);
    if (!D.juniorTeams || !Array.isArray(D.juniorTeams[c.id]) || !D.juniorTeams[c.id].length) E(`juniorTeams.${c.id}: faltan equipos`);
  });
  Object.keys(D.juniorTeams || {}).forEach(cat => {
    if (!ladderIds.has(cat)) W(`juniorTeams.${cat}: categoría que no está en ladder (no se usa)`);
    (D.juniorTeams[cat] || []).forEach((t, i) => {
      if (!t.name) E(`juniorTeams.${cat}[${i}]: sin name`); if (!HEX.test(t.color || '')) E(`juniorTeams.${cat}[${i}] ${t.name}: color inválido`);
      checkLogo(t.logo, `juniorTeams.${cat} ${t.name}`);
    });
  });
  // equipos y pilotos
  const teamIds = new Set(), names = new Map();
  const claim = (n, where) => { if (names.has(n)) E(`piloto repetido "${n}" en ${where} y ${names.get(n)}`); else names.set(n, where); };
  if (!Array.isArray(D.teams) || D.teams.length < 4) E('teams: hacen falta al menos 4 equipos');
  const seats = D.seatsPerTeam || 2;
  (D.teams || []).forEach((t, i) => {
    const w = `teams[${i}] ${t.id}`;
    if (!/^[a-z0-9]+$/.test(t.id || '')) E(`${w}: id debe ser minúsculas/números sin espacios`);
    if (teamIds.has(t.id)) E(`${w}: id repetido`); teamIds.add(t.id);
    if (!int(t.tier, 1, 100)) E(`${w}: tier inválido`);
    if (t.iconic != null && typeof t.iconic !== 'boolean') E(`${w}: iconic debe ser true/false`);
    if (!Array.isArray(t.eras) || !t.eras.length) E(`${w}: eras vacío`);
    else {
      t.eras.forEach((e, k) => {
        if (!e.name) E(`${w} era ${k}: sin name`); if (!HEX.test(e.color || '')) E(`${w} era ${k}: color inválido`);
        if (k && e.from <= t.eras[k - 1].from) E(`${w}: las eras deben ir ordenadas por "from" ascendente`);
        checkLogo(e.logo, `${w} (${e.name})`);
      });
      if (t.eras[0].from > year) W(`${w}: la primera era arranca en ${t.eras[0].from}, posterior a ${year} (se usará igual)`);
    }
    if (!Array.isArray(t.drivers) || t.drivers.length !== seats) E(`${w}: tiene ${(t.drivers || []).length} pilotos y seatsPerTeam=${seats}`);
    (t.drivers || []).forEach(d => checkDriver(d, `${w} › ${d.name}`, false));
  });
  // altas reales de equipos (entran en D.entries[].year; no llevan pilotos: se cubren desde la cantera)
  (D.entries || []).forEach((en, i) => {
    const tm = en.team || {}, w = `entries[${i}] ${tm.id}`;
    if (!int(en.year, year + 1, 2100)) E(`${w}: year debe ser un año posterior a ${year}`);
    if (!/^[a-z0-9]+$/.test(tm.id || '')) E(`${w}: id debe ser minúsculas/números sin espacios`);
    if (teamIds.has(tm.id)) E(`${w}: id repetido (ya existe entre los equipos o altas)`); teamIds.add(tm.id);
    if (!int(tm.tier, 1, 100)) E(`${w}: tier inválido`);
    if (!Array.isArray(tm.eras) || !tm.eras.length) E(`${w}: eras vacío`);
    else tm.eras.forEach((e, k) => { if (!e.name) E(`${w} era ${k}: sin name`); if (!HEX.test(e.color || '')) E(`${w} era ${k}: color inválido`); checkLogo(e.logo, `${w} (${e.name})`); });
    if (tm.drivers && tm.drivers.length) W(`${w}: los pilotos de una alta se ignoran (entra y ficha de la cantera)`);
  });
  const totalTeams = (D.teams || []).length + (D.entries || []).length;
  if (D.maxTeams != null && totalTeams > D.maxTeams) W(`maxTeams (${D.maxTeams}) menor que equipos + altas (${totalTeams})`);
  (D.reservePool || []).forEach(d => checkDriver(d, `reservePool › ${d.name}`, true));
  (D.latePool || []).forEach(d => checkDriver(d, `latePool › ${d.name}`, true));
  function checkDriver(d, w, pool) {
    if (!d.name) return E(`${w}: sin name`); claim(d.name, w);
    if (!int(d.age, 14, 60)) E(`${w}: age inválida`); if (!int(d.ovr, 30, 99)) E(`${w}: ovr fuera de 30-99`);
    if (!int(d.rep, 0, 100)) E(`${w}: rep fuera de 0-100`);
    if (!Array.isArray(d.potRange) || d.potRange.length !== 2 || d.potRange[0] > d.potRange[1]) E(`${w}: potRange debe ser [min,max]`);
    else if (d.potRange[1] < d.ovr) W(`${w}: potRange máximo (${d.potRange[1]}) menor que su ovr (${d.ovr})`);
    if (!Array.isArray(d.retireRange) || d.retireRange.length !== 2 || d.retireRange[0] > d.retireRange[1]) E(`${w}: retireRange debe ser [min,max]`);
    else if (d.retireRange[0] <= d.age) W(`${w}: puede retirarse de inmediato (retireRange[0]=${d.retireRange[0]} <= age=${d.age})`);
    if (!d.nat) W(`${w}: sin nat (se mostrará sin bandera)`); else if (!FLAGS.has(d.nat)) W(`${w}: nat "${d.nat}" no tiene bandera en FLAG_SVG (se mostrará un hueco vacío)`);
    (d.targetTeams || []).forEach(x => { if (!teamIds.has(x)) E(`${w}: targetTeams apunta a un equipo inexistente "${x}"`); });
  }
  (D.surpriseTeams || []).forEach(x => { if (!teamIds.has(x)) E(`surpriseTeams: equipo inexistente "${x}"`); });
  (D.baseChampions || []).forEach(c => { if (c.aiKey && !names.has(c.aiKey)) W(`baseChampions ${c.name}: aiKey "${c.aiKey}" no es un piloto de esta temporada`); });
  const grid = (D.teams || []).length * seats;
  if ((D.reservePool || []).length < grid) W(`cantera chica: ${(D.reservePool || []).length} pilotos libres para una parrilla de ${grid}. En partidas largas los equipos se quedarán sin reemplazo`);
  if (!(D.latePool || []).length) W('latePool vacío: no hay refuerzo tardío');
  if (D.f1FieldSize && D.f1FieldSize !== grid) W(`f1FieldSize (${D.f1FieldSize}) distinto de equipos x asientos (${grid})`);
  console.log(`\n${f}  —  ${(D.teams || []).length} equipos, ${grid} autos, ${(D.reservePool || []).length}+${(D.latePool || []).length} en cantera, ${D.ladder ? D.ladder.length : 0} categorías previas`);
  errs.forEach(m => console.log('  ✖ ' + m)); warns.forEach(m => console.log('  ⚠ ' + m));
  if (!errs.length) console.log(warns.length ? '  ✔ sin errores (revisá los avisos)' : '  ✔ todo en orden');
  totalErr += errs.length;
}
process.exit(totalErr ? 1 : 0);

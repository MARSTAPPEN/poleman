// Prueba del paso 3: renombres reales (modo 'real' desde 2010) y aleatorios (modo 'random' desde 2026).
const fs=require('fs'), path=require('path');
const {JSDOM, ResourceLoader, VirtualConsole} = require('jsdom');
const ROOT=path.resolve(__dirname,'..'), TMP=path.join(ROOT,'.tmp-changes-test.html'), FIX=path.join(__dirname,'fixtures','season-2010.js');
// --- fixture 2010 (parrilla de 2026 con renombres reales por era) ---
global.window=global; require('../data/season-2026.js');
const D=JSON.parse(JSON.stringify(SEASON_DATA[2026])); D.year=2010;
const E={alpine:[[2010,'Renault','#FFF500'],[2011,'Lotus','#FFB800'],[2016,'Renault','#FFF500'],[2021,'Alpine','#0090FF']],
  racingbulls:[[2010,'Toro Rosso','#1E3A8A'],[2020,'AlphaTauri','#2B4562'],[2024,'Racing Bulls','#6692FF']],
  sauber:[[2010,'Sauber','#52E252'],[2019,'Alfa Romeo','#9B0000'],[2026,'Audi','#E3000F']]};
D.teams.forEach(t=>{ if(E[t.id]) t.eras=E[t.id].map(([from,name,color])=>({from,name,color,logo:null})); else t.eras=t.eras.map(e=>({...e,from:2010})); });
fs.mkdirSync(path.dirname(FIX),{recursive:true});
fs.writeFileSync(FIX,'window.SEASON_DATA=window.SEASON_DATA||{};\nSEASON_DATA[2010]='+JSON.stringify(D)+';\n');
fs.writeFileSync(TMP, fs.readFileSync(path.join(ROOT,'carrera.html'),'utf8').replace('<script src="data/season-2026.js"></script>','<script src="data/season-2026.js"></script><script src="file://'+FIX+'"></script>'));
class FileOnly extends ResourceLoader { fetch(u,o){ return u.startsWith('file:')?super.fetch(u,o):Promise.resolve(Buffer.from('')); } }
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; } }
const CODE=(season,mode)=>`(function(){
  selectSeason(${season}); S.teamChangeMode='${mode}';
  const o={at2026:null,badIconic:0,nTeams:0,bad:[],steps:0,hist:null,seasons:0,splitStints:0,badStint:0,dupNames:0,emptyNames:0,idsChanged:0,headlines:0,realBadName:0};
  const ids0=F1_TEAMS.map(t=>t.id).join();
  selectCountry(COUNTRIES[0][1]); S.surname='Test'; confirmIdentity();
  let g=0;
  while(!S.retired && S.pending && g++<400){
    const p=S.pending; let k;
    if(p.type==='teamOffer'||p.type==='f1Offer') k=Math.floor(Math.random()*p.options.length);
    else if(p.type==='transfer'||p.type==='renewalOffer') k=Math.random()<0.5?'accept':'reject';
    else if(p.type==='event') k=Math.random()<0.5?'a':'b'; else k='ok';
    applyEventChoice(p,k,null); o.steps++;
    const y=currentYear();
    if(!o.at2026 && y>=2026) o.at2026={n:F1_TEAMS.length,cad:F1_TEAMS.some(t=>t.id==='cadillac'),cadN:getTeamAIDrivers('cadillac').length};
    const nm=F1_TEAMS.map(t=>t.name); if(new Set(nm).size!==nm.length) o.dupNames++; if(nm.some(n=>!n)) o.emptyNames++;
    if(!ids0.split(',').every(i=>F1_TEAMS.some(t=>t.id===i))) o.idsChanged++;
    if('${mode}'==='real' && y<=2026) F1_TEAMS.forEach(t=>{ if(t.name!==teamIdentityAt(t.id,y).name) o.realBadName++; });
    if(S.lastConstructorNews) o.headlines=Math.max(o.headlines,S.lastConstructorNews.headlines.length);
  }
  S.stints.forEach((s,i)=>{ const n=S.stints[i+1]; if(n && s.teamId && s.teamId===n.teamId){ o.splitStints++; if(n.tenureStart==null || n.tenureStart>n.ageStart || s.ageEnd!==n.ageStart) o.badStint++; } });
  o.seasons=S.seasonNum; o.hist=S.teamChangeHistory; o.year=currentYear(); o.nTeams=F1_TEAMS.length;
  const ic=new Set(F1_TEAMS.filter(t=>t.iconic).map(t=>t.id)); o.badIconic=S.teamChangeHistory.filter(h=>['rebrand','maker','sale'].includes(h.kind)&&ic.has(h.id)).length;
  return JSON.stringify(o);
})()`;
async function runMany(label,season,mode,n){
  const rs=[];
  for(let seed=1; seed<=n; seed++){ const rng=mulberry32(seed*6007);
    const dom=await JSDOM.fromFile(TMP,{runScripts:'dangerously',resources:new FileOnly(),pretendToBeVisual:true,virtualConsole:new VirtualConsole(),
      beforeParse(w){ w.Math.random=rng; w.setTimeout=(f)=>{try{f()}catch(e){}return 0}; w.confirm=()=>true; w.scrollTo=()=>{}; }});
    await new Promise(r=>dom.window.addEventListener('load',r));
    try{ rs.push(JSON.parse(dom.window.eval(CODE(season,mode)))); }catch(e){ rs.push({fatal:e.stack.split('\n').slice(0,3).join(' | ')}); } dom.window.close(); }
  const f=rs.filter(r=>r.fatal), ok=rs.filter(r=>!r.fatal), sum=k=>ok.reduce((a,r)=>a+(r[k]||0),0);
  const hist=ok.flatMap(r=>r.hist), kinds={}; hist.forEach(h=>kinds[h.kind]=(kinds[h.kind]||0)+1);
  // cooldown: dos cambios del mismo equipo en la misma carrera separados >= 4 años (solo aleatorios)
  let cdBad=0; ok.forEach(r=>{ const last={}; r.hist.filter(h=>h.kind!=='real').forEach(h=>{ if(last[h.id]!=null && h.year-last[h.id]<4) cdBad++; last[h.id]=h.year; }); });
  console.log(`\n[${label}] carreras: ${n} | errores fatales: ${f.length} | pasos: ${sum('steps')} | temporadas jugadas: ${sum('seasons')}`);
  console.log(`  cambios: ${hist.length} (${JSON.stringify(kinds)}) → ${(hist.filter(h=>h.kind!=='real').length/Math.max(1,sum('seasons'))).toFixed(3)} aleatorios/temporada`);
  console.log(`  nombres duplicados: ${sum('dupNames')} | nombres vacíos: ${sum('emptyNames')} | ids originales perdidos: ${sum('idsChanged')} | cooldown violado: ${cdBad}`);
  console.log(`  tramos del jugador partidos por renombre: ${sum('splitStints')} (inválidos: ${sum('badStint')}) | nombre real incorrecto: ${sum('realBadName')}`);
  const r26=ok.filter(r=>r.at2026); console.log(`  al llegar a 2026: ${r26.length} carreras | con 11 equipos: ${r26.filter(r=>r.at2026.n===11).length} | con Cadillac: ${r26.filter(r=>r.at2026.cad).length} | Cadillac con 2 pilotos: ${r26.filter(r=>r.at2026.cadN===2).length}`);
  console.log(`  equipos al final (min/prom/max): ${Math.min(...ok.map(r=>r.nTeams))}/${(ok.reduce((a,r)=>a+r.nTeams,0)/ok.length).toFixed(1)}/${Math.max(...ok.map(r=>r.nTeams))} | iconic renombrados al azar: ${sum('badIconic')}`);
  if(f.length) console.log('  FATAL ejemplo:',f[0].fatal);
  return ok;
}
(async()=>{
  const r20=await runMany('real desde 2020 (datos reales)',2020,'real',12);
  await runMany('SIN real desde 2020 (congelado + azar)',2020,'random',24);
  console.log('  ejemplos reales:',r20.flatMap(r=>r.hist).filter(h=>h.kind==='real').slice(0,8).map(h=>`${h.year}: ${h.from}→${h.to}`).join(' | '));
  const a=await runMany('real desde 2010',2010,'real',10);
  const ex=a.flatMap(r=>r.hist).filter(h=>h.kind==='real').slice(0,6).map(h=>`${h.year}: ${h.from}→${h.to}`); console.log('  ejemplos reales:',ex.join(' | '));
  const b=await runMany('aleatorio desde 2026',2026,'random',40);
  const ex2=b.flatMap(r=>r.hist).slice(0,6).map(h=>`${h.year} ${h.kind}: ${h.from}→${h.to}`); console.log('  ejemplos:',ex2.join(' | '));
  await runMany('real desde 2026 (cae en azar)',2026,'real',8);
  fs.unlinkSync(TMP);
})();

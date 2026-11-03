// Pruebas del paso 5: línea de tiempo real (2010 y 2000), categorías por época, bajas de equipos y jugador en un equipo que desaparece.
const path=require('path'); const {JSDOM, ResourceLoader, VirtualConsole} = require('jsdom');
const FILE=path.resolve(__dirname,'..','carrera.html');
class FileOnly extends ResourceLoader { fetch(u,o){ return u.startsWith('file:')?super.fetch(u,o):Promise.resolve(Buffer.from('')); } }
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; } }
async function page(seed){ const rng=mulberry32(seed*7001);
  const dom=await JSDOM.fromFile(FILE,{runScripts:'dangerously',resources:new FileOnly(),pretendToBeVisual:true,virtualConsole:new VirtualConsole(),
    beforeParse(w){ w.Math.random=rng; w.setTimeout=(f)=>{try{f()}catch(e){}return 0}; w.confirm=()=>true; w.scrollTo=()=>{}; }});
  await new Promise(r=>dom.window.addEventListener('load',r)); return dom; }
const TIMELINE=y=>`(function(){ selectSeason(${y}); S.teamChangeMode='real'; S.lastConstructorNews={headlines:[]}; const o=[]; let prev='';
  const snap=(yr)=>{ const s=F1_TEAMS.length+'|'+F1_FIELD_SIZE+'|'+LADDER.map(c=>c.name).join(' / '); if(s!==prev){ o.push(yr+': '+F1_TEAMS.length+' equipos ('+F1_FIELD_SIZE+' autos) | '+LADDER.map(c=>CATEGORY_SHORT[c.id]).join('>')+' | '+LADDER.map(c=>c.name).join(' > ')); prev=s; } };
  snap(${y}); for(let yr=${y}+1; yr<=2027; yr++){ S.seasonNum=yr-S.season; processTeamChanges(); snap(yr); }
  return JSON.stringify({o, names:F1_TEAMS.map(t=>t.name).join(', '), hist:S.teamChangeHistory.length}); })()`;
const CAREER=(y,mode,fold)=>`(function(){ selectSeason(${y}); S.teamChangeMode='${mode}';
  const o={steps:0,dup:0,over:0,err:null,folded:0,foldEv:null,seasons:0,nTeams:0,ladderEnd:'',trophy:''};
  selectCountry(COUNTRIES[0][1]); S.surname='T'; confirmIdentity(); let g=0, did=false;
  while(!S.retired && S.pending && g++<400){
    const p=S.pending; let k;
    if(p.type==='teamOffer'||p.type==='f1Offer') k=Math.floor(Math.random()*p.options.length);
    else if(p.type==='transfer'||p.type==='renewalOffer') k=Math.random()<0.5?'accept':'reject';
    else if(p.type==='event') k=Math.random()<0.5?'a':'b'; else k='ok';
    if(${fold} && !did && S.ladderIdx>=LADDER.length && currentTeamId()){ did=true; o.folded=1; o.foldTeam=currentTeamName(); removeF1Team(currentTeamId(), currentYear()); }
    applyEventChoice(p,k,null); o.steps++;
    if(o.folded===1 && S.pending && o.foldEv===null && (S.pending.foldedTeam||S.pending.isDemotion)) o.foldEv=S.pending.foldedTeam?'f1Offer(foldedTeam)':'demotion';
    F1_TEAMS.forEach(t=>{ if(getTeamAIDrivers(t.id).length>f1SeatCapacity(t.id)) o.over++; });
    const nm=Object.values(S.aiDrivers).filter(d=>d.team).map(d=>d.name); if(new Set(nm).size!==nm.length) o.dup++;
  }
  o.seasons=S.seasonNum; o.nTeams=F1_TEAMS.length; o.ladderEnd=LADDER.map(c=>c.name).join(' > '); o.trophy=TROPHY_META.f2.label; o.stuck=(!!S._teamFolded);
  return JSON.stringify(o); })()`;
(async()=>{
  for(const y of [1990,2010,2000]){ const dom=await page(1); const r=JSON.parse(dom.window.eval(TIMELINE(y))); console.log(`\n=== Línea de tiempo REAL desde ${y} (cambios de parrilla y categorías) ===`); r.o.forEach(x=>console.log('  '+x)); console.log('  equipos en 2027:',r.names); dom.window.close(); }
  for(const [label,y,mode,fold,n] of [['carreras real 2010',2010,'real',0,12],['carreras real 2000',2000,'real',0,12],['carreras congeladas 2010 (sin real)',2010,'random',0,12],['carreras con equipo del jugador DESAPARECIENDO (2010)',2010,'real',1,20],['ídem (2000)',2000,'real',1,20]]){
    const rs=[]; for(let s=1;s<=n;s++){ const dom=await page(s); try{ rs.push(JSON.parse(dom.window.eval(CAREER(y,mode,fold)))); }catch(e){ rs.push({err:e.stack.split('\n').slice(0,3).join(' | ')}); } dom.window.close(); }
    const ok=rs.filter(r=>!r.err), sum=k=>ok.reduce((a,r)=>a+(r[k]||0),0);
    console.log(`\n[${label}] carreras: ${n} | errores fatales: ${rs.length-ok.length} | pasos: ${sum('steps')} | equipos de más: ${sum('over')} | pilotos duplicados: ${sum('dup')}`);
    if(fold){ const f=ok.filter(r=>r.folded); const ev={}; f.forEach(r=>ev[r.foldEv]=(ev[r.foldEv]||0)+1); console.log(`  jugadores en F1 cuyo equipo desapareció: ${f.length} | evento resultante: ${JSON.stringify(ev)} | quedaron sin resolver: ${ok.filter(r=>r.stuck).length}`); }
    else console.log(`  categorías al final: ${ok[0].ladderEnd} | copa f2: ${ok[0].trophy} | equipos al final (prom.): ${(ok.reduce((a,r)=>a+r.nTeams,0)/ok.length).toFixed(1)}`);
    const e=rs.find(r=>r.err); if(e) console.log('  ERROR:',e.err);
  }
})();

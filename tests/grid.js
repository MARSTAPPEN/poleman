const path=require('path');
const fs=require('fs');
const ROOT=path.resolve(__dirname,'..'), TMP=path.join(ROOT,'.tmp-grid-test.html');
require('./make-fixture.js');
fs.writeFileSync(TMP, fs.readFileSync(path.join(ROOT,'carrera.html'),'utf8').replace('<script src="data/season-2026.js"></script>','<script src="data/season-2026.js"></script><script src="file://'+path.join(__dirname,'fixtures','season-2031.js')+'"></script>'));
const {JSDOM, ResourceLoader, VirtualConsole} = require('jsdom');
class FileOnly extends ResourceLoader { fetch(u,o){ return u.startsWith('file:')?super.fetch(u,o):Promise.resolve(Buffer.from('')); } }
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; } }
const CODE=`(function(){
  selectSeason(2031);
  const out={cfg:{teams:F1_TEAMS.length,seats:SEATS_PER_TEAM,field:F1_FIELD_SIZE,races:F1_RACES,year0:currentYear()}, viol:0, short:0, steps:0, f1Steps:0, dup:0, lastYear:0, err:null};
  selectCountry(COUNTRIES[0][1]); S.surname='Test'; confirmIdentity();
  let g=0;
  while(!S.retired && S.pending && g++<400){
    const p=S.pending; let k;
    if(p.type==='teamOffer'||p.type==='f1Offer') k=Math.floor(Math.random()*p.options.length);
    else if(p.type==='transfer'||p.type==='renewalOffer') k=Math.random()<0.5?'accept':'reject';
    else if(p.type==='event') k=Math.random()<0.5?'a':'b'; else k='ok';
    applyEventChoice(p,k,null); out.steps++;
    if(S.ladderIdx>=LADDER.length) out.f1Steps++;
    F1_TEAMS.forEach(t=>{ const n=getTeamAIDrivers(t.id).length, cap=f1SeatCapacity(t.id); if(n>cap) out.viol++; if(n<cap) out.short++; });
    const names=Object.values(S.aiDrivers).filter(d=>d.team).map(d=>d.name); if(new Set(names).size!==names.length) out.dup++;
    out.lastYear=currentYear();
  }
  out.ageEnd=S.age; out.nF1teams=new Set(S.stints.filter(s=>s.teamId).map(s=>s.teamId)).size;
  out.era35=teamIdentityAt('aston',2034).name+' -> '+teamIdentityAt('aston',2035).name;
  return JSON.stringify(out);
})()`;
(async()=>{ const rs=[];
 for(let seed=1; seed<=12; seed++){ const rng=mulberry32(seed*104729);
  const dom=await JSDOM.fromFile(TMP,{runScripts:'dangerously',resources:new FileOnly(),pretendToBeVisual:true,virtualConsole:new VirtualConsole(),
   beforeParse(w){ w.Math.random=rng; w.setTimeout=(f)=>{try{f()}catch(e){}return 0}; w.confirm=()=>true; w.scrollTo=()=>{}; }});
  await new Promise(r=>dom.window.addEventListener('load',r));
  try{ rs.push(JSON.parse(dom.window.eval(CODE))); }catch(e){ rs.push({err:e.stack.split('\n').slice(0,3).join(' | ')}); } dom.window.close(); }
 fs.unlinkSync(TMP);
 console.log(JSON.stringify(rs[0].cfg), rs[0].era35);
 console.log('carreras:',rs.length,'| con error:',rs.filter(r=>r.err).length,'| pasos totales:',rs.reduce((n,r)=>n+(r.steps||0),0),'| pasos en F1:',rs.reduce((n,r)=>n+(r.f1Steps||0),0));
 console.log('equipos con MÁS pilotos que su cupo:',rs.reduce((n,r)=>n+(r.viol||0),0),'| pilotos duplicados:',rs.reduce((n,r)=>n+(r.dup||0),0),'| equipos con cupo sin cubrir (cantera agotada):',rs.reduce((n,r)=>n+(r.short||0),0));
 console.log('año calendario final por carrera:',rs.map(r=>r.lastYear).join(','));
 const e=rs.find(r=>r.err); if(e) console.log('ERROR ejemplo:',e.err);
})();

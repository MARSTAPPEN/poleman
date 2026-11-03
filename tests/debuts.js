// Prueba de debuts reales: ¿aparecen los pilotos reales en su año y no aparecen los ficticios hasta 2027?
const path=require('path'); const {JSDOM, ResourceLoader, VirtualConsole} = require('jsdom');
const FILE=path.resolve(__dirname,'..','carrera.html');
class FileOnly extends ResourceLoader { fetch(u,o){ return u.startsWith('file:')?super.fetch(u,o):Promise.resolve(Buffer.from('')); } }
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; } }
const KEY=['L. Hamilton','S. Vettel','M. Verstappen','C. Leclerc','Lando Norris','F. Alonso','N. Rosberg','Sergio Pérez','S. Pérez','Carlos Sainz','K. Räikkönen','A. Prost','A. Senna','N. Mansell','M. Schumacher','M. Häkkinen','D. Hill','J. Villeneuve','J. Alesi','D. Coulthard'];
const CODE=(y,mode)=>`(function(){ selectSeason(${y}); S.teamChangeMode='${mode}';
  const o={byYear:{},shortBy:{},fict:{},short:0,dup:0,steps:0,debutHeads:0,firstFict:null};
  const FICT=new Set(F1_LATE_GAME_POOL.map(s=>s.name)); const KEY=${JSON.stringify(KEY)};
  selectCountry(COUNTRIES[0][1]); S.surname='T'; confirmIdentity(); let g=0, lastY=-1;
  while(!S.retired && S.pending && g++<400){
    const p=S.pending; let k;
    if(p.type==='teamOffer'||p.type==='f1Offer') k=Math.floor(Math.random()*p.options.length);
    else if(p.type==='transfer'||p.type==='renewalOffer') k=Math.random()<0.5?'accept':'reject';
    else if(p.type==='event') k=Math.random()<0.5?'a':'b'; else k='ok';
    applyEventChoice(p,k,null); o.steps++;
    const yr=currentYear();
    const fa=Object.values(S.aiDrivers).filter(d=>FICT.has(d.name)).length; if(fa&&o.firstFict===null) o.firstFict=yr;
    if(S.lastConstructorNews) o.debutHeads+=S.lastConstructorNews.headlines.filter(h=>h.indexOf('Debuta')>=0).length;
    F1_TEAMS.forEach(t=>{ if(getTeamAIDrivers(t.id).length<f1SeatCapacity(t.id)){ o.short++; o.shortBy[yr]=(o.shortBy[yr]||0)+1; } });
    const names=Object.values(S.aiDrivers).filter(d=>d.team).map(d=>d.name); if(new Set(names).size!==names.length) o.dup++;
    if(yr!==lastY){ lastY=yr; const row={}; KEY.forEach(n=>{ const d=S.aiDrivers[n]; if(d) row[n]=d.retired?'ret':(d.team?F1_TEAMS.find(t=>t.id===d.team).name+'/'+d.ovr:'libre/'+d.ovr); }); o.byYear[yr]=row; }
  }
  return JSON.stringify(o); })()`;
async function run(y,mode,n){ const rs=[];
  for(let seed=1;seed<=n;seed++){ const rng=mulberry32(seed*9973);
    const dom=await JSDOM.fromFile(FILE,{runScripts:'dangerously',resources:new FileOnly(),pretendToBeVisual:true,virtualConsole:new VirtualConsole(),beforeParse(w){ w.Math.random=rng; w.setTimeout=(f)=>{try{f()}catch(e){}return 0}; w.confirm=()=>true; w.scrollTo=()=>{}; }});
    await new Promise(r=>dom.window.addEventListener('load',r));
    try{ rs.push(JSON.parse(dom.window.eval(CODE(y,mode)))); }catch(e){ rs.push({err:e.stack.split('\n').slice(0,3).join(' | ')}); } dom.window.close(); }
  return rs; }
(async()=>{
  for(const [y,mode,n] of [[1990,'real',14],[2000,'real',10],[2010,'real',10],[2020,'real',8],[1990,'random',6]]){
    const rs=await run(y,mode,n), ok=rs.filter(r=>!r.err), sum=k=>ok.reduce((a,r)=>a+(r[k]||0),0);
    console.log(`\n=== Desde ${y} (${mode}) — ${n} carreras | errores: ${rs.length-ok.length} | pasos: ${sum('steps')} | duplicados: ${sum('dup')} | asientos sin cubrir (equipo-paso): ${sum('short')} | titulares "Debuta": ${sum('debutHeads')}`);
    const fy=ok.map(r=>r.firstFict).filter(x=>x!=null); console.log(`  1ª aparición de un piloto FICTICIO: ${fy.length?('año '+Math.min(...fy)+' a '+Math.max(...fy)+' ('+fy.length+' de '+ok.length+' carreras)'):'ninguna'}`);
    const want=y===1990?[1992,1995,1998,2001]:y===2000?[2007,2013,2016,2019]:y===2010?[2013,2016,2019]:[2023,2025];
    const sb={}; ok.forEach(r=>Object.entries(r.shortBy||{}).forEach(([yy,c])=>sb[yy]=(sb[yy]||0)+c)); const pre=Object.entries(sb).filter(([yy])=>+yy<=2026).reduce((a,[,c])=>a+c,0); console.log('  asientos sin cubrir hasta 2026:',pre,'| después:',Object.entries(sb).filter(([yy])=>+yy>2026).reduce((a,[,c])=>a+c,0));
    want.forEach(yr=>{ const cnt={}; ok.forEach(r=>{ const row=r.byYear[yr]; if(!row) return; Object.entries(row).forEach(([n,v])=>{ if(v==='ret'||v.startsWith('libre')) return; (cnt[n]=cnt[n]||{}); const tm=v.split('/')[0]; cnt[n][tm]=(cnt[n][tm]||0)+1; }); });
      const have=ok.filter(r=>r.byYear[yr]).length; console.log(`  ${yr} (${have} carreras llegaron): `+Object.entries(cnt).map(([n,t])=>n+' → '+Object.entries(t).sort((a,b)=>b[1]-a[1]).map(([k,c])=>k+' x'+c).join(', ')).join(' | ')); });
    const e=rs.find(r=>r.err); if(e) console.log('  ERROR:',e.err);
  }
})();

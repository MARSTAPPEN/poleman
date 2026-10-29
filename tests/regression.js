// Arnés de regresión: corre N carreras completas con semilla fija sobre carrera.html y vuelca snapshots.
// Uso: node run.js <ruta/carrera.html> <salida.jsonl> [semillas=6] [dataScriptExtra]
const {JSDOM, ResourceLoader, VirtualConsole} = require('jsdom');
const fs = require('fs'), path = require('path');
const [,, file, out, nSeeds='6'] = process.argv;
class FileOnly extends ResourceLoader { fetch(url, o){ return url.startsWith('file:') ? super.fetch(url,o) : Promise.resolve(Buffer.from('')); } }
function mulberry32(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; } }
const DRIVER = `(function(){
  const snaps=[]; const r3=x=>Math.round(x*1000)/1000;
  const tn = k => k==null?null:((F1_TEAMS.find(t=>t.id===k)||F1_TEAMS.find(t=>t.name===k)||{name:k}).name);
  function snap(tag){
    const ai = Object.values(S.aiDrivers).map(d=>[d.name,tn(d.team),r3(d.ovr),d.age,d.retired?1:0,d.f1Titles||0]).sort((a,b)=>a[0]<b[0]?-1:1);
    const dyn = Object.keys(S.teamDynamics).map(k=>[tn(k),r3(S.teamDynamics[k].tier)]).sort((a,b)=>a[0]<b[0]?-1:1);
    snaps.push(JSON.stringify({tag,age:S.age,lad:S.ladderIdx,ovr:r3(S.ovr),rep:r3(S.reputacion),role:S.f1Role,ret:S.retired,sn:S.seasonNum,
      stints:S.stints.map(s=>[s.teamName,s.category,s.ageStart,s.races,s.wins,s.titles]),titles:S.titles,
      pend:S.pending&&S.pending.type, podium:S.lastConstructorNews&&S.lastConstructorNews.podium.map(p=>p.name),
      top3:S.lastDriverNews&&S.lastDriverNews.top3.map(p=>[p.name,p.team]), dyn, ai}));
  }
  if('teamChangeMode' in S) S.teamChangeMode='off'; // la línea base se grabó sin cambios de escudería
  selectCountry(COUNTRIES[0][1]); S.surname='Test'; confirmIdentity(); snap('start');
  let guard=0;
  while(!S.retired && S.pending && guard++<400){
    const p=S.pending; let key;
    if(p.type==='teamOffer'||p.type==='f1Offer') key=Math.floor(Math.random()*p.options.length);
    else if(p.type==='transfer'||p.type==='renewalOffer') key=Math.random()<0.5?'accept':'reject';
    else if(p.type==='event') key=Math.random()<0.5?'a':'b';
    else key='ok';
    applyEventChoice(p,key,null); snap(p.type+':'+key);
  }
  snap('end'); return snaps.join('\\n');
})()`;
(async()=>{
  const lines=[];
  for(let seed=1; seed<=+nSeeds; seed++){
    const vc=new VirtualConsole(); // se ignora el ruido de jsdom (scrollTo, etc.)
    const rng=mulberry32(seed*7919);
    const dom=await JSDOM.fromFile(path.resolve(file),{runScripts:'dangerously',resources:new FileOnly(),pretendToBeVisual:true,virtualConsole:vc,
      beforeParse(w){ w.Math.random=rng; w.setTimeout=(f)=>{try{f()}catch(e){}return 0}; w.confirm=()=>true; w.scrollTo=()=>{}; }});
    await new Promise(r=>dom.window.addEventListener('load',r));
    let res; try{ res=dom.window.eval(DRIVER);}catch(e){ res='ERROR '+e.stack; }
    lines.push('### seed '+seed+'\n'+res); dom.window.close();
  }
  fs.writeFileSync(out, lines.join('\n')+'\n'); console.log('ok', out, fs.statSync(out).size,'bytes');
})();

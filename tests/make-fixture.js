global.window=global; require('../data/season-2026.js');
const D=JSON.parse(JSON.stringify(SEASON_DATA[2026])); const fs=require('fs');
const drop=['cadillac','racingbulls']; const displaced=[]; 
D.teams=D.teams.filter(t=>{ if(drop.includes(t.id)){ displaced.push(...t.drivers); return false;} return true; });
const extra=[...displaced, ...D.reservePool.splice(0,5)].map(d=>{const c={...d}; delete c.targetTeams; delete c.exPiloto; return c;});
D.teams.forEach(t=>{ t.drivers.push(extra.shift()); });           // 3er asiento
D.reservePool.forEach(d=>{ if(d.targetTeams) d.targetTeams=d.targetTeams.filter(x=>D.teams.some(t=>t.id===x)); });
D.latePool.forEach(d=>{ if(d.targetTeams) d.targetTeams=d.targetTeams.filter(x=>D.teams.some(t=>t.id===x)); });
D.surpriseTeams=D.surpriseTeams.filter(x=>D.teams.some(t=>t.id===x));
D.year=2031; D.seatsPerTeam=3; D.f1Races=15; delete D.f1FieldSize;
D.teams.find(t=>t.id==='aston').eras.push({from:2035,name:'Aston Renombrado',color:'#123456',logo:'f1/astonmartin.svg.svg'});
fs.writeFileSync(__dirname+'/fixtures/season-2031.js','window.SEASON_DATA=window.SEASON_DATA||{};\nSEASON_DATA[2031]='+JSON.stringify(D)+';\n');
console.log('equipos',D.teams.length,'autos',D.teams.reduce((n,t)=>n+t.drivers.length,0),'cantera',D.reservePool.length);

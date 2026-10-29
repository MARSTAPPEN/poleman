window.SEASON_DATA = window.SEASON_DATA || {};
/* =====================================================================================
   TEMPORADA 2026 — base de datos. Para agregar otra temporada: copiar data/season-template.js,
   renombrar a season-AAAA.js, completar y sumar un <script> en carrera.html. Validar con:
       node tools/validate-season.js
   -----------------------------------------------------------------------------------------
   · teams[].id      identidad ESTABLE del equipo (linaje). No cambia aunque cambie el nombre.
   · teams[].eras    nombre/color/logo según el año calendario (from = primer año en que rige).
   · teams[].iconic  (opcional) true = equipo emblemático: NUNCA se renombra al azar en el modo aleatorio.
   · entries[]       (opcional) altas reales de equipos {year, team:{id,tier,eras}} que entran en ese año (modo real).
   · teams[].tier    nivel base del auto (0-100). Es el ancla hacia la que tira la evolución.
   · drivers[]       pilotos titulares de arranque (age/ovr = nivel al inicio de esa temporada;
                     potRange/retireRange = [min,max] que se sortea por piloto; nat = código ISO).
   · reservePool     cantera libre. targetTeams usa IDs de equipo (preferencia blanda).
   · logos           rutas relativas a assets/logos/
   ===================================================================================== */
SEASON_DATA[2026] = {
  year: 2026,
  seatsPerTeam: 2,          // asientos de carrera por equipo (la parrilla = equipos x asientos)
  f1Races: 22,              // carreras que cuenta una temporada de F1 en el simulador
  f1FieldSize: 20,          // tamaño de parrilla usado para estimar la posición final (ver nota en README)
  topTeamTier: 85,         // desde este tier un equipo pide "nivel de titular" antes de subirte al auto
  gridRefTier: 74,         // nivel de referencia de la parrilla (margen de mejora/caída de cada equipo)
  latePoolFromSeason: 10,   // temporada de la partida desde la que entra latePool
  surpriseTeams: ["williams", "sauber", "aston", "alpine"],   // perseguidores con chance de "proyecto sorpresa"
  ladder: [   // escalera de categorías previas a F1 (en orden)
    {id:"f4", name:"Fórmula 4", short:"F4", races:9, tierBase:38, fieldSize:30},
    {id:"fr", name:"Formula Regional", short:"FR", races:11, tierBase:48, fieldSize:30},
    {id:"f3", name:"FIA Fórmula 3", short:"F3", races:13, tierBase:58, fieldSize:30},
    {id:"f2", name:"FIA Fórmula 2", short:"F2", races:14, tierBase:66, fieldSize:22},
  ],
  baseChampions: [   // palmarés real al arrancar esta temporada (aiKey = nombre exacto del piloto IA)
    {name:"M. Schumacher", nat:"de", titles:7, aiKey:null},
    {name:"L. Hamilton", nat:"gb", titles:7, aiKey:"L. Hamilton"},
    {name:"J.M. Fangio", nat:"ar", titles:5, aiKey:null},
    {name:"M. Verstappen", nat:"nl", titles:4, aiKey:"M. Verstappen"},
    {name:"A. Prost", nat:"fr", titles:4, aiKey:null},
  ],
  teams: [
    { id:"cadillac", tier:50, iconic:true,
      eras:[ {from:2026, name:"Cadillac", color:"#C9A227", logo:"f1/cadillac.svg.svg"} ],
      drivers:[
        {name:"Sergio Pérez", age:36, ovr:81, potRange:[82, 85], retireRange:[37, 43], nat:"mx", rep:62},
        {name:"V. Bottas", age:36, ovr:75, potRange:[76, 85], retireRange:[38, 44], nat:"fi", rep:60},
      ] },
    { id:"williams", tier:53, iconic:true,
      eras:[ {from:2026, name:"Williams", color:"#00A0DE", logo:"f1/williams.svg.svg"} ],
      drivers:[
        {name:"Carlos Sainz", age:31, ovr:80, potRange:[83, 85], retireRange:[39, 44], nat:"es", rep:70},
        {name:"Alex Albon", age:30, ovr:79, potRange:[84, 87], retireRange:[36, 39], nat:"th", rep:60},
      ] },
    { id:"aston", tier:56, iconic:true,
      eras:[ {from:2026, name:"Aston Martin", color:"#00665E", logo:"f1/astonmartin.svg.svg"} ],
      drivers:[
        {name:"F. Alonso", age:44, ovr:87, potRange:[88, 89], retireRange:[48, 52], nat:"es", rep:88},
        {name:"Lance Stroll", age:27, ovr:70, potRange:[71, 72], retireRange:[30, 49], nat:"ca", rep:30},
      ] },
    { id:"haas", tier:62,
      eras:[ {from:2026, name:"Haas", color:"#B6BABD", logo:"f1/haas.svg.svg"} ],
      drivers:[
        {name:"E. Ocon", age:29, ovr:78, potRange:[80, 84], retireRange:[36, 39], nat:"fr", rep:52},
        {name:"O. Bearman", age:21, ovr:75, potRange:[87, 91], retireRange:[36, 43], nat:"gb", rep:50},
      ] },
    { id:"sauber", tier:64, iconic:true,
      eras:[ {from:2026, name:"Audi", color:"#BB0A30", logo:"f1/audi.svg.svg"} ],
      drivers:[
        {name:"N. Hülkenberg", age:38, ovr:80, potRange:[81, 82], retireRange:[40, 46], nat:"de", rep:58},
        {name:"G. Bortoleto", age:21, ovr:76, potRange:[87, 89], retireRange:[36, 45], nat:"br", rep:48},
      ] },
    { id:"alpine", tier:66,
      eras:[ {from:2026, name:"Alpine", color:"#0090FF", logo:"f1/alpine.svg.svg"} ],
      drivers:[
        {name:"Pierre Gasly", age:30, ovr:79, potRange:[81, 85], retireRange:[36, 39], nat:"fr", rep:55},
        {name:"F. Colapinto", age:23, ovr:78, potRange:[86, 94], retireRange:[39, 45], nat:"ar", rep:54},
      ] },
    { id:"racingbulls", tier:72,
      eras:[ {from:2026, name:"Racing Bulls", color:"#1660AD", logo:"f1/racingbulls.svg.svg"} ],
      drivers:[
        {name:"Liam Lawson", age:24, ovr:74, potRange:[83, 87], retireRange:[35, 39], nat:"nz", rep:42},
        {name:"A. Lindblad", age:18, ovr:68, potRange:[88, 92], retireRange:[36, 40], nat:"gb", rep:40},
      ] },
    { id:"mclaren", tier:90, iconic:true,
      eras:[ {from:2026, name:"McLaren", color:"#FF8000", logo:"f1/mclaren.svg.svg"} ],
      drivers:[
        {name:"Lando Norris", age:26, ovr:93, potRange:[94, 95], retireRange:[38, 45], nat:"gb", rep:82},
        {name:"Oscar Piastri", age:25, ovr:91, potRange:[94, 97], retireRange:[37, 45], nat:"au", rep:78},
      ] },
    { id:"ferrari", tier:91, iconic:true,
      eras:[ {from:2026, name:"Ferrari", color:"#DC0000", logo:"f1/ferrari.svg.svg"} ],
      drivers:[
        {name:"C. Leclerc", age:28, ovr:91, potRange:[92, 94], retireRange:[39, 45], nat:"mc", rep:75},
        {name:"L. Hamilton", age:41, ovr:90, potRange:[91, 92], retireRange:[46, 49], nat:"gb", rep:98},
      ] },
    { id:"mercedes", tier:92, iconic:true,
      eras:[ {from:2026, name:"Mercedes", color:"#00D2BE", logo:"f1/mercedes.svg.svg"} ],
      drivers:[
        {name:"G. Russell", age:28, ovr:89, potRange:[91, 94], retireRange:[39, 44], nat:"gb", rep:72},
        {name:"Kimi Antonelli", age:20, ovr:83, potRange:[92, 99], retireRange:[36, 47], nat:"it", rep:67},
      ] },
    { id:"redbull", tier:93, iconic:true,
      eras:[ {from:2026, name:"Red Bull", color:"#3671C6", logo:"f1/redbull.svg.svg"} ],
      drivers:[
        {name:"M. Verstappen", age:28, ovr:97, potRange:[97, 99], retireRange:[39, 45], nat:"nl", rep:98},
        {name:"Isack Hadjar", age:21, ovr:76, potRange:[85, 88], retireRange:[38, 39], nat:"fr", rep:48},
      ] },
  ],
  reservePool: [   // cantera libre desde el arranque
    {name:"R. Câmara", age:21, ovr:72, potRange:[85, 89], retireRange:[37, 45], rep:38, nat:"br", targetTeams:["ferrari", "haas"]},
    {name:"Nikola Tsolov", age:19, ovr:71, potRange:[83, 87], retireRange:[37, 45], rep:35, nat:"bg", targetTeams:["redbull", "racingbulls"]},
    {name:"Gabriele Minì", age:21, ovr:71, potRange:[82, 86], retireRange:[38, 43], rep:36, nat:"it", targetTeams:["alpine"]},
    {name:"Colton Herta", age:26, ovr:76, potRange:[81, 85], retireRange:[36, 42], rep:55, nat:"us", targetTeams:["cadillac"]},
    {name:"F. Slater", age:17, ovr:68, potRange:[90, 94], retireRange:[38, 45], rep:32, nat:"gb", targetTeams:["mercedes", "williams"]},
    {name:"T. Taponen", age:19, ovr:70, potRange:[85, 89], retireRange:[37, 41], rep:34, nat:"fi", targetTeams:["ferrari", "haas"]},
    {name:"U. Ugochukwu", age:19, ovr:69, potRange:[84, 88], retireRange:[38, 42], rep:33, nat:"us", targetTeams:["mclaren", "williams"]},
    {name:"Noel León", age:21, ovr:68, potRange:[78, 82], retireRange:[36, 40], rep:30, nat:"mx", targetTeams:["cadillac"]},
    {name:"Théophile Naël", age:19, ovr:66, potRange:[81, 85], retireRange:[39, 43], rep:28, nat:"fr", targetTeams:["alpine"]},
    {name:"Louis Sharp", age:19, ovr:67, potRange:[82, 86], retireRange:[37, 41], rep:29, nat:"gb", targetTeams:["racingbulls", "redbull"]},
    {name:"N. Varrone", age:25, ovr:73, potRange:[80, 88], retireRange:[40, 44], rep:42, nat:"ar", targetTeams:["cadillac"]},
    {name:"M. Colnaghi", age:18, ovr:67, potRange:[88, 93], retireRange:[37, 44], rep:27, nat:"it", targetTeams:["racingbulls", "alpine"]},
    {name:"Simón Bulbarella", age:17, ovr:62, potRange:[78, 83], retireRange:[39, 43], rep:22, nat:"ar", targetTeams:["williams"]},
    {name:"Fausto Arnaudo", age:16, ovr:61, potRange:[82, 86], retireRange:[38, 42], rep:20, nat:"ar", targetTeams:["racingbulls"]},
    {name:"S. Vettel", age:39, ovr:83, potRange:[83, 90], retireRange:[43, 47], rep:90, nat:"de", exPiloto:true, targetTeams:["sauber", "aston"]},
    {name:"D. Ricciardo", age:37, ovr:78, potRange:[78, 87], retireRange:[40, 45], rep:82, nat:"au", exPiloto:true, targetTeams:["cadillac", "haas"]},
    {name:"Alex Palou", age:29, ovr:82, potRange:[85, 88], retireRange:[41, 45], rep:75, nat:"es", exPiloto:true, targetTeams:["williams", "cadillac"]},
    {name:"Mick Schumacher", age:27, ovr:75, potRange:[79, 82], retireRange:[38, 41], rep:65, nat:"de", exPiloto:true, targetTeams:["sauber", "alpine"]},
    {name:"Nyck de Vries", age:31, ovr:74, potRange:[76, 78], retireRange:[38, 41], rep:52, nat:"nl", exPiloto:true, targetTeams:["haas"]},
    {name:"Jessica Hawkins", age:29, ovr:70, potRange:[76, 85], retireRange:[36, 40], rep:50, nat:"gb", targetTeams:["aston"]},
  ],
  latePool: [   // refuerzo tardío (ficticios)
    {name:"Mateo Leclerc", age:20, ovr:72, potRange:[81, 86], retireRange:[37, 39], rep:50, nat:"mc", targetTeams:["ferrari"]},
    {name:"L. Verstappen", age:19, ovr:70, potRange:[80, 85], retireRange:[35, 37], rep:50, nat:"nl", targetTeams:["redbull"]},
    {name:"James Hunt-Lauda", age:21, ovr:77, potRange:[83, 90], retireRange:[33, 35], rep:50, nat:"gb", targetTeams:[]},
    {name:"Schumacher-Stewart", age:23, ovr:69, potRange:[80, 84], retireRange:[36, 38], rep:50, nat:"de", targetTeams:[]},
    {name:"Zeta Zalazar", age:23, ovr:75, potRange:[80, 87], retireRange:[36, 38], rep:50, nat:"ar", targetTeams:["ferrari"]},
    {name:"B. Robledo", age:23, ovr:69, potRange:[80, 84], retireRange:[34, 38], rep:50, nat:"it", targetTeams:[]},
    {name:"Sonny Hayes", age:32, ovr:78, potRange:[80, 84], retireRange:[36, 39], rep:50, nat:"us", targetTeams:[]},
    {name:"Annes Notrya", age:22, ovr:85, potRange:[87, 93], retireRange:[36, 38], rep:50, nat:"br", targetTeams:[]},
    {name:"G. Mazzacane", age:22, ovr:79, potRange:[87, 93], retireRange:[36, 39], rep:50, nat:"ar", targetTeams:[]},
    {name:"Nalian Lotín", age:26, ovr:70, potRange:[82, 88], retireRange:[36, 40], rep:50, nat:"fr", targetTeams:[]},
    {name:"T. Inoue-Kobayashi", age:16, ovr:65, potRange:[75, 78], retireRange:[20, 23], rep:50, nat:"jp", targetTeams:[]},
    {name:"Alcides Fangio", age:30, ovr:82, potRange:[83, 85], retireRange:[38, 40], rep:50, nat:"ar", targetTeams:[]},
    {name:"N. Mazepin II", age:23, ovr:62, potRange:[70, 76], retireRange:[30, 32], rep:50, nat:"ru", targetTeams:[]},
    {name:"F. Briatore", age:24, ovr:79, potRange:[80, 86], retireRange:[35, 37], rep:50, nat:"it", targetTeams:[]},
    {name:"Mardenborough", age:21, ovr:74, potRange:[87, 91], retireRange:[37, 39], rep:50, nat:"gb", targetTeams:[]},
    {name:"Castolo", age:38, ovr:73, potRange:[89, 92], retireRange:[39, 45], rep:50, nat:"br", targetTeams:[]},
    {name:"Devon Butler", age:24, ovr:73, potRange:[79, 83], retireRange:[39, 45], rep:50, nat:"gb", targetTeams:[]},
    {name:"C. Akkerman", age:24, ovr:73, potRange:[81, 85], retireRange:[34, 36], rep:50, nat:"nl", targetTeams:[]},
    {name:"Callie Mayer", age:20, ovr:72, potRange:[87, 91], retireRange:[37, 39], rep:50, nat:"at", targetTeams:[]},
    {name:"M. Filippis II", age:20, ovr:73, potRange:[87, 91], retireRange:[37, 39], rep:50, nat:"it", targetTeams:[]},
    {name:"L. Lombardi", age:21, ovr:72, potRange:[85, 89], retireRange:[36, 38], rep:50, nat:"it", targetTeams:[]},
  ],
  juniorTeams: {
    f4: [
      {name:"VAR", color:"#d61f2c", logo:"f4/var.svg.svg"},
      {name:"Mücke", color:"#1c1c1c", logo:"f4/mucke.svg.svg"},
      {name:"US Racing", color:"#0057a8", logo:"f4/usracing.svg.svg"},
      {name:"R-ace GP", color:"#e2001a", logo:"f4/racegp.svg.svg"},
      {name:"Prema", color:"#c8102e", logo:"f4/perma.svg.svg"},
    ],
    fr: [
      {name:"Prema", color:"#c8102e", logo:"fr/perma.svg.svg"},
      {name:"MP", color:"#f5a300", logo:"fr/mpmotorsport.svg.svg"},
      {name:"VAR", color:"#d61f2c", logo:"fr/var.svg.svg"},
      {name:"R-ace GP", color:"#e2001a", logo:"fr/racegp.svg.svg"},
      {name:"Arden", color:"#00954c", logo:"fr/arden.svg.svg"},
      {name:"G4", color:"#1c1c1c", logo:"fr/g4racing.svg.svg"},
    ],
    f3: [
      {name:"Prema", color:"#c8102e", logo:"f3/perma.svg.svg"},
      {name:"Trident", color:"#00263a", logo:"f3/trident.svg.svg"},
      {name:"ART", color:"#e2001a", logo:"f3/art.svg.svg"},
      {name:"Campos", color:"#d0021b", logo:"f3/camposracing.svg.svg"},
      {name:"Hitech", color:"#0a0a0a", logo:"f3/hitech.svg.svg"},
      {name:"Rodin", color:"#0a3d62", logo:"f3/rodin.svg.svg"},
    ],
    f2: [
      {name:"Prema", color:"#c8102e", logo:"f2/prema.svg.svg"},
      {name:"ART", color:"#e2001a", logo:"f2/art.svg.svg"},
      {name:"Campos", color:"#d0021b", logo:"f2/camposracing.svg.svg"},
      {name:"DAMS", color:"#0033a0", logo:"f2/dams.svg.svg"},
      {name:"MP", color:"#f5a300", logo:"f2/mpmotorsport.svg.svg"},
      {name:"Virtuosi", color:"#f5a300", logo:"f2/virtuosi.svg.svg"},
      {name:"Rodin", color:"#0a3d62", logo:"f2/rodin.svg.svg"},
    ],
  }
};

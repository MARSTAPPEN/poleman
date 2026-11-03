/* =====================================================================================
   PLANTILLA DE TEMPORADA — copiá este archivo como data/season-AAAA.js y completalo.
   (Este archivo NO se carga en el juego ni lo valida el validador: es solo un molde.)

   PASOS
   1. Copiar a data/season-2020.js (el año en el nombre = el año de SEASON_DATA[...] = year).
   2. Completar los datos de abajo. Los logos van en assets/logos/ (o dejalos sin logo: se
      muestran las iniciales sobre el color del equipo).
   3. Agregar en carrera.html, junto al de 2026:   <script src="data/season-2020.js"></script>
   4. Correr:   node tools/validate-season.js 2020      y corregir lo que marque.
   5. El año se desbloquea solo en el selector del home (el roadmap está en SEASONS).

   REGLAS
   · El id de un equipo es su LINAJE y no cambia nunca (ej. "alpine" sirve para Benetton, Renault,
     Lotus y Alpine). Usá el MISMO id en todas las temporadas para que el equipo conserve identidad.
   · eras: lista ordenada por "from". Cada era = nombre/color/logo desde ese año calendario.
     Incluí TODOS los cambios reales del linaje hasta 2026: el modo "cambios reales" los aplica solo.
   · Pilotos reales: los que debutan DESPUÉS del año de arranque van en arrivals y sus cambios de equipo en moves. El archivo de 2000 es el más completo (ver docs/season-2000.md).
   · Logos: indicá la ruta donde irá el archivo (ej. "f1/renault.svg.svg") aunque todavía no exista: se muestran las iniciales hasta que lo agregues.
     `node tools/logos-checklist.js` genera docs/logos.md con todas las rutas esperadas y su estado.
   · Nombres de equipos juniors: cortos (VAR, Prema, ART, MP…) para que entren en la barra de trayectoria.
   · Cada equipo debe tener exactamente seatsPerTeam pilotos.
   · Nombres de pilotos únicos en toda la temporada (equipos + cantera). Usá el formato "A. Apellido".
   · ovr/tier/rep: escala 0-100, la misma que 2026 (un campeón dominante ~95-98, un titular
     promedio ~75-80, un equipo puntero tier ~90+, uno de fondo ~50).
   ===================================================================================== */
window.SEASON_DATA = window.SEASON_DATA || {};
SEASON_DATA[2020] = {
  year: 2020,
  seatsPerTeam: 2,          // asientos de carrera por equipo
  f1Races: 17,              // carreras de la temporada de F1
  // f1FieldSize: 20,       // opcional: si se omite = equipos x asientos
  topTeamTier: 85,          // desde este tier, un equipo exige "nivel de titular" antes de subirte al auto
  gridRefTier: 74,          // nivel de referencia de la parrilla (≈ promedio de tiers)
  latePoolFromSeason: 10,   // temporada de la partida desde la que entra latePool
  surpriseTeams: ["alpine"],// ids de equipos perseguidores con chance de "proyecto sorpresa"

  // ESCALERA — dos formatos válidos:
  //  (1) PLANO (el de abajo): una sola era, con juniorTeams al final. Sirve si las categorías no cambian en el período.
  //  (2) CON ERAS (ver season-2010.js / season-2000.js): cada escalón lleva sus eras y sus equipos, y cambia de nombre según el año:
  //      { id:"f2", eras:[ {from:2005, name:"GP2 Series", short:"GP2", races:14, tierBase:66, fieldSize:26, teams:[{name:"ART", color:"#e2001a", logo:"f2/art.svg.svg"}, ...]},
  //                       {from:2017, name:"FIA Fórmula 2", short:"F2", ...} ] }
  //      Los ids (f4, fr, f3, f2) son "nivel 1..4" y NO cambian: el escalón f2 es F3000 → GP2 → F2. Con "cambios reales" marcado las eras
  //      se aplican según el año; sin marcar, la escalera queda congelada como al arrancar.
  ladder: [                 // categorías previas a F1, en orden ascendente (la última da el salto a F1)
    {id:"f4", name:"Fórmula 4",      short:"F4", races:9,  tierBase:38, fieldSize:30},
    {id:"fr", name:"Formula Regional", short:"FR", races:11, tierBase:48, fieldSize:30},
    {id:"f3", name:"FIA Fórmula 3",  short:"F3", races:13, tierBase:58, fieldSize:30},
    {id:"f2", name:"FIA Fórmula 2",  short:"F2", races:14, tierBase:66, fieldSize:22},
  ],

  baseChampions: [          // palmarés real ANTES de esta temporada. aiKey = nombre exacto del piloto si corre en ella
    {name:"M. Schumacher", nat:"de", titles:7, aiKey:null},
    {name:"L. Hamilton",   nat:"gb", titles:6, aiKey:"L. Hamilton"},
  ],

  teams: [
    { id:"mercedes", tier:96, iconic:true,   // iconic = emblemático: nunca se renombra al azar
     
      eras:[ {from:2020, name:"Mercedes", color:"#00D2BE", logo:"f1/mercedes.svg.svg"} ],
      drivers:[
        {name:"L. Hamilton", age:35, ovr:98, potRange:[98,99], retireRange:[39,44], nat:"gb", rep:98},
        {name:"V. Bottas",   age:30, ovr:86, potRange:[86,88], retireRange:[36,40], nat:"fi", rep:70},
      ] },
    // Ejemplo de linaje con cambios de nombre: mismo id, varias eras.
    { id:"alpine", tier:70,
      eras:[ {from:2016, name:"Renault", color:"#FFF500", logo:"f1/renault.svg.svg"},
             {from:2021, name:"Alpine",  color:"#0090FF", logo:"f1/alpine.svg.svg"} ],
      drivers:[
        {name:"D. Ricciardo", age:30, ovr:88, potRange:[88,90], retireRange:[37,42], nat:"au", rep:80},
        {name:"E. Ocon",      age:23, ovr:80, potRange:[84,88], retireRange:[36,40], nat:"fr", rep:50},
      ] },
    // ... resto de los equipos ...
  ],

  // Altas reales de equipos DESPUÉS de esta temporada (solo las aplica el modo "cambios reales").
  // No llevan pilotos: entran con la parrilla ya armada y fichan de la cantera libre.
  entries: [
    {year:2026, team:{id:"cadillac", tier:50, iconic:true, eras:[{from:2026, name:"Cadillac", color:"#C9A227", logo:"f1/cadillac.svg.svg"}]}},
  ],
  // Bajas de equipos (modo "cambios reales"): primer año en que YA no corren. Sus pilotos quedan libres y, si el jugador corre ahí,
  // recibe ofertas de otros equipos. Una alta no puede ser anterior a la baja del mismo equipo.
  exits: [
    // {year:2013, id:"hrt"},
  ],
  // maxTeams: 12,          // opcional: tope de equipos para las altas aleatorias (por defecto 12)

  // DEBUTS REALES por año (modo "cambios reales"): el piloto entra al equipo con el que debutó ese año.
  //   {year:2007, team:"mclaren", d:{name:"L. Hamilton", age:22, ovr:84, potRange:[96,98], retireRange:[38,45], nat:"gb", rep:40, targetTeams:["mercedes"]}}  -> piloto NUEVO
  //   {year:2021, team:"racingbulls", name:"Yuki Tsunoda"}                                                                                        -> ya está en la cantera de arranque
  // Con force:true (estrellas) el debut/fichaje ignora la regla de no desplazar a alguien mucho mejor y el piloto queda protegido (star).
  // Si el equipo está completo desplaza al más flojo (salvo que el debutante sea mucho peor). Reemplazan a los ficticios (latePool) hasta 2026.
  arrivals: [
  ],
  // FICHAJES REALES de las figuras en su año: {year, name, team}. team:null = deja la F1 hasta "until" (sabático, lesión).
  moves: [
    // {year:2013, name:"L. Hamilton", team:"mercedes"},
    // {year:2019, name:"F. Alonso", team:null, until:2021},
  ],
  reservePool: [            // cantera libre desde el arranque. targetTeams = ids (preferencia blanda)
    {name:"M. Schumacher II", age:21, ovr:72, potRange:[84,90], retireRange:[37,42], rep:40, nat:"de", targetTeams:["alpine"]},
    // Regresos de ex-pilotos: sumar  exPiloto:true  (ya debutaron antes)
  ],
  latePool: [               // refuerzo ficticio que entra tarde en partidas largas
    {name:"Piloto Ficticio", age:20, ovr:72, potRange:[81,86], retireRange:[37,39], rep:50, nat:"ar", targetTeams:[]},
  ],

  juniorTeams: {            // una lista por cada id de "ladder"
    f4: [ {name:"Prema Racing", color:"#c8102e", logo:"f4/perma.svg.svg"} ],
    fr: [ {name:"Prema Racing", color:"#c8102e", logo:"fr/perma.svg.svg"} ],
    f3: [ {name:"Prema Racing", color:"#c8102e", logo:"f3/perma.svg.svg"} ],
    f2: [ {name:"Prema Racing", color:"#c8102e", logo:"f2/prema.svg.svg"} ],
  }
};

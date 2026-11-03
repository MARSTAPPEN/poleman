# Poleman

Juego web de F1/decadas. Se juega directo desde el navegador, no necesita instalación.

## Jugar online
Una vez publicado con GitHub Pages, el link será:
https://marstappen.github.io/poleman/

## Actualizar el juego
1. Editá `index.html` (o pedile ayuda a Claude para hacer los cambios).
2. Subí los cambios al repositorio (commit + push).
3. GitHub Pages actualiza el sitio solo, en 1-2 minutos.

## Estructura
- `index.html` — menú de entrada.
- `carrera.html` — el juego (HTML, CSS y lógica). **Ya no contiene datos de temporadas.**
- `data/season-AAAA.js` — la base de datos de cada temporada (equipos, pilotos, categorías juniors, cantera, palmarés).
- `data/season-2026.js`, `season-2020.js`, `season-2010.js`, `season-2000.js`, `season-1990.js` — temporadas cargadas (todas menos 2026 están hechas de memoria: revisar).
- `data/season-template.js` — molde para crear una temporada nueva.
- `tools/validate-season.js` — validador de los archivos de datos (sin dependencias, solo Node).
- `tools/season-report.js` — genera una lista legible de una temporada (`node tools/season-report.js 2020` → `docs/season-2020.md`) para revisar o corregir datos.
- `tools/logos-checklist.js` — genera `docs/logos.md`: todas las rutas de logo esperadas y cuáles faltan.
- `docs/` — listas de revisión de cada temporada y checklist de logos.
- `assets/` — logos de equipos y trofeos.
- `tests/` — pruebas de desarrollo (no hace falta subirlas al sitio).

## Agregar una temporada (ej. 2020)
1. Copiá `data/season-template.js` como `data/season-2020.js` y completalo.
2. En `carrera.html`, debajo de `<script src="data/season-2026.js">`, sumá `<script src="data/season-2020.js"></script>`.
3. Corré `node tools/validate-season.js 2020` y corregí los errores (✖). Los avisos (⚠) son para revisar.
4. Listo: el año se desbloquea solo en el selector del home. No hay que tocar nada más del código.

### Cómo está pensada la base de datos
- **Equipos = linaje.** Cada equipo tiene un `id` estable (ej. `alpine`) que NUNCA cambia; su nombre, color y logo salen de `eras`
  según el año calendario (Benetton → Renault → Lotus → Renault → Alpine son un mismo equipo). Toda la lógica usa el `id`.
  Usá el mismo `id` en todas las temporadas.
- **Parrilla flexible.** `equipos × seatsPerTeam` define los autos; `f1Races` las carreras. Una época con 12 equipos o 3 asientos funciona sin tocar código.
- **Año calendario.** `currentYear()` = temporada elegida + temporadas jugadas. Es lo que usan los cambios de escudería.
- **Categorías previas por época.** `ladder` + `juniorTeams` salen de cada archivo (hoy el código asume ids `f4/fr/f3/f2`; ver pendientes).

## Interfaz
- **Trayectoria**: es una cajita de alto fijo con scroll propio (340 px en PC, 230 px en celular) que se mantiene en la última temporada; para ver las anteriores se sube.
- **Resumen final**: la casilla "Ver solo las escuderías de F1" filtra las tarjetas (PC) y los escudos (celular); desmarcada se ven todas.
- **Nombres de equipos juniors**: lo más cortos posible (Prema, ART, VAR, MP, Docking…) para que entren en la barra de trayectoria. Se definen en `data/` (las rutas de los logos no dependen del nombre).

## Pruebas (opcional, para desarrollo)
`cd tests && npm install` y luego `node grid.js` (parrilla flexible: 9 equipos × 3 asientos) o `node team-changes.js` (renombres reales y aleatorios) o
`node regression.js ../carrera.html salida.jsonl 14` (14 carreras completas con semilla fija; comparar dos versiones con `cmp`).

## Categorías por época y bajas de equipos (paso 5)
- **Escalera con eras.** Los escalones se llaman siempre `f4`, `fr`, `f3`, `f2` (= nivel 1 a 4) pero cada uno cambia de nombre, carreras y equipos según el año
  (ej. el escalón `f2` es F3000 → GP2 (2005) → FIA F2 (2017); `f4` es Fórmula Ford → Fórmula BMW (2003) → F4 (2014)). Con "cambios reales" marcado las eras
  se aplican año a año; sin marcar, la escalera queda congelada como al arrancar. El nombre de las copas y los textos siguen a la categoría vigente.
- **Bajas (`exits`).** Un equipo con baja real deja de correr ese año: sus pilotos quedan libres y, si el jugador corre ahí, recibe ofertas de otros equipos
  (o baja a F2 si su reputación es muy baja). Las altas (`entries`) y bajas se aplican solo en modo real y la parrilla (autos) se recalcula sola.
- **Línea de tiempo real cargada** (2010 y 2000): HRT (2013), Caterham (2015) y Manor (2017) desaparecen; Haas entra en 2016 y Cadillac en 2026; desde 2000 también
  Prost (2002), Arrows (2003), Toyota (2002-2009) y Super Aguri (2006-2008).

## Temporada 1990
- **Parrilla de 26 autos (13 equipos).** En 1990 había ~35 autos inscriptos pero solo 26 largaban (el resto no pasaba la pre-clasificación). Se modelan los 13 equipos que llenaban
  esa parrilla; los de pre-clasificación (AGS, Osella, Onyx, Coloni, Eurobrun, Life) no están y sus pilotos quedan en la cantera libre.
- **Línea de tiempo real hasta 2026:** entran Jordan (1991), Sauber (1993), Pacific y Simtek (1994), Forti (1995), Stewart (1997), Toyota (2002)…; salen March y Brabham (1993),
  Dallara (1994), Lotus y Larrousse (1995), Pacific y Simtek (1996), Forti (1997), Prost (2002), Arrows (2003)… hasta llegar a la parrilla del 2000 y seguir como `season-2000.js`.
- **Linajes nuevos:** `mercedes` arranca como Tyrrell (→ BAR → Honda → Brawn → Mercedes), `prost` como Ligier, `redbull` entra como Stewart (→ Jaguar → Red Bull).
- Categorías previas de la época: Fórmula Ford, Fórmula Renault, F3 británica y F3000 (listas de equipos aproximadas).
- **Debuts y fichajes con `force:true`**: las estrellas (Hamilton, Verstappen, Schumacher, Alonso…) entran/fichan aunque el equipo destino tenga un piloto mejor, y quedan marcadas como `star`
  (al elegir a quién desplazar, cuentan +10 para no perder su lugar frente a un fichaje menor). Los retiros reales (Piquet 1991, Prost 1993, Senna 1994…) se cargan como `team:null`.

## Pilotos reales por año (debuts y fichajes)
Con **"Cambios reales"** marcado, además de equipos y categorías, el mundo de pilotos sigue la historia hasta 2026:
- **Debuts (`arrivals`)**: cada piloto real que debuta después del año de arranque entra en su año **al equipo con el que debutó** (Hamilton → McLaren 2007,
  Vettel → Toro Rosso 2007, Verstappen → Toro Rosso 2015, Leclerc → Sauber 2018, Norris → McLaren 2019…). Si el equipo está completo desplaza al más flojo, salvo que
  el debutante sea mucho peor (entonces queda libre con preferencia por ese equipo). Los que ya estaban en la cantera de arranque "debutan" en su año.
- **Fichajes (`moves`)**: las figuras cambian de equipo en su año real (Hamilton → Mercedes 2013 → Ferrari 2025, Vettel → Red Bull 2009 → Ferrari 2015, Alonso, Räikkönen, Pérez,
  Ricciardo, Bottas…). `team:null` = deja la F1 un tiempo (sabático, lesión) y el mercado no lo toma mientras tanto.
- **Los pilotos ficticios (`latePool`) no entran** mientras haya historia real por delante: esperan a que se acabe 2026 (con "cambios reales" desmarcado entran como antes).
- Las listas están en `docs/season-AAAA.md` ("Debuts reales por año" y "Fichajes reales") para revisarlas; se editan en `data/season-AAAA.js`.
- Debuts y fichajes de pilotos **no generan titulares** (la pestaña de noticias solo informa cambios de escuderías: renombres, altas, bajas y categorías).
- Los fichajes y debuts son un **calendario**: el resto del mercado (retiros, vacantes, el propio jugador) sigue siendo dinámico, por eso dos partidas nunca son idénticas.

## Cambios de escuderías
La casilla **"Cambios reales de escuderías"** del home solo aparece si elegís una temporada anterior a 2026 (desde 2026 no hay cambios oficiales).
- **Marcada (modo `real`)**: el mundo sigue los datos reales hasta 2026. Los equipos toman su nombre/color/logo de `eras` según el año calendario
  y las **altas** definidas en `entries` entran en su año (ej. jugando desde 2020, **Cadillac se suma en 2026 y la parrilla pasa de 10 a 11 equipos**).
  Por eso, en cada `season-AAAA.js`, **cargá todos los renombres reales del linaje hasta 2026 y las altas posteriores**.
  Pasado 2026 no hay datos reales y el juego sigue en modo aleatorio.
- **Desmarcada (modo `random`)**: nombres y parrilla congelados (en 2020 la parrilla sigue en 10 equipos), con cambios aleatorios **muy poco frecuentes**
  (~1 cada 18 temporadas). Todo se ajusta en `TEAM_CHANGE_CFG` (carrera.html):
  - `baseChance` 2,5 % anual por equipo elegible, `cooldown` 10 temporadas por equipo, `globalCooldown` 6 temporadas entre cambios (también desde el inicio de la partida).
  - Los equipos con `iconic:true` en los datos (Ferrari, McLaren, Williams, Mercedes, Red Bull…) **nunca** se renombran al azar.
  - Tipos: *rebrand* (sponsor), *maker* (compra de un fabricante, sube el nivel), *sale* (nuevos dueños) y *alta* de un equipo nuevo (`entryChance` 2 %, tope `maxTeams`, 12 por defecto).
  - Un equipo solo puede tomar nombres libres o de **su propio linaje** (Alpine puede volver a ser Renault, pero no "Racing Point").
    Los nombres salen de `NAME_CATALOG_BUILTIN` + todas las eras de las temporadas cargadas.
- El `id`, los pilotos y el historial se conservan; si el jugador corre en ese equipo, su historial abre un tramo nuevo con el nombre nuevo (la antigüedad no se reinicia).
- Las altas se cubren con la cantera libre. Los cambios aparecen como titular en el recuadro de Constructores. `S.teamChangeMode='off'` desactiva todo (solo pruebas).

## Pendientes del plan
- Bajas **aleatorias** de equipos (quiebras): hoy solo hay bajas reales; el modo aleatorio solo suma equipos.
- **Futuro lejano:** pasado el refuerzo ficticio (`latePool`, 21 pilotos) las partidas muy largas (30+ años) pueden quedarse con asientos vacíos; hace falta un generador de pilotos genéricos.
- Calibración: el compañero de equipo del campeón gana demasiados títulos (el motor pesa mucho el auto y poco al piloto).
- Los trofeos y colores de categoría son por escalón (f4/fr/f3/f2): una copa de GP2 usa la imagen del trofeo `f2`.

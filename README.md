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
- `data/season-2026.js`, `data/season-2020.js` — temporadas cargadas (la de 2020 está hecha de memoria: revisar).
- `data/season-template.js` — molde para crear una temporada nueva.
- `tools/validate-season.js` — validador de los archivos de datos (sin dependencias, solo Node).
- `tools/season-report.js` — genera una lista legible de una temporada (`node tools/season-report.js 2020` → `docs/season-2020.md`) para revisar o corregir datos.
- `docs/` — listas de revisión de cada temporada.
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

## Pruebas (opcional, para desarrollo)
`cd tests && npm install` y luego `node grid.js` (parrilla flexible: 9 equipos × 3 asientos) o `node team-changes.js` (renombres reales y aleatorios) o
`node regression.js ../carrera.html salida.jsonl 14` (14 carreras completas con semilla fija; comparar dos versiones con `cmp`).

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
- **Bajas** de equipos (HRT, Caterham, Manor…): las altas ya funcionan, las bajas llegan junto con la carga de 2010/2000.
- Calibración: el compañero de equipo del campeón gana demasiados títulos (el motor pesa mucho el auto y poco al piloto).
- Paso 5: escaleras juniors reales por época (GP2, F3000, etc.). Hoy `TROPHY_META` y `CATEGORY_STYLE` están fijos a f4/fr/f3/f2.

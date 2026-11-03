# Temporada 2000 — datos para revisar

> Generado automáticamente desde `data/season-2000.js`. **Para cambiar algo, editá ese archivo** (o pedímelo) y regenerá con `node tools/season-report.js 2000`.

## Cómo leer los números

- **tier** (equipos): nivel base del auto, 0-100. Es el valor hacia el que tira la evolución del equipo (referencia: 2026 va de 50 a 93).
- **ovr** (pilotos): nivel al arrancar la temporada, 0-100 (campeón dominante ≈ 95-98, titular promedio ≈ 77-84).
- **pot**: rango del que se sortea el techo del piloto (si tiene margen para crecer). **retiro**: rango del que se sortea la edad de retiro.
- **rep**: reputación 0-100. **edad**: al arrancar la temporada. **nac**: código de bandera.

## Parámetros

- Asientos por equipo: **2** · Equipos: **11** · Autos: **22** · Carreras de F1: **17**
- topTeamTier: 85 · gridRefTier: 67 · refuerzo tardío desde la temporada 10 de la partida
- Equipos con chance de "proyecto sorpresa": williams, sauber, alpine, aston

## Escuderías y pilotos titulares (de mejor a peor auto)

### Ferrari — tier 96
id `ferrari` · identidad: Ferrari (desde 2000) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| M. Schumacher | 31 | **97** | 97-98 | 40-43 | 97 | de |
| R. Barrichello | 27 | **86** | 86-87 | 36-40 | 66 | br |

### McLaren — tier 94
id `mclaren` · identidad: McLaren (desde 2000) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| M. Häkkinen | 31 | **95** | 95-96 | 33-35 | 92 | fi |
| D. Coulthard | 28 | **90** | 90-91 | 36-40 | 74 | gb |

### Williams — tier 76
id `williams` · identidad: Williams (desde 2000) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| R. Schumacher | 24 | **85** | 85-87 | 33-37 | 56 | de |
| J. Button | 20 | **78** | 92-95 | 36-42 | 28 | gb |

### Benetton — tier 68
id `alpine` · identidad: Benetton (desde 2000) → Renault (2002) → Lotus (2011) → Renault (2016) → Alpine (2021)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| G. Fisichella | 27 | **85** | 85-86 | 36-40 | 46 | it |
| A. Wurz | 26 | **80** | 80-82 | 31-35 | 40 | at |

### Jordan — tier 67
id `aston` · identidad: Jordan (desde 2000) → Midland (2006) → Spyker (2007) → Force India (2008) → Racing Point (2019) → Aston Martin (2021)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| H. Frentzen | 32 | **85** | 85-86 | 34-37 | 64 | de |
| J. Trulli | 25 | **84** | 84-86 | 37-41 | 44 | it |

### BAR — tier 66
id `mercedes` · identidad: BAR (desde 2000) → Honda (2006) → Brawn GP (2009) → Mercedes GP (2010) → Mercedes (2012)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| J. Villeneuve | 28 | **86** | 86-87 | 33-37 | 85 | ca |
| R. Zonta | 23 | **76** | 76-79 | 30-34 | 32 | br |

### Sauber — tier 60
id `sauber` · identidad: Sauber (desde 2000) → BMW Sauber (2006) → Sauber (2010) → Alfa Romeo (2019) → Kick Sauber (2024) → Audi (2026)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| P. Diniz | 29 | **77** | 77-79 | 33-36 | 50 | br |
| M. Salo | 33 | **78** | 78-79 | 35-38 | 52 | fi |

### Jaguar — tier 58
id `redbull` · identidad: Jaguar (desde 2000) → Red Bull (2005)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| E. Irvine | 34 | **86** | 86-87 | 35-37 | 78 | gb |
| J. Herbert | 35 | **80** | 80-81 | 36-38 | 70 | gb |

### Arrows — tier 54
id `arrows` · identidad: Arrows (desde 2000)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| J. Verstappen | 28 | **76** | 76-78 | 32-36 | 46 | nl |
| P. de la Rosa | 29 | **79** | 79-81 | 36-40 | 34 | es |

### Prost — tier 50
id `prost` · identidad: Prost (desde 2000)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| J. Alesi | 35 | **82** | 82-83 | 36-38 | 80 | fr |
| N. Heidfeld | 22 | **80** | 88-90 | 34-40 | 34 | de |

### Minardi — tier 45
id `racingbulls` · identidad: Minardi (desde 2000) → Toro Rosso (2006) → AlphaTauri (2020) → RB (2024) → Racing Bulls (2025)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| M. Gené | 25 | **76** | 76-78 | 31-36 | 34 | es |
| G. Mazzacane | 24 | **70** | 70-73 | 28-32 | 24 | ar |

## Altas reales de equipos (solo modo "cambios reales")

| Año | Equipo | tier | id |
|---|---|---|---|
| 2002 | Toyota | 60 | `toyota` |
| 2006 | Super Aguri | 44 | `superaguri` |
| 2010 | HRT | 44 | `hrt` |
| 2010 | Virgin | 46 | `marussia` |
| 2010 | Lotus Racing | 50 | `caterham` |
| 2016 | Haas | 50 | `haas` |
| 2026 | Cadillac | 50 | `cadillac` |

## Bajas de equipos (solo modo "cambios reales")

| Primer año sin el equipo | Equipo | id |
|---|---|---|
| 2002 | Prost | `prost` |
| 2003 | Arrows | `arrows` |
| 2009 | Super Aguri | `superaguri` |
| 2010 | Toyota | `toyota` |
| 2013 | HRT | `hrt` |
| 2015 | Lotus Racing | `caterham` |
| 2017 | Virgin | `marussia` |

## Debuts reales por año (solo modo "cambios reales")

En su año de debut el piloto entra al equipo con el que debutó (si el equipo está completo, desplaza al más flojo siempre que el debutante no sea mucho peor). *Cantera* = ya está libre desde el arranque y debuta en su año; *nuevo* = aparece ese año.

| Año | Piloto | Equipo | Origen | Edad | ovr | pot |
|---|---|---|---|---|---|---|
| 2001 | T. Enge | Prost | nuevo | 24 | 68 | 68-70 |
| 2001 | A. Yoong | Minardi | cantera | — | — | — |
| 2004 | G. Bruni | Minardi | nuevo | 22 | 64 | 64-67 |
| 2004 | T. Glock | Jordan | nuevo | 22 | 72 | 80-84 |
| 2004 | Z. Baumgartner | Jordan | nuevo | 23 | 62 | 62-65 |
| 2005 | V. Liuzzi | Red Bull | nuevo | 24 | 70 | 74-78 |
| 2005 | N. Karthikeyan | Jordan | nuevo | 28 | 64 | 64-67 |
| 2005 | C. Albers | Minardi | nuevo | 25 | 66 | 66-69 |
| 2005 | R. Doornbos | Minardi | nuevo | 23 | 62 | 62-65 |
| 2005 | T. Monteiro | Jordan | nuevo | 28 | 64 | 64-67 |
| 2006 | N. Rosberg | Williams | nuevo | 20 | 76 | 88-90 |
| 2006 | S. Speed | Toro Rosso | nuevo | 23 | 66 | 70-74 |
| 2006 | R. Kubica | BMW Sauber | nuevo | 21 | 80 | 91-93 |
| 2006 | F. Montagny | Super Aguri | nuevo | 28 | 62 | 62-65 |
| 2006 | S. Yamamoto | Super Aguri | nuevo | 23 | 56 | 56-60 |
| 2007 | L. Hamilton | McLaren | nuevo | 22 | 84 | 96-98 |
| 2007 | S. Vettel | Toro Rosso | nuevo | 19 | 78 | 94-97 |
| 2007 | H. Kovalainen | Renault | nuevo | 25 | 77 | 82-85 |
| 2007 | A. Sutil | Spyker | nuevo | 24 | 74 | 80-84 |
| 2007 | K. Nakajima | Williams | nuevo | 22 | 68 | 72-75 |
| 2008 | N. Piquet Jr. | Renault | nuevo | 22 | 68 | 72-75 |
| 2008 | S. Bourdais | Toro Rosso | cantera | — | — | — |
| 2009 | R. Grosjean | Renault | nuevo | 22 | 74 | 82-86 |
| 2009 | S. Buemi | Toro Rosso | nuevo | 20 | 74 | 79-82 |
| 2009 | J. Alguersuari | Toro Rosso | nuevo | 19 | 68 | 77-82 |
| 2009 | K. Kobayashi | Toyota | nuevo | 22 | 76 | 82-85 |
| 2010 | N. Hülkenberg | Williams | nuevo | 22 | 78 | 86-90 |
| 2010 | V. Petrov | Renault | nuevo | 25 | 76 | 78-80 |
| 2010 | K. Chandhok | HRT | nuevo | 26 | 68 | 70-72 |
| 2010 | B. Senna | HRT | nuevo | 26 | 74 | 76-80 |
| 2010 | L. di Grassi | Virgin | nuevo | 25 | 74 | 76-79 |
| 2011 | S. Pérez | Sauber | nuevo | 21 | 72 | 85-88 |
| 2011 | D. Ricciardo | HRT | nuevo | 21 | 70 | 88-91 |
| 2011 | P. di Resta | Force India | nuevo | 24 | 76 | 84-88 |
| 2011 | P. Maldonado | Williams | nuevo | 26 | 76 | 80-84 |
| 2011 | J. d'Ambrosio | Virgin | nuevo | 25 | 66 | 73-77 |
| 2012 | J. Vergne | Toro Rosso | nuevo | 21 | 68 | 80-84 |
| 2012 | C. Pic | Marussia | nuevo | 22 | 64 | 76-81 |
| 2013 | V. Bottas | Williams | nuevo | 23 | 74 | 86-89 |
| 2013 | E. Gutiérrez | Sauber | nuevo | 21 | 66 | 80-85 |
| 2013 | G. van der Garde | Caterham | nuevo | 27 | 66 | 72-77 |
| 2013 | J. Bianchi | Marussia | nuevo | 23 | 70 | 84-88 |
| 2013 | M. Chilton | Marussia | nuevo | 21 | 60 | 68-73 |
| 2014 | K. Magnussen | McLaren | nuevo | 21 | 72 | 86-90 |
| 2014 | D. Kvyat | Toro Rosso | nuevo | 19 | 72 | 78-82 |
| 2014 | M. Ericsson | Caterham | nuevo | 23 | 64 | 74-79 |
| 2015 | M. Verstappen | Toro Rosso | nuevo | 17 | 80 | 96-99 |
| 2015 | Carlos Sainz | Toro Rosso | nuevo | 20 | 74 | 85-88 |
| 2015 | F. Nasr | Sauber | nuevo | 22 | 66 | 72-76 |
| 2016 | E. Ocon | Manor | nuevo | 19 | 74 | 82-85 |
| 2016 | P. Wehrlein | Manor | nuevo | 21 | 70 | 76-80 |
| 2016 | J. Palmer | Renault | nuevo | 25 | 66 | 70-74 |
| 2016 | S. Vandoorne | McLaren | nuevo | 24 | 76 | 80-84 |
| 2017 | Lance Stroll | Williams | nuevo | 18 | 66 | 74-78 |
| 2017 | Pierre Gasly | Toro Rosso | nuevo | 21 | 76 | 80-85 |
| 2017 | A. Giovinazzi | Sauber | nuevo | 23 | 72 | 76-80 |
| 2017 | B. Hartley | Toro Rosso | nuevo | 27 | 68 | 70-72 |
| 2018 | C. Leclerc | Sauber | nuevo | 20 | 82 | 92-95 |
| 2018 | S. Sirotkin | Williams | nuevo | 22 | 68 | 72-76 |
| 2019 | Lando Norris | McLaren | nuevo | 19 | 76 | 92-96 |
| 2019 | G. Russell | Williams | nuevo | 21 | 76 | 88-92 |
| 2019 | Alex Albon | Toro Rosso | nuevo | 23 | 72 | 80-84 |
| 2020 | N. Latifi | Williams | nuevo | 24 | 66 | 72-76 |
| 2021 | Yuki Tsunoda | AlphaTauri | nuevo | 20 | 70 | 86-90 |
| 2021 | Mick Schumacher | Haas | nuevo | 22 | 70 | 85-90 |
| 2021 | N. Mazepin | Haas | nuevo | 22 | 64 | 72-77 |
| 2022 | Zhou Guanyu | Alfa Romeo | nuevo | 22 | 68 | 78-82 |
| 2023 | Oscar Piastri | McLaren | nuevo | 21 | 76 | 92-97 |
| 2023 | L. Sargeant | Williams | nuevo | 22 | 64 | 78-83 |
| 2023 | Nyck de Vries | AlphaTauri | nuevo | 28 | 74 | 80-85 |
| 2024 | Liam Lawson | RB | nuevo | 22 | 70 | 85-89 |
| 2024 | F. Colapinto | Williams | nuevo | 20 | 68 | 80-84 |
| 2025 | Kimi Antonelli | Mercedes | nuevo | 18 | 70 | 92-96 |
| 2025 | Isack Hadjar | Racing Bulls | nuevo | 20 | 68 | 82-86 |
| 2025 | G. Bortoleto | Kick Sauber | nuevo | 20 | 68 | 84-88 |
| 2025 | O. Bearman | Haas | nuevo | 19 | 70 | 82-86 |
| 2025 | J. Doohan | Alpine | nuevo | 22 | 66 | 76-80 |
| 2026 | A. Lindblad | Racing Bulls | nuevo | 18 | 62 | 84-90 |

## Fichajes reales de las figuras (solo modo "cambios reales")

Cada fichaje se aplica en su año si el piloto sigue en carrera. *Fuera de F1* = deja la F1 hasta el año indicado.

- **J. Button**: 2001 Benetton → 2003 BAR → 2010 McLaren
- **K. Räikkönen**: 2002 McLaren → 2007 Ferrari → 2010 fuera de F1 (vuelve 2012) → 2012 Lotus → 2014 Ferrari → 2019 Alfa Romeo
- **G. Fisichella**: 2002 Jordan → 2005 Renault
- **J. Trulli**: 2002 Renault → 2005 Toyota
- **F. Alonso**: 2003 Renault → 2007 McLaren → 2008 Renault → 2010 Ferrari → 2015 McLaren → 2019 fuera de F1 (vuelve 2021) → 2021 Alpine → 2023 Aston Martin
- **M. Webber**: 2003 Jordan → 2005 Williams → 2007 Red Bull
- **J.P. Montoya**: 2005 McLaren
- **D. Coulthard**: 2005 Red Bull
- **F. Massa**: 2006 Ferrari → 2014 Williams
- **R. Barrichello**: 2006 Honda → 2010 Williams
- **H. Kovalainen**: 2008 McLaren
- **S. Vettel**: 2009 Red Bull → 2015 Ferrari → 2021 Aston Martin → 2023 fuera de F1
- **N. Rosberg**: 2010 Mercedes GP
- **R. Kubica**: 2010 Renault → 2011 fuera de F1 (vuelve 2019) → 2019 Williams
- **D. Ricciardo**: 2012 Toro Rosso → 2014 Red Bull → 2019 Renault → 2021 McLaren → 2023 AlphaTauri → 2025 fuera de F1
- **N. Hülkenberg**: 2012 Force India → 2013 Sauber → 2014 Force India → 2017 Renault → 2019 fuera de F1 (vuelve 2023) → 2023 Haas → 2025 Kick Sauber
- **R. Grosjean**: 2012 Lotus → 2016 Haas
- **L. Hamilton**: 2013 Mercedes → 2025 Ferrari
- **S. Pérez**: 2013 McLaren → 2014 Force India → 2021 Red Bull → 2025 fuera de F1 (vuelve 2026) → 2026 Cadillac
- **M. Verstappen**: 2016 Red Bull
- **K. Magnussen**: 2016 Renault → 2017 Haas
- **V. Bottas**: 2017 Mercedes → 2022 Alfa Romeo → 2025 fuera de F1 (vuelve 2026) → 2026 Cadillac
- **E. Ocon**: 2017 Force India → 2020 Renault → 2024 Haas
- **Carlos Sainz**: 2018 Renault → 2019 McLaren → 2021 Ferrari → 2025 Williams
- **C. Leclerc**: 2019 Ferrari
- **Lance Stroll**: 2019 Racing Point
- **G. Russell**: 2022 Mercedes
- **Alex Albon**: 2022 Williams
- **Pierre Gasly**: 2023 Alpine

## Cantera libre al arrancar (23)

Pilotos sin asiento que esperan una vacante. *ex* = ya corrió antes en F1. *Prefiere* = equipos donde es más probable que fiche.

| Piloto | Edad | ovr | pot | retiro | rep | nac | Prefiere |
|---|---|---|---|---|---|---|---|
| D. Hill | 39 | **84** | 84-85 | 40-41 | 88 | gb | *ex* · aston, alpine |
| O. Panis | 33 | **80** | 80-81 | 35-38 | 58 | fr | *ex* · mercedes, aston |
| L. Badoer | 29 | **76** | 76-77 | 33-36 | 40 | it | *ex* · sauber, racingbulls |
| A. McNish | 30 | **80** | 80-82 | 34-38 | 46 | gb | *ex* · sauber, williams |
| E. Tuero | 21 | **68** | 70-74 | 28-32 | 30 | ar | *ex* · racingbulls |
| T. Marques | 24 | **68** | 68-71 | 28-32 | 26 | br | *ex* · racingbulls, arrows |
| T. Takagi | 25 | **68** | 68-71 | 28-32 | 24 | jp | *ex* · arrows, prost |
| J.P. Montoya | 24 | **88** | 93-95 | 36-42 | 74 | co | williams, mclaren, mercedes |
| K. Räikkönen | 20 | **70** | 95-98 | 38-45 | 36 | fi | sauber, mclaren |
| F. Alonso | 18 | **76** | 96-98 | 40-46 | 36 | es | racingbulls, alpine |
| T. Sato | 23 | **70** | 78-83 | 33-38 | 32 | jp | mercedes, aston |
| M. Webber | 23 | **72** | 84-88 | 36-42 | 34 | au | redbull, racingbulls |
| A. Davidson | 20 | **66** | 74-78 | 33-37 | 26 | gb | mercedes |
| E. Bernoldi | 22 | **70** | 74-78 | 31-35 | 28 | br | sauber, arrows |
| F. Massa | 18 | **66** | 88-92 | 34-39 | 30 | br | sauber, ferrari |
| A. Pizzonia | 19 | **66** | 76-80 | 31-35 | 28 | br | williams, arrows |
| S. Bourdais | 21 | **62** | 78-82 | 34-38 | 26 | fr | alpine |
| G. Pantano | 21 | **64** | 72-77 | 31-35 | 22 | it | racingbulls |
| C. da Matta | 26 | **78** | 80-83 | 34-38 | 46 | br | mercedes, aston |
| J. Wilson | 22 | **62** | 70-75 | 32-36 | 20 | gb | racingbulls |
| R. Firman | 24 | **62** | 68-72 | 30-34 | 20 | ie | aston |
| N. Kiesa | 22 | **60** | 66-70 | 30-34 | 18 | dk | racingbulls |
| A. Yoong | 24 | **60** | 64-68 | 30-33 | 18 | my | racingbulls, arrows |

## Refuerzo tardío (18 pilotos ficticios)

Entran a partir de la temporada 10 de la partida. 

James Hunt-Lauda, Schumacher-Stewart, Zeta Zalazar, B. Robledo, Sonny Hayes, Annes Notrya, Nalian Lotín, T. Inoue-Kobayashi, Alcides Fangio, N. Mazepin II, F. Briatore, Mardenborough, Castolo, Devon Butler, C. Akkerman, Callie Mayer, M. Filippis II, L. Lombardi


## Categorías previas a F1

Cada escalón puede cambiar de nombre y de equipos según el año calendario (⚠ = falta el logo; se muestran las iniciales).

### Escalón `f4`

**Desde 2000: Fórmula Ford** (FF) — 10 carreras/temp. · tier base 38 · 28 autos

Haywood ⚠ · Jamun ⚠ · Medina ⚠ · Van Diemen ⚠ · Duckhams ⚠

**Desde 2003: Fórmula BMW** (FBMW) — 10 carreras/temp. · tier base 38 · 30 autos

Eifelland ⚠ · Mücke · Kaufmann ⚠ · EuroInt ⚠ · Fortec ⚠

**Desde 2014: Fórmula 4** (F4) — 9 carreras/temp. · tier base 38 · 30 autos

VAR · Mücke · US Racing · R-ace GP · Prema · Jenzer ⚠

### Escalón `fr`

**Desde 2000: Fórmula Renault 2.0** (FR) — 11 carreras/temp. · tier base 48 · 30 autos

Prema · Tech 1 ⚠ · Fortec ⚠ · Motaworld ⚠ · Comtec ⚠

**Desde 2008: Fórmula Renault 2.0** (FR) — 11 carreras/temp. · tier base 48 · 30 autos

Tech 1 ⚠ · Koiranen ⚠ · SG ⚠ · Prema · Motopark ⚠ · Burdett ⚠ · Fortec ⚠ · Epic ⚠

**Desde 2019: Fórmula Regional** (FR) — 11 carreras/temp. · tier base 48 · 30 autos

Prema · MP · VAR · R-ace GP · Arden · G4 · ART

### Escalón `f3`

**Desde 2000: Fórmula 3** (F3) — 12 carreras/temp. · tier base 58 · 30 autos

Carlin ⚠ · Docking ⚠ · Fortec ⚠ · Manor ⚠ · Menu ⚠ · Promatecme ⚠ · Perform. ⚠

**Desde 2003: F3 Euro Series** (F3) — 13 carreras/temp. · tier base 58 · 30 autos

ART · Signature ⚠ · Prema · Mücke ⚠ · Carlin ⚠ · VAR · Motopark ⚠ · Zeller ⚠ · HBR ⚠

**Desde 2015: F3 Europeo** (F3) — 13 carreras/temp. · tier base 58 · 30 autos

Prema · Mücke ⚠ · Carlin ⚠ · VAR · Motopark ⚠ · Fortec ⚠ · Hitech GP

**Desde 2019: FIA Fórmula 3** (F3) — 13 carreras/temp. · tier base 58 · 30 autos

Prema · Trident · ART · Campos · Hitech · MP · Carlin ⚠ · Charouz ⚠ · HWA ⚠ · Jenzer ⚠

### Escalón `f2`

**Desde 2000: Fórmula 3000** (F3000) — 10 carreras/temp. · tier base 66 · 22 autos

Arden ⚠ · Super Nova ⚠ · Nordic ⚠ · Petrobras ⚠ · Gabord ⚠ · Coloni ⚠ · Astromega ⚠

**Desde 2005: GP2 Series** (GP2) — 14 carreras/temp. · tier base 66 · 26 autos

Addax ⚠ · Arden ⚠ · ART · DAMS · iSport ⚠ · Ocean ⚠ · RE ⚠ · Rapax ⚠ · Coloni ⚠ · Super Nova ⚠ · Trident · Air Asia ⚠ · Durango ⚠

**Desde 2017: FIA Fórmula 2** (F2) — 14 carreras/temp. · tier base 66 · 22 autos

Prema · ART · Campos · DAMS · MP · Virtuosi · Carlin ⚠ · Charouz ⚠ · HWA ⚠ · Hitech · Trident

## Palmarés previo (pestaña "Historia")

J.M. Fangio: 5 · A. Prost: 4 · A. Senna: 3 · J. Brabham: 3 · J. Stewart: 3 · N. Piquet: 3 · N. Lauda: 3 · M. Schumacher: 2 · M. Häkkinen: 2

## Logos que faltan (⚠ = se muestran las iniciales)

- f4: Haywood → assets/logos/f4/haywoodracing.svg.svg
- f4: Jamun → assets/logos/f4/jamunracing.svg.svg
- f4: Medina → assets/logos/f4/medinamotorsport.svg.svg
- f4: Van Diemen → assets/logos/f4/vandiemen.svg.svg
- f4: Duckhams → assets/logos/f4/duckhamsracing.svg.svg
- f4: Eifelland → assets/logos/f4/eifellandracing.svg.svg
- f4: Kaufmann → assets/logos/f4/josefkaufmannracing.svg.svg
- f4: EuroInt → assets/logos/f4/eurointernational.svg.svg
- f4: Fortec → assets/logos/f4/fortecmotorsport.svg.svg
- f4: Jenzer → assets/logos/f4/jenzer.svg.svg
- fr: Tech 1 → assets/logos/fr/tech1racing.svg.svg
- fr: Fortec → assets/logos/fr/fortecmotorsport.svg.svg
- fr: Motaworld → assets/logos/fr/motaworldracing.svg.svg
- fr: Comtec → assets/logos/fr/comtecracing.svg.svg
- fr: Koiranen → assets/logos/fr/koiranenbros.svg.svg
- fr: SG → assets/logos/fr/sgformula.svg.svg
- fr: Motopark → assets/logos/fr/motoparkacademy.svg.svg
- fr: Burdett → assets/logos/fr/markburdettmotorsport.svg.svg
- fr: Epic → assets/logos/fr/epicracing.svg.svg
- f3: Carlin → assets/logos/f3/carlin.svg.svg
- f3: Docking → assets/logos/f3/alandockingracing.svg.svg
- f3: Fortec → assets/logos/f3/fortecmotorsport.svg.svg
- f3: Manor → assets/logos/f3/manormotorsport.svg.svg
- f3: Menu → assets/logos/f3/menumotorsport.svg.svg
- f3: Promatecme → assets/logos/f3/promatecme.svg.svg
- f3: Perform. → assets/logos/f3/performanceracing.svg.svg
- f3: Signature → assets/logos/f3/signature.svg.svg
- f3: Mücke → assets/logos/f3/muckemotorsport.svg.svg
- f3: Motopark → assets/logos/f3/motoparkacademy.svg.svg
- f3: Zeller → assets/logos/f3/jozellerracing.svg.svg
- f3: HBR → assets/logos/f3/hbrmotorsport.svg.svg
- f3: Charouz → assets/logos/f3/charouz.svg.svg
- f3: HWA → assets/logos/f3/hwa.svg.svg
- f3: Jenzer → assets/logos/f3/jenzer.svg.svg
- f2: Arden → assets/logos/f2/ardeninternational.svg.svg
- f2: Super Nova → assets/logos/f2/supernovaracing.svg.svg
- f2: Nordic → assets/logos/f2/nordicracing.svg.svg
- f2: Petrobras → assets/logos/f2/petrobrasjuniorteam.svg.svg
- f2: Gabord → assets/logos/f2/gabordcompetition.svg.svg
- f2: Coloni → assets/logos/f2/colonimotorsport.svg.svg
- f2: Astromega → assets/logos/f2/astromega.svg.svg
- f2: Addax → assets/logos/f2/barwaaddax.svg.svg
- f2: iSport → assets/logos/f2/isportinternational.svg.svg
- f2: Ocean → assets/logos/f2/oceanracingtechnology.svg.svg
- f2: RE → assets/logos/f2/racingengineering.svg.svg
- f2: Rapax → assets/logos/f2/rapax.svg.svg
- f2: Coloni → assets/logos/f2/scuderiacoloni.svg.svg
- f2: Air Asia → assets/logos/f2/teamairasia.svg.svg
- f2: Durango → assets/logos/f2/durango.svg.svg
- f2: Carlin → assets/logos/f2/carlin.svg.svg
- f2: Charouz → assets/logos/f2/charouz.svg.svg
- f2: HWA → assets/logos/f2/hwa.svg.svg
- F1: Minardi (id racingbulls, desde 2000) → assets/logos/f1/minardi.svg.svg
- F1: Toro Rosso (id racingbulls, desde 2006) → assets/logos/f1/tororosso.svg.svg
- F1: AlphaTauri (id racingbulls, desde 2020) → assets/logos/f1/alphatauri.svg.svg
- F1: RB (id racingbulls, desde 2024) → assets/logos/f1/rb.svg.svg
- F1: Prost (id prost, desde 2000) → assets/logos/f1/prost.svg.svg
- F1: Arrows (id arrows, desde 2000) → assets/logos/f1/arrows.svg.svg
- F1: Jaguar (id redbull, desde 2000) → assets/logos/f1/jaguar.svg.svg
- F1: Sauber (id sauber, desde 2000) → assets/logos/f1/sauber.svg.svg
- F1: BMW Sauber (id sauber, desde 2006) → assets/logos/f1/bmwsauber.svg.svg
- F1: Sauber (id sauber, desde 2010) → assets/logos/f1/sauber.svg.svg
- F1: Alfa Romeo (id sauber, desde 2019) → assets/logos/f1/alfaromeo.svg.svg
- F1: Kick Sauber (id sauber, desde 2024) → assets/logos/f1/kicksauber.svg.svg
- F1: BAR (id mercedes, desde 2000) → assets/logos/f1/bar.svg.svg
- F1: Honda (id mercedes, desde 2006) → assets/logos/f1/honda.svg.svg
- F1: Brawn GP (id mercedes, desde 2009) → assets/logos/f1/brawngp.svg.svg
- F1: Jordan (id aston, desde 2000) → assets/logos/f1/jordan.svg.svg
- F1: Midland (id aston, desde 2006) → assets/logos/f1/midland.svg.svg
- F1: Spyker (id aston, desde 2007) → assets/logos/f1/spyker.svg.svg
- F1: Force India (id aston, desde 2008) → assets/logos/f1/forceindia.svg.svg
- F1: Racing Point (id aston, desde 2019) → assets/logos/f1/racingpoint.svg.svg
- F1: Benetton (id alpine, desde 2000) → assets/logos/f1/benetton.svg.svg
- F1: Renault (id alpine, desde 2002) → assets/logos/f1/renault.svg.svg
- F1: Lotus (id alpine, desde 2011) → assets/logos/f1/lotus.svg.svg
- F1: Renault (id alpine, desde 2016) → assets/logos/f1/renault.svg.svg
- F1: Toyota (id toyota, desde 2002) → assets/logos/f1/toyota.svg.svg
- F1: Super Aguri (id superaguri, desde 2006) → assets/logos/f1/superaguri.svg.svg
- F1: HRT (id hrt, desde 2010) → assets/logos/f1/hrt.svg.svg
- F1: Virgin (id marussia, desde 2010) → assets/logos/f1/virgin.svg.svg
- F1: Marussia (id marussia, desde 2012) → assets/logos/f1/marussia.svg.svg
- F1: Manor (id marussia, desde 2015) → assets/logos/f1/manor.svg.svg
- F1: Lotus Racing (id caterham, desde 2010) → assets/logos/f1/lotusracing.svg.svg
- F1: Team Lotus (id caterham, desde 2011) → assets/logos/f1/teamlotus.svg.svg
- F1: Caterham (id caterham, desde 2012) → assets/logos/f1/caterham.svg.svg

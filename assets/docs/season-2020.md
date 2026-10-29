# Temporada 2020 — datos para revisar

> Generado automáticamente desde `data/season-2020.js`. **Para cambiar algo, editá ese archivo** (o pedímelo) y regenerá con `node tools/season-report.js 2020`.

## Cómo leer los números

- **tier** (equipos): nivel base del auto, 0-100. Es el valor hacia el que tira la evolución del equipo (referencia: 2026 va de 50 a 93).
- **ovr** (pilotos): nivel al arrancar la temporada, 0-100 (campeón dominante ≈ 95-98, titular promedio ≈ 77-84).
- **pot**: rango del que se sortea el techo del piloto (si tiene margen para crecer). **retiro**: rango del que se sortea la edad de retiro.
- **rep**: reputación 0-100. **edad**: al arrancar la temporada. **nac**: código de bandera.

## Parámetros

- Asientos por equipo: **2** · Equipos: **10** · Autos: **20** · Carreras de F1: **17**
- topTeamTier: 85 · gridRefTier: 73 · refuerzo tardío desde la temporada 10 de la partida
- Equipos con chance de "proyecto sorpresa": williams, sauber, alpine, aston

## Escuderías y pilotos titulares (de mejor a peor auto)

### Mercedes — tier 96
id `mercedes` · identidad: Mercedes (desde 2020) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| L. Hamilton | 35 | **98** | 98-99 | 40-47 | 98 | gb |
| V. Bottas | 30 | **85** | 86-87 | 36-41 | 68 | fi |

### Red Bull — tier 88
id `redbull` · identidad: Red Bull (desde 2020) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| M. Verstappen | 22 | **95** | 96-99 | 37-45 | 88 | nl |
| Alex Albon | 23 | **78** | 80-84 | 34-38 | 50 | th |

### Racing Point — tier 80
id `aston` · identidad: Racing Point (desde 2020) → Aston Martin (2021)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Sergio Pérez | 30 | **83** | 84-86 | 36-41 | 66 | mx |
| Lance Stroll | 21 | **73** | 74-78 | 33-42 | 36 | ca |

### McLaren — tier 79
id `mclaren` · identidad: McLaren (desde 2020) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Carlos Sainz | 25 | **84** | 85-88 | 37-43 | 62 | es |
| Lando Norris | 20 | **84** | 92-96 | 38-45 | 52 | gb |

### Renault — tier 77
id `alpine` · identidad: Renault (desde 2020) → Alpine (2021)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| D. Ricciardo | 30 | **87** | 87-88 | 36-41 | 78 | au |
| E. Ocon | 23 | **81** | 82-85 | 34-39 | 52 | fr |

### Ferrari — tier 74
id `ferrari` · identidad: Ferrari (desde 2020) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| S. Vettel | 32 | **86** | 86-88 | 38-43 | 92 | de |
| C. Leclerc | 22 | **89** | 92-95 | 38-45 | 74 | mc |

### AlphaTauri — tier 70
id `racingbulls` · identidad: AlphaTauri (desde 2020) → RB (2024) → Racing Bulls (2025)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| D. Kvyat | 25 | **77** | 77-80 | 30-36 | 48 | ru |
| Pierre Gasly | 24 | **80** | 81-85 | 34-39 | 54 | fr |

### Alfa Romeo — tier 56
id `sauber` · identidad: Alfa Romeo (desde 2020) → Kick Sauber (2024) → Audi (2026)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| K. Räikkönen | 40 | **80** | 80-81 | 41-44 | 88 | fi |
| A. Giovinazzi | 26 | **75** | 76-80 | 29-34 | 38 | it |

### Haas — tier 53
id `haas` · identidad: Haas (desde 2020)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| R. Grosjean | 33 | **77** | 77-78 | 34-37 | 52 | fr |
| K. Magnussen | 27 | **77** | 77-79 | 32-36 | 50 | dk |

### Williams — tier 50
id `williams` · identidad: Williams (desde 2020) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| G. Russell | 22 | **80** | 88-92 | 38-44 | 48 | gb |
| N. Latifi | 24 | **70** | 72-76 | 28-33 | 28 | ca |

## Altas reales de equipos (solo modo "cambios reales")

| Año | Equipo | tier | id |
|---|---|---|---|
| 2026 | Cadillac | 50 | `cadillac` |

## Cantera libre al arrancar (24)

Pilotos sin asiento que esperan una vacante. *ex* = ya corrió antes en F1. *Prefiere* = equipos donde es más probable que fiche.

| Piloto | Edad | ovr | pot | retiro | rep | nac | Prefiere |
|---|---|---|---|---|---|---|---|
| N. Hülkenberg | 32 | **80** | 80-82 | 36-41 | 58 | de | *ex* · alpine, aston, sauber |
| R. Kubica | 35 | **70** | 70-72 | 37-41 | 60 | pl | *ex* · sauber, williams |
| S. Vandoorne | 28 | **76** | 76-80 | 33-38 | 46 | be | *ex* · alpine, williams |
| M. Ericsson | 29 | **72** | 72-75 | 33-38 | 34 | se | *ex* · haas, sauber |
| S. Sirotkin | 24 | **71** | 72-76 | 30-35 | 32 | ru | *ex* · williams, haas |
| B. Hartley | 30 | **70** | 70-72 | 33-37 | 34 | nz | *ex* · racingbulls, haas |
| P. Fittipaldi | 23 | **68** | 74-78 | 32-37 | 30 | br | haas |
| C. Ilott | 21 | **72** | 83-87 | 34-40 | 36 | gb | sauber, haas |
| Mick Schumacher | 20 | **72** | 85-90 | 36-42 | 58 | de | haas, sauber, ferrari |
| Yuki Tsunoda | 19 | **70** | 86-90 | 36-42 | 40 | jp | racingbulls, redbull |
| N. Mazepin | 21 | **66** | 72-77 | 30-34 | 30 | ru | haas |
| C. Lundgaard | 18 | **66** | 84-88 | 36-41 | 30 | dk | alpine, sauber |
| J. Aitken | 24 | **71** | 75-79 | 32-36 | 30 | gb | williams |
| Nyck de Vries | 25 | **76** | 80-85 | 34-39 | 42 | nl | williams, racingbulls, alpine |
| R. Shwartzman | 20 | **71** | 84-88 | 35-40 | 34 | ru | ferrari, sauber |
| Zhou Guanyu | 20 | **70** | 78-83 | 33-38 | 34 | cn | alpine, sauber |
| J. Vips | 19 | **67** | 83-87 | 34-39 | 28 | ee | racingbulls, redbull |
| F. Drugovich | 19 | **66** | 80-85 | 34-38 | 28 | br | aston, racingbulls |
| Oscar Piastri | 18 | **68** | 92-97 | 37-45 | 32 | au | alpine, mclaren |
| T. Pourchaire | 16 | **62** | 86-91 | 36-42 | 24 | fr | sauber |
| Liam Lawson | 18 | **66** | 85-89 | 35-39 | 28 | nz | racingbulls, redbull |
| D. Hauger | 16 | **60** | 86-91 | 36-42 | 22 | no | redbull, racingbulls |
| L. Sargeant | 19 | **64** | 78-83 | 33-38 | 24 | us | williams |
| M. Armstrong | 19 | **66** | 80-84 | 33-38 | 24 | nz | ferrari, mclaren |

## Refuerzo tardío (21 pilotos ficticios)

Entran a partir de la temporada 10 de la partida. Es el mismo grupo que usa 2026.

Mateo Leclerc, L. Verstappen, James Hunt-Lauda, Schumacher-Stewart, Zeta Zalazar, B. Robledo, Sonny Hayes, Annes Notrya, G. Mazzacane, Nalian Lotín, T. Inoue-Kobayashi, Alcides Fangio, N. Mazepin II, F. Briatore, Mardenborough, Castolo, Devon Butler, C. Akkerman, Callie Mayer, M. Filippis II, L. Lombardi

## Categorías previas a F1

| Categoría | Carreras/temp. | tier base | Autos en parrilla |
|---|---|---|---|
| Fórmula 4 (F4) | 9 | 38 | 30 |
| Formula Regional (FR) | 11 | 48 | 30 |
| FIA Fórmula 3 (F3) | 13 | 58 | 30 |
| FIA Fórmula 2 (F2) | 14 | 66 | 22 |

### Equipos de Fórmula 4

VAR · Mücke · US Racing · R-ace GP · Prema · Jenzer ⚠

### Equipos de Formula Regional

Prema · MP · VAR · R-ace GP · Arden · G4 · ART

### Equipos de FIA Fórmula 3

Prema · Trident · ART · Campos · Hitech · MP · Carlin ⚠ · Charouz ⚠ · HWA ⚠ · Jenzer ⚠

### Equipos de FIA Fórmula 2

Prema · ART · Campos · DAMS · MP · Virtuosi · Carlin ⚠ · Charouz ⚠ · HWA ⚠ · Hitech · Trident

## Palmarés previo (pestaña "Historia")

M. Schumacher: 7 · L. Hamilton: 6 · J.M. Fangio: 5 · S. Vettel: 4 · A. Prost: 4

## Logos que faltan (⚠ = se muestran las iniciales)

- f4: Jenzer
- f3: Carlin
- f3: Charouz
- f3: HWA
- f3: Jenzer
- f2: Carlin
- f2: Charouz
- f2: HWA
- F1: Alfa Romeo (id sauber, desde 2020)
- F1: Kick Sauber (id sauber, desde 2024)
- F1: AlphaTauri (id racingbulls, desde 2020)
- F1: RB (id racingbulls, desde 2024)
- F1: Renault (id alpine, desde 2020)
- F1: Racing Point (id aston, desde 2020)

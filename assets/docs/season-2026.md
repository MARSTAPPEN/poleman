# Temporada 2026 — datos para revisar

> Generado automáticamente desde `data/season-2026.js`. **Para cambiar algo, editá ese archivo** (o pedímelo) y regenerá con `node tools/season-report.js 2026`.

## Cómo leer los números

- **tier** (equipos): nivel base del auto, 0-100. Es el valor hacia el que tira la evolución del equipo (referencia: 2026 va de 50 a 93).
- **ovr** (pilotos): nivel al arrancar la temporada, 0-100 (campeón dominante ≈ 95-98, titular promedio ≈ 77-84).
- **pot**: rango del que se sortea el techo del piloto (si tiene margen para crecer). **retiro**: rango del que se sortea la edad de retiro.
- **rep**: reputación 0-100. **edad**: al arrancar la temporada. **nac**: código de bandera.

## Parámetros

- Asientos por equipo: **2** · Equipos: **11** · Autos: **22** · Carreras de F1: **22**
- topTeamTier: 85 · gridRefTier: 74 · refuerzo tardío desde la temporada 10 de la partida
- Equipos con chance de "proyecto sorpresa": williams, sauber, aston, alpine

## Escuderías y pilotos titulares (de mejor a peor auto)

### Red Bull — tier 93
id `redbull` · identidad: Red Bull (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| M. Verstappen | 28 | **97** | 97-99 | 39-45 | 98 | nl |
| Isack Hadjar | 21 | **76** | 85-88 | 38-39 | 48 | fr |

### Mercedes — tier 92
id `mercedes` · identidad: Mercedes (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| G. Russell | 28 | **89** | 91-94 | 39-44 | 72 | gb |
| Kimi Antonelli | 20 | **83** | 92-99 | 36-47 | 67 | it |

### Ferrari — tier 91
id `ferrari` · identidad: Ferrari (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| C. Leclerc | 28 | **91** | 92-94 | 39-45 | 75 | mc |
| L. Hamilton | 41 | **90** | 91-92 | 46-49 | 98 | gb |

### McLaren — tier 90
id `mclaren` · identidad: McLaren (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Lando Norris | 26 | **93** | 94-95 | 38-45 | 82 | gb |
| Oscar Piastri | 25 | **91** | 94-97 | 37-45 | 78 | au |

### Racing Bulls — tier 72
id `racingbulls` · identidad: Racing Bulls (desde 2026)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Liam Lawson | 24 | **74** | 83-87 | 35-39 | 42 | nz |
| A. Lindblad | 18 | **68** | 88-92 | 36-40 | 40 | gb |

### Alpine — tier 66
id `alpine` · identidad: Alpine (desde 2026)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Pierre Gasly | 30 | **79** | 81-85 | 36-39 | 55 | fr |
| F. Colapinto | 23 | **78** | 86-94 | 39-45 | 54 | ar |

### Audi — tier 64
id `sauber` · identidad: Audi (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| N. Hülkenberg | 38 | **80** | 81-82 | 40-46 | 58 | de |
| G. Bortoleto | 21 | **76** | 87-89 | 36-45 | 48 | br |

### Haas — tier 62
id `haas` · identidad: Haas (desde 2026)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| E. Ocon | 29 | **78** | 80-84 | 36-39 | 52 | fr |
| O. Bearman | 21 | **75** | 87-91 | 36-43 | 50 | gb |

### Aston Martin — tier 56
id `aston` · identidad: Aston Martin (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| F. Alonso | 44 | **87** | 88-89 | 48-52 | 88 | es |
| Lance Stroll | 27 | **70** | 71-72 | 30-49 | 30 | ca |

### Williams — tier 53
id `williams` · identidad: Williams (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Carlos Sainz | 31 | **80** | 83-85 | 39-44 | 70 | es |
| Alex Albon | 30 | **79** | 84-87 | 36-39 | 60 | th |

### Cadillac — tier 50
id `cadillac` · identidad: Cadillac (desde 2026) · icónico (nunca cambia al azar)

| Piloto | Edad | ovr | pot | retiro | rep | nac |
|---|---|---|---|---|---|---|
| Sergio Pérez | 36 | **81** | 82-85 | 37-43 | 62 | mx |
| V. Bottas | 36 | **75** | 76-85 | 38-44 | 60 | fi |

## Cantera libre al arrancar (20)

Pilotos sin asiento que esperan una vacante. *ex* = ya corrió antes en F1. *Prefiere* = equipos donde es más probable que fiche.

| Piloto | Edad | ovr | pot | retiro | rep | nac | Prefiere |
|---|---|---|---|---|---|---|---|
| R. Câmara | 21 | **72** | 85-89 | 37-45 | 38 | br | ferrari, haas |
| Nikola Tsolov | 19 | **71** | 83-87 | 37-45 | 35 | bg | redbull, racingbulls |
| Gabriele Minì | 21 | **71** | 82-86 | 38-43 | 36 | it | alpine |
| Colton Herta | 26 | **76** | 81-85 | 36-42 | 55 | us | cadillac |
| F. Slater | 17 | **68** | 90-94 | 38-45 | 32 | gb | mercedes, williams |
| T. Taponen | 19 | **70** | 85-89 | 37-41 | 34 | fi | ferrari, haas |
| U. Ugochukwu | 19 | **69** | 84-88 | 38-42 | 33 | us | mclaren, williams |
| Noel León | 21 | **68** | 78-82 | 36-40 | 30 | mx | cadillac |
| Théophile Naël | 19 | **66** | 81-85 | 39-43 | 28 | fr | alpine |
| Louis Sharp | 19 | **67** | 82-86 | 37-41 | 29 | gb | racingbulls, redbull |
| N. Varrone | 25 | **73** | 80-88 | 40-44 | 42 | ar | cadillac |
| M. Colnaghi | 18 | **67** | 88-93 | 37-44 | 27 | it | racingbulls, alpine |
| Simón Bulbarella | 17 | **62** | 78-83 | 39-43 | 22 | ar | williams |
| Fausto Arnaudo | 16 | **61** | 82-86 | 38-42 | 20 | ar | racingbulls |
| S. Vettel | 39 | **83** | 83-90 | 43-47 | 90 | de | *ex* · sauber, aston |
| D. Ricciardo | 37 | **78** | 78-87 | 40-45 | 82 | au | *ex* · cadillac, haas |
| Alex Palou | 29 | **82** | 85-88 | 41-45 | 75 | es | *ex* · williams, cadillac |
| Mick Schumacher | 27 | **75** | 79-82 | 38-41 | 65 | de | *ex* · sauber, alpine |
| Nyck de Vries | 31 | **74** | 76-78 | 38-41 | 52 | nl | *ex* · haas |
| Jessica Hawkins | 29 | **70** | 76-85 | 36-40 | 50 | gb | aston |

## Refuerzo tardío (21 pilotos ficticios)

Entran a partir de la temporada 10 de la partida. 

Mateo Leclerc, L. Verstappen, James Hunt-Lauda, Schumacher-Stewart, Zeta Zalazar, B. Robledo, Sonny Hayes, Annes Notrya, G. Mazzacane, Nalian Lotín, T. Inoue-Kobayashi, Alcides Fangio, N. Mazepin II, F. Briatore, Mardenborough, Castolo, Devon Butler, C. Akkerman, Callie Mayer, M. Filippis II, L. Lombardi

## Categorías previas a F1

| Categoría | Carreras/temp. | tier base | Autos en parrilla |
|---|---|---|---|
| Fórmula 4 (F4) | 9 | 38 | 30 |
| Formula Regional (FR) | 11 | 48 | 30 |
| FIA Fórmula 3 (F3) | 13 | 58 | 30 |
| FIA Fórmula 2 (F2) | 14 | 66 | 22 |

### Equipos de Fórmula 4

VAR · Mücke · US Racing · R-ace GP · Prema

### Equipos de Formula Regional

Prema · MP · VAR · R-ace GP · Arden · G4

### Equipos de FIA Fórmula 3

Prema · Trident · ART · Campos · Hitech · Rodin

### Equipos de FIA Fórmula 2

Prema · ART · Campos · DAMS · MP · Virtuosi · Rodin

## Palmarés previo (pestaña "Historia")

M. Schumacher: 7 · L. Hamilton: 7 · J.M. Fangio: 5 · M. Verstappen: 4 · A. Prost: 4

## Logos que faltan (⚠ = se muestran las iniciales)


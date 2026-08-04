# QA Report — V19.4 Alpha 7

## Base

- Base funcional: V19.4 Alpha 2.
- No se heredan los filtros ni las reducciones de Alpha 3–6.
- Total de fichas del Atlas: **1.886**.

## Alcance protegido

- A0: sin cambios.
- A1: sin cambios.
- Definición, sinónimos, notas de uso, ejemplos generales, conjugaciones y perfectum: sin cambios.
- Único campo corregido en fichas existentes: `sentencePatterns`.
- Excepción de metadatos: 12 asignaciones editoriales de nivel para habilitar C1 y C2.

## Cobertura de las correcciones

| Nivel | Fichas totales | Series corregidas en Alpha 7 | Frases desnudas restantes en A2/B2 |
| --- | ---: | ---: | ---: |
| A0 | 2 | 0 | no aplica |
| A1 | 73 | 0 | no aplica |
| A2 | 39 | 33 | 0 |
| B1 | 1.740 | 26 | revisión por lotes pendiente |
| B2 | 20 | 12 | 0 |
| C1 | 8 | 8 | 0 |
| C2 | 4 | 4 | 0 |

Total de series cuyo contenido cambió: **83**.

## Invariantes automáticos

- Las 1.886 fichas siguen presentes.
- Todas las fichas A0 y A1 son idénticas antes y después de la capa.
- Fuera de `sentencePatterns` y las 12 asignaciones C1/C2 no cambia ningún campo.
- Cada ficha conserva las mismas claves, el mismo orden y el mismo número de tarjetas en `Zinspositie en gebruik`.
- La capa se aplica en la bundle antes de renderizar la interfaz.
- El Knowledge Graph conserva todos los verbos y no aplica filtros de publicación.

## Resultados

- Tests automatizados: **167/167**.
- Controles de contenido: **81/81**.
- Auditoría léxica: 2.773 tarjetas, 0 bloqueos.
- Diccionario central: 1.647 entradas; A0–A2 sin `controle nodig`.
- Auditoría curricular: 19 módulos gramaticales, 8 módulos de preguntas y 54 focos avanzados.
- Knowledge Graph: **27.289 nodos**, **90.155 relaciones**, 0 controles bloqueantes.

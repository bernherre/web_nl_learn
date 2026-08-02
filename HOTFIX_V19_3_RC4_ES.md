# Actualización V19.3 RC4

## Problema corregido

Las rutas C1 y C2 estaban visibles, pero tres sistemas centrales seguían anclados en B2:

- la Gramática Atlas no contenía módulos C1/C2;
- la sección de Preguntas terminaba en B2;
- el Knowledge Graph mostraba una versión antigua y no representaba las estructuras gramaticales avanzadas como relaciones navegables.

## Cambios

- Se añadieron 19 módulos gramaticales avanzados: 9 para C1 y 10 para C2.
- Las 54 estructuras gramaticales presentes en los 18 temas C1/C2 se vincularon a módulos canónicos.
- Se añadieron 8 lecciones de preguntas avanzadas y 12 prácticas nuevas.
- La práctica de preguntas respeta ahora el nivel seleccionado.
- El Knowledge Graph incorpora nodos `grammar_focus` y las relaciones `uses_grammar_focus`, `refines_grammar` y `applies_grammar`.
- Los filtros del grafo incluyen C1 y C2.
- La versión y el alcance visibles del grafo se sincronizan con la aplicación.
- Se añadió `audit:curriculum` al pipeline `npm run check`.

## Resultado

- 151/151 tests superados.
- 81/81 controles de contenido aprobados.
- Auditoría léxica aprobada.
- Auditoría curricular aprobada.
- 25.641 nodos y 83.087 relaciones en el Knowledge Graph.
- 0 controles abiertos, 0 advertencias y 0 errores.

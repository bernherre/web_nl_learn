# web_nl_learn V19.4 Alpha 2

## Objetivo cumplido

Esta entrega elimina la deuda visible `controle nodig` de A1 y A2 mediante enriquecimiento real. No se cambió el color del aviso ni se eliminó el fallback: se añadieron definiciones específicas y ejemplos contextuales hasta que la auditoría calculó cobertura completa.

## Enriquecimiento realizado

- 666 entradas nuevas para la deuda restante de A1.
- 679 entradas nuevas para la deuda restante de A2.
- 1.647 entradas en el diccionario central consolidado.
- A0: 178 de 178 términos con explicación fiable.
- A1: 966 de 966 términos con explicación fiable.
- A2: 917 de 917 términos con explicación fiable.
- Cero tarjetas activas con `controle nodig` en A0, A1 y A2.

Cada nueva entrada contiene término canónico, definición neerlandesa específica, ejemplo contextual, tipo lingüístico, nivel, tema, estado editorial y fuente de revisión.

## Integración técnica

Las nuevas entradas se separan en `js/lexicon-a1.js` y `js/lexicon-a2.js`. `js/lexicon.js` las integra en la misma búsqueda central que utiliza la interfaz. El build clásico, el Service Worker, las pruebas y el Knowledge Graph cargan ambas capas antes de cualquier consulta.

La auditoría central es ahora bloqueante para los tres niveles: una nueva tarjeta A0, A1 o A2 sin fuente fiable hará fallar `npm run check`.

## Correcciones lingüísticas de fuente

Se corrigieron dos artículos neerlandeses que todavía estaban presentes en bancos de contenido:

- `de duin` → `het duin`;
- `de waterschap` → `het waterschap`.

## Knowledge Graph

- 27.289 nodos;
- 90.155 relaciones;
- 1.647 nodos de lexema central;
- 1.903 relaciones `resolves_to_lexeme`;
- 1.870 relaciones `teaches_lexeme`;
- 0 controles bloqueantes.

## Validación

- 160/160 pruebas automatizadas.
- 81/81 controles de contenido.
- 2.773 tarjetas en la auditoría léxica general.
- 0 errores y 0 advertencias.
- 19 módulos gramaticales C1/C2 y 8 módulos de preguntas avanzadas preservados.
- 1.886 verbos revisados y 8.072 ejercicios preservados.

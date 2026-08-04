# QA report — web_nl_learn V19.4 Alpha 2

## Resultado

**APROBADO COMO ENTREGA ALPHA DE ENRIQUECIMIENTO A0–A2**

Las tarjetas de los bancos de palabras A0, A1 y A2 tienen una definición fiable y un ejemplo contextual. La deuda no se ocultó: el mismo motor que antes mostraba `controle nodig` calcula ahora cero pendientes en los tres niveles.

## Cobertura lingüística

| Nivel | Términos únicos | Explicación fiable | `controle nodig` |
|---|---:|---:|---:|
| A0 | 178 | 178 | 0 |
| A1 | 966 | 966 | 0 |
| A2 | 917 | 917 | 0 |

- Entradas centrales totales: 1.647.
- Nuevo lote A1: 666 entradas.
- Nuevo lote A2: 679 entradas.
- Entradas duplicadas normalizadas: 0.
- Definiciones genéricas detectadas: 0.
- Ejemplos inválidos o contextualmente vacíos: 0.
- Correcciones de artículo: `het duin` y `het waterschap`.

## Validaciones técnicas

- `npm run check`: aprobado.
- Tests: 160/160.
- Controles de contenido: 81/81.
- Warnings: 0.
- Errores: 0.
- Auditoría general: 2.773 tarjetas controladas y 0 formas bloqueantes.
- Auditoría curricular: 19 módulos gramaticales, 8 módulos de preguntas y 54 focos avanzados.
- Bundle clásico: 29 fuentes ordenadas por un único manifiesto.
- `lexicon-a1.js` y `lexicon-a2.js` definidos antes del lexicon consolidado.
- Service Worker y cache busting sincronizados con `19.4.0-alpha.2`.

## Knowledge Graph

- Nodos: 27.289.
- Relaciones: 90.155.
- Lexemas centrales: 1.647.
- Ejercicios: 8.072.
- Controles bloqueantes: 0.

## Alcance honesto

La validación automática comprueba cobertura, estructura, definiciones no genéricas, ejemplos contextuales, duplicados, bundle, cache y relaciones del grafo. No equivale a afirmar que cada matiz lingüístico posible haya sido revisado por una institución externa; las correcciones futuras siguen siendo compatibles con la fuente central.

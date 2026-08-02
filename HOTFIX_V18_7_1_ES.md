# Hotfix V18.7.1

## Error corregido

La bundle `js/app.js` llamaba a `createKnowledgeGraphExplorer(...)`, pero el proceso de build no había incluido la implementación de `js/knowledge-graph.js`. Esto provocaba:

```text
Uncaught ReferenceError: createKnowledgeGraphExplorer is not defined
```

## Cambios

- `scripts/build-classic.mjs`: ahora inserta `knowledgeGraph` antes de `content` y `main`.
- `js/app.js`: bundle regenerada con la función definida antes de la inicialización.
- `tests/v18-browser-bundle-regression.test.js`: nueva prueba que detecta exactamente esta regresión.
- `index.html`, `package.json` y `service-worker.js`: versión `18.7.1` y nuevo caché para sustituir la bundle defectuosa.
- Grafo regenerado con metadatos `18.7.1`.

## Validación

- 91/91 pruebas automatizadas superadas.
- 64 controles de contenido: 63 correctos, 1 advertencia conocida y 0 errores.
- `node --check js/app.js` superado.
- La definición de `createKnowledgeGraphExplorer` aparece en la bundle antes de su invocación.

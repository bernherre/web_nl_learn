# Hotfix V19.4 Alpha 9 — carga del Knowledge Graph

## Problema

La Service Worker interceptaba `data/content-knowledge-graph.json` y `data/content-knowledge-graph.js`. Cada representación pesa aproximadamente 43 MB. Cuando `cache.put()` excedía la cuota disponible, la respuesta de red correcta se convertía en un fallo.

Además, las rutas de fallback podían resolver con `null` o rechazar la promesa. `event.respondWith()` exige siempre una instancia de `Response`, por lo que el navegador mostraba:

- `Failed to convert value to 'Response'`
- `Netwerk en cache zijn niet beschikbaar`
- `net::ERR_FAILED`

## Corrección

- Los dos payloads del Knowledge Graph ya no son interceptados por la Service Worker.
- El navegador los solicita directamente al servidor.
- Un error de Cache Storage no invalida una respuesta de red válida.
- `networkFirst()` y `staleWhileRevalidate()` devuelven siempre una `Response`, incluso sin red ni caché.
- Se eliminó el fallback basado en `Promise.reject`.
- La Service Worker se registra con `?v=${APP_VERSION}` y la aplicación recarga una sola vez después de `controllerchange`.

## Alcance protegido

No se modificó ninguna ficha del Atlas, ninguna definición, ningún sinónimo ni ningún contenido de `Zinspositie en gebruik`. Los archivos fuente verbales son byte a byte idénticos a Alpha 8.

## Validación

- Knowledge Graph: 27.289 nodos y 90.155 relaciones.
- Ambos archivos del grafo responden HTTP 200 mediante servidor local.
- Pruebas específicas de Service Worker, cuota de caché y carga del grafo aprobadas.
- 170 pruebas automatizadas aprobadas.
- 81/81 controles de contenido aprobados.

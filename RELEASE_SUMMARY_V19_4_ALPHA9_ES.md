# V19.4 Alpha 9 — resumen

Hotfix técnico de la carga del Knowledge Graph.

- Evita que la Service Worker intercepte y duplique en caché los payloads de 43 MB.
- Conserva una respuesta de red válida aunque Cache Storage falle por cuota.
- Garantiza que todos los fallbacks de fetch devuelvan una `Response`.
- Fuerza la actualización versionada de la Service Worker y una sola recarga al activarse.
- Mantiene intacto el Atlas completo de 1.886 verbos y el contenido de Alpha 8.
- Mantiene el Knowledge Graph completo: 27.289 nodos y 90.155 relaciones.

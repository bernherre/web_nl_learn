# web_nl_learn V19.3 RC5

RC5 corrige un fallo de ejecución exclusivo de la bundle clásica: los alias de importación definidos en `main.js` se eliminaban durante el build. La solución conserva ahora esos alias de forma genérica y evita que futuras importaciones con `as` vuelvan a producir variables indefinidas en navegador.

## Cambios

- Corrección de `baseQuestionTopics is not defined`.
- Conservación de `baseQuestionPractice` y otros alias futuros.
- Nueva prueba de regresión de orden y existencia.
- Sincronización de versión visible del Knowledge Graph.
- Sin cambios destructivos sobre el contenido curricular de RC4.

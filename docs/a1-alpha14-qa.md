# Alpha 14 — comprobaciones de entrega

## Contenido y relaciones

- 32 lecciones adicionales dentro de los ocho temas originales de A1.
- 12 verbos añadidos: groeten, typen, pakken, verstaan, smeren, duren, vertrekken, rennen, snappen, bezoeken, kletsen y dekken. Begrijpen ya existía en una capa de revisión y se reutiliza.
- Las 1.886 fichas anteriores se compararon con la salida de todas las capas de corrección: ningún campo cambió.
- 120 ejercicios nuevos, con respuestas, distractores o campo de respuesta, explicación y acceso a la lección.
- Diccionario, verbos, lecciones, transcripciones y ejercicios están conectados explícitamente en el grafo.
- Comparación con el repositorio de partida: 27.346 nodos y 91.063 relaciones conservados. Resultado: 27.989 nodos y 93.949 relaciones, sin referencias rotas.
- Se conservan los IDs y los tres ejercicios originales de cada una de las 56 rutas guiadas. Los sinónimos históricos mantienen sus nodos y enlaces, con resolución adicional a los nuevos verbos.

## Pruebas

- `npm run check`: compilación, sintaxis, pruebas y auditorías.
- 196 pruebas automáticas aprobadas; 81 controles de contenido aprobados.
- DOM con la aplicación compilada: apertura de las 32 lecciones, enlaces de verbos, 120 ejercicios, comprobación de respuestas correctas y feedback, solicitudes de voz nl-NL y navegación de ida/vuelta al grafo.
- Chromium: arranque sin errores JavaScript, selección de lección, ficha de verstaan, respuesta de conjugación, feedback, retorno a la lección y apertura del nodo del grafo; comprobación a 1440 y 390 píxeles de ancho. Sin desbordamiento horizontal en la vista móvil comprobada.
- ZIP: integridad comprobada y presencia de fuentes, bundle, grafo JSON y JS, audio heredado, licencia y atribuciones.

## Límites de la comprobación

La pronunciación usa las voces instaladas en el navegador/sistema. Se comprobaron los controles y las solicitudes de reproducción; no se certifica aquí la calidad audible de cada voz que pueda usar otro equipo. No se han añadido grabaciones del libro. Las pruebas de navegador cubren los recorridos indicados, no todas las combinaciones posibles de configuración.

## Prueba local

Extraer en una carpeta independiente. Ejecutar `run-local.bat` (Python) o `py -m http.server 8000` desde la carpeta del proyecto. Abrir http://localhost:8000. En A1, elegir un tema y abrir “Extra lessen”. Para volver a generar el bundle tras editar módulos: `npm run build`; tras modificar contenido conectado: `npm run generate:graph`.

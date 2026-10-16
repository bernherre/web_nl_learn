# Alpha 23 — Corrección de GitHub Actions

El job 117192170178 falló con 209/210 pruebas por una aserción de texto antigua en tests/static.test.js. La aserción exigía literalmente utterance.lang = 'nl-NL', aunque Alpha 22 selecciona el idioma de la voz y usa nl-NL como respaldo.

Se conserva la comprobación que impide usar WAV en la aplicación y se amplía a la versión compilada. La validación del idioma se sustituye por pruebas de ejecución sobre main.js y app.js: voz nl-NL, voz nl-BE y ausencia de voz.

Validación local: npm run check finaliza con código 0; 212/212 pruebas; 81/81 validaciones de contenido; auditorías completas aprobadas. No se ha ejecutado un nuevo job remoto desde este entorno.

Incluye los cambios de audio de Alpha 22. Safari en iPhone todavía requiere confirmar reproducción audible.

Uso: extraer y copiar el contenido de web_nl_learn sobre la carpeta del repositorio. Conservar la carpeta .git existente. Ejecutar npm run check; añadir, confirmar y subir los cambios. El push a main inicia de nuevo el flujo de despliegue. Para uso local ejecutar run-local.bat (puerto 8000).

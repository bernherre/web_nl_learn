📘 Curso de Gramática de Neerlandés para Hispanohablantes
Sitio estático con audio, ejemplos y diálogos prácticos

Este repositorio contiene un sitio web estático completo que enseña gramática del neerlandés (holandés) a hispanohablantes.
El curso está diseñado para ser claro, completo y totalmente navegable desde GitHub Pages.

Incluye:

Gramática detallada desde nivel inicial hasta intermedio–alto

Alfabeto neerlandés con pronunciación

Combinaciones fonéticas características (ui, ij/ei, eu, etc.)

Tiempos verbales explicados con ejemplos

Voz pasiva con “worden” y “zijn”

Diálogos prácticos (restaurante, cafetería, supermercado, etc.)

Secciones especiales con audios pre-generados

Estructura en capítulos al estilo de un manual profesional

🌐 Demo (GitHub Pages)

URL del sitio:
(reemplaza con la URL una vez desplegado)

https://<tu-usuario>.github.io/<nombre-del-repo>/

Estructura
├───audio
│   ├───alfabeto
│   ├───combinaciones
│   ├───dialogos
│   └───ejemplos
├───css
├───images
├───js
└───scripts -- crea los audios


Los archivos de audio no se generan en el frontend.
Se deben producir previamente con un script TTS.

🔊 Generación de audios (antes del despliegue)

Los audios deben generarse antes de publicar el sitio, usando cualquier motor TTS.
El proyecto asume rutas como:

audio/alfabeto/nl_a.wav
audio/combinaciones/ui.wav
audio/dialogos/restaurante_01.wav


Puedes usar un script de Python con la librería TTS.
Ejemplo obligatorio de referencia (NO se ejecuta en el sitio, solo en tu máquina):

from TTS.api import TTS

tts = TTS(model_name="tts_models/en/ljspeech/tacotron2-DDC", progress_bar=False, gpu=False)
tts.tts_to_file(
    text="hallo, ik hoe van te",
    file_path="output.wav",
    lang="nl"
)


Ese script interno debería recorrer una lista de textos y generar todos los audios en un solo run.

🚀 Despliegue en GitHub Pages

Haz commit del proyecto.

En GitHub, ve a:
Settings → Pages → Deploy from branch

Selecciona:

Branch: main (o gh-pages)

Folder: /root (o /docs si usas esa carpeta)

Guarda cambios.

Espera 1–2 minutos a que se genere el build.

Importante:
Asegúrate de que el archivo principal se llame:

index.html


Y que las rutas sean relativas, por ejemplo:

css/styles.css
js/main.js
audio/dialogos/restaurante_01.wav


Evita rutas absolutas como /css/styles.css, que rompen GitHub Pages.

📘 Contenido del curso

El sitio incluye:

✔ Gramática completa

Artículos: de, het, een

Sustantivos y plural

Pronombres

Adjetivos y adverbios

Verbo: presente, pasado (OVT y VTT), futuro, condicional

Voz pasiva con worden/zijn

Verbos modales

Verbos separables

✔ Fonética y pronunciación

Alfabeto neerlandés

Sonido de cada letra (con audio)

Combinaciones típicas: ui, ij/ei, oe, sch, etc.

✔ Conversaciones prácticas

Con audio + traducción al español:

Restaurante (incluye opciones vegetarianas y veganas)

Cafetería

Supermercado

Pedir direcciones

Presentarse

Visita al médico (dieta veg/vegana)

Small talk

✔ Resumen final de gramática

Con tablas compactas y ejemplos rápidos.

🛠️ Tecnologías utilizadas

HTML5

CSS3

JavaScript vanilla

Audio HTML nativo (<audio controls>)

Sin frameworks.
Sin dependencias externas.
Listo para correr en cualquier hosting estático.

🧩 Solución de problemas
❗ El sitio se ve mal en GitHub Pages o muestra 404

Probablemente las rutas están mal configuradas.

Usa rutas relativas:

./css/styles.css
./js/main.js

❗ Los audios no se reproducen

Verifica:

Que los archivos existan en audio/...

Que estén en minúsculas si así los referencia el HTML

Que GitHub Pages haya terminado de desplegar

👨‍💻 Contribuciones

Puedes:

Añadir audios

Mejorar explicaciones

Corregir gramática

Crear más diálogos

Mejorar diseño responsive

PR bienvenidos.

📜 Licencia

Puedes elegir entre MIT, GPL o Creative Commons.
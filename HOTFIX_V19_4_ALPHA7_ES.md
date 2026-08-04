# Hotfix V19.4 Alpha 7 — restauración del Atlas y corrección focalizada

## Problema

Las versiones Alpha 3–6 intentaron tratar una deuda localizada en `Zinspositie en gebruik` mediante cambios globales. El resultado fue una reducción del contenido visible y la sustitución de la cuadrícula original por notas editoriales o conjuntos más pequeños de ejemplos.

## Decisión

Alpha 7 se reconstruye desde **V19.4 Alpha 2**.

- Las **1.886 fichas** permanecen visibles.
- A0 y A1 no se modifican.
- Ninguna definición, lista de sinónimos, nota de uso, conjugación, perfectum, imagen, ejercicio o ruta se reemplaza.
- En las fichas existentes solo se modifica `sentencePatterns`, que alimenta la sección `Zinspositie en gebruik`.
- La sección conserva exactamente sus claves, su orden y el número de tarjetas que tenía cada ficha en Alpha 2.

## Correcciones

- 33 fichas A2 con ejemplos contextualizados.
- 26 fichas B1 del primer lote seguro.
- 12 fichas B2 con ejemplos contextualizados.
- 12 verbos ya existentes distribuidos editorialmente entre C1 y C2 para habilitar ambos filtros.
- `inschrijven`, `ruilen` y `aanbakken` quedan cubiertos por regresiones específicas.

## Límite conocido

B1 todavía contiene fichas con frases demasiado breves. Alpha 7 no declara esa deuda resuelta: restaura el producto completo y establece una arquitectura segura para continuar la revisión por lotes sin tocar otras secciones.

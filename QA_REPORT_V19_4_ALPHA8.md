# QA Report — V19.4 Alpha 8

## Resultado

- Pruebas automatizadas: **165/165**.
- Controles de contenido: **81/81**.
- Auditoría léxica: **2.773 tarjetas**, sin bloqueos.
- Diccionario central: **1.647 entradas**; A0–A2 sin `controle nodig`.
- Auditoría curricular: **19 módulos gramaticales**, **8 módulos de preguntas** y **54 focos avanzados**.
- Knowledge Graph: **27.289 nodos**, **90.155 relaciones**, **0 controles rotos**.

## Invariantes comprobados

- El Atlas conserva exactamente **1.886 fichas**.
- No se elimina, añade ni reordena ninguna ficha.
- A0 y A1 son idénticos a V19.4 Alpha 2.
- No se modifica ninguna sección verbal fuera de `Zinspositie en gebruik`.
- Las claves, el orden y el número de tarjetas de cada serie permanecen intactos.
- `aanstaan` muestra seis frases contextuales y no la plantilla desnuda.
- La capa `applyVerbSentencePatternFixes` está definida antes de ejecutarse en `js/app.js`.

## Cobertura corregida

| Nivel | Series corregidas |
|---|---:|
| A0 | 0 |
| A1 | 0 |
| A2 | 33 |
| B1 | 51 |
| B2 | 12 |
| C1 | 8 |
| C2 | 4 |

## Limitación declarada

B1 contiene 1.740 fichas. Alpha 8 corrige 51 series revisadas manualmente; no representa todavía una corrección integral de B1. Las demás fichas permanecen visibles con la estructura de Alpha 2 hasta recibir una corrección específica.

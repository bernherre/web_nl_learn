# QA report — web_nl_learn V19.4 Alpha 1

## Resultado

**APROBADO COMO ENTREGA ALPHA INCREMENTAL**

La arquitectura del diccionario central, la cobertura completa de A0 y el tema A1 Hallo pasan todas las validaciones automatizadas. La release no afirma que A1 y A2 estén completamente enriquecidos.

## Cobertura entregada

- Entradas centrales: 302.
- A0: 178/178 términos únicos centralizados.
- A1 Hallo: 145/145 términos centralizados.
- A1 total con explicación fiable: 300/966.
- A2 total con explicación fiable: 182/917.

## Validaciones técnicas

- `npm run check`: aprobado.
- Tests: 158/158.
- Controles de contenido: 81/81.
- Warnings: 0.
- Errores: 0.
- `node --check js/app.js`: aprobado.
- Bundle clásico: 27 fuentes construidas desde un único manifiesto.
- Orden del diccionario antes de su primera consulta: validado por regresión.
- Alias ES Modules: preservados y validados.
- Service Worker: versión y `js/lexicon.js` sincronizados.

## Validaciones lingüísticas automáticas

- 302/302 entradas con definición no genérica.
- 302/302 entradas con ejemplo contextual válido.
- 302/302 entradas con nivel, tipo, fuente y estado editorial.
- Duplicados normalizados: 0.
- Términos A0 faltantes: 0.
- Términos A1 Hallo faltantes: 0.

## Knowledge Graph

- Nodos: 25.944.
- Relaciones: 84.517.
- Controles bloqueantes: 0.
- Relaciones nuevas: `resolves_to_lexeme` y `teaches_lexeme`.

## Limitación de QA

Se intentó ejecutar Chromium headless contra el servidor local. El proceso agotó el tiempo por errores de DBus propios del contenedor y no produjo DOM. Por tanto, la entrega está validada mediante pruebas de unidad, contenido, sintaxis, bundle y orden de dependencias, pero el smoke visual automatizado no se declara como superado.

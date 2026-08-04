# Hotfix V19.4 Alpha 8 — Zinspositie en gebruik

## Motivo

V19.4 Alpha 7 mantenía la estructura completa del Atlas, pero solo corregía un lote pequeño de B1. Por ello fichas como `aanstaan` seguían mostrando series desnudas:

- `Ik sta aan.`
- `Ik kan aanstaan.`
- `... omdat ik aansta.`

## Corrección

Alpha 8 se reconstruyó desde V19.4 Alpha 2 y modifica exclusivamente el contenido textual de `Zinspositie en gebruik`.

Para `aanstaan` se muestra ahora:

- `Die harde muziek staat mij niet aan.`
- `Die harde muziek stond mij vroeger ook niet aan.`
- `Die houding heeft mij nooit aangestaan.`
- `Zo’n dwingende toon kan veel mensen niet aanstaan.`
- `... omdat die harde muziek mij niet aanstaat.`
- `Die harde muziek lijkt mij niet aan te staan.`

La indicación del imperativo es `niet gebruikelijk bij deze betekenis`.

## Alcance real

- 1.886 fichas conservadas y visibles.
- 51 series B1 corregidas manualmente.
- 33 series A2 preservadas/corregidas.
- 12 series B2 corregidas.
- 8 fichas C1 y 4 fichas C2 disponibles.
- A0 y A1 permanecen idénticos a Alpha 2.

Alpha 8 **no afirma que las 1.740 fichas B1 estén ya corregidas**. El trabajo restante debe continuar por lotes manuales, sin generación automática insegura y sin retirar contenido.

## Protección contra regresiones

Las pruebas bloquean ahora:

- eliminación, adición o reordenamiento de fichas;
- cambios fuera de `sentencePatterns` y del nivel C1/C2 explícitamente configurado;
- cambios en A0 o A1;
- reducción o alteración de las claves de las tarjetas;
- reaparición de la serie antigua de `aanstaan`;
- omisión de la capa de correcciones en la bundle clásica.

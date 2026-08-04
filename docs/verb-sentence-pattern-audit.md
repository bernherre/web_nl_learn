# Audit — Zinspositie en gebruik V19.4 Alpha 8

## Política

1. La base funcional es V19.4 Alpha 2.
2. Solo se puede cambiar el texto de `sentencePatterns`.
3. No se reduce la cuadrícula ni se sustituyen tarjetas por notas editoriales.
4. No se filtran ni retiran verbos.
5. A0 y A1 no se modifican.
6. Una serie se publica como corrección únicamente cuando fue redactada expresamente; el generador automático experimental no se aplica en runtime.

## Cobertura

- Total de fichas: **1.886**.
- B1 total: **1.740**.
- B1 corregidas en la capa actual: **51**.
- B1 todavía con la serie heredada de Alpha 2: **1.689**.

## Fichas B1 corregidas

`aanbakken`, `aanbetalen`, `aanbevelen`, `aanbieden`, `aanblijven`, `aanboren`, `aanbouwen`, `aanbrengen`, `aandragen`, `aandrijven`, `aandringen`, `aangeven`, `aanhouden`, `aanklagen`, `aankomen`, `aankopen`, `aansluiten`, `aanspreken`, `aanstaan`, `aansturen`, `aantonen`, `aanvangen`, `aanvechten`, `aanvoelen`, `aanzuigen`, `achterstaan`, `parkeren`, `pinnen`, `plannen`, `planten`, `poetsen`, `presenteren`, `produceren`, `proeven`, `publiceren`, `raden`, `reageren`, `realiseren`, `regenen`, `rekenen`, `respecteren`, `retourneren`, `roepen`, `roeren`, `ruiken`, `tekenen`, `telefoneren`, `tellen`, `terugbetalen`, `teruggeven`, `terugsturen`.

## Regresión concreta

La ficha `aanstaan` debe conservar las mismas seis claves:

`hoofdzin`, `verleden`, `perfectum`, `modaal`, `bijzin`, `metTe`.

No se admite volver a `Ik sta aan`, `Ik kan aanstaan` ni `... omdat ik aansta` para la acepción *iemand bevallen*.

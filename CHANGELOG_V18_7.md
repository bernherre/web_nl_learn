# Changelog V18.7 — kennisgraaf en inhoudscontrole

Datum: 2026-08-01

## Toegevoegd

- Een nieuwe, afzonderlijke pagina **Kennisgraaf** die de bestaande navigatie en cursusroutes niet vervangt.
- Een reproduceerbare graafgenerator voor alle gestructureerde inhoudsbanken.
- Zoek- en filterschermen voor betekenis, synoniemen, gebruikslocaties, oefeningen en open controles.
- Betekenisnodes tussen werkwoord en synoniem, zodat een synoniem niet ten onrechte voor alle betekenissen van een lemma geldt.
- Expliciete issue-nodes voor niet nagekeken werkwoorden.
- Een compacte reviewrapportage met foutcodes en wachtrijen.
- Een lui geladen JavaScript-fallback zodat de graaf ook werkt wanneer `index.html` rechtstreeks via `file://` wordt geopend.

## Omvang

- 17.511 nodes.
- 64.590 relaties.
- 47 broncollecties.
- 1.886 werkwoorden.
- 92 handmatig nagekeken werkwoorden met betekenislaag.
- 1.794 werkwoorden in de lexicale reviewwachtrij.
- 8.024 oefeningen.
- 56 themanodes en 9 spiraalthema's.

## Controlemodel

Voor ieder niet nagekeken werkwoord worden de volgende controles zichtbaar gemaakt:

- `definition-missing-or-generic`
- `synonyms-missing`
- `examples-missing`
- `usage-note-missing`
- `generated-patterns-unreviewed`

De graaf vult deze gegevens niet automatisch aan en presenteert geen onbevestigde synoniemen als feiten.

## Validatie

- 90 geautomatiseerde regressietests geslaagd.
- 64 inhoudscontroles uitgevoerd.
- 63 geslaagd.
- 1 expliciete waarschuwing: 1.794 werkwoorden wachten nog op handmatige lexicale review.
- 0 fouten.
- Alle 64.590 relaties verwijzen naar bestaande nodes.

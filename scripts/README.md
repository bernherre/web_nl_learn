# Hulpscripts

## `build-classic.mjs`

Bouwt `js/app.js`, zodat de statische web ook zonder modules en via een eenvoudige webserver werkt.

```bash
npm run build
```

## `generate-initial-verb-review.mjs`

Genereert de eerste alfabetische reviewbatch uit `data/initial-verb-definitions.json`. Het script valideert definities, synoniemen, voorbeelden, vervoegingen, scheidbaarheid en reviewmetadata voordat `js/verb-initial-review.js` wordt geschreven.

```bash
npm run generate:verbs
```

De generator weigert bekende foutpatronen, waaronder onmogelijke `geaan...`-participia en foutieve persoonsvormen bij onregelmatige `aan-`-werkwoorden.

## `generate_verb_atlas.py`

Genereert de grote werkwoordenatlas uit gecureerde basisvormen, Nederlandse morfologische regels en een externe OpenTaal-woordenlijst voor spellingsvalidatie.

```bash
python3 scripts/generate_verb_atlas.py /pad/naar/opentaal-wordlist.txt /tmp/verb-atlas.json
```

De gegenereerde productieversie staat in `js/verb-atlas.js`. De bronlicentie van OpenTaal staat in `data/OpenTaal-LICENSE.txt`. Automatisch gegenereerde vormen blijven controleerbaar en moeten bij uitzonderlijk of specialistisch gebruik worden vergeleken met een gezaghebbend woordenboek.

## Audioscripts

De oude audiogenerator blijft alleen als historische referentie aanwezig. De hoofdapp gebruikt gecontroleerde tekst met een beschikbare Nederlandse browserstem en laadt de oude WAV-bestanden niet.

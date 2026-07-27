# Nederlands, gewoon doen

Een volledig statische leeromgeving voor Nederlands van A1 tot B2. De hoofdapp gebruikt uitsluitend Nederlands en volgt de didactische lijn:

> **beeld → geluid → betekenis → structuur → gebruik**

## Inhoud van deze versie

### Woordenschat A1 en A2

- 8 thematische A1-hoofdstukken;
- 8 thematische A2-hoofdstukken;
- **2.035 unieke woorden, taalhandelingen en vaste combinaties** binnen de zestien thema’s;
- semantische groepen per thema, zoals personen, handelingen, situaties, beschrijvende woorden, functiewoorden en vaste combinaties;
- klikbare uitspraak voor ieder woord of iedere combinatie;
- 128 uitgelichte kernwoorden met eenvoudige definitie en voorbeeldzin;
- thematische illustraties, dialogen, leerdoelen en mini-toetsen.

De thematische route gebruikt de openbare hoofdstukindeling van TaalCompleet A1 en A2 als curriculaire inspiratie. Alle definities, voorbeeldzinnen, dialogen, oefeningen en lijsten in deze app zijn nieuw geschreven en vormen geen digitale kopie van de boeken.

### Grammatica-atlas

De grammatica-atlas bevat **38 basis- en verdiepingsthema’s** van A1 tot B2, waaronder:

- lidwoorden, zelfstandige naamwoorden, meervoud en verkleinwoorden;
- bijvoeglijke naamwoorden, voornaamwoorden en vergelijkingen;
- tegenwoordige tijd, perfectum, modale werkwoorden en werkwoordgroepen;
- hoofdzin, inversie, bijzin en meerdere werkwoorden aan het einde;
- plaats-, richting- en tijdvoorzetsels;
- vaste combinaties met voorzetsels en `er + voorzetsel`;
- scheidbare werkwoorden in hoofdzin, inversie, perfectum, bijzin, modale constructie en `te`-constructie;
- nevenschikkende en onderschikkende voegwoorden;
- betekenisrelaties zoals reden, oorzaak, doel, gevolg, voorwaarde, contrast, tijd en toevoeging;
- idiomatische voorzetseluitdrukkingen.

Verdiepende onderwerpen tonen een zinsmodel, meerdere voorbeeldzinnen, betekenisverschillen, veelgemaakte fouten en gerelateerde concepten.

### Taalstructuren in context

De aparte sectie **Taalstructuren** bevat vier grote banken:

1. **Voorzetsels** — basisgebruiken en meer dan tachtig vaste combinaties;
2. **Scheidbare werkwoorden** — 87 werkwoorden, gegroepeerd per voorvoegsel, met twaalf volledige positiemodellen;
3. **Voegwoorden** — 44 voegwoorden en zinsverbinders met betekenisrelatie en woordvolgorde;
4. **Vaste en idiomatische combinaties** — 80 veelgebruikte chunks met betekenis en voorbeeldzin.

### Werkwoordentrainer

De trainer combineert kernwerkwoorden met de volledige bank scheidbare werkwoorden. Bij de uitgelichte scheidbare werkwoorden zie je hetzelfde werkwoord in:

- een gewone hoofdzin;
- inversie;
- een modale constructie;
- de voltooide tijd;
- een bijzin;
- een constructie met `te`.

## Uitspraak

De hoofdapp gebruikt geen twijfelachtige WAV-opnames. Zij spreekt gecontroleerde Nederlandse woorden en zinnen uit met `SpeechSynthesisUtterance` en kiest bij voorkeur:

1. `nl-NL`;
2. `nl-BE`;
3. een andere `nl-*`-stem.

Normale en langzame afspeelsnelheid blijven beschikbaar. De uiteindelijke stemkwaliteit hangt af van de stemmen in het besturingssysteem en de browser.

## Statisch en direct te openen

De app heeft geen framework of npm-afhankelijkheden nodig. Open `index.html` rechtstreeks met Chrome of Edge. De klassieke bundle `js/app.js` ondersteunt navigatie en oefeningen ook via dubbelklik.

Voor de Service Worker en PWA-functies:

```bash
npm run serve
```

Open daarna `http://localhost:8080`.

## Ontwikkelen en valideren

```bash
npm run build
npm test
npm run check
```

- `npm run build` genereert `js/app.js` uit de bronbestanden;
- `npm test` controleert leerlogica, inhoud, bestanden en deploymentvoorwaarden;
- `npm run check` bouwt de bundle, controleert alle JavaScriptbestanden en voert de **26 tests** uit.

De browser-QA controleert daarnaast navigatie, A1/A2-kaarten, 38 grammaticaonderwerpen, de vier taalstructurenbanken, de woordvolgorde-oefening en horizontale overflow op mobiel.

## Structuur

```text
.
├── .github/workflows/deploy-pages.yml
├── css/
│   ├── styles.css
│   └── reference.css
├── images/
├── js/
│   ├── learning.js
│   ├── depth-content.js
│   ├── supplement-content.js
│   ├── content.js
│   ├── main.js
│   ├── app.js
│   └── reference.js
├── scripts/
│   └── build-classic.mjs
├── tests/
├── index.html
├── reference.html
├── manifest.webmanifest
├── service-worker.js
└── package.json
```

## Bestaand materiaal

Het oorspronkelijke naslagwerk blijft beschikbaar in `reference.html`, maar is niet de hoofdapp. De oude audiobestanden blijven alleen als archiefmateriaal in de repository staan en worden niet door de nieuwe leerervaring geladen.

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


### Vragen: van A1 tot B2

De nieuwe sectie **Vragen** bevat een zelfstandige leerlijn met **14 lessen**, een visuele overzichtskaart, audio en actieve oefeningen:

- ja/nee-vragen en inversie;
- basisvraagwoorden: `wie`, `wat`, `waar`, `wanneer`, `waarom` en `hoe`;
- combinaties zoals `hoe oud`, `hoe laat`, `hoe lang`, `hoe vaak`, `hoe ver` en `hoeveel`;
- `welk`, `welke` en `wat voor`;
- vragen met scheidbare werkwoorden;
- vragen in verleden tijd en perfectum;
- beleefde en formele vragen met `kunt`, `zou`, `mag` en `wilt`;
- indirecte vragen met een vraagwoord of `of`;
- relatieve waar-vormen en genuanceerde B2-vragen.

Een aparte matrix behandelt **22 families met waar, daar, er en hier + voorzetsel**, waaronder `waarmee`, `waarop`, `waarover`, `waarvoor`, `waaraan`, `waarvan`, `waarin`, `waaruit`, `waarnaar`, `waardoor`, `waartoe`, `waarvandaan` en `waarnaartoe`. Elke kaart toont:

- de vraagvorm;
- nadrukkelijke verwijzing met `daar-`;
- neutrale verwijzing met `er-`;
- verwijzing naar iets dichtbij of in de huidige context met `hier-`;
- een gesplitste variant;
- het contrast met personen, zoals `met wie`, `op wie` en `over wie`;
- betekenis, voorbeeld en audio.

De uitleg volgt de grammaticale principes van de Algemene Nederlandse Spraakkunst en Taaladvies, maar alle lessen, voorbeelden en oefeningen zijn origineel geschreven voor deze leeromgeving.

### Taalstructuren in context

De aparte sectie **Taalstructuren** bevat vier grote banken:

1. **Voorzetsels** — basisgebruiken en meer dan tachtig vaste combinaties;
2. **Scheidbare werkwoorden** — 87 werkwoorden, gegroepeerd per voorvoegsel, met twaalf volledige positiemodellen;
3. **Voegwoorden** — 44 voegwoorden en zinsverbinders met betekenisrelatie en woordvolgorde;
4. **Vaste en idiomatische combinaties** — 80 veelgebruikte chunks met betekenis en voorbeeldzin.

### Werkwoordenatlas

De eenvoudige trainer is vervangen door een doorzoekbare atlas met **1.880 werkwoorden**:

- **870 regelmatige werkwoorden**;
- **1.010 onregelmatige werkwoorden**, inclusief samengestelde en scheidbare families met een onregelmatige stam;
- **1.240 scheidbare werkwoorden**;
- indeling naar A1, A2, B1 en B2;
- betekenislabels voor handeling, beweging, verandering, toestand, gebeurtenis/resultaat en modaliteit;
- filters op regelmatigheid, betekenis, niveau, scheidbaarheid en hulpwerkwoord;
- volledige persoonsvormen voor de tegenwoordige tijd;
- volledige persoonsvormen voor de onvoltooid verleden tijd;
- voltooid deelwoord en perfectum met `hebben`, `zijn` of beide;
- gebiedende wijs en modellen voor hoofdzin, verleden tijd, perfectum, modale constructie, bijzin en — bij scheidbare werkwoorden — `te`.

Bij bewegingswerkwoorden met `hebben/zijn` legt de interface het functionele verschil uit: `hebben` benadrukt vaak de activiteit, terwijl `zijn` meestal richting, bestemming of verandering van plaats markeert.

De werkwoordgegevens zijn gegenereerd uit gecureerde basisvormen en Nederlandse morfologische regels. De vrije woordenlijst van **Stichting OpenTaal** is gebruikt om spellingvormen te valideren. Dit is geen kopie of transcriptie van Van Dale; Van Dale dient uitsluitend als inhoudelijke inspiratie voor de gewenste diepgang en ordening.

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
- `npm run check` bouwt de bundle, controleert alle JavaScriptbestanden en voert de **32 tests** uit.

De tests controleren daarnaast de volledige vragenleerlijn, de 22 waar/daar/er/hier-patronen, de klassieke dubbelklik-bundle en de offlinecache. Een lokale visuele controle in Chrome of Edge blijft aanbevolen na integratie in het eigen repository.

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
│   ├── questions-content.js
│   ├── verb-atlas.js
│   ├── content.js
│   ├── main.js
│   ├── app.js
│   └── reference.js
├── data/
│   ├── verb-atlas-meta.json
│   └── OpenTaal-LICENSE.txt
├── scripts/
│   ├── build-classic.mjs
│   └── generate_verb_atlas.py
├── tests/
├── index.html
├── reference.html
├── manifest.webmanifest
├── service-worker.js
└── package.json
```

## Bronnen en licenties van derden

Voor de validatie van Nederlandse spellingvormen gebruikt de generator de woordenlijst van Stichting OpenTaal. De bijbehorende licentie is opgenomen in `data/OpenTaal-LICENSE.txt`. De gegenereerde atlas en alle didactische toelichtingen in deze repository zijn aangepast en uitgebreid voor deze leeromgeving.

## Bestaand materiaal

Het oorspronkelijke naslagwerk blijft beschikbaar in `reference.html`, maar is niet de hoofdapp. De oude audiobestanden blijven alleen als archiefmateriaal in de repository staan en worden niet door de nieuwe leerervaring geladen.

# Begeleide leerpaden

## Principe

Het Leerpad is een navigatielaag bovenop bestaande leerinhoud. Het bevat geen tweede versie van grammatica, woordenboeken, werkwoordfiches of oefeningen.

## Bronnen

Een route wordt opgebouwd uit bestaande datasets:

- A0: `starter-content.js`
- A1/A2: `content.js`
- B1/B2: `spiral-content.js`
- C1/C2: `advanced-level-content.js`
- oefeningen: `exercises.js`
- woorden: centraal lexicon of bestaande themadefinitie
- werkwoorden: bestaande Werkwoordenatlas
- relaties: Kennisgraaf

## Woordkaart

Een woord dat in een begeleide route als kaart wordt getoond heeft altijd een bestaande definitiebron. De route verzint geen fallbackdefinitie.

De kaart biedt:

- woord lezen;
- normale uitspraak;
- langzame uitspraak;
- definitie;
- bestaand contextvoorbeeld wanneer beschikbaar;
- externe vertaling van alleen de definitie.

Vertaling gebeurt via een gewone externe webpagina. Er is geen API, backend, sleutel of opgeslagen vertaalcorpus.

## Fouten herstellen

Een oefening gebruikt de bestaande uitleg uit de oefenbank. Bij een fout kan het Leerpad verwijzen naar:

- relevante grammatica;
- een betrokken werkwoordfiche;
- het exacte oefeningsnode in de Kennisgraaf.

Na het openen van zo'n uitleg blijft een terugkeerknop naar het Leerpad beschikbaar.

## Kennisgraaf

Elke route heeft een `learning_path`-node en kan relaties hebben met:

- niveau;
- thema;
- lexemen;
- grammaticale focus;
- canonieke grammatica;
- werkwoorden;
- oefeningen.

De verbinding is tweerichtingsnavigeerbaar in de interface.

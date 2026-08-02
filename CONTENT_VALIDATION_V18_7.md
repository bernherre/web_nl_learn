# Content validation V18.7

Status: **passed-with-declared-limitations**
Generated: 2026-08-01T21:51:55.748Z

## Summary

- Checks: 64
- Passed: 63
- Warnings: 1
- Failed: 0

## Verified scope

- 71 grammar modules across the original, deep, advanced and source-review layers.
- 8024 exercises; 24 were newly written from the supplied pedagogical coverage references.
- 1886 verb lemmas; 92 have manually reviewed definitions, contextual synonyms, usage notes and examples.
- 1794 verb lemmas remain explicitly marked as not lexically reviewed; the interface does not present generic text as a definition.
- 10 reading articles and 12 writing tasks.
- 17511 knowledge-graph nodes and 64590 validated relationships across 47 source collections.

## Important limitation

The complete application structure, published content banks and graph integrity were checked automatically. Lexical definitions and synonym relations are only claimed as manually reviewed for the 92 marked verb fiches. The graph exposes the remaining entries as review issues; it does not invent definitions or synonyms.

## curriculum

- **PASS — A0 heeft thema's:** 4 thema's aangetroffen.
- **PASS — A0 thema-id's zijn uniek:** Geen dubbele thema-id aangetroffen.
- **PASS — A0 thema's zijn inhoudelijk compleet:** Titel, uitleg, dialoog en oefening zijn aanwezig.
- **PASS — A1 heeft thema's:** 8 thema's aangetroffen.
- **PASS — A1 thema-id's zijn uniek:** Geen dubbele thema-id aangetroffen.
- **PASS — A1 thema's zijn inhoudelijk compleet:** Titel, uitleg, dialoog en oefening zijn aanwezig.
- **PASS — A2 heeft thema's:** 8 thema's aangetroffen.
- **PASS — A2 thema-id's zijn uniek:** Geen dubbele thema-id aangetroffen.
- **PASS — A2 thema's zijn inhoudelijk compleet:** Titel, uitleg, dialoog en oefening zijn aanwezig.
- **PASS — A1 en A2 behouden de bestaande hoofdstructuur:** A1=8, A2=8.

## grammar

- **PASS — grammatica-id’s zijn uniek binnen elke gepubliceerde bank:** 58 zoekbare modules en 13 verdiepingsmodules gecontroleerd.
- **PASS — uitleg, regel en voorbeelden zijn aanwezig:** 71 modules voldoen aan de minimumstructuur.

## source-material

- **PASS — aangeleverd fotomateriaal heeft een eigen herhalingslaag:** 12 nieuw geschreven modules zonder overname van boektekst.
- **PASS — dekking: lidwoorden en zelfstandige naamwoorden:** bepaald-lidwoord, onbepaald-lidwoord, zelfstandig-naamwoord
- **PASS — dekking: meervoud en spelling:** meervoud, bronreview-meervoud-spelling
- **PASS — dekking: bijvoeglijke naamwoorden en vergelijking:** bijvoeglijk-naamwoord, vergelijking, bronreview-bijvoeglijk-e, bronreview-vergelijking-onregelmatig
- **PASS — dekking: voornaamwoorden:** persoonlijk-onderwerp, persoonlijk-voorwerp, bezittelijk, aanwijzend, bronreview-voornaamwoord-nadruk, bronreview-ons-onze
- **PASS — dekking: werkwoordstam en zwak verleden:** tegenwoordige-tijd, bronreview-stam-spelling, bronreview-t-kofschip
- **PASS — dekking: sterke en onregelmatige werkwoorden:** bronreview-sterke-patronen
- **PASS — dekking: hebben of zijn:** hebben-zijn, bronreview-hebben-zijn-perfectum
- **PASS — dekking: scheidbare en wederkerende werkwoorden:** bronreview-scheidbaar-posities, bronreview-wederkerend
- **PASS — dekking: Engelse leenwerkwoorden:** bronreview-engelse-werkwoorden
- **PASS — brongerichte oefeningen zijn geïntegreerd:** 24 oefeningen geïntegreerd in de normale oefenbank.

## exercises

- **PASS — oefenbanktotaal is reproduceerbaar:** 8024 oefeningen.
- **PASS — oefening-id’s zijn uniek:** 8024 unieke id's.
- **PASS — antwoorden, opties en feedback zijn controleerbaar:** Geen structureel onvolledige oefening gevonden.
- **PASS — niveauverdeling:** {"A0":350,"A1":1058,"A2":1563,"B1":2253,"B2":2800}

## verbs

- **PASS — atlasomvang is consistent:** 1886 unieke werkwoorden na correctielagen.
- **PASS — werkwoorden zijn uniek:** Geen dubbele infinitieven.
- **PASS — alle expliciete reviews zijn toegepast:** 92 handmatig nagekeken fiches.
- **PASS — nagekeken fiches hebben specifieke definities en geldige metadata:** 92 fiches voldoen.
- **PASS — niet-nagekeken fiches tonen geen verzonnen definities of synoniemen:** 1794 fiches blijven expliciet ongemarkeerd.
- **WARNING — resterende lexicale review:** 1794 werkwoorden hebben vervoegingsinformatie maar nog geen handmatig gevalideerde definitie of synoniemen. Ze worden in de interface niet als gedefinieerd gepresenteerd.
- **PASS — bekende V18.5-vervoegingsfouten zijn hersteld:** praten, antwoorden, horen, eten, wachten, ontmoeten, bellen, lijken, vallen
- **PASS — synoniemen zijn uniek, contextueel bruikbaar en spreken de verschilnotitie niet tegen:** 92 fiches gecontroleerd.
- **PASS — contextuele verschillen tussen synoniemen zijn uitgelegd:** 73 kernfiches hebben een verschilnotitie.

## language-structures

- **PASS — voorzetsels:** 36 items (minimum 35).
- **PASS — vaste voorzetselcombinaties:** 83 items (minimum 80).
- **PASS — scheidbare werkwoorden:** 87 items (minimum 80).
- **PASS — voegwoorden:** 44 items (minimum 40).
- **PASS — idiomen:** 80 items (minimum 75).
- **PASS — vraagonderwerpen:** 14 items (minimum 14).
- **PASS — voornaamwoordelijke bijwoorden:** 22 items (minimum 20).
- **PASS — vraagoefeningen:** 10 items (minimum 10).

## reading-writing

- **PASS — B1-B2-leesteksten hebben vragen, bewijs en woordenschat:** 10 artikelen gevalideerd.
- **PASS — e-mailtaken bevatten opdrachtpunten, taalsteun en model:** 12 taken gevalideerd.

## content-banks

- **PASS — woordenschat:** 128 items.
- **PASS — luisterscènes:** 17 items.
- **PASS — getallen en tijd:** 14 items.
- **PASS — wiskunde:** 50 items.
- **PASS — natuurkunde:** 105 items.
- **PASS — software:** 120 items.
- **PASS — vaklexicon:** 304 items.

## technical

- **PASS — CSS en JavaScript hebben cache-busting:** Versie 18.7.1 staat in beide shell-assets.
- **PASS — oude shell-assets kunnen niet permanent uit cache blijven komen:** Netwerk-eerst voor document, CSS en JavaScript; registratie omzeilt de HTTP-cache.
- **PASS — startkaarten en toegankelijkheidsblok hebben componentstijlen:** Beide selectors aanwezig in styles.css.
- **PASS — nieuwe inhoud zit in de klassieke browserbundle:** Werkwoordreviews en bronreview aangetroffen.

## knowledge-graph

- **PASS — graafversie is gelijk aan de applicatieversie:** Versie 18.7.1.
- **PASS — alle grote inhoudsbanken zijn verbonden:** 17511 nodes en 64590 relaties.
- **PASS — alle relaties verwijzen naar bestaande nodes:** Geen gebroken relaties.
- **PASS — lexicale reviewwachtrij is volledig en controleerbaar:** 1794 werkwoorden in de wachtrij.
- **PASS — de graaf is geïntegreerd zonder bestaande routes te vervangen:** Aparte, lui geladen kennisgraafpagina aangetroffen.
- **PASS — de graaf werkt ook bij rechtstreeks openen vanaf schijf:** Lui geladen JavaScript-fallback voor file:// aangetroffen.

## content-quality

- **PASS — geen TODO- of placeholdertekst in gepubliceerde inhoud:** Geen placeholders gevonden.


# Architectuur

De applicatie is een statische leeromgeving die zowel via GitHub Pages als rechtstreeks via `index.html` werkt.

- `js/*-content.js`: inhoudsbanken.
- `js/verb-atlas.js` en `js/verb-details.js`: conjugatie- en lexicale werkwoorddata.
- `js/main.js`: rendering, routing en interactie.
- `scripts/build-classic.mjs`: bouwt de importvrije browserbundle `js/app.js`.
- `css/tokens.css`: centrale ontwerpwaarden.
- `css/themes.css`: kleurmodi.
- `css/typography.css`: typografische basis.
- `css/accessibility.css`: focus, reduced motion en hulpklassen.
- `service-worker.js`: PWA-cache en offlinefallback.

`js/app.js` is gegenereerd en mag niet handmatig worden aangepast. Gebruik altijd `npm run build` of `npm run check`.

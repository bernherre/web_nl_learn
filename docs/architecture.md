# Architectuur V19.3 RC1

De bronmodules in `js/` zijn de bron van waarheid. `scripts/build-classic.mjs` bundelt ze in `js/app.js` voor een statische browserdeploy zonder moduleloader. `package.json` is de centrale versiebron; `scripts/sync-version.mjs` synchroniseert shell, cache en browserconfiguratie. Lexicale kwaliteit wordt centraal afgedwongen door `js/lexical-quality.js` en `scripts/audit-learning-content.mjs`.

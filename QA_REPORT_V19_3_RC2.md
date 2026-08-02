# QA Report V19.3 RC2

## Corrección principal

`APP_VERSION` ahora se incorpora al bundle clásico antes de cualquier uso durante `initialize()`.

## Validación

- 145/145 pruebas automatizadas superadas.
- 73/73 controles de contenido superados.
- Auditoría léxica: 2.773 tarjetas controladas y 0 formas genéricas bloqueantes.
- `APP_VERSION` existe en `js/app.js` antes de `document.documentElement.dataset.appVersion = APP_VERSION`.
- Versión, shell, service worker y Knowledge Graph sincronizados con `package.json`.

## Regresión añadida

La batería falla si `app-config.js` vuelve a omitirse del bundle clásico o si la versión generada deja de coincidir con la versión central.

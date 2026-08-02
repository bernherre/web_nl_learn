const CACHE = 'nederlands-gewoon-doen-v19-3-0-rc-1';
const APP_VERSION = '19.3.0-rc.1';
const OFFLINE_URL = './offline.html';
const CORE = [
  './', './index.html', OFFLINE_URL,
  `./css/tokens.css?v=${APP_VERSION}`, `./css/typography.css?v=${APP_VERSION}`, `./css/styles.css?v=${APP_VERSION}`, `./js/app.js?v=${APP_VERSION}`,
  './js/app-config.js', './js/lexical-quality.js', './js/main.js', './js/learning.js', './js/content.js', './js/depth-content.js', './js/supplement-content.js',
  './js/questions-content.js', './js/advanced-practice-content.js', './js/starter-content.js', './js/spiral-content.js', './js/advanced-level-content.js',
  './js/number-math-content.js', './js/technical-content.js', './js/professional-content.js', './js/source-review-content.js', './js/v19-learning-experience.js', './js/exercises.js',
  './js/profiles.js', './js/verb-atlas.js', './js/verb-corrections.js', './js/verb-core-review.js', './js/verb-initial-review.js', './js/verb-final-review.js', './js/knowledge-graph.js',
  './images/logo.svg', './images/concept-map.svg', './images/questions-map.svg', './images/numbers-time-map.svg', './images/math-map.svg',
  './images/lesson-thuiswerken.svg', './images/woord-huis.svg', './images/woord-fiets.svg', './images/woord-appel.svg', './images/woord-kantoor.svg', './images/woord-trein.svg', './images/woord-huisarts.svg',
  './images/woord-school.svg', './images/woord-regen.svg', './images/woord-koffie.svg', './images/scene-school.svg', './images/scene-station.svg', './images/scene-meeting.svg',
  './images/theme-hallo.svg', './images/theme-school.svg', './images/theme-wonen.svg', './images/theme-eten.svg', './images/theme-dokter.svg', './images/theme-kleding.svg', './images/theme-reizen.svg', './images/theme-vrije-tijd.svg',
  './images/a2-verhuizen.svg', './images/a2-nederland.svg', './images/a2-kinderen.svg', './images/a2-winkels.svg', './images/a2-opleidingen.svg', './images/a2-werk-zoeken.svg', './images/a2-werken.svg', './images/a2-gemeente.svg',
  './images/a0-groeten.svg', './images/a0-voorstellen.svg', './images/a0-hulp.svg', './images/a0-dagelijks.svg', './images/theme-vakantie.svg', './images/theme-dieren.svg', './images/theme-markt.svg', './images/theme-emoties.svg', './images/theme-literatuur.svg', './images/theme-omgeving.svg'
];
async function putInCache(request, response) {
  if (!response || !response.ok) return response;
  const cache = await caches.open(CACHE);
  await cache.put(request, response.clone());
  return response;
}
async function networkFirst(request, fallback = null) {
  try { return await putInCache(request, await fetch(request)); }
  catch { return (await caches.match(request)) || (fallback ? caches.match(fallback) : Promise.reject(new Error('Netwerk en cache zijn niet beschikbaar.'))); }
}
async function staleWhileRevalidate(request) {
  const cached = await caches.match(request);
  const update = fetch(request).then((response) => putInCache(request, response)).catch(() => null);
  return cached || update;
}
self.addEventListener('install', (event) => { event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE))); self.skipWaiting(); });
self.addEventListener('activate', (event) => { event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))); self.clients.claim(); });
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;
  const shell = event.request.mode === 'navigate' || ['script', 'style', 'document'].includes(event.request.destination) || /\.(?:html|css|js)$/u.test(url.pathname);
  event.respondWith(shell ? networkFirst(event.request, event.request.mode === 'navigate' ? OFFLINE_URL : null) : staleWhileRevalidate(event.request));
});

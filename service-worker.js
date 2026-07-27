const CACHE = 'nederlands-gewoon-doen-v5';
const CORE = [
  './', './index.html', './css/styles.css', './js/app.js',
  './js/main.js', './js/learning.js', './js/content.js', './js/depth-content.js', './js/supplement-content.js',
  './images/logo.svg', './images/concept-map.svg', './images/lesson-thuiswerken.svg',
  './images/woord-huis.svg', './images/woord-fiets.svg', './images/woord-appel.svg',
  './images/woord-kantoor.svg', './images/woord-trein.svg', './images/woord-huisarts.svg',
  './images/woord-school.svg', './images/woord-regen.svg', './images/woord-koffie.svg',
  './images/scene-school.svg', './images/scene-station.svg', './images/scene-meeting.svg',
  './images/theme-hallo.svg', './images/theme-school.svg', './images/theme-wonen.svg', './images/theme-eten.svg',
  './images/theme-dokter.svg', './images/theme-kleding.svg', './images/theme-reizen.svg', './images/theme-vrije-tijd.svg',
  './images/a2-verhuizen.svg', './images/a2-nederland.svg', './images/a2-kinderen.svg', './images/a2-winkels.svg',
  './images/a2-opleidingen.svg', './images/a2-werk-zoeken.svg', './images/a2-werken.svg', './images/a2-gemeente.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    return response;
  })));
});

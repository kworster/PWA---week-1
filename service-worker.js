const CACHE_NAME = 'to-do-pwa-cache-v1';
const FILES_TO_CACHE = [
    '/PWA---WEEK-1/',
    '/PWA---WEEK-1/index.html',
    '/PWA---WEEK-1/style.css',
    '/PWA---WEEK-1/app.js',
    '/PWA---WEEK-1/manifest.json',
    '/PWA---WEEK-1/icons/icon-128.png',
    '/PWA---WEEK-1/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
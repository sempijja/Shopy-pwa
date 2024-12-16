const CACHE_NAME = 'shopy-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/whatsapp-auth',
  '/verify-code',
  '/setup-store',
  '/logo.svg',
  '/store-illustration.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

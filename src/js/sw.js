const cacheName = "v1";

const resourecesToPrecache = [
  '/',
  'index.html',
  '/assets/css/styles.css',
  '/assets/js/script.js',
  'https://kit.fontawesome.com/74d73efc2b.js',
  'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap'
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(cacheName).then(cache => cache.addAll(resourecesToPrecache)))
})

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)))
})
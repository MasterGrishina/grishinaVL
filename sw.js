const CACHE_NAME = 'parikmaher-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/photo.jpg',
  // Добавь сюда все свои slide1.jpg, slide2.jpg и другие важные файлы
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

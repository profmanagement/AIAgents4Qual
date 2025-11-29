// Service Worker for performance optimization
const CACHE_NAME = 'aiagents4qual-v1';
const urlsToCache = [
  '/',
  '/call-for-papers/',
  '/faq/',
  '/images/hero-background-bubbles.svg',
  '/images/og-image.png',
  '/favicon.ico',
  '/favicon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
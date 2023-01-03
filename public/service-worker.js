self.__precacheManifest = [
];

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();
self._precacheManifest = [].concat(self._precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /.*\.(?:png|jpg|webp|webm|jpeg|svg|gif)/,
  workbox.strategies.cacheFirst({
    cacheName: 'media',
    plugins: [new workbox.cacheableResponse.Plugin({ statuses: [0, 200] })],
  }),
  'GET',
);
workbox.routing.registerRoute(
  /.*/,
  workbox.strategies.staleWhileRevalidate(),
  'GET',
);
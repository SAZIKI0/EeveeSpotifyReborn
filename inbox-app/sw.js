// Service worker : permet d'ouvrir l'application sans connexion une fois installée.
const CACHE = 'boite-reception-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const put = res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; };
  if (url.origin === self.location.origin) {
    // Réseau d'abord (pour recevoir les mises à jour), cache si hors-ligne
    e.respondWith(fetch(req).then(put).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    // Polices : cache d'abord
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(put)));
  }
});

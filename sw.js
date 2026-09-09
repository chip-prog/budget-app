// 這個檔案以後不需要再改了
// index.html 永遠走網路，不快取，更新即時生效

const CACHE = 'budget-app-v7';
const STATIC = ['./manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(STATIC)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // index.html：永遠去網路抓，離線才用快取
  if (e.request.destination === 'document' ||
      url.pathname.endsWith('index.html') ||
      url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(e.request, { cache: 'no-store' })
        .then(res => {
          // 順便更新快取，供離線使用
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  // 其他資源：快取優先
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});

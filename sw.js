/* Service worker: guarda o caderno para funcionar sem internet.
   Ao publicar uma nova versão do conteúdo, aumente o número em VERSAO. */
const VERSAO = "caderno-v1";
const ARQUIVOS = ["./", "index.html", "css/estilo.css", "js/dados.js", "js/app.js",
  "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSAO).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSAO).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => {
      if (r.ok && new URL(e.request.url).origin === location.origin) {
        const copia = r.clone(); caches.open(VERSAO).then(c => c.put(e.request, copia));
      }
      return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("index.html")))
  );
});

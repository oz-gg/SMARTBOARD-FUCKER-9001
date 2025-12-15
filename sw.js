const CACHE_NAME = "qr-md5-v3";
const FILES = [
	"./",
	"./index.html",
	"./app.js",
	"./manifest.json",
	"./libs/html5-qrcode.min.js",
	"./libs/crypto-js.js"
];

self.addEventListener("install", e => {
	e.waitUntil(
		caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(r => r || fetch(e.request))
	);
});
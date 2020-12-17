const cacheName = "pwa-first-v2.1";
const filesToCache = [
    "/index.html",
    "/about.html",
    "/gallery.html",
    "/inc/navigation.html",
    "/js/main.js",
    "/js/bulma.js",
    "/manifest.json",
    "/images/d4m_name.png",
    "/images/bmw-01.jpg",
    "/images/bmw-02.jpg",
    "/images/bmw-03.jpg",
    "/images/bmw-04.jpg",
    "/images/bmw-05.jpg",
    "/images/bmw-06.jpg",
    "https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css",
    "/css/styles.css"
];

// Fundamental must exist in every application mandatory
// Installation 
self.addEventListener('install', function (e) {
    console.log('install');
    e.waitUntil(caches.open(cacheName)
        .then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

// Activation
self.addEventListener('fetch', function (e) {
    console.log('fetch');
    e.respondWith(caches.match(e.request)
        .then(function (response) {
            return response || fetch(e.request);
        })
    );
});
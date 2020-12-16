const cacheName = "pwa-first-v2.0";
const filesToCache = [
    "/index.html",
    "/js/main.js",
    "../manifest.json"
    /*"css/bulma.min.css"*/
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
/*
self.addEventListener('fetch', function (e) {
    console.log('fetch');
    e.respondWith(
        caches.open(cacheName).then((cache) => {
            return cashes.match(e.request)
                .then((response) => {
                    return response || fetch(e.request);
                })
        })
    )
});
*/

self.addEventListener('fetch', function (e) {
    console.log('fetch');
    e.respondWith(caches.match(e.request)
        .then(function (response) {
            return response || fetch(e.request);
        })
    );
});
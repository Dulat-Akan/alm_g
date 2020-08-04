self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('airhorner').then(function(cache) {
     return cache.addAll([
       '/',
       '/main.html',
       '/main.html?homescreen=1',
       '/?homescreen=1',
       '/css/my-app.css',
       '/css/crossplatform_roulette.css',
       '/css/table.css',
       '/js/my-app.js',
       '/js/roulette.js',
     ]);
   })
 );
});



self.addEventListener('fetch', function(event) {
 console.log(event.request.url);
});

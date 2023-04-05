'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c20b0257304c97c288ab76c0b6f8654e",
"assets/assets/ca/lets-encrypt-r3.pem": "be77e5992c00fcd753d1b9c11d3768f2",
"assets/assets/fonts/OFL.txt": "7a36082ad889d5cafbe77a63a5ebb75f",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/fonts/Raleway/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/assets/fonts/Raleway/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/assets/fonts/Raleway-Italic-VariableFont_wght.ttf": "1beafb8dc51e36ee1e77db62728315f7",
"assets/assets/fonts/Raleway-VariableFont_wght.ttf": "3ec1aa8901bbee53c49cc8b4e011a0e1",
"assets/assets/fonts/README.txt": "9ba192a0e9590a00366562fd4b8d44a1",
"assets/assets/fonts/static/Raleway-Black.ttf": "35e0e2e7a5b03275ba569a214edbab77",
"assets/assets/fonts/static/Raleway-BlackItalic.ttf": "ce55274864c3c831b62f242c26a0d0d5",
"assets/assets/fonts/static/Raleway-Bold.ttf": "88079335418f389bfb2d86bc4f1ced64",
"assets/assets/fonts/static/Raleway-BoldItalic.ttf": "17e4f15fd9c264d7a42545c6805bcfdf",
"assets/assets/fonts/static/Raleway-ExtraBold.ttf": "27f7ef17de3691b5cdb9f1ee1ee5cc6a",
"assets/assets/fonts/static/Raleway-ExtraBoldItalic.ttf": "103c571d4c407f84e5cde93be75a25e7",
"assets/assets/fonts/static/Raleway-ExtraLight.ttf": "550ad10fece0b35b0325d38192701592",
"assets/assets/fonts/static/Raleway-ExtraLightItalic.ttf": "2a6861ab9c9233a15d90d59d3050840f",
"assets/assets/fonts/static/Raleway-Italic.ttf": "b88299f8225ae49ce121b1f6aa456dbc",
"assets/assets/fonts/static/Raleway-Light.ttf": "ed645c2b20d22612c4985bc4e4b4a7ff",
"assets/assets/fonts/static/Raleway-LightItalic.ttf": "7f5fba2f6aeba3babf61fcd6adbc7798",
"assets/assets/fonts/static/Raleway-Medium.ttf": "b952c3c81ba34b54c66c748ea1e828a7",
"assets/assets/fonts/static/Raleway-MediumItalic.ttf": "15a3a013eeb5a3bdc9f20227ca62861d",
"assets/assets/fonts/static/Raleway-Regular.ttf": "20d41940068e45b114d32b48d684ef39",
"assets/assets/fonts/static/Raleway-SemiBold.ttf": "87641f9900d717d6bfbf108b8755868e",
"assets/assets/fonts/static/Raleway-SemiBoldItalic.ttf": "806d2907def84e9d321b462b43247111",
"assets/assets/fonts/static/Raleway-Thin.ttf": "db8e7354e2585143a4f7ef6f71bfe0ca",
"assets/assets/fonts/static/Raleway-ThinItalic.ttf": "288e7c0d0109f91c766c7096f2a0217d",
"assets/assets/icons/cart.svg": "33919f11dfb30bc16cb3ae7c01193986",
"assets/assets/icons/Error.svg": "0f876e9b9170982e37bbf767c6ebb47f",
"assets/assets/icons/facebook.svg": "48bf15d2057966765f384827997a2f41",
"assets/assets/icons/google.svg": "38e282dafbaaf9823263d49349670447",
"assets/assets/icons/hamburger.svg": "28aab30c4c7afd73069c472560ead3d1",
"assets/assets/icons/Location%2520point.svg": "146ea387710fa420046c0f71b89ad474",
"assets/assets/icons/Lock.svg": "44a5fb6d11a48fd52c87d95e34e7a689",
"assets/assets/icons/Mail.svg": "6b876f2539a1946b1a946e7a5646e909",
"assets/assets/icons/Phone.svg": "589731a88a098c9c6d40e32bc11c3d83",
"assets/assets/icons/search.svg": "375c7d1fcb3116a443b9ecf109aa928c",
"assets/assets/icons/twitter.svg": "2186bb91925602b76e5a4384b2198c06",
"assets/assets/icons/User.svg": "737d49c1953f8098f618d523b45e5657",
"assets/assets/images/bank.png": "7d3dc0776dfcbf2565d93acdf2d2dae1",
"assets/assets/images/element_not_found.png": "9c38ffd2ae0594e57694ce39e3f0cde0",
"assets/assets/images/fashion.jpg": "30cc51bb94940df71c20ab4051dfee41",
"assets/assets/images/Kauverylogo.png": "f0e532ae1fb4d6645384f159e013b37e",
"assets/assets/images/laptops.jpg": "d532ef4b3d18178b49b4c2cac698cf50",
"assets/assets/images/logo.png": "5a5e5d36b73069000bf1c14acb74c5bb",
"assets/assets/images/master.png": "108d0fbb6312c647a94995cc143bb449",
"assets/assets/images/no_connection.png": "dc2de66dbe67281aa039b1cc5191e2e2",
"assets/assets/images/no_favorite.png": "da59d4ad3a5096160508e3ca5eba792e",
"assets/assets/images/no_order.png": "f45083ac23935daa5817eef46eaae9a0",
"assets/assets/images/p1.png": "343f0a6edb252b4d00172213d2e930ab",
"assets/assets/images/p1_2.jpg": "b66fd646cc0a4e8e5c254e1f0d3dbce8",
"assets/assets/images/p1_3.jpg": "1b94ed46ca832c70df0d7d9549481c02",
"assets/assets/images/p1_4.jpg": "8cb8aa702846ec26148ce5961a0304d6",
"assets/assets/images/p2.png": "b14304223406179563b7887d1f0b9ac0",
"assets/assets/images/p2_1.png": "f99f2d2cccf843659edbce7ed0f3aab0",
"assets/assets/images/p2_2.jpg": "417bb13cb691a7ab8fb9997384bcd03f",
"assets/assets/images/p3.png": "1291aa13869d627d5275ab813b7938cd",
"assets/assets/images/p3_1.png": "6cd32d71f04a8cefea4d5f558da61662",
"assets/assets/images/p4.png": "12e0b3f12eb9553d21f7c26b5a2f6003",
"assets/assets/images/p5_1.png": "085a92c8db5ab13dd4560571c237528b",
"assets/assets/images/phone.png": "c902574e98793801474f8628241a61d9",
"assets/assets/images/splash.png": "7cdd5b17267d75b4b89a59a8f55f759e",
"assets/assets/images/success.png": "f80df756b315fbb72670a78e82095c3c",
"assets/assets/images/visa.png": "54457e94d0c75ec3da59e4e8446b87d3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2c4b2960c28baaee5d417b4910c4b79f",
"assets/NOTICES": "981d316301fc89551f41830ccd35b14d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f25d95bfc88159744da23095d9b8ab67",
"/": "f25d95bfc88159744da23095d9b8ab67",
"main.dart.js": "3afd841923b3f1e1b115241d5bb5bd08",
"manifest.json": "3b1793c5f10e32e56fcaf584d815d83c",
"version.json": "9ea15f182da48af47fc1f507af825f48"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

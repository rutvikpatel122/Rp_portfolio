'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8f687da2a14a00e25ec37e95a2aa0d54",
"assets/AssetManifest.bin.json": "32666bc94fbfe6dc95cccb2bb01a7e75",
"assets/AssetManifest.json": "7c42b50c35df765530a922151b1ac1be",
"assets/assets/fonts/Raleway-Black.ttf": "ca057783cb90d483d16662f202212050",
"assets/assets/fonts/Raleway-BlackItalic.ttf": "6bb69e40367ae9814db8c80152eed900",
"assets/assets/fonts/Raleway-Bold.ttf": "21c82294041b1504a5cbe4f566c8acd6",
"assets/assets/fonts/Raleway-BoldItalic.ttf": "17cc8fb94a06e0808b3a1e93a5ddee28",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "1d8b73517fb37be5cf23cd3843ad4eb2",
"assets/assets/fonts/Raleway-ExtraBoldItalic.ttf": "33da5d431479287ebc94ecd1a9d1d039",
"assets/assets/fonts/Raleway-ExtraLight.ttf": "39de59bc225416348683ae039df2a1f9",
"assets/assets/fonts/Raleway-ExtraLightItalic.ttf": "7ef38cb3e0f9b6aa829cc7c9b90a615d",
"assets/assets/fonts/Raleway-Italic.ttf": "5579b5fda3005b7d349336b3425b9f89",
"assets/assets/fonts/Raleway-Light.ttf": "a36750fa9f5530b0c2760267df04ae37",
"assets/assets/fonts/Raleway-LightItalic.ttf": "bd42d0599d807527617bb3f5ed8df31b",
"assets/assets/fonts/Raleway-Medium.ttf": "0c8c5471e4a8bfe0f6167f56bcf1e2d3",
"assets/assets/fonts/Raleway-MediumItalic.ttf": "5aeca04536968ff9f32afc0bcd61eb60",
"assets/assets/fonts/Raleway-Regular.ttf": "d95649da7dfb965a289ac29105ce8771",
"assets/assets/fonts/Raleway-SemiBold.ttf": "804eb7bc11d3a38d5f5e108f8d1d1acd",
"assets/assets/fonts/Raleway-SemiBoldItalic.ttf": "5890daae80f0d711900058b808f819ec",
"assets/assets/fonts/Raleway-Thin.ttf": "02cf7464c6ce00474e8d90b69f103d75",
"assets/assets/fonts/Raleway-ThinItalic.ttf": "73456336793992177ea8a337ccaa6950",
"assets/assets/images/appstore.png": "20be9e63f99f0c35ba3e97ae378e2848",
"assets/assets/images/back.png": "7b8b02655de4538068c4496650c15ffe",
"assets/assets/images/clear.png": "b9ff32e40f486bee679f3860ed929ea6",
"assets/assets/images/logo.png": "51a763386728c05d71df117f5e2a213c",
"assets/assets/images/menu.png": "8e585940667b6edda0d6e5d09484339b",
"assets/assets/images/playstore.png": "707c1bbb8db16e93a85c3b302c1bc077",
"assets/assets/images/profilePic.png": "c7b8c92a70cae79da69d36bc68c99110",
"assets/assets/images/web.png": "1ee7ffac0b8d7bbd60b85c56757650b8",
"assets/FontManifest.json": "62f53e3a77f0bd88351b3c5210ae129e",
"assets/fonts/MaterialIcons-Regular.otf": "6bcd8780408e8fee5a5709b772c7fde9",
"assets/NOTICES": "66fa7bafb5d65325e9ef201e8eca63e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7fc7f34b74f5def84212fbac2a1a3718",
"/": "7fc7f34b74f5def84212fbac2a1a3718",
"main.dart.js": "eaf56c17c0354eb3d093f2a6450169bb",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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

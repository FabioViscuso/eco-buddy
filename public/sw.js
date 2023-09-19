const CACHE_NAME = "cachev1";
const urlsToCache = ["index.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(() => {
    caches.keys().then((cacheNames) => {
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    });
  });
});

if (Notification.permission === "granted") {
  let notificationHour = 0;

  self.onmessage = (message) => {
    notificationHour = message.data.hour;
    storeNotificationHour(notificationHour); // Store the hour in IndexedDB
  };

  self.addEventListener("push", (event) => {
    const title = "Promemoria";
    const options = {
      body: "Non dimenticare di preparare il sacco della differenziata",
    };

    event.waitUntil(self.registration.showNotification(title, options));
  });

  function storeNotificationHour(hour) {
    indexedDB.open("notificationDB", 1).onupgradeneeded = function(event) {
      const db = event.target.result;
      db.createObjectStore("settings");
    };

    indexedDB.open("notificationDB", 1).onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(["settings"], "readwrite");
      const store = transaction.objectStore("settings");
      store.put(hour, "notificationHour");
    }
  }

  function loadNotificationHour() {
    indexedDB.open("notificationDB", 1).onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction(["settings"], "readonly");
      const store = transaction.objectStore("settings");
      const request = store.get("notificationHour");

      request.onsuccess = function(event) {
        if (request.result !== undefined) {
          notificationHour = request.result;
        }
      }
    }
  }

  loadNotificationHour(); // Load the hour from IndexedDB
  setInterval(checkNotification, 60 * 60 * 1000); // Check for notification every hour
}

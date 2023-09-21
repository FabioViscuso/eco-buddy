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
  self.addEventListener("periodicsync", (event) => {
    if (event.tag === "trash-collection-check") {
      event.waitUntil(loadNotificationHour());
    }
  });

  function loadNotificationHour() {
    const request = indexedDB.open("appDatabase", 10);

    return new Promise((resolve, reject) => {
      request.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(["appState"], "readonly");
        const store = transaction.objectStore("appState");
        const request = store.get("notificationHour");
        request.onsuccess = function () {
          if (request.result !== undefined) {
            notificationHour = request.result.value;
            checkNotification();
          }
          resolve(); // Resolve the promise once the task is complete
        };
      };
      request.onerror = function (err) {
        console.error(err);
        reject(err); // Reject the promise in case of an error
      };
    });
  }

  function checkNotification() {
    const currentHour = new Date().getHours();
    if (currentHour >= notificationHour) {
      console.log("notification fired");
      const title = "Promemoria";
      const options = {
        body: "Non dimenticare di preparare il sacco della differenziata",
      };

      self.registration.showNotification(title, options);
    }
  }

  let notificationHour = 0;

  self.addEventListener("push", (event) => {
    const title = "Promemoria";
    const options = {
      body: "Non dimenticare di preparare il sacco della differenziata",
    };

    event.waitUntil(self.registration.showNotification(title, options));
  });

  loadNotificationHour(); // Initial load
}

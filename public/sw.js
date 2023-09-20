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

  self.addEventListener("push", (event) => {
    const title = "Promemoria";
    const options = {
      body: "Non dimenticare di preparare il sacco della differenziata",
    };

    event.waitUntil(self.registration.showNotification(title, options));
  });

  function loadNotificationHour() {
    const request = indexedDB.open("appDatabase", 10);

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
      };
    };
    request.onerror = function(err) {
      console.error(err)
    }
  }
  loadNotificationHour();
  setInterval(loadNotificationHour, 60 * 60 * 1000);
}

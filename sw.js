self.addEventListener('push', event => {
      const data = event.data.json();

      self.registration.showNotification(data.title, {
        body: 'Hey, it works!',
        icon: "status.png"
      });
    });

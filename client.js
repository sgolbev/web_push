const publicVapidKey =
  "BErqlMengU010UthQjK30ccOhJ9cnane7kxMEskygXAVDXfwJ1KSw0wetpqNDo91mx9uf3chuJQy42azK4E1h7g";

// Check for service worker
if ("serviceWorker" in navigator) {
  send().catch(err => console.log(err));
}

// Register SW, Register Push, Send Push
async function send() {
  // Register Service Worker
  console.log("Registering service worker...");
  const register = await navigator.serviceWorker.register("/worker.js", {
    scope: "/"
  });
  console.log("Service Worker Registered...");

  // Register Push
  console.log("Registering PushMY...");
/*this may be caused by accidentally
 clicking the browser notification when it
 block it or not. To fix this in Chrome,
 go to Settings->click 'Show Advanced Settings'
 ->Under 'Privacy' click 'Content Settings'->
 Then under 'Notifications' select
 'Manage Excpetions'. Once you're in here,
  allow 
the notification for the URL affected.
*/
  const subscription = await register.pushManager.subscribe({
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
    userVisibleOnly: true

});
  console.log("Push Registered...");

  // Send Push Notification
  console.log("Sending Push...");
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json"
    }
  });
  console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

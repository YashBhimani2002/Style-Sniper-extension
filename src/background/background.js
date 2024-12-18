chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "store") {
        storeToggleStatus(message.status);
    } else if (message.action === "clear") {
        clearToggleStatusFromLocalStorage();
    }
});

function storeToggleStatus(status) {
    chrome.storage.local.set({
        'toggleStatus': status
    });
    sendNotificationToggleExtension('Style Sniper', 'Extension Activated Successfully',`styleSniperNotificationOfActivated${Math.random()}`);
}

function clearToggleStatusFromLocalStorage() {
    chrome.storage.local.clear();
    sendNotificationToggleExtension('Style Sniper', 'Extension Deactivated Successfully',`styleSniperNotificationOfDeactivated${Math.random()}`);
}

function sendNotificationToggleExtension(title, message,notificationId) {
    chrome.notifications.create(notificationId,{
        type: "list",
        iconUrl: "./icon.png",
        title: title,
        message,
        items: [
          {
            title: title,
            message: message,
          },
        ],

      });
}

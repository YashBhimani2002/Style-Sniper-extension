
/**
 * Listens for messages from the content script and the popup script.
 * The content script sends a message to store the toggle status in local storage
 * and to clear the toggle status from local storage.
 * The popup script sends a message to store the toggle status in local storage.
 * @param {object} message - The message that is received from the content script or the popup script.
 * @param {object} sender - The sender of the message.
 * @param {function} sendResponse - The callback function to respond to the message.
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "store") {
        storeToggleStatus(message.status);
    } else if (message.action === "clear") {
        clearToggleStatusFromLocalStorage();
    }
});


/**
 * Stores the toggle status in Chrome's local storage and sends a notification
 * indicating that the extension has been activated.
 *
 * @param {boolean} status - The status to be stored, indicating whether the extension is active.
 */

function storeToggleStatus(status) {
    chrome.storage.local.set({
        'toggleStatus': status
    });
    sendNotificationToggleExtension('Style Sniper', 'Extension Activated Successfully',`styleSniperNotificationOfActivated${Math.random()}`);
    chrome.tabs.query({active: true, currentWindow: true}, function(tab) {
       chrome.scripting.executeScript({
           target: {tabId: tab[0].id},
           files: ['content.js']
       })
    })
}

/**
 * Clears the toggle status from Chrome's local storage and sends a notification
 * indicating that the extension has been deactivated.
 */
function clearToggleStatusFromLocalStorage() {
    chrome.storage.local.clear();
    sendNotificationToggleExtension('Style Sniper', 'Extension Deactivated Successfully',`styleSniperNotificationOfDeactivated${Math.random()}`);
    document.removeEventListener("click", window.customClickListener);
}

/**
 * Sends a notification to the user that the extension has been toggled on or off.
 * @param {string} title - The title of the notification.
 * @param {string} message - The message to be displayed in the notification.
 * @param {string} notificationId - The ID of the notification to be created.
 */
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

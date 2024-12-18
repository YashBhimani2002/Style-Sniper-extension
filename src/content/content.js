const body = document.getElementsByTagName("body")[0]; // Use the first <body> element directly

body.onmouseover = function (e) {
    chrome.storage.local.get('toggleStatus', (response) => {
        // Check if toggleStatus is defined and true
        if (!response || !response.toggleStatus) {
            e.stopPropagation();
            e.preventDefault();
            return; // Stop further execution if toggleStatus is undefined or false
        }

        // Get the element under the cursor
        const element = document.elementFromPoint(e.clientX, e.clientY);
        if (!element || element.tagName === "HTML") {
            return; // Ignore the <html> element or undefined targets
        }

        // Apply a blue border to the element
        element.style.border = "1px solid blue";

        // Add an onmouseout listener to remove the border
        element.onmouseout = function () {
            this.style.border = "0px";
        };
    });
};

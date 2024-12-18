const body = document.getElementsByTagName("body")[0];

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

        console.log({
            id: element.id,
            name: element.className,
            content: element.textContent.trim(),
            style: element.style.cssText
        });

        // Create a tooltip element
        let tooltip = document.createElement("div");
        tooltip.className = "custom-tooltip";
        tooltip.textContent = `Hovering over: ${element.tagName}`;
        tooltip.style.position = "absolute";
        tooltip.style.backgroundColor = "rgba(0, 0, 255, 0.8)";
        tooltip.style.color = "white";
        tooltip.style.padding = "5px";
        tooltip.style.borderRadius = "3px";
        tooltip.style.pointerEvents = "none";
        tooltip.style.fontSize = "12px";
        tooltip.style.top = `${e.clientY + 10}px`;
        tooltip.style.left = `${e.clientX + 10}px`;
        tooltip.style.zIndex = "9999";
        tooltip.className = "custom-tooltip";

        // Add a blue border to the element
        element.style.border = "1px solid blue";

        // Append the tooltip to the body
        body.appendChild(tooltip);

        // Add an onmouseout listener to remove the border and tooltip
        element.onmouseout = function () {
            this.style.border = "0px";
            if (tooltip && tooltip.parentNode) {
                tooltip.parentNode.removeChild(tooltip);
            }
        };
    });
};

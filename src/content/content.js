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
        // Create the iframe element
        const iframe = document.createElement("iframe");
        iframe.className = "custom-iframe";
        iframe.style.position = "absolute";
        iframe.style.backgroundColor = "white";  // White background for iframe
        iframe.style.color = "black";  // Text color set to black
        iframe.style.padding = "10px";
        iframe.style.border = "2px solid black";  // Black border
        iframe.style.borderRadius = "20px";  // 20px border radius
        iframe.style.pointerEvents = "none";  // Ensure iframe doesn't block interactions with the page
        iframe.style.fontSize = "12px";
        iframe.style.zIndex = "9999";
        iframe.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.2)";  // Adding a box-shadow for the iframe

        // Create a function to update iframe position and content
        const updateIframeContent = (e, element) => {
            const iframeDoc = iframe.contentWindow.document;

            // Create content with element details
            const content = `
        <p>Hovering over:: ${element.tagName}</p>
        <p>ID: ${element.id || 'N/A'}</p>
        <p>Class: ${element.className || 'N/A'}</p>
        <p>Content: ${element.textContent || 'N/A'}</p>
    `;

            // Set the iframe's body content
            iframeDoc.body.innerHTML = content;

            // Update iframe position based on mouse position
            iframe.style.top = `${e.clientY + 10}px`;  // 10px offset below the cursor
            iframe.style.left = `${e.clientX + 10}px`;  // 10px offset to the right of the cursor
        };

        // Attach mousemove event listener to the document
        document.body.onmousemove = (e) => {
            // Get the element under the mouse
            const element = document.elementFromPoint(e.clientX, e.clientY);
            if (!element || element.tagName === "HTML") return;  // Skip if hovering over HTML element

            // If iframe is not appended, create and append it
            if (!document.body.contains(iframe)) {
                document.body.appendChild(iframe);
            } else {
                document.getElementsByClassName('custom-iframe').item(0).remove();
            }

            // Update the iframe content and position
            updateIframeContent(e, element);
        };

        element.onmouseout = function () {
            document.getElementsByClassName('custom-iframe').item(0).remove();
        };
    });
};

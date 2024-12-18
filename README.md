# Style-Sniper-extension
This extension allows users to hover over or click on any element on a webpage to fetch its DOM properties, styles, and text content, and then manipulate some basic styles dynamically.

S"Element Inspector and Styler"
This extension allows users to hover over or click on any element on a webpage to fetch its DOM properties, styles, and text content, and then manipulate some basic styles dynamically. Here's a breakdown:

Features
Highlight DOM Elements:

When the user hovers over an element, it gets highlighted with a border or background color.
Display a tooltip with the element's tag name and ID/class.
Inspect DOM Properties:

When the user clicks on an element, display its properties (e.g., id, class, textContent, etc.) in a React-based popup or sidebar.
Edit Styles Dynamically:

Let users tweak inline styles for the selected element (e.g., change color, background, font-size, etc.) via input fields in the extension's popup.
Save Style Adjustments:

Add a feature to temporarily save style changes so they persist while the page is open.
Tailwind Class Suggestions:

Provide a list of Tailwind classes in the UI that users can apply to the selected element.
How to Build This
Manifest.json (v3):

Configure permissions for activeTab and scripting.
Include background scripts and content scripts.
React Frontend:

Build the popup UI using React with Tailwind CSS for styling.
Include input fields to edit styles and preview Tailwind classes.
Content Script:

Inject a script into the webpage to interact with DOM elements.
Use event listeners to detect hover and click events.
Communicate with the React popup via the Chrome messaging API.
Webpack:

Use Webpack for bundling the React app and content scripts.
Configure separate entry points for the popup and content script.
Tailwind CSS:

Tailor your Tailwind config for use in the React app (popup UI).
Learning Outcome
DOM Interaction: Learn how to use the document API to fetch and manipulate DOM elements.
React & State Management: Practice rendering dynamic UI updates in response to DOM interactions.
Tailwind Integration: Understand how to use utility classes programmatically.
Webpack Bundling: Get comfortable setting up a build process for a Chrome extension.


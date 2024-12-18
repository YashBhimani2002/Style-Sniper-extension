import React from "react";
import {createRoot} from "react-dom/client";
import Popup from "./popup.jsx";

const appCreateElement = document.createElement("div");
document.body.appendChild(appCreateElement);
if(!appCreateElement) {
    throw new Error("App container not found");
}

const root = createRoot(appCreateElement);
root.render(<Popup/>);
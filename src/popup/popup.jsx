import React, { useEffect, useState } from "react";
import "../css/main.css";
const Popup = () => {
  const [toggleStatus, setToggleStatus] = useState(false);
  const getToggleStatus = ()=>{
    chrome.storage.local.get('toggleStatus', (response) => {
        console.log(response,"response");
        if (response !== undefined) {
            setToggleStatus(response.toggleStatus);
        }
    })
  }
  useEffect(() => {
    getToggleStatus();
}, []);
  const handleToggle = (status) => {
    if (status) {
      chrome.runtime.sendMessage({ action: "store", status: true });
      setToggleStatus(true);
    } else {
      chrome.runtime.sendMessage({ action: "clear" });
      setToggleStatus(false);
    }
  };
  return (
    <div className="flex flex-1 w-full p-2 min-w-48 justify-center bg-gray-300">
      <div className="flex-1 w-full flex items-center">
        <p className="ms-3 text-sm font-medium text-black">Style Sniper</p>
      </div>
      <div className="flex items-center">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            checked={toggleStatus}
            onChange={() => handleToggle(!toggleStatus)}
          />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-transparent dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};

export default Popup;

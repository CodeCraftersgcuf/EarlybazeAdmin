import React, { useState } from "react";

const tabs = ["All", "In progress", "Completed"];

const MarketTabs = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex gap-4 text-white my-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md ${
            activeTab === tab ? "bg-green-500 text-black" : "bg-[#031E11]"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default MarketTabs;

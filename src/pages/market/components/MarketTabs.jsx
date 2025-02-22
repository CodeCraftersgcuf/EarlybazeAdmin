import React from "react";

const tabs = ["All", "In progress", "Completed"];

const MarketTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-4 text-white my-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded-md transition-all ${
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

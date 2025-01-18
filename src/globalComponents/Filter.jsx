import React, { useState } from 'react';

const Filter = ({tabs,handleValue,tabPadding='4'}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name); // Track the active tab

  return (
    <div className="flex items-center bg-theme-dark w-fit rounded-lg">
      {tabs.map((tab,index) => (
        <button

          key={index}
          className={`capitalize py-${tabPadding} px-8 rounded-lg ${
            activeTab === tab.name
              ? 'bg-[#00bd78] text-white'
              : 'bg-transparent text-gray-400 hover:text-white transition '
          }`}
          onClick={() => {handleValue(tab.value); setActiveTab(tab.name)}}
        >
          {tab.value}
        </button>
      ))}
    </div>
  );
};

export default Filter;

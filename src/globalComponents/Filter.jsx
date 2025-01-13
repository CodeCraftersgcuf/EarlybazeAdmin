import React, { useState } from 'react';

const Filter = ({tabs,handleValue}) => {
  const [activeTab, setActiveTab] = useState('all'); // Track the active tab

  return (
    <div className="flex items-center bg-theme-dark w-fit rounded-lg">
      {tabs.map((tab) => (
        <button

          key={tab}
          className={`capitalize p-4 px-8 rounded-lg ${
            activeTab === tab
              ? 'bg-[#00bd78] text-white'
              : 'bg-transparent text-gray-400 hover:text-white transition '
          }`}
          onClick={() => {handleValue(tab); setActiveTab(tab)}}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Filter;

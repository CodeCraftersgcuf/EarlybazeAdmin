import React, { useState } from 'react';

const Filter = ({ tabs, handleValue , activeTab ,tabPadding = '4' }) => {
  const [activeTabs, setactiveTabs] = useState(activeTab);

  const handleTabClick = (tab) => {
    handleValue(tab.value);
    setactiveTabs(tab.name);
  };

  return (
    <div className="flex items-center bg-theme-dark w-fit rounded-lg">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`capitalize py-${tabPadding} px-8 rounded-lg ${
            activeTabs === tab.name
              ? 'bg-[#00bd78] text-white'
              : 'bg-transparent text-gray-400 hover:text-white transition'
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default Filter;
import React, { useContext, useState } from 'react';
import { TabContext } from '../context/TabContext';

export default function Tab() {
  const { setTab } = useContext(TabContext);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: 'All', stateName: 'all' },
    { label: 'Active', stateName: 'active' },
    { label: 'Completed', stateName: 'completed' },
  ];
  const handleClick = (tabState, index) => {
    setTab(tabState);
    setActiveTab(index);
  };
  return (
    <div>
      {tabs.map((tab, index) => (
        <button
          className={`text-white mr-2 ${
            index === activeTab ? 'border-t-2 border-white' : ''
          }`}
          key={index}
          onClick={() => {
            handleClick(tab.stateName, index);
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

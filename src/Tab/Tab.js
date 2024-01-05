// Tab.jsx
import React from 'react';

const Tab = ({ tabsList, activeTab, onTabClick }) => (
  <div className="tabs-container">
    {tabsList.map((tab) => (
      <button
        key={tab.tabId}
        type="button"
        className={`tab ${activeTab === tab.tabId ? 'active-tab' : ''}`}
        onClick={() => onTabClick(tab.tabId)}
      >
        {tab.displayText}
      </button>
    ))}
  </div>
);

export default Tab;

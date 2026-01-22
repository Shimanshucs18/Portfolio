import React from 'react';

const Header = ({ activeTab, setActiveTab }) => {
  const tabs = ['About', 'Resume', 'Portfolio'];

  return (
    <header className="flex justify-end gap-6 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'text-accent-yellow'
              : 'text-gray-400 hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </header>
  );
};

export default Header;


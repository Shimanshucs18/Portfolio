import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import About from './components/About';
import WhatImDoing from './components/WhatImDoing';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <>
            <About />
            <WhatImDoing />
            <Testimonials />
          </>
        );
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-dark-bg p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[275px_1fr] gap-8">
          {/* Static Sidebar */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <Sidebar />
          </div>

          {/* Scrollable Main Content */}
          <main className="bg-dark-card border border-dark-border rounded-2xl p-8 overflow-y-auto">
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;


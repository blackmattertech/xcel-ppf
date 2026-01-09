import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { WhatIsIt } from './components/WhatIsIt';
import { Solutions } from './components/Solutions';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { Integrations } from './components/Integrations';
import { Metrics } from './components/Metrics';
import { Flowchart } from './components/Flowchart';
import { Commercials } from './components/Commercials';
import { FinalCTA } from './components/FinalCTA';
import { StickyBottomBar } from './components/StickyBottomBar';

type TabType = 'info' | 'flowchart' | 'quotation';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('quotation');

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Scroll to top when switching tabs
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0a0f] min-h-screen text-white overflow-x-hidden">
      {activeTab === 'info' && (
        <>
          <Hero />
          <WhatIsIt />
          <Solutions />
          <Features />
          <TechStack />
          <Integrations />
          <Metrics />
          <FinalCTA />
        </>
      )}
      
      {activeTab === 'flowchart' && (
        <Flowchart />
      )}
      
      {activeTab === 'quotation' && (
        <Commercials />
      )}
      
      <StickyBottomBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}

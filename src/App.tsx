import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { MenuView } from './views/MenuView';
import { AboutView } from './views/AboutView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';
import { CateringView } from './views/CateringView';
import { NewsView } from './views/NewsView';
import { NotFoundView } from './views/NotFoundView';

export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('home');

  // Synchronize tab with hash
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash) {
        setCurrentTab('home');
      } else {
        setCurrentTab(hash);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleNavigate = (tab: string) => {
    window.location.hash = tab;
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
    switch (currentTab) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} />;
      case 'menu':
        return <MenuView />;
      case 'about':
        return <AboutView onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryView />;
      case 'contact':
        return <ContactView />;
      case 'catering':
        return <CateringView onNavigate={handleNavigate} />;
      case 'news':
        return <NewsView />;
      default:
        return <NotFoundView onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-dvh flex flex-col bg-[#FFF8E8] text-[#2A1B12] selection:bg-[#F6B81A] selection:text-[#2A1B12]">
      <Navbar currentTab={currentTab} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderView()}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};
export default App;

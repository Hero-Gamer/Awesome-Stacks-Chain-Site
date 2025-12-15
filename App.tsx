import React, { useState, useMemo, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsDashboard from './components/StatsDashboard';
import ResourceGrid from './components/ResourceGrid';
import AIChat from './components/AIChat';
import { Category } from './types';
import { RESOURCES } from './constants';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.DASHBOARD);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Theme State
  const [isDark, setIsDark] = useState(true);

  // Initialize theme on mount
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Filtering Logic
  const filteredResources = useMemo(() => {
    let result = RESOURCES;

    if (activeCategory !== Category.DASHBOARD) {
      result = result.filter(r => r.category === activeCategory);
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(r => 
        r.name.toLowerCase().includes(lowerTerm) || 
        r.description.toLowerCase().includes(lowerTerm) ||
        r.tags.some(t => t.toLowerCase().includes(lowerTerm))
      );
    }

    return result;
  }, [activeCategory, searchTerm]);

  return (
    <div className={`flex h-screen overflow-hidden font-sans selection:bg-pink-500/30 selection:text-white relative transition-colors duration-500`}>
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-[-1] transition-colors duration-700 bg-gray-900 dark:bg-[#0f0c29]">
        {/* Dark Mode Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#24243e] via-[#302b63] to-[#0f0c29] transition-opacity duration-700 ${isDark ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Light Mode Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 transition-opacity duration-700 ${isDark ? 'opacity-0' : 'opacity-100'}`}></div>

        {/* Ambient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-screen"></div>
        <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-indigo-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      </div>

      {/* Sidebar */}
      <Sidebar 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 relative z-10">
        <Header 
          onMenuClick={() => setIsSidebarOpen(true)}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          isDark={isDark}
          toggleTheme={toggleTheme}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Title Section */}
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 dark:from-white dark:to-white/60 text-gray-800 tracking-tight">
                {activeCategory}
              </h2>
              <p className="text-lg text-white/50 dark:text-white/50 text-gray-600 font-medium">
                {activeCategory === Category.DASHBOARD 
                  ? 'Your gateway to the Stacks Bitcoin Layer 2 ecosystem.' 
                  : `Browse curated ${activeCategory.toLowerCase()} resources.`}
              </p>
            </div>

            {/* Content Switcher */}
            {activeCategory === Category.DASHBOARD && !searchTerm ? (
              <>
                <StatsDashboard />
                <div className="mt-16">
                   <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-white dark:text-white text-gray-800">
                     <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500/20 text-pink-400">
                        <span className="w-2 h-2 bg-current rounded-full"></span>
                     </span>
                     Featured Resources
                   </h3>
                   <ResourceGrid resources={RESOURCES.filter(r => r.featured)} />
                </div>
              </>
            ) : (
              <ResourceGrid resources={filteredResources} />
            )}
          </div>
        </main>
      </div>

      {/* AI Chat Widget */}
      <AIChat />
    </div>
  );
};

export default App;
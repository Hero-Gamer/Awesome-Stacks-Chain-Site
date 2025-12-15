import React from 'react';
import { Menu, Search, Github, ExternalLink, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  searchTerm: string;
  onSearchChange: (val: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, searchTerm, onSearchChange, isDark, toggleTheme }) => {
  return (
    <header className="h-20 flex items-center justify-between px-6 md:px-10 sticky top-0 z-30 transition-all duration-300">
      {/* Background blur layer */}
      <div className="absolute inset-0 bg-transparent backdrop-blur-sm z-[-1]" />

      <div className="flex items-center gap-6">
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-all"
        >
          <Menu size={24} />
        </button>
        
        {/* Search Bar - Glass Effect */}
        <div className="relative hidden md:block w-96 group">
          <div className="absolute inset-0 bg-white/5 rounded-full blur-sm group-hover:bg-white/10 transition-all"></div>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={18} />
          <input 
            type="text" 
            placeholder="Search the chain..." 
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="relative w-full bg-white/10 border border-white/10 text-sm text-white rounded-full py-3 pl-12 pr-6 focus:outline-none focus:bg-white/20 focus:border-white/30 transition-all placeholder:text-white/40 shadow-lg backdrop-blur-md"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition-all hover:scale-105"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <a 
          href="https://github.com/friedger/awesome-stacks-chain" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors bg-white/5 px-4 py-2.5 rounded-full border border-white/10 hover:bg-white/10"
        >
          <Github size={18} />
          <span>Contribute</span>
        </a>
        
        <button className="flex items-center gap-2 bg-white text-purple-900 px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300">
          <span>Connect</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
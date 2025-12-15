import React from 'react';
import { Category } from '../types';
import { 
  LayoutDashboard, 
  Wallet, 
  CircleDollarSign, 
  Image as ImageIcon, 
  Code2, 
  Cpu, 
  Users, 
  X,
  Zap,
  Globe,
  Gamepad2,
  GraduationCap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeCategory: Category;
  onSelectCategory: (cat: Category) => void;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}

const CATEGORY_ICONS: Record<Category, React.ReactNode> = {
  [Category.DASHBOARD]: <LayoutDashboard size={20} />,
  [Category.WALLETS]: <Wallet size={20} />,
  [Category.WEB_APPS]: <Globe size={20} />,
  [Category.DEFI]: <CircleDollarSign size={20} />,
  [Category.NFTS]: <ImageIcon size={20} />,
  [Category.GAMES]: <Gamepad2 size={20} />,
  [Category.DEV_TOOLS]: <Code2 size={20} />,
  [Category.MINING]: <Cpu size={20} />,
  [Category.LEARNING]: <GraduationCap size={20} />,
  [Category.COMMUNITY]: <Users size={20} />,
};

const Sidebar: React.FC<SidebarProps> = ({ activeCategory, onSelectCategory, isOpen, setIsOpen }) => {
  
  const navItems = Object.values(Category);

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container - Floating Glass Style */}
      <aside 
        className={`
          fixed top-4 left-4 bottom-4 z-50 w-72 rounded-3xl glass-panel
          transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1)
          md:translate-x-0 md:static md:h-[calc(100vh-2rem)] md:my-4 md:ml-4
          flex flex-col overflow-hidden shadow-2xl
          ${isOpen ? 'translate-x-0' : '-translate-x-[110%]'}
        `}
      >
        <div className="flex flex-col h-full bg-gradient-to-b from-white/10 to-transparent">
          {/* Logo Area */}
          <div className="h-24 flex items-center px-8 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center shadow-lg mr-3 shrink-0">
               <Zap className="text-white" fill="currentColor" size={20} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white leading-tight">
                Awesome
              </h1>
              <h1 className="text-lg font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
                Stacks Chain
              </h1>
            </div>
            <button 
              className="ml-auto md:hidden text-white/60 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4 px-4">
              Explore
            </div>
            {navItems.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onSelectCategory(cat);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center gap-4 px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300
                  ${activeCategory === cat 
                    ? 'bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white shadow-lg shadow-purple-500/20 border border-white/20' 
                    : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'}
                `}
              >
                <div className={`${activeCategory === cat ? 'text-white' : 'text-white/50 group-hover:text-white'}`}>
                    {CATEGORY_ICONS[cat]}
                </div>
                {cat}
              </motion.button>
            ))}
          </nav>

          {/* Footer Status */}
          <div className="p-6 border-t border-white/10 bg-black/20">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-black/20 border border-white/5 backdrop-blur-sm">
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75"></div>
              </div>
              <span className="text-xs text-white/80 font-semibold tracking-wide">POX-4 Active</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
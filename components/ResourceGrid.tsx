import React from 'react';
import { ResourceItem } from '../types';
import { ExternalLink, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResourceGridProps {
  resources: ResourceItem[];
}

const ResourceGrid: React.FC<ResourceGridProps> = ({ resources }) => {
  if (resources.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="text-white/20 mb-4 text-6xl font-thin">?</div>
        <h3 className="text-2xl font-bold text-white mb-2">No resources found</h3>
        <p className="text-white/50">Try adjusting your search or category filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {resources.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group relative glass-panel rounded-3xl p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:bg-white/10"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-2xl font-bold text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
              {item.name.charAt(0)}
            </div>
            <div className="flex gap-2">
                {item.featured && (
                    <div className="bg-amber-400/20 text-amber-300 p-2 rounded-full backdrop-blur-md border border-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.2)]">
                        <Star size={16} fill="currentColor" />
                    </div>
                )}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">
            {item.name}
          </h3>
          <p className="text-sm text-white/60 mb-6 line-clamp-2 min-h-[40px] leading-relaxed">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {item.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-3 py-1.5 rounded-full bg-white/5 text-white/70 border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <a 
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white text-purple-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <ArrowUpRight size={20} strokeWidth={2.5} />
          </a>
          
          {/* Decorative Gradient Blob */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10" />
        </motion.div>
      ))}
    </div>
  );
};

export default ResourceGrid;
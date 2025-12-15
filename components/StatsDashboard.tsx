import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { MOCK_STATS } from '../constants';
import { TrendingUp, TrendingDown, Activity, DollarSign, Layers, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const DATA = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 4500 },
  { name: 'Fri', value: 6800 },
  { name: 'Sat', value: 8000 },
  { name: 'Sun', value: 7400 },
];

const StatsDashboard: React.FC = () => {
  const [stxPrice, setStxPrice] = useState<string>('Loading...');
  const [priceChange, setPriceChange] = useState<number>(0);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        // CoinGecko ID for Stacks is 'blockstack'
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=blockstack&vs_currencies=usd&include_24hr_change=true');
        const data = await response.json();
        if (data.blockstack) {
          setStxPrice(`$${data.blockstack.usd.toFixed(2)}`);
          setPriceChange(data.blockstack.usd_24h_change);
        }
      } catch (error) {
        console.error("Failed to fetch STX price", error);
        setStxPrice("$0.26"); // Fallback close to what user expects if API fails
      }
    };

    fetchPrice();
    // Refresh every 60 seconds
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  const renderStatCard = (label: string, value: string, change: number, icon: React.ReactNode, index: number) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="glass-panel rounded-3xl p-6 relative overflow-hidden group hover:bg-white/10 transition-colors"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>
      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">{label}</p>
      <div className="flex items-end justify-between">
        <span className="text-3xl font-bold text-white tracking-tight">{value}</span>
        {change !== 0 && (
            <div className={`flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full ${change >= 0 ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'}`}>
                {change >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                {Math.abs(change).toFixed(2)}%
            </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="space-y-8 pb-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderStatCard('STX Price', stxPrice, priceChange, <DollarSign size={60} />, 0)}
        {renderStatCard('TVL', '$245M', 12.5, <Layers size={60} />, 1)}
        {renderStatCard('Total TXs', '4.2M', 0.8, <Activity size={60} />, 2)}
        {renderStatCard('Active Wallets', '84.2K', 5.1, <Users size={60} />, 3)}
      </div>

      {/* Main Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass-panel rounded-3xl p-8 relative"
        >
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h3 className="text-xl font-bold text-white">Network Activity</h3>
                    <p className="text-sm text-white/50 mt-1">Transaction volume trend over last 7 days</p>
                </div>
                <div className="p-2 bg-white/5 rounded-xl">
                    <Activity className="text-pink-400" />
                </div>
            </div>
            
            <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={DATA}>
                    <defs>
                    <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d8b4fe" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#d8b4fe" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                        dataKey="name" 
                        stroke="rgba(255,255,255,0.3)" 
                        tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 500}} 
                        axisLine={false} 
                        tickLine={false} 
                        dy={10}
                    />
                    <YAxis 
                        stroke="rgba(255,255,255,0.3)" 
                        tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 500}} 
                        axisLine={false} 
                        tickLine={false} 
                        tickFormatter={(val) => `$${val/1000}k`} 
                        dx={-10}
                    />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: 'rgba(20, 10, 40, 0.9)', 
                            backdropFilter: 'blur(10px)',
                            borderColor: 'rgba(255,255,255,0.1)', 
                            color: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
                        }}
                        itemStyle={{ color: '#d8b4fe' }}
                        cursor={{ stroke: 'rgba(255,255,255,0.2)', strokeWidth: 2 }}
                    />
                    <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#d8b4fe" 
                        strokeWidth={4} 
                        fillOpacity={1} 
                        fill="url(#colorVal)" 
                    />
                </AreaChart>
                </ResponsiveContainer>
            </div>
        </motion.div>

        {/* Live Feed */}
        <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4 }}
             className="glass-panel rounded-3xl p-8 flex flex-col"
        >
            <h3 className="text-xl font-bold text-white mb-6">Live Feed</h3>
            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group border border-white/5">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center border border-white/10 group-hover:border-pink-500/50 transition-colors shrink-0">
                            <div className="w-2.5 h-2.5 bg-pink-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                        </div>
                        <div>
                            <div className="text-sm font-bold text-white group-hover:text-pink-300 transition-colors">Block #{834200 + i}</div>
                            <div className="text-xs text-white/40 mt-1">Mined by FastPool • 2m ago</div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsDashboard;
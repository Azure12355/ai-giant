import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET_STATS } from '../constants';

const MarketChart: React.FC = () => {
  return (
    <div className="h-[400px] w-full glass-gold rounded-2xl p-6 border border-brand-500/20 bg-black/40">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
        <span className="w-1 h-6 bg-brand-500 mr-3 rounded-full"></span>
        全球AI市场规模趋势 (2018-2027)
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={MARKET_STATS}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} opacity={0.3} />
          <XAxis dataKey="year" stroke="#94a3b8" tick={{fill: '#9ca3af'}} />
          <YAxis stroke="#94a3b8" tick={{fill: '#9ca3af'}} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#f59e0b', color: '#f8fafc', borderRadius: '8px' }}
            itemStyle={{ color: '#fbbf24' }}
          />
          <Area type="monotone" dataKey="value" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
        </AreaChart>
      </ResponsiveContainer>
      <p className="text-center text-slate-400 text-sm mt-4">预计2027年全球AI市场规模突破万亿美元</p>
    </div>
  );
};

export default MarketChart;
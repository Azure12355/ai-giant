'use client';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET_STATS } from '@/constants';
import { motion } from 'framer-motion';

const MarketChart: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="h-[400px] w-full glass rounded-2xl p-6 border border-brand-500/10 bg-black/40 relative overflow-hidden group"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>

      <h3 className="text-lg font-semibold text-white mb-6 flex items-center relative z-10">
        <span className="w-1 h-6 bg-blue-500 mr-3 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
        <span className="tracking-wide">全球AI市场规模趋势 (2018-2027)</span>
      </h3>

      <div className="w-full h-[85%] relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={MARKET_STATS}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis
              dataKey="year"
              stroke="#475569"
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#475569"
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}B`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                color: '#f8fafc',
                borderRadius: '12px',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ color: '#60a5fa' }}
              cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '4 4' }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
              animationDuration={2000}
              animationEasing="ease-out"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-center text-slate-500 text-xs mt-2"
      >
        预计2027年全球AI市场规模突破万亿美元
      </motion.p>
    </motion.div>
  );
};

export default MarketChart;
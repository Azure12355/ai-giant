import React from 'react';
import { PAIN_POINTS } from '../constants';

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-brand-950/20 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-900/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-800/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">中小企业的生死局</h2>
          <p className="text-brand-500 text-lg font-bold tracking-widest uppercase">不转型，就淘汰</p>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto">
            流量贵、成本高、效率低。传统模式正在被AI武装的同行降维打击。然而，AI落地面临“四大拦路虎”。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, index) => (
            <div key={index} className="glass bg-black/40 p-8 rounded-2xl border border-white/5 hover:border-brand-500/40 group transition-all duration-300 hover:bg-brand-900/5">
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors border border-white/5 group-hover:border-brand-500/30">
                <item.icon className="w-7 h-7 text-slate-400 group-hover:text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Opportunity Gap */}
        <div className="mt-20 glass-gold p-8 md:p-12 rounded-3xl bg-black/60">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">供应方 Supply</h3>
              <p className="text-4xl font-extrabold text-brand-400">20,000+ Tools</p>
              <p className="text-slate-500">有产品，无服务</p>
            </div>
            
            <div className="flex-1 flex flex-col items-center">
              <div className="text-center px-6 py-2 bg-gradient-to-r from-brand-600 to-brand-800 rounded-full text-white font-bold text-sm mb-4 shadow-[0_0_20px_rgba(217,119,6,0.4)] border border-brand-500/30">
                智巨人：超级连接器
              </div>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-700 to-transparent"></div>
            </div>

            <div className="flex-1 text-center md:text-right">
              <h3 className="text-2xl font-bold text-slate-300 mb-2">需求方 Demand</h3>
              <p className="text-4xl font-extrabold text-white">数百万中小企业</p>
              <p className="text-slate-500">有需求，无管道</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg text-white font-semibold">巨大市场真空 = <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-brand-500">平台级机会</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
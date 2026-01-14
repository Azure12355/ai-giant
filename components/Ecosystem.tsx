import React from 'react';
import { ECOSYSTEM_ITEMS, PARTNERS } from '../constants';

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-black relative border-t border-brand-900/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-black to-black"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-500 font-bold tracking-wide uppercase text-sm border border-brand-500/30 px-3 py-1 rounded-full bg-brand-900/20">Five-in-One</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-6">五位一体 · 全链路赋能</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">打造企业AI落地的完整生态闭环，从培训到落地，从工具到解决方案。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
          {ECOSYSTEM_ITEMS.map((item, index) => (
            <div key={index} className="glass bg-slate-900/30 p-6 rounded-2xl text-center hover:bg-brand-900/20 transition-all cursor-default border border-white/5 hover:border-brand-500/30 group">
              <div className="w-12 h-12 bg-gradient-to-br from-brand-400 to-brand-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 transition-transform">
                <item.icon className="text-black w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed group-hover:text-brand-200/80 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partners Marquee / Grid */}
        <div className="border-t border-slate-900 pt-16">
          <h3 className="text-center text-xl font-semibold text-slate-500 mb-8">生态联盟 & 合作伙伴</h3>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNERS.map((partner, idx) => (
              <span key={idx} className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 hover:text-brand-400 cursor-default">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
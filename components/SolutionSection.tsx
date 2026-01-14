import React from 'react';
import { Store, ShoppingCart, Lock, DollarSign, Layers, Globe, MousePointer2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Space Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-950 to-black"></div>
      <div className="absolute inset-0 bg-stars opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-goldLight via-yellow-200 to-brand-gold mb-6 drop-shadow-lg">
            重构商业逻辑 —— AI 超市
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          
          {/* Traditional Model Card (Left) */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-b from-slate-700 to-transparent rounded-3xl opacity-50 blur"></div>
            <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 flex flex-col items-center text-center">
              
              <h3 className="text-2xl font-bold text-slate-300 mb-8 tracking-wide">
                传统模式 <span className="text-sm font-normal text-slate-500 block mt-1">(开“专卖店”)</span>
              </h3>

              {/* Icon Visual */}
              <div className="relative w-48 h-48 mb-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-slate-700 rounded-lg transform rotate-45"></div>
                <div className="absolute inset-0 border border-slate-700 rounded-lg"></div>
                <Store className="w-20 h-20 text-slate-500" />
                
                {/* Wall/Fence effect */}
                <div className="absolute -bottom-4 left-0 right-0 h-8 border-t border-l border-r border-slate-700 opacity-50"></div>
              </div>

              {/* List */}
              <ul className="space-y-6 text-left w-full max-w-sm">
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300 font-medium">卖软件、卖账号，一锤子买卖</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <DollarSign className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300 font-medium">竞争激烈，价格透明，利润越来越薄</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <ShoppingCart className="w-5 h-5 text-slate-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-slate-300 font-medium">客户决策成本高，销售难度大</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Zhijuren Model Card (Right) - Highlighting this one */}
          <div className="relative group transform lg:-translate-y-4 transition-transform">
            {/* Golden Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-b from-brand-gold via-blue-500 to-transparent rounded-3xl opacity-70 blur-md group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative h-full bg-slate-900/90 backdrop-blur-md rounded-3xl p-8 flex flex-col items-center text-center border border-brand-gold/20 shadow-2xl">
              
              <h3 className="text-2xl font-bold text-white mb-8 tracking-wide">
                智巨人模式 <span className="text-sm font-normal text-brand-goldLight block mt-1">(开“AI 超市”)</span>
              </h3>

              {/* Icon Visual - Holographic Ecosystem */}
              <div className="relative w-48 h-48 mb-10 flex items-center justify-center">
                {/* Floor Grid */}
                <div className="absolute bottom-0 w-full h-24 bg-[linear-gradient(to_right,#1e3a8a_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a_1px,transparent_1px)] bg-[size:20px_20px] [transform:perspective(500px)_rotateX(60deg)] opacity-30"></div>
                
                {/* Central Pillar */}
                <div className="absolute w-16 h-24 bg-gradient-to-t from-brand-gold/20 to-brand-gold/5 border border-brand-gold/50 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.3)] animate-pulse-slow">
                   <span className="font-bold text-brand-gold text-xl">AI</span>
                </div>

                {/* Orbiting Icons */}
                <div className="absolute w-40 h-10 border border-blue-500/30 rounded-full [transform:rotateX(70deg)] animate-spin-slow"></div>
                <div className="absolute w-32 h-32 border border-dashed border-brand-gold/30 rounded-full animate-spin-slow [animation-direction:reverse]"></div>
              </div>

              {/* List */}
              <ul className="space-y-6 text-left w-full max-w-sm">
                <li className="flex items-start">
                  <Globe className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">聚合全球顶尖 AI 工具，<span className="text-brand-gold">免费开放入场</span></span>
                  </div>
                </li>
                <li className="flex items-start">
                  <MousePointer2 className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">企业自由浏览试用，<span className="text-brand-gold">无需“入场券”</span></span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Layers className="w-5 h-5 text-brand-gold mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-white font-medium">构建 AI 时代的超级生态，底层中枢协同工作</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            表面看是超市，实则是 <span className="text-brand-gold font-semibold">AI时代的超级生态</span>。<br/>
            自研 <span className="text-blue-400 font-semibold">AI操作系统</span> 连接一切，构建不可替代的业务闭环。
          </p>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;
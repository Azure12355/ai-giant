import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-stars opacity-40"></div>
        {/* Gold Glows */}
        <div className="absolute top-[-20%] left-1/4 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="inline-flex items-center space-x-2 glass-gold px-4 py-1.5 rounded-full mb-8 border-brand-500/30">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span className="text-sm text-brand-200 font-bold tracking-widest uppercase">AI Business Species</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          让小企业成为 <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-100 via-brand-400 to-brand-600 drop-shadow-sm">
            AI时代的小巨人
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-xl text-slate-400 mb-10">
          重构商业逻辑，打造<span className="text-brand-400 font-medium">AI超市</span>。
          <br/>
          打破技术壁垒，推动人工智能在千行百业的高效渗透与价值重塑。
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a href="#market" className="flex items-center justify-center px-8 py-4 border border-brand-400/50 text-base font-bold rounded-full text-black bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600 hover:scale-105 transition-all shadow-[0_0_30px_rgba(245,158,11,0.4)]">
            探索未来 <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <a href="#video-intro" className="flex items-center justify-center px-8 py-4 border border-white/10 text-base font-medium rounded-full text-white glass hover:bg-white/5 hover:border-brand-500/30 transition-all">
            <PlayCircle className="mr-2 h-5 w-5 text-brand-400" /> 了解智巨人
          </a>
        </div>

        {/* Abstract Orbiting Elements representing Ecosystem */}
        <div className="mt-24 relative w-full max-w-5xl h-[300px] hidden md:block">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-brand-500/30 to-transparent"></div>
           
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <div className="w-32 h-32 rounded-full border border-brand-500/20 animate-[spin_10s_linear_infinite]"></div>
             <div className="absolute inset-0 w-32 h-32 rounded-full border border-dashed border-brand-300/20 animate-[spin_15s_linear_infinite_reverse]"></div>
           </div>

           <div className="absolute left-[10%] top-[40%] glass-gold p-4 rounded-xl text-center animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-2xl font-bold text-brand-300">2000+</div>
              <div className="text-xs text-brand-500/80 uppercase tracking-widest">AI Tools</div>
           </div>
           <div className="absolute right-[10%] top-[30%] glass-gold p-4 rounded-xl text-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="text-2xl font-bold text-white">100+</div>
              <div className="text-xs text-brand-500/80 uppercase tracking-widest">Partners</div>
           </div>
           <div className="absolute left-[20%] bottom-[10%] glass-gold p-4 rounded-xl text-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-2xl font-bold text-brand-200">30%</div>
              <div className="text-xs text-brand-500/80 uppercase tracking-widest">Efficiency</div>
           </div>
           <div className="absolute right-[20%] bottom-[20%] glass-gold p-4 rounded-xl text-center animate-float" style={{ animationDelay: '3s' }}>
              <div className="text-2xl font-bold text-brand-400">50%</div>
              <div className="text-xs text-brand-500/80 uppercase tracking-widest">Cost Down</div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
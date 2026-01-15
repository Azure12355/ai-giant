import React, { useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Hero3DBackground from './Hero3DBackground';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/15 pointer-events-none z-0"></div>

      {/* Background Gradients (optional, can be kept for extra depth) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/4 w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center space-x-2 glass-gold px-4 py-1.5 rounded-full mb-8 border-brand-500/30"
        >
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
          <span className="text-sm text-brand-200 font-bold tracking-widest uppercase">AI Business Species</span>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight font-serif">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block"
          >
            让小企业成为 <br className="hidden md:block" />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-brand-100 via-brand-400 to-brand-600 drop-shadow-sm inline-block "
          >
            AI时代的小巨人
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 max-w-2xl text-xl text-slate-400 mb-10"
        >
          重构商业逻辑，打造<span className="text-brand-400 font-medium">AI超市</span>。
          <br />
          打破技术壁垒，推动人工智能在千行百业的高效渗透与价值重塑。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#market"
            className="flex items-center justify-center px-8 py-4 border border-brand-400/50 text-base font-bold rounded-full text-white bg-gradient-to-r from-brand-300 via-brand-500 to-brand-600 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all"
          >
            探索未来 <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#video-intro"
            className="flex items-center justify-center px-8 py-4 border border-white/10 text-base font-medium rounded-full text-white glass hover:border-brand-500/30 transition-all"
          >
            <PlayCircle className="mr-2 h-5 w-5 text-brand-400" /> 了解智巨人
          </motion.a>
        </motion.div>

        {/* Abstract Orbiting Elements replacing the CSS keyframes with Motion */}
        <div className="mt-24 relative w-full max-w-5xl h-[300px] hidden md:block">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-[200px] bg-gradient-to-b from-transparent via-brand-500/30 to-transparent"></div>
          </motion.div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="w-32 h-32 rounded-full border border-brand-500/20"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 w-32 h-32 rounded-full border border-dashed border-brand-300/20"
            ></motion.div>
          </div>

          {[
            { top: "40%", left: "10%", val: "2000+", label: "AI Tools", delay: 0 },
            { top: "30%", right: "10%", val: "100+", label: "Partners", delay: 1 },
            { bottom: "10%", left: "20%", val: "30%", label: "Efficiency", delay: 2 },
            { bottom: "10%", right: "20%", val: "50%", label: "Cost Down", delay: 3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: i },
                opacity: { duration: 0.5, delay: 1.5 + i * 0.2 }
              }}
              className="absolute glass-gold p-4 rounded-xl text-center"
              style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            >
              <div className="text-2xl font-bold text-brand-300">{item.val}</div>
              <div className="text-xs text-brand-500/80 uppercase tracking-widest">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform, useMotionValue, animate } from 'framer-motion';
import { PAIN_POINTS } from '../constants';
import { useEffect } from 'react';

const Counter = ({ from, to }: { from: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const PainPoints: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-24 bg-brand-950/20 relative overflow-hidden">
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-900/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-800/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4"
          >
            中小企业的生死局
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-brand-500 text-lg font-bold tracking-widest uppercase"
          >
            不转型，就淘汰
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-400 mt-4 max-w-3xl mx-auto"
          >
            流量贵、成本高、效率低。传统模式正在被AI武装的同行降维打击。然而，AI落地面临“四大拦路虎”。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.6)" }}
              className="glass bg-black/40 p-8 rounded-2xl border border-white/5 hover:border-brand-500/40 group transition-all duration-300"
            >
              <div className="w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors border border-white/5 group-hover:border-brand-500/30">
                <item.icon className="w-7 h-7 text-slate-400 group-hover:text-brand-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The Opportunity Gap - Enhanced Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 relative p-1 rounded-3xl bg-gradient-to-r from-blue-900/30 to-blue-600/30"
        >
          <div className="bg-[#020617] p-8 md:p-14 rounded-[22px] relative overflow-hidden">
            {/* Supply Side */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="text-center md:text-left flex-1">
                <h3 className="text-xl font-medium text-slate-400 mb-2">供应方 Supply</h3>
                <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2 tracking-tight">
                  {isInView && <Counter from={0} to={20000} />}
                  <span className="text-4xl">+</span>
                </div>
                <div className="text-2xl text-blue-200 mb-1">Tools</div>
                <p className="text-slate-600 text-sm">有产品，无服务</p>
              </div>

              {/* Connector */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                <motion.div
                  animate={{
                    boxShadow: ["0 0 10px rgba(59,130,246,0.2)", "0 0 30px rgba(59,130,246,0.6)", "0 0 10px rgba(59,130,246,0.2)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="px-8 py-3 bg-blue-600 rounded-full text-white font-bold text-sm z-20 shadow-lg border border-blue-400/30"
                >
                  智巨人：超级连接器
                </motion.div>

                {/* Flowing Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 bg-blue-900/30 -z-10"></div>
                <motion.div
                  initial={{ left: "0%", width: "0%" }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className="absolute top-1/2 left-0 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent -z-10"
                ></motion.div>
              </div>

              {/* Demand Side */}
              <div className="text-center md:text-right flex-1">
                <h3 className="text-xl font-medium text-slate-400 mb-2">需求方 Demand</h3>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  数百万
                </div>
                <div className="text-2xl text-slate-200 mb-1">中小企业</div>
                <p className="text-slate-600 text-sm">有需求，无管道</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-center mt-12 pt-8 border-t border-white/5"
            >
              <p className="text-xl text-slate-300">
                巨大市场真空 = <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 font-bold">平台级机会</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;
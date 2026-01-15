'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS, PARTNER_LOGOS } from '../constants';

const Ecosystem: React.FC = () => {
  // 定义动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      }
    }
  };

  return (
    <section id="ecosystem" className="py-24 bg-black relative border-t border-brand-900/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-black to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">服务全球海量客户的行业案例</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2 cursor-pointer hover:text-brand-400 transition-colors"
          >
            智巨人完善的服务体系为企业数字化上云保驾护航
            <span className="flex items-center text-brand-500 font-medium">
              查看更多客户案例 <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24"
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="glass p-8 rounded-2xl relative border border-white/5 hover:border-brand-500/30 group cursor-pointer"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-brand-500/20 transition-colors" />
              </motion.div>
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg`}
                >
                  {item.logo.substring(0, 2)}
                </motion.div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 h-24 overflow-hidden">
                {item.quote}
              </p>
              <div className="flex justify-end items-center">
                <span className="w-8 h-[1px] bg-slate-700 mr-3 group-hover:w-12 group-hover:bg-brand-500 transition-all duration-300"></span>
                <span className="text-slate-500 text-sm font-medium group-hover:text-brand-400 transition-colors">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative"
        >
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex flex-col gap-8 mb-16">
            <MarqueeRow items={PARTNER_LOGOS} direction="left" />
            <MarqueeRow items={PARTNER_LOGOS} direction="right" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10">立即加盟生态</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction = "left" }: { items: Array<{ name: string; image: string }>, direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden relative w-full py-8">
      <motion.div
        className="flex gap-8 px-8"
        animate={{ x: direction === 'left' ? "-50%" : "0%" }}
        initial={{ x: direction === 'left' ? "0%" : "-50%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative group shrink-0 cursor-pointer"
            title={item.name}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-slate-200 flex items-center justify-center p-3 shadow-lg hover:shadow-xl hover:border-brand-400 transition-all">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Ecosystem;
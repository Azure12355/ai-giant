import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign, Rocket, Users, Shield,
  GraduationCap, Cpu, Award, Map, MessageSquare, TrendingUp, Briefcase, Landmark,
  MessageCircle, MapPin, PenTool
} from 'lucide-react';

const Recruit: React.FC = () => {
  const requirements = [
    {
      icon: Rocket,
      title: "认同愿景",
      desc: "看好AI赛道，长期主义"
    },
    {
      icon: Users,
      title: "资源匹配",
      desc: "有B端客户或政府资源"
    },
    {
      icon: Shield,
      title: "超强执行",
      desc: "说到做到，拿结果说话"
    },
    {
      icon: DollarSign,
      title: "资金实力",
      desc: "具备启动资金，抗风险"
    }
  ];

  const revenueStreams = [
    { name: "AI培训", icon: GraduationCap },
    { name: "AI工具", icon: Cpu },
    { name: "AI证书", icon: Award },
    { name: "AI研学", icon: Map },
    { name: "AI咨询", icon: MessageSquare },
    { name: "AI陪跑", icon: TrendingUp },
    { name: "AI外包", icon: Briefcase },
    { name: "政策补贴/会员费", icon: Landmark },
  ];

  const processSteps = [
    { title: "咨询", en: "Consultation", icon: MessageCircle },
    { title: "考察", en: "Visit", icon: MapPin },
    { title: "签约", en: "Signing", icon: PenTool },
    { title: "培训", en: "Training", icon: GraduationCap },
    { title: "开业", en: "Opening", icon: Rocket },
  ];

  return (
    <section id="join" className="py-24 bg-gradient-to-b from-black to-brand-950/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            招募城市合伙人
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-brand-500"></div>
            <p className="text-brand-400 font-bold tracking-[0.2em] uppercase text-sm md:text-base">
              席位有限 · 一城一主 · 先到先得
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-brand-500"></div>
          </div>
          <p className="mt-4 text-slate-500 text-sm">区域独家保护，错过再无机会</p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-24">
          {requirements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-2xl border border-white/5 bg-slate-900/40 text-center group hover:border-brand-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-500 group-hover:scale-110 group-hover:from-brand-600 group-hover:to-brand-800 group-hover:text-white transition-all duration-500 shadow-xl">
                <item.icon className="w-7 h-7" />
              </div>
              <h4 className="text-white text-lg font-bold mb-2 group-hover:text-brand-400 transition-colors">{item.title}</h4>
              <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue Streams - Infinite Marquee with Advanced Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 relative"
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">收益全景 · 八大金矿</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">多元化盈利管道 · 打造商业闭环</p>
          </div>

          {/* Marquee Container */}
          <div className="relative w-full overflow-hidden py-10 mask-gradient-x">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-20 z-[2]"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-20 z-[2]"></div>

            <div className="flex gap-8 w-max">
              {[...revenueStreams, ...revenueStreams, ...revenueStreams].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30, // Adjust speed here
                  }}
                  className="relative group w-[280px] h-[320px] shrink-0 transform-style-3d perspective-1000"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-black rounded-2xl border border-white/10 p-8 flex flex-col items-center justify-center gap-6 backdrop-blur-md transition-all duration-500 group-hover:border-brand-500/50 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] overflow-hidden">

                    {/* Background Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%] transition-transform"></div>

                    {/* Glowing Orb */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-500/10 rounded-full blur-2xl group-hover:bg-brand-500/20 transition-colors duration-500"></div>

                    {/* Icon Container */}
                    <div className="relative z-10 w-20 h-20 rounded-2xl bg-slate-800/50 border border-white/5 flex items-center justify-center group-hover:bg-brand-600 group-hover:scale-110 transition-all duration-500 shadow-lg">
                      <item.icon className="w-8 h-8 text-brand-400 group-hover:text-white transition-colors" />
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 text-center">
                      <h4 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">{item.name}</h4>
                      <div className="h-1 w-8 bg-brand-900 mx-auto rounded-full group-hover:w-16 group-hover:bg-brand-500 transition-all duration-500"></div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-16">加入流程</h3>
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className="w-20 h-20 rounded-full bg-slate-950 border-4 border-brand-900/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-brand-500 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-brand-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-1">{step.title}</h4>
                    <p className="text-xs text-brand-500/60 font-mono tracking-widest uppercase">{step.en}</p>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-1/2 -mr-8 -mt-2 w-6 h-6 bg-brand-600 rounded-full text-[10px] flex items-center justify-center text-white font-bold ring-4 ring-black">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center bg-gradient-to-br from-brand-900/40 to-black border border-brand-500/20 shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-t from-brand-950/80 to-transparent pointer-events-none"></div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 relative z-10"
          >
            让天下没有难做的AI生意
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto italic relative z-10 leading-relaxed"
          >
            “AI不是风口，而是未来十年的水和电。<br className="hidden md:block" />今天我们种下的种子，明天将长成参天大树。”
            <span className="block mt-4 text-brand-400 font-bold not-italic text-base">— 七天</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold py-5 px-16 rounded-full text-lg shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all"
            >
              立即加入我们
            </motion.button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Recruit;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    logo: "小红书",
    color: "bg-red-500",
    quote: "小红书作为一家海外购物一站式发现平台，采用了智巨人的云服务器等IaaS资源，快速开发产品，缩短了开发周期，提升了产品品质。",
    author: "小红书"
  },
  {
    logo: "bilibili",
    color: "bg-pink-400",
    quote: "bilibili 是国内最大的年轻人潮流文化娱乐社区。通过使用智巨人的资源与服务，bilibili 极大提升了服务可用性和用户体验。",
    author: "bilibili"
  },
  {
    logo: "人民日报",
    color: "bg-red-600",
    quote: "人民日报社将携手智巨人共同建设中国媒体融合云平台，向全国媒体行业提供安全的云服务体系和媒体融合平台、应用工具。",
    author: "人民日报"
  }
];

const PARTNERS_ROW_1 = [
  "New Oriental", "WeBank", "Tongcheng", "Tencent Games", "Mini World", "Mogu", "Douyu",
  "Yonghui", "GF Securities", "Lizhi", "Tencent Class", "Kuaishou", "People's Daily", "YuanTik"
];

const PARTNERS_ROW_2 = [
  "China Export", "PUBG", "58.com", "People.cn", "Parametrix.ai", "Didi", "WeDoctor",
  "Alibaba", "iFlytek", "DingTalk", "SenseTime", "ByteDance", "Baidu", "Microsoft"
];

const Ecosystem: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-black relative border-t border-brand-900/20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-900/10 via-black to-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">服务全球海量客户的行业案例</h2>
          <p className="text-slate-400 max-w-2xl mx-auto flex items-center justify-center gap-2 cursor-pointer hover:text-brand-400 transition-colors">
            智巨人完善的服务体系为企业数字化上云保驾护航
            <span className="flex items-center text-brand-500 font-medium">
              查看更多客户案例 <ArrowRight className="w-4 h-4 ml-1" />
            </span>
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mb-24">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl relative hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-brand-500/30 group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                  {item.logo.substring(0, 2)}
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 h-24 overflow-hidden">
                {item.quote}
              </p>
              <div className="flex justify-end items-center">
                <span className="w-8 h-[1px] bg-slate-700 mr-3"></span>
                <span className="text-slate-500 text-sm font-medium">{item.author}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Marquee Section */}
        <div className="w-full relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

          <div className="flex flex-col gap-8 mb-16">
            <MarqueeRow items={PARTNERS_ROW_1} direction="left" />
            <MarqueeRow items={PARTNERS_ROW_2} direction="right" />
          </div>

          <div className="flex justify-center">
            <a href="#join" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
              <span className="relative z-10">立即加盟生态</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction = "left" }: { items: string[], direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden relative w-full">
      <motion.div
        className="flex gap-12 whitespace-nowrap px-12"
        animate={{ x: direction === 'left' ? "-50%" : "0%" }}
        initial={{ x: direction === 'left' ? "0%" : "-50%" }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center justify-center w-40 h-16 bg-white/5 rounded-lg border border-white/5 hover:border-brand-500/30 hover:bg-white/10 transition-colors cursor-pointer group">
            <span className="text-slate-400 font-bold text-lg group-hover:text-brand-400 transition-colors">{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default Ecosystem;
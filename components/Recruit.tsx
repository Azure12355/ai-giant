import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Rocket, Users, Shield } from 'lucide-react';

const Recruit: React.FC = () => {
  return (
    <section id="join" className="py-24 bg-gradient-to-b from-black to-brand-950/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Recruitment Requirements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-gold rounded-3xl p-8 md:p-12 bg-black/50 mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">招募城市合伙人</h2>
            <p className="text-brand-400 font-semibold tracking-wider uppercase">席位有限 · 一城一主 · 先到先得</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-900/10 border border-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-500 group-hover:scale-110 transition-transform group-hover:bg-brand-500 group-hover:text-black">
                <Rocket className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold">认同愿景</h4>
              <p className="text-slate-500 text-sm mt-2">看好AI赛道，长期主义</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-900/10 border border-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-500 group-hover:scale-110 transition-transform group-hover:bg-brand-500 group-hover:text-black">
                <Users className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold">资源匹配</h4>
              <p className="text-slate-500 text-sm mt-2">有B端客户或政府资源</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-900/10 border border-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-500 group-hover:scale-110 transition-transform group-hover:bg-brand-500 group-hover:text-black">
                <Shield className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold">超强执行</h4>
              <p className="text-slate-500 text-sm mt-2">说到做到，拿结果说话</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-brand-900/10 border border-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-500 group-hover:scale-110 transition-transform group-hover:bg-brand-500 group-hover:text-black">
                <DollarSign className="w-8 h-8" />
              </div>
              <h4 className="text-white font-bold">资金实力</h4>
              <p className="text-slate-500 text-sm mt-2">具备启动资金，抗风险</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-64 bg-brand-600/20 blur-[100px] rounded-full -z-10"></div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-8"
          >
            让天下没有难做的AI生意
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto italic"
          >
            “AI不是风口，而是未来十年的水和电。今天我们种下的种子，明天将长成参天大树。” —— 七天
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-brand-500 to-brand-700 text-white font-bold py-4 px-12 rounded-full text-lg shadow-[0_0_30px_rgba(245,158,11,0.4)] ring-4 ring-brand-500/20 border border-brand-400/30"
          >
            立即加入我们
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Recruit;
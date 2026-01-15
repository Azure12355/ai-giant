import React from 'react';
import MarketChart from './MarketChart';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Flag } from 'lucide-react';

const MarketSection: React.FC = () => {
  return (
    <section id="market" className="py-24 bg-black relative border-t border-brand-900/20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">万亿蓝海 · 大爆炸时代</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            AI工具日均新增数百，总量破2万+。这不仅是一场技术革命，更是一场事关国运的世纪大竞赛。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MarketChart />
          </motion.div>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 p-3 bg-brand-500/10 rounded-xl border border-brand-500/20">
                <TrendingUp className="w-8 h-8 text-brand-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">爆发式增长</h4>
                <p className="text-slate-400">90% CEO认同AI战略重要性。中国正凭借全球最丰富的应用场景，开启“应用层的降维打击”。</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 p-3 bg-brand-600/10 rounded-xl border border-brand-600/20">
                <FileText className="w-8 h-8 text-brand-500" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">政策红利密集</h4>
                <p className="text-slate-400">从《新一代人工智能发展规划》到“AI+”行动，国家与地方（浙沪深）真金白银补贴，支持数字化转型。</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 p-3 bg-brand-700/10 rounded-xl border border-brand-700/20">
                <Flag className="w-8 h-8 text-brand-600" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-2">谁能赢？</h4>
                <blockquote className="border-l-4 border-brand-500 pl-4 italic text-slate-300">
                  “AI不会替代人，但率先使用AI工具的人，将会替代那些拒绝改变的人。”
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MarketSection;
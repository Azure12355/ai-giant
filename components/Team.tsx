import React from 'react';
import { motion } from 'framer-motion';
import { CORE_TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">汇聚巨头精英 · 共创AI未来</h2>
          <p className="text-slate-400">核心团队汇聚阿里、字节、百度等一线互联网巨头精英。</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_TEAM.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass group relative p-6 rounded-2xl border border-white/5 bg-slate-900/40 overflow-hidden hover:bg-slate-900/80 transition-all duration-300 hover:border-brand-500/30"
            >
              {/* Highlight effect for founder */}
              {index === 0 && (
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-brand-500 to-brand-700 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-lg">
                  LEADER
                </div>
              )}

              <div className="w-24 h-24 rounded-full bg-slate-800 mb-6 mx-auto overflow-hidden border-2 border-slate-700 group-hover:border-brand-500 transition-colors shadow-xl">
                {/* Placeholder for real image */}
                <img
                  src={`https://picsum.photos/seed/${member.name}/200`}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-brand-500 text-sm font-bold mb-4 uppercase tracking-wider">{member.role}</p>
                <p className="text-slate-400 text-sm mb-4 min-h-[60px] leading-relaxed">{member.description}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.tags?.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-brand-900/20 border border-brand-500/10 rounded text-[10px] text-brand-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center border-t border-white/5 pt-10"
        >
          <p className="text-slate-500 text-sm mb-4 uppercase tracking-widest">战略股东与支持</p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-300 font-medium">
            <span className="hover:text-brand-400 transition-colors">林敏 (全域电商营销领军者)</span>
            <span className="hover:text-brand-400 transition-colors">吴晓波 (著名财经作家)</span>
            <span className="hover:text-brand-400 transition-colors">极客湾创始人</span>
            <span className="hover:text-brand-400 transition-colors">清华校友会</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
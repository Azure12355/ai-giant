'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CORE_TEAM, FOUNDER, ADVISORS, MENTOR_AVATARS, MENTOR_CONFIG, ADDITIONAL_MENTORS } from '../constants';
import { Quote } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-950/50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">汇聚巨头精英 · 共创AI未来</h2>
          <p className="text-slate-400">核心团队汇聚阿里、字节、百度等一线互联网巨头精英。</p>
        </motion.div>

        {/* 1. Founder Section - Top Layer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
        >
          <div className="glass-gold rounded-3xl p-8 md:p-0 bg-black/40 border-brand-500/20 overflow-hidden group hover:border-brand-500/40 transition-colors duration-500">
            <div className="flex flex-col md:flex-row items-stretch">
              {/* Left: Photo */}
              <div className="w-full md:w-1/3 relative min-h-[400px]">
                <div className="absolute inset-0 bg-brand-900/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img
                  src={FOUNDER.avatarUrl || `https://picsum.photos/seed/${FOUNDER.name}/500/600`}
                  alt={FOUNDER.name}
                  className="w-full h-full object-cover object-center transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <div className="bg-brand-500 text-white text-xs font-bold px-3 py-1 rounded mb-2 inline-block shadow-lg">FOUNDER</div>
                  <h3 className="text-3xl font-bold text-white shadow-black drop-shadow-lg">{FOUNDER.name}</h3>
                </div>
              </div>

              {/* Right: Intro */}
              <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center relative">
                <Quote className="absolute top-8 right-8 text-brand-500/20 w-24 h-24 rotate-180" />

                <h4 className="text-2xl font-bold text-white mb-2">{FOUNDER.role}</h4>
                <div className="h-1 w-12 bg-brand-500 mb-8 rounded-full"></div>

                <p className="text-lg text-slate-300 leading-relaxed mb-8 relative z-10">
                  {FOUNDER.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {FOUNDER.tags?.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-brand-900/30 border border-brand-500/20 rounded-full text-brand-300 font-medium text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* 2. Core Team Section - Middle Layer */}
        <div className="mb-24">
          <div className="flex items-center mb-12">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10"></div>
            <h3 className="px-6 text-2xl font-bold text-white">核心团队</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass group relative p-6 rounded-2xl border border-white/5 bg-slate-900/40 overflow-hidden hover:bg-slate-900/80 transition-all duration-300 hover:border-brand-500/30 hover:-translate-y-2"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 mb-6 mx-auto overflow-hidden border-2 border-slate-700 group-hover:border-brand-500 transition-colors shadow-xl">
                  <img
                    src={member.avatarUrl || `https://picsum.photos/seed/${member.name}/200`}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-all duration-500"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-brand-500 text-xs font-bold mb-4 uppercase tracking-wider">{member.role}</p>
                  <p className="text-slate-400 text-sm mb-4 min-h-[40px] leading-relaxed line-clamp-3">{member.description}</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {member.tags?.map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-brand-900/20 border border-brand-500/10 rounded text-[10px] text-brand-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. Advisors Section - Bottom Layer */}
        <div>
          <div className="flex items-center mb-12">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-white/10"></div>
            <h3 className="px-6 text-2xl font-bold text-white">战略股东与支持</h3>
            <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-white/10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {ADVISORS.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex items-center p-6 rounded-xl bg-slate-900/30 border border-white/5 hover:border-brand-500/20 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <div className="w-16 h-16 rounded-full bg-slate-800 mr-6 overflow-hidden shrink-0 border border-slate-700">
                  <img
                    src={advisor.avatarUrl || `https://picsum.photos/seed/${advisor.name}/200`}
                    alt={advisor.name}
                    className="w-full h-full object-cover object-top object-left"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{advisor.name}</h4>
                  <p className="text-brand-500 text-xs font-bold uppercase mb-1">{advisor.role}</p>
                  <p className="text-slate-400 text-sm">{advisor.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Support Text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 text-sm">
              获得 {ADDITIONAL_MENTORS.map((mentor, index) => (
                <span key={index} className="text-slate-300">{mentor}</span>
              )).reduce((prev, curr) => [prev, '、', curr])} 等大咖支持
            </p>
          </motion.div>
        </div>

        {/* 4. Mentors Infinite Scroll - Bottom Layer */}
        <div className="mt-24 pt-10 border-t border-white/5 relative">
          <div className="text-center mb-8">
            <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">特邀导师与生态伙伴</p>
          </div>

          <div className="relative w-full overflow-hidden py-4 mask-gradient-x space-y-6">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-950/80 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-950/80 to-transparent z-10"></div>

            {/* Row 1 - Scroll Left */}
            <div className="flex w-max items-start">
              <motion.div
                className="flex gap-6 pr-6 items-start"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: MENTOR_CONFIG.scrollDuration_A,
                }}
              >
                {MENTOR_AVATARS.rowA.map((avatarUrl, i) => (
                  <div
                    key={`row1-${i}`}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/10 bg-slate-800 overflow-hidden shrink-0 hover:scale-110 hover:border-brand-500 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={avatarUrl}
                      alt={`Mentor A${i}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Scroll Right */}
            <div className="flex w-max items-start">
              <motion.div
                className="flex gap-6 pr-6 items-start"
                initial={{ x: "-50%" }}
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: MENTOR_CONFIG.scrollDuration_B,
                }}
              >
                {MENTOR_AVATARS.rowB.map((avatarUrl, i) => (
                  <div
                    key={`row2-${i}`}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white/10 bg-slate-800 overflow-hidden shrink-0 hover:scale-110 hover:border-brand-500 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={avatarUrl}
                      alt={`Mentor B${i}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  DollarSign, Rocket, Users, Shield,
  GraduationCap, Cpu, Award, Map, MessageSquare, TrendingUp, Briefcase, Landmark,
  MessageCircle, MapPin, PenTool
} from 'lucide-react';
import styles from '@/styles/features/Recruit.module.css';

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
    <section id="join" className={styles.section}>
      {/* Background Elements */}
      <div className={styles.noiseBackground}></div>
      <div className={`${styles.backgroundGlow} ${styles.glowTop}`}></div>
      <div className={`${styles.backgroundGlow} ${styles.glowBottom}`}></div>

      <div className={styles.container}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.headerTitle}>
            招募城市合伙人
          </h2>
          <div className={styles.headerSubtitleContainer}>
            <div className={`${styles.headerDividerLine} ${styles.headerDividerLineLeft}`}></div>
            <p className={styles.headerSubtitle}>
              席位有限 · 一城一主 · 先到先得
            </p>
            <div className={`${styles.headerDividerLine} ${styles.headerDividerLineRight}`}></div>
          </div>
          <p className={styles.headerNote}>区域独家保护，错过再无机会</p>
        </motion.div>

        {/* Requirements Grid */}
        <div className={styles.requirementsSection}>
          <div className={styles.requirementsGrid}>
            {requirements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={styles.requirementCard}
              >
                <div className={styles.requirementIconBox}>
                  <item.icon className={styles.requirementIcon} />
                </div>
                <h4 className={styles.requirementTitle}>{item.title}</h4>
                <p className={styles.requirementDescription}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Revenue Streams - Infinite Marquee with Advanced Effects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.revenueSection}
        >
          <div className={styles.revenueHeader}>
            <h3 className={styles.revenueTitle}>收益全景 · 八大金矿</h3>
            <p className={styles.revenueSubtitle}>多元化盈利管道 · 打造商业闭环</p>
          </div>

          {/* Marquee Container */}
          <div className={styles.marqueeContainer}>
            {/* Gradient Masks */}
            <div className={`${styles.marqueeMask} ${styles.marqueeMaskLeft}`}></div>
            <div className={`${styles.marqueeMask} ${styles.marqueeMaskRight}`}></div>

            <div className={styles.marqueeTrack}>
              {[...revenueStreams, ...revenueStreams, ...revenueStreams].map((item, index) => (
                <motion.div
                  key={index}
                  animate={{ x: ["0%", "-100%"] }}
                  transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 30,
                  }}
                  className={styles.revenueCard}
                >
                  <div className={styles.revenueCardInner}>

                    {/* Background Shine Effect */}
                    <div className={styles.revenueCardShine}></div>

                    {/* Glowing Orb */}
                    <div className={styles.revenueCardOrb}></div>

                    {/* Icon Container */}
                    <div className={styles.revenueCardIconBox}>
                      <item.icon className={styles.revenueCardIcon} />
                    </div>

                    {/* Text Content */}
                    <div className={styles.revenueCardText}>
                      <h4 className={styles.revenueCardTitle}>{item.name}</h4>
                      <div className={styles.revenueCardDivider}></div>
                    </div>

                    {/* Corner Accent */}
                    <div className={styles.revenueCardCorner}></div>
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
          className={styles.processSection}
        >
          <h3 className={styles.processTitle}>加入流程</h3>
          <div className={styles.processContainer}>
            {/* Connecting Line (Desktop) */}
            <div className={styles.processConnectingLine}></div>

            <div className={styles.processGrid}>
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className={styles.processStep}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                >
                  <div className={styles.processStepIconBox}>
                    <step.icon className={styles.processStepIcon} />
                  </div>
                  <div className={styles.processStepText}>
                    <h4 className={styles.processStepTitle}>{step.title}</h4>
                    <p className={styles.processStepSubtitle}>{step.en}</p>
                  </div>

                  {/* Step Number Badge */}
                  <div className={styles.processStepBadge}>
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaNoise}></div>
          <div className={styles.ctaGradient}></div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.ctaTitle}
          >
            让天下没有难做的AI生意
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.ctaQuote}
          >
            "AI不是风口，而是未来十年的水和电。今天我们种下的种子，明天将长成参天大树。"
            <span className={styles.ctaQuoteAuthor}>— 七天</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={styles.ctaButtonContainer}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.ctaButton}
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

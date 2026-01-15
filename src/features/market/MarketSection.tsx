'use client';

import React from 'react';
import MarketChart from './MarketChart';
import { motion } from 'framer-motion';
import { TrendingUp, FileText, Flag } from 'lucide-react';
import styles from '@/styles/features/MarketSection.module.css';

const MarketSection: React.FC = () => {
  return (
    <section id="market" className={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={styles.container}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>万亿蓝海 · 大爆炸时代</h2>
          <p className={styles.description}>
            AI工具日均新增数百，总量破2万+。这不仅是一场技术革命，更是一场事关国运的世纪大竞赛。
          </p>
        </div>

        <div className={styles.contentGrid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <MarketChart />
          </motion.div>
          <div className={styles.featuresList}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={styles.featureItem}
            >
              <div className={`${styles.iconBox} ${styles.iconBoxBlue}`}>
                <TrendingUp className={`${styles.icon} ${styles.iconBlue}`} />
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>爆发式增长</h4>
                <p className={styles.featureDescription}>90% CEO认同AI战略重要性。中国正凭借全球最丰富的应用场景，开启"应用层的降维打击"。</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={styles.featureItem}
            >
              <div className={`${styles.iconBox} ${styles.iconBoxBrand}`}>
                <FileText className={`${styles.icon} ${styles.iconBrand}`} />
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>政策红利密集</h4>
                <p className={styles.featureDescription}>从《新一代人工智能发展规划》到"AI+"行动，国家与地方（浙沪深）真金白银补贴，支持数字化转型。</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className={styles.featureItem}
            >
              <div className={`${styles.iconBox} ${styles.iconBoxDark}`}>
                <Flag className={`${styles.icon} ${styles.iconDark}`} />
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>谁能赢？</h4>
                <blockquote className={styles.blockquote}>
                  "AI不会替代人，但率先使用AI工具的人，将会替代那些拒绝改变的人。"
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

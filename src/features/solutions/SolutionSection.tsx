'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SOLUTIONS } from '@/lib/constants';
import styles from '@/styles/features/SolutionSection.module.css';

const SolutionSection: React.FC = () => {
  return (
    <section id="solutions" className={styles.section}>
      <div className={styles.noiseBackground}></div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>我们的解法：智巨人</h2>
          <p className={styles.description}>
            不是卖课，不是卖软件，而是提供 <span className={styles.descriptionHighlight}>全方位的AI商业落地服务</span>。
          </p>
        </motion.div>

        <div className={styles.grid}>
          {SOLUTIONS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={styles.card}
            >
              <div className={styles.cardCorner}></div>

              <div className={styles.iconBox}>
                <item.icon className={styles.cardIcon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

'use client';

import React, { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { PAIN_POINTS } from '@/lib/constants';
import { useEffect } from 'react';
import styles from '@/styles/features/PainPoints.module.css';

const Counter = ({ from, to }: { from: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 2.5, ease: "easeOut" });
    return controls.stop;
  }, [count, to]);

  return <span>{rounded.get()}</span>;
};

const PainPoints: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className={styles.section}>
      {/* Background blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={`${styles.backgroundBlob} ${styles.blobTop}`}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`${styles.backgroundBlob} ${styles.blobBottom}`}
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={styles.title}
          >
            中小企业的生死局
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.subtitle}
          >
            不转型，就淘汰
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.description}
          >
            流量贵、成本高、效率低。传统模式正在被AI武装的同行降维打击。然而，AI落地面临"四大拦路虎"。
          </motion.p>
        </div>

        <div className={styles.grid}>
          {PAIN_POINTS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(15, 23, 42, 0.6)" }}
              className={styles.card}
            >
              <div className={styles.iconBox}>
                <item.icon className={styles.icon} />
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* The Opportunity Gap - Enhanced Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.opportunityGap}
        >
          <div className={styles.opportunityGapContent}>
            {/* Supply Side */}
            <div className={styles.opportunityLayout}>
              <div className={`${styles.opportunitySide} ${styles.opportunitySideLeft}`}>
                <h3 className={styles.opportunityLabel}>供应方 Supply</h3>
                <div className={`${styles.opportunityValue} ${styles.opportunityValueBlue}`}>
                  {isInView && <Counter from={0} to={20000} />}
                  <span className={styles.opportunityUnit}>+</span>
                </div>
                <div className={`${styles.opportunitySubtext} ${styles.opportunitySubtextBlue}`}>Tools</div>
                <p className={styles.opportunityNote}>有产品，无服务</p>
              </div>

              {/* Connector */}
              <div className={styles.connectorContainer}>
                <motion.div
                  animate={{
                    boxShadow: ["0 0 10px rgba(59,130,246,0.2)", "0 0 30px rgba(59,130,246,0.6)", "0 0 10px rgba(59,130,246,0.2)"]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={styles.connectorBadge}
                >
                  智巨人：超级连接器
                </motion.div>

                {/* Flowing Lines */}
                <div className={styles.connectorLineBase}></div>
                <motion.div
                  initial={{ left: "0%", width: "0%" }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className={styles.connectorLineAnimated}
                ></motion.div>
              </div>

              {/* Demand Side */}
              <div className={`${styles.opportunitySide} ${styles.opportunitySideRight}`}>
                <h3 className={styles.opportunityLabel}>需求方 Demand</h3>
                <div className={`${styles.opportunityValue} ${styles.opportunityValueWhite}`}>
                  数百万
                </div>
                <div className={`${styles.opportunitySubtext} ${styles.opportunitySubtextSlate}`}>中小企业</div>
                <p className={styles.opportunityNote}>有需求，无管道</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.5, duration: 1 }}
              className={styles.opportunityFooter}
            >
              <p className={styles.opportunityFooterText}>
                巨大市场真空 = <span className={styles.opportunityHighlight}>平台级机会</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPoints;

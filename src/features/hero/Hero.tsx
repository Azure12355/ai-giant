'use client';

import React, { useRef, Suspense } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import styles from '@/styles/features/Hero.module.css';

const Hero3DBackground = dynamic(
  () => import('./Hero3DBackground').then(mod => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className={styles.loadingBackground} />
    ),
  }
);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={containerRef} className={styles.hero}>
      {/* 3D Background */}
      <Hero3DBackground />

      {/* Overlay for readability */}
      <div className={styles.overlay}></div>

      {/* Background Gradients */}
      <div className={styles.backgroundGradients}>
        <div className={`${styles.blob} ${styles.blobTop}`}></div>
        <div className={`${styles.blob} ${styles.blobBottom}`}></div>
      </div>

      <motion.div
        style={{ y, opacity }}
        className={styles.content}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.badge}
        >
          <span className={styles.badgeDot}></span>
          <span className={styles.badgeText}>AI Business Species</span>
        </motion.div>

        <h1 className={styles.title}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ display: 'block' }}
          >
            让小企业成为 <br className={styles.brHidden} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className={styles.gradientText}
          >
            AI时代的小巨人
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className={styles.description}
        >
          重构商业逻辑，打造<span className={styles.descriptionHighlight}>AI超市</span>。
          <br />
          打破技术壁垒，推动人工智能在千行百业的高效渗透与价值重塑。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className={styles.buttons}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#market"
            className={styles.buttonPrimary}
          >
            探索未来 <ArrowRight className={styles.buttonIcon} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            href="#video-intro"
            className={styles.buttonSecondary}
          >
            <PlayCircle className={`${styles.buttonIcon} ${styles.buttonIconPrimary}`} /> 了解智巨人
          </motion.a>
        </motion.div>

        {/* Abstract Orbiting Elements */}
        <div className={styles.orbitContainer}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 2 }}
            className={styles.orbitLines}
          >
            <div className={styles.orbitLineHorizontal}></div>
            <div className={styles.orbitLineVertical}></div>
          </motion.div>

          <div className={styles.orbitCenter}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className={styles.orbitRing}
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className={styles.orbitRingDashed}
            ></motion.div>
          </div>

          {[
            { top: "40%", left: "10%", val: "2000+", label: "AI Tools", delay: 0 },
            { top: "30%", right: "10%", val: "100+", label: "Partners", delay: 1 },
            { bottom: "10%", left: "20%", val: "30%", label: "Efficiency", delay: 2 },
            { bottom: "10%", right: "20%", val: "50%", label: "Cost Down", delay: 3 },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: i },
                opacity: { duration: 0.5, delay: 1.5 + i * 0.2 }
              }}
              className={styles.statCard}
              style={{ top: item.top, left: item.left, right: item.right, bottom: item.bottom }}
            >
              <div className={styles.statValue}>{item.val}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

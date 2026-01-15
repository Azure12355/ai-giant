'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { TESTIMONIALS, PARTNER_LOGOS } from '@/lib/constants';
import styles from '@/styles/features/Ecosystem.module.css';

const Ecosystem: React.FC = () => {
  // 定义动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
      }
    }
  };

  return (
    <section id="ecosystem" className={styles.section}>
      <div className={styles.radialGradient}></div>

      <div className={styles.container}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={styles.header}
        >
          <h2 className={styles.title}>服务全球海量客户的行业案例</h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.subtitle}
          >
            智巨人完善的服务体系为企业数字化上云保驾护航
            <span className={styles.subtitleLink}>
              查看更多客户案例 <ArrowRight className={styles.subtitleLinkIcon} />
            </span>
          </motion.p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className={styles.testimonialsGrid}
        >
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={styles.testimonialCard}
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Quote className={styles.testimonialQuoteIcon} />
              </motion.div>
              <div className={styles.testimonialLogo}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={styles.testimonialLogoBox}
                  style={{ backgroundColor: item.color }}
                >
                  {item.logo.substring(0, 2)}
                </motion.div>
              </div>
              <p className={styles.testimonialQuote}>
                {item.quote}
              </p>
              <div className={styles.testimonialFooter}>
                <span className={styles.testimonialDivider}></span>
                <span className={styles.testimonialAuthor}>{item.author}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.marqueeSection}
        >
          <div className={`${styles.marqueeMask} ${styles.marqueeMaskLeft}`}></div>
          <div className={`${styles.marqueeMask} ${styles.marqueeMaskRight}`}></div>

          <div className={styles.marqueeRows}>
            <MarqueeRow items={PARTNER_LOGOS} direction="left" />
            <MarqueeRow items={PARTNER_LOGOS} direction="right" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={styles.ctaContainer}
          >
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={styles.ctaButton}
            >
              <span className={styles.ctaButtonText}>立即加盟生态</span>
              <ArrowRight className={styles.ctaButtonIcon} />
              <div className={styles.ctaButtonOverlay}></div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction = "left" }: { items: Array<{ name: string; image: string }>, direction?: "left" | "right" }) => {
  return (
    <div className="marqueeRow">
      <style>{`
        .marqueeRow {
          display: flex;
          overflow: hidden;
          position: relative;
          width: 100%;
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      `}</style>
      <motion.div
        className="marqueeTrack"
        style={{ display: 'flex', gap: '2rem', padding: '0 2rem' }}
        animate={{ x: direction === 'left' ? "-50%" : "0%" }}
        initial={{ x: direction === 'left' ? "0%" : "-50%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        }}
      >
        {[...items, ...items, ...items].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="partnerLogo"
            title={item.name}
          >
            <style>{`
              .partnerLogo {
                position: relative;
                flex-shrink: 0;
                cursor: pointer;
              }
              .partnerLogoBox {
                width: 5rem;
                height: 5rem;
                border-radius: 50%;
                background-color: rgb(255, 255, 255);
                border: 4px solid rgb(226, 232, 240);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.75rem;
                box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
                transition: all 300ms ease;
              }
              @media (min-width: 768px) {
                .partnerLogoBox {
                  width: 6rem;
                  height: 6rem;
                }
              }
              .partnerLogo:hover .partnerLogoBox {
                box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
                border-color: rgb(96, 165, 250);
              }
              .partnerLogoBox img {
                width: 100%;
                height: 100%;
                object-fit: contain;
              }
            `}</style>
            <div className="partnerLogoBox">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Ecosystem;

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CORE_TEAM, FOUNDER, ADVISORS, MENTOR_AVATARS, MENTOR_CONFIG, ADDITIONAL_MENTORS } from '@/lib/constants';
import { Quote } from 'lucide-react';
import styles from '@/styles/features/Team.module.css';

const Team: React.FC = () => {
  return (
    <section id="team" className={styles.section}>
      {/* Background Decorations */}
      <div className={styles.backgroundGlow}></div>

      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.title}>汇聚巨头精英 · 共创AI未来</h2>
          <p className={styles.subtitle}>核心团队汇聚阿里、字节、百度等一线互联网巨头精英。</p>
        </motion.div>

        {/* 1. Founder Section - Top Layer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.founderSection}
        >
          <div className={styles.founderCard}>
            <div className={styles.founderLayout}>
              {/* Left: Photo */}
              <div className={styles.founderPhoto}>
                <div className={styles.founderPhotoOverlay}></div>
                <img
                  src={FOUNDER.avatarUrl || `https://picsum.photos/seed/${FOUNDER.name}/500/600`}
                  alt={FOUNDER.name}
                />
                <div className={styles.founderBadge}>
                  <div className={styles.founderBadgeLabel}>FOUNDER</div>
                  <h3 className={styles.founderName}>{FOUNDER.name}</h3>
                </div>
              </div>

              {/* Right: Intro */}
              <div className={styles.founderInfo}>
                <Quote className={styles.founderQuoteIcon} />

                <h4 className={styles.founderRole}>{FOUNDER.role}</h4>
                <div className={styles.founderDivider}></div>

                <p className={styles.founderDescription}>
                  {FOUNDER.description}
                </p>

                <div className={styles.founderTags}>
                  {FOUNDER.tags?.map((tag, i) => (
                    <span key={i} className={styles.founderTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>


        {/* 2. Core Team Section - Middle Layer */}
        <div className={styles.coreTeamSection}>
          <div className={styles.sectionDivider}>
            <div className={`${styles.sectionDividerLine} ${styles.sectionDividerLineLeft}`}></div>
            <h3 className={styles.sectionDividerTitle}>核心团队</h3>
            <div className={`${styles.sectionDividerLine} ${styles.sectionDividerLineRight}`}></div>
          </div>

          <div className={styles.coreTeamGrid}>
            {CORE_TEAM.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={styles.teamCard}
              >
                <div className={styles.teamAvatar}>
                  <img
                    src={member.avatarUrl || `https://picsum.photos/seed/${member.name}/200`}
                    alt={member.name}
                  />
                </div>

                <div className={styles.teamCardCenter}>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamDescription}>{member.description}</p>

                  <div className={styles.teamTags}>
                    {member.tags?.map((tag, i) => (
                      <span key={i} className={styles.teamTag}>
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
          <div className={styles.sectionDivider}>
            <div className={`${styles.sectionDividerLine} ${styles.sectionDividerLineLeft}`}></div>
            <h3 className={styles.sectionDividerTitle}>战略股东与支持</h3>
            <div className={`${styles.sectionDividerLine} ${styles.sectionDividerLineRight}`}></div>
          </div>

          <div className={styles.advisorsGrid}>
            {ADVISORS.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={styles.advisorCard}
                whileHover={{ scale: 1.02 }}
              >
                <div className={styles.advisorAvatar}>
                  <img
                    src={advisor.avatarUrl || `https://picsum.photos/seed/${advisor.name}/200`}
                    alt={advisor.name}
                  />
                </div>
                <div>
                  <h4 className={styles.advisorName}>{advisor.name}</h4>
                  <p className={styles.advisorRole}>{advisor.role}</p>
                  <p className={styles.advisorDescription}>{advisor.description}</p>
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
            className={styles.additionalMentors}
          >
            <p className={styles.additionalMentorsText}>
              获得 {ADDITIONAL_MENTORS.map((mentor, index) => (
                <span key={index} className={styles.mentorName}>{mentor}</span>
              )).reduce((prev, curr) => [prev, '、', curr])} 等大咖支持
            </p>
          </motion.div>
        </div>

        {/* 4. Mentors Infinite Scroll - Bottom Layer */}
        <div className={styles.mentorsSection}>
          <div className={styles.mentorsHeader}>
            <p className={styles.mentorsTitle}>特邀导师与生态伙伴</p>
          </div>

          <div className={styles.mentorsScrollContainer}>
            {/* Gradient Masks */}
            <div className={`${styles.mentorScrollMask} ${styles.mentorScrollMaskLeft}`}></div>
            <div className={`${styles.mentorScrollMask} ${styles.mentorScrollMaskRight}`}></div>

            {/* Row 1 - Scroll Left */}
            <div className={styles.mentorScrollRow}>
              <motion.div
                className={styles.mentorScrollRowContent}
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
                    className={styles.mentorAvatar}
                  >
                    <img
                      src={avatarUrl}
                      alt={`Mentor A${i}`}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Row 2 - Scroll Right */}
            <div className={styles.mentorScrollRow}>
              <motion.div
                className={styles.mentorScrollRowContent}
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
                    className={styles.mentorAvatar}
                  >
                    <img
                      src={avatarUrl}
                      alt={`Mentor B${i}`}
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

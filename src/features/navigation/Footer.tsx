'use client';

import React from 'react';
import styles from '@/styles/features/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div style={{ gridColumn: '1 / -1' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ width: '2rem', height: '2rem', backgroundColor: 'var(--brand-500)', borderRadius: '0.375rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)', fontSize: '0.875rem' }}>Z</span>
              智巨人 Zhijuren
            </h3>
            <p style={{ fontSize: '0.875rem', maxWidth: '20rem', color: 'var(--slate-500)' }}>
              中国领先的AI应用聚合与产业赋能平台。<br/>
              让小企业成为AI时代的小巨人。
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>关于我们</h4>
            <div className={styles.linkList}>
              <a href="#team" className={styles.link}>核心团队</a>
              <a href="#ecosystem" className={styles.link}>生态矩阵</a>
              <a href="#solutions" className={styles.link}>解决方案</a>
            </div>
          </div>
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>联系方式</h4>
            <div className={styles.linkList}>
              <span className={styles.link}>杭州智巨人人工智能科技有限公司</span>
              <span className={styles.link}>地址：杭州市余杭区...</span>
              <span className={styles.link}>合作邮箱：contact@zhijuren.ai</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} 杭州智巨人人工智能科技有限公司. All rights reserved.</p>
          <p className={styles.copyright}>Design by Zhijuren</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

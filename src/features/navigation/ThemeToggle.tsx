'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import styles from '@/styles/features/ThemeToggle.module.css';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.themeToggle} />;
  }

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.themeToggle} ${isDark ? styles.dark : styles.light}`}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: isDark ? '1.5rem' : '0' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className={styles.slider}
      >
        {isDark ? (
          <Moon className={styles.icon} strokeWidth={2.5} />
        ) : (
          <Sun className={`${styles.icon} ${styles.iconSun}`} strokeWidth={2.5} />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

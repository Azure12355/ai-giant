'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-14 h-7 rounded-full bg-slate-700 border-2 border-slate-600" />
    );
  }

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-14 h-7 rounded-full bg-slate-700 dark:bg-slate-600 border-2 border-slate-600 dark:border-slate-500 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ x: theme === 'dark' ? 0 : 28 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-slate-700" strokeWidth={2.5} />
        ) : (
          <Sun className="w-3 h-3 text-orange-500" strokeWidth={2.5} />
        )}
      </motion.div>

      {/* Background glow effect */}
      <motion.div
        animate={{
          opacity: theme === 'dark' ? 1 : 0,
          scale: theme === 'dark' ? 1 : 0.8,
        }}
        className="absolute inset-0 rounded-full bg-brand-500/20 blur-sm"
      />
    </motion.button>
  );
};

export default ThemeToggle;

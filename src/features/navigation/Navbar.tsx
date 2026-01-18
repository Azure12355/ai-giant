'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import styles from '@/styles/features/Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : styles.navbarTransparent}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <img src="/logo.png" alt="智巨人 Logo" className={styles.logoImage} />
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>智巨人</span>
              <span className={styles.logoSubtitle}>AI BUSINESS SPECIES</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={styles.desktopMenu}>
            <div className={styles.desktopMenuContent}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </a>
              ))}
              <a href="#join" className={styles.ctaButton}>
                立即咨询
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className={styles.mobileMenuButton}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.menuButton}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={styles.mobileMenu}>
          <div className={`${styles.mobileMenuContent} ${styles.mobileMenuPadding}`}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={styles.mobileNavLink}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

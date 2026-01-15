'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import ThemeToggle from './ThemeToggle';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-brand-500/20' : 'bg-transparent border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <img src="/logo-white.png" alt="智巨人 Logo" className="w-10 h-10 object-contain" />
            <div className="hidden md:block">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-200 to-brand-500">
                智巨人
              </span>
              <span className="block text-xs text-brand-400/80 tracking-wider">AI BUSINESS SPECIES</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-slate-300 hover:text-brand-300 hover:bg-brand-500/5 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <ThemeToggle />
              <a href="#join" className="bg-gradient-to-r from-brand-500 to-brand-700 hover:from-brand-400 hover:to-brand-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:scale-105 border border-brand-400/20">
                立即咨询
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-400 hover:text-white hover:bg-brand-900/20 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-brand-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-brand-300 hover:bg-brand-900/10 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center px-3 py-2">
              <span className="text-slate-300 text-sm font-medium mr-3">主题切换</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
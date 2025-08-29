'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-primary font-sora text-lg sm:text-xl font-semibold hover:text-accent transition-colors">
              Linga J. Kidasi
            </Link>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-primary hover:text-accent transition-colors font-inter">
              Home
            </Link>
            <Link href="/projects" className="text-primary hover:text-accent transition-colors font-inter">
              Projects
            </Link>
            <Link href="/contact" className="text-primary hover:text-accent transition-colors font-inter">
              Contact
            </Link>
          </nav>

          {/* Contact Button - Hidden on mobile */}
          <div className="hidden md:flex flex-shrink-0">
            <Link 
              href="/contact"
              className="bg-accent text-white px-4 py-2 rounded-md font-inter font-medium hover:bg-accent/90 transition-colors"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary hover:text-accent transition-colors p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-800"
            >
              <nav className="py-4 space-y-4">
                <Link 
                  href="/" 
                  className="block text-primary hover:text-accent transition-colors font-inter py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/projects" 
                  className="block text-primary hover:text-accent transition-colors font-inter py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="block text-primary hover:text-accent transition-colors font-inter py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-2">
                  <Link 
                    href="/contact"
                    className="bg-accent text-white px-4 py-2 rounded-md font-inter font-medium hover:bg-accent/90 transition-colors inline-block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Me
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

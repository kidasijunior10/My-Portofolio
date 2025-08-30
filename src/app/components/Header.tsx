'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Rounded Header Container */}
        <div className="bg-dark/95 backdrop-blur-sm border border-gray-800 rounded-full mx-auto max-w-4xl">
          <div className="flex items-center justify-between h-14 px-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <ScrollLink 
                to="home"
                spy={false}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-primary font-sora text-lg sm:text-xl font-semibold hover:text-accent transition-colors cursor-pointer"
              >
                Linga J. Kidasi
              </ScrollLink>
            </div>

            {/* Navigation Links - Hidden on mobile */}
            <nav className="hidden md:flex space-x-8">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="text-primary hover:text-accent transition-colors font-inter cursor-pointer text-sm"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="text-primary hover:text-accent transition-colors font-inter cursor-pointer text-sm"
              >
                Services
              </ScrollLink>
              <ScrollLink
                to="experience"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="text-primary hover:text-accent transition-colors font-inter cursor-pointer text-sm"
              >
                Experience
              </ScrollLink>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="text-primary hover:text-accent transition-colors font-inter cursor-pointer text-sm"
              >
                Projects
              </ScrollLink>
            </nav>

            {/* Contact Button - Hidden on mobile */}
            <div className="hidden md:flex flex-shrink-0">
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-accent text-white px-4 py-2 rounded-full font-inter font-medium hover:bg-accent/90 transition-colors cursor-pointer text-sm"
              >
                Contact Me
              </ScrollLink>
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
        </div>

        {/* Mobile Menu - Absolutely positioned to overlap content */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute top-full left-0 right-0 mt-2 bg-dark/95 backdrop-blur-sm border border-gray-800 rounded-2xl mx-4 z-50"
            >
              <nav className="py-4 space-y-4 px-6">
                <ScrollLink 
                  to="home" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="block text-primary hover:text-accent transition-colors font-inter py-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </ScrollLink>
                <ScrollLink 
                  to="services" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="block text-primary hover:text-accent transition-colors font-inter py-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </ScrollLink>
                <ScrollLink 
                  to="experience" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="block text-primary hover:text-accent transition-colors font-inter py-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Experience
                </ScrollLink>
                <ScrollLink 
                  to="projects" 
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  activeClass="active"
                  className="block text-primary hover:text-accent transition-colors font-inter py-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </ScrollLink>
                <div className="pt-2">
                  <ScrollLink 
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="bg-accent text-white px-4 py-2 rounded-full font-inter font-medium hover:bg-accent/90 transition-colors inline-block cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Me
                  </ScrollLink>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

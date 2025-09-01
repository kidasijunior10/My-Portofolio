'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: FaLinkedin, 
      url: 'https://www.linkedin.com/in/linga-joachim-kidasi-147827211',
      external: true
    },
    { 
      name: 'GitHub', 
      icon: FaGithub, 
      url: 'https://github.com/kidasijunior10',
      external: true
    },
    { 
      name: 'Email', 
      icon: FaEnvelope, 
      url: 'mailto:kidasijunior@gmail.com',
      external: false
    },
  ];

  return (
    <footer className="py-8 sm:py-12 bg-dark px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-primary font-sora font-bold text-xl sm:text-2xl mb-2">
              LINGA JOACHIM KIDASI
            </h3>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-4 sm:space-x-6"
          >
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-gray-700 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.4 + (index * 0.1),
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="text-base sm:text-lg" />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-secondary font-inter text-sm sm:text-base">
              © 2025 Linga Joachim Kidasi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

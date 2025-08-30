'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: '💼', url: '#' },
    { name: 'GitHub', icon: '🐙', url: '#' },
    { name: 'Twitter', icon: '🐦', url: '#' },
    { name: 'Instagram', icon: '📸', url: '#' },
  ];

  return (
    <footer className="py-12 bg-dark px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-primary font-sora font-bold text-xl mb-2">
              LINGA JOACHIM KIDASI
            </h3>
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-secondary hover:text-accent hover:bg-gray-700 transition-all duration-300"
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
                <span className="text-lg">{social.icon}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-secondary font-inter text-sm">
              © 2025 Linga Joachim Kidasi. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

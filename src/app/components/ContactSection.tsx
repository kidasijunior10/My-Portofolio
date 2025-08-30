'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/1 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Side - Introduction */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-primary mb-6">
              Let's Connect
              <span className="text-accent ml-2">→</span>
            </h2>
            <p className="text-secondary font-inter text-lg leading-relaxed mb-8 max-w-lg">
              Linga Joachim Kidasi is a collaborative software engineer & multimedia designer with expertise. Learn to add clarity to complicated problems through innovative design and development solutions.
            </p>
            
            {/* Open for Projects Badge */}
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-accent/20 backdrop-blur-sm border border-accent/30 px-6 py-3 rounded-full">
                <span className="text-accent font-inter font-medium">Open for new project</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="flex-1 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form 
              action="https://formspree.io/f/xpzgwqjz" 
              method="POST"
              className="space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-primary font-inter font-medium mb-2">
                  Your name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-primary font-inter placeholder-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-primary font-inter font-medium mb-2">
                  Your email address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-primary font-inter placeholder-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-primary font-inter font-medium mb-2">
                  Tell about the project:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-primary font-inter placeholder-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-300 resize-none"
                  placeholder="Describe your project, goals, and requirements..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="flex items-center gap-2 text-accent font-inter font-semibold hover:text-accent/80 transition-colors duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                Send
                <span className="text-accent">→</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

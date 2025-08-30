'use client';

import { motion } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    {
      title: "SOFTWARE DEVELOPMENT",
      icon: "💻",
      isHighlighted: true
    },
    {
      title: "UI/UX DESIGN",
      icon: "🎨",
      isHighlighted: false
    },
    {
      title: "MOTION DESIGN",
      icon: "🎬",
      isHighlighted: false
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-dark" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 sm:mb-16">
          {/* Left Side - Headings */}
          <div className="flex-1 mb-6 sm:mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent font-inter font-medium text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
                MY SERVICES?
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sora font-bold text-primary mb-4 sm:mb-6">
                WHAT I'M OFFERING
              </h2>
            </motion.div>
          </div>

          {/* Right Side - Description & Button */}
          <div className="flex-1 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-secondary font-inter text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                Comprehensive solutions that combine technical expertise with creative design to deliver exceptional digital experiences.
              </p>
              <motion.button
                className="bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-inter font-semibold text-sm sm:text-base hover:bg-accent/90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ALL SERVICES
              </motion.button>
            </motion.div>
          </div>
        </div>



        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`p-6 sm:p-8 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                service.isHighlighted
                  ? 'bg-accent text-white border-accent'
                  : 'bg-gray-900/50 backdrop-blur-sm text-primary border-gray-700'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: service.isHighlighted 
                  ? '0 20px 40px rgba(249, 115, 22, 0.3)' 
                  : '0 20px 40px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Icon */}
              <div className="text-3xl sm:text-4xl mb-4 sm:mb-6">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-sora font-bold uppercase tracking-wide mb-4 sm:mb-6">
                {service.title}
              </h3>
              
              {/* Read More Link */}
              <motion.a
                href="#"
                className={`inline-flex items-center gap-2 font-inter font-medium hover:gap-3 transition-all duration-300 ${
                  service.isHighlighted ? 'text-white' : 'text-accent'
                }`}
                whileHover={{ x: 5 }}
              >
                READ MORE
                <span className="text-sm">→</span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

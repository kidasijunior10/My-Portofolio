'use client';

import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

export default function ServicesSection() {
  const services = [
    {
      title: "Web & Software Development",
      description: "Think of me as a digital architect 🏗️. I build the rock-solid code and complex engines ⚙️ that power your ideas, turning \"what if\" into a stunning, functional reality. ✨",
      icon: "💻",
      isHighlighted: true
    },
    {
      title: "Graphic Design & Visual Identity",
      description: "Every great idea needs a memorable face 🤩. I design stunning logos and create the entire visual identity 🎨 that makes your brand stand out from the crowd. Looking good isn't optional.",
      icon: "🎨",
      isHighlighted: false
    },
    {
      title: "Motion Design & Video Animation",
      description: "Static is boring 🥱. I'm here to make things move 💃. I create the slick animations and engaging videos 🎬 that give your brand a dynamic personality and make people stop scrolling.",
      icon: "🎬",
      isHighlighted: false
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-dark">
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-dark" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between mb-12 sm:mb-16 lg:mb-20">
          {/* Left Side - Headings */}
          <div className="flex-1 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-accent font-inter font-medium text-sm sm:text-base uppercase tracking-wider mb-3 sm:mb-4">
                MY SERVICES?
              </h3>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-sora font-bold text-primary mb-4 sm:mb-6">
                WHAT I&apos;M OFFERING
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
              <p className="text-secondary font-inter text-base sm:text-lg lg:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
                I build things that work flawlessly, and I design things that people love. 👨‍💻❤️ Below are my main services, ready to turn your concept into a reality.
              </p>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="inline-block"
              >
                <motion.button
                  className="bg-accent text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg font-inter font-semibold text-sm sm:text-base lg:text-lg hover:bg-accent/90 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Discuss a Project
                </motion.button>
              </ScrollLink>
            </motion.div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`p-4 sm:p-6 lg:p-8 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
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
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className={`text-lg sm:text-xl lg:text-2xl font-sora font-bold mb-3 sm:mb-4 ${
                service.isHighlighted ? 'text-white' : 'text-primary'
              }`}>
                {service.title}
              </h3>
              
              {/* Description */}
              <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
                service.isHighlighted ? 'text-white/90' : 'text-secondary'
              }`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

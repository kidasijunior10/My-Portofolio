'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SkillsMarquee from './SkillsMarquee';

// Floating Badge Component
interface FloatingBadgeProps {
  text: string;
  delay: number;
  position: { x: number; y: number };
  isHighlighted?: boolean;
}

        function FloatingBadge({ text, delay, position, isHighlighted = false }: FloatingBadgeProps) {
          return (
            <motion.div
              className={`absolute backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-inter border shadow-lg ${
                isHighlighted
                  ? 'bg-accent text-white border-accent'
                  : 'bg-gray-800 text-primary border-gray-700'
              }`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { delay: delay + 0.5, duration: 0.5 },
                scale: { delay: delay + 0.5, duration: 0.3 },
                y: {
                  delay: delay + 1,
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
              }}
            >
              {text}
            </motion.div>
          );
        }

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative py-8 sm:py-12 lg:py-20 no-clip -mt-25">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glows */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/1 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-center lg:text-left order-1 lg:-mt-25 sm:mt-20">
            {/* Orange line */}
            <motion.div 
              className="w-12 h-1 sm:w-16 bg-accent mb-4 mx-auto lg:mx-0"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            
            {/* Main title with animation */}
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sora font-bold text-primary mb-3 sm:mb-4 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.4
              }}
            >
              Hello There! I'm{' '}
              <span className="text-accent">Joachim Kidasi</span>
            </motion.h1>
            
            {/* Subtitle with animation */}
            <motion.h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary font-inter mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeOut",
                delay: 0.6
              }}
            >
              Software Engineer & Multimedia Designer
            </motion.h2>

            {/* Call to action buttons with animation */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                delay: 0.8
              }}
            >
              <motion.button 
                className="bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-inter font-semibold text-base sm:text-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-accent/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
                <span className="text-white">→</span>
              </motion.button>
              <motion.button 
                className="bg-transparent text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-inter font-semibold text-base sm:text-lg border-2 border-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </div>

          {/* Right side - Portrait with background circle */}
          <div className="flex-1 flex justify-center lg:justify-end order-2 mb-8 lg:mb-0">
            {/* Main positioning canvas - relative div */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]">
              
              {/* Background circle - simple circular div */}
              <motion.div 
                className="absolute inset-0 w-full h-full bg-accent rounded-full opacity-20 blur-sm"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1.2, 
                  ease: "easeOut",
                  delay: 0.3
                }}
              />
              
                            {/* Portrait image - absolute positioned above circle */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-88 sm:h-88 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] z-10"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: "easeOut",
                  delay: 0.5
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="z-1000">
                    {/* Floating Badges - Visible on all screens */}
                    <div className="block">
                      <FloatingBadge 
                        text="Creative Developer" 
                        delay={1.0} 
                        position={{ x: 0, y: 30 }}
                        isHighlighted={true}
                      />
                      <FloatingBadge 
                        text="Multimedia Designer" 
                        delay={1.0} 
                        position={{ x: 5, y: 70 }}
                        isHighlighted={true}
                      />
                      <FloatingBadge 
                        text="Graphic design" 
                        delay={1.2} 
                        position={{ x: 70, y: 20 }}
                      />
                      <FloatingBadge 
                        text="Developer" 
                        delay={1.4} 
                        position={{ x: 40, y: 50 }}
                        isHighlighted={true}
                      />
                      <FloatingBadge 
                        text="Web app" 
                        delay={1.6} 
                        position={{ x: 80, y: 65 }}
                      />
                      <FloatingBadge 
                        text="Mobile App" 
                        delay={1.8} 
                        position={{ x: 50, y: 80 }}
                      />
                    </div>
                  </div>
                  <Image 
                    src="/images/Ghibly.png" 
                    alt="Linga Kidasi" 
                    width={600} 
                    height={600}
                    className="w-full h-full object-contain"
                    priority
                  />
                </motion.div>

              
            </div>
          </div>
        </div>
      </div>
      
 

      {/* Skills Marquee within Hero Section */}
      <div className="absolute lg:bottom-27 xl:bottom-27 bottom-2 sm:bottom-4 left-0 right-0 z-10">
        <SkillsMarquee />
      </div>
           {/* Scroll Indicator - Bottom Middle */}
           <motion.div
        className="absolute bottom-5 sm:bottom-12 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <span className="text-primary font-inter font-medium text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4">
          SCROLL DOWN
        </span>
        
        {/* Animated SVG Arrow */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-accent sm:w-6 sm:h-6"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path
            d="M12 4L12 20M12 20L18 14M12 20L6 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}

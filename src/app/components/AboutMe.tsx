'use client';

import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/3 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-accent/1 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-sora font-bold text-primary mb-4 sm:mb-6">
            About Me
          </h2>
          <p className="text-secondary font-inter text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Get to know the person behind the code and designs
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Personal Introduction */}
          <motion.div
            className="xl:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 sm:p-10 lg:p-12 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
              {/* Floating accent elements */}
              <div className="absolute top-4 right-4 w-16 h-16 bg-accent/10 rounded-full blur-xl group-hover:bg-accent/20 transition-all duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent/5 rounded-full blur-lg group-hover:bg-accent/15 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center">
                    <span className="text-accent text-xl">👋</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-sora font-bold text-primary">
                    Who I Am
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-secondary font-inter leading-relaxed text-base sm:text-lg lg:text-lg">
                  I'm a Software Engineer & Multimedia Designer from Bujumbura, with a few tricks up my sleeve. 🃏 I thrive on solving the complex puzzles 🧩 and then making the solution look damn good.
                  </p>
                  <p className="text-secondary font-inter leading-relaxed text-base sm:text-lg lg:text-lg">
                  My goal is to blend technical magic 💻 with creative vision 🎨 to build products that don't just work flawlessly—they dazzle. ✨ After all, why so serious? When I'm not pulling digital rabbits out of a hat 🎩, you'll find me on the football field ⚽️ or sketching my next masterpiece.
                  </p>
                  
                  {/* Download CV Button */}
                  <div className="pt-4">
                    <motion.a
                      href="/CV_Linga_Kidasi.pdf"
                      download
                      className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download My CV
                    </motion.a>
                  </div>

                  {/* Social Media Links */}
                  <div className="pt-6">
                    <h4 className="text-lg font-sora font-semibold text-primary mb-4">Find Me Online</h4>
                    <div className="flex flex-wrap gap-3">
                      <motion.a
                        href="www.linkedin.com/in/linga-joachim-kidasi-147827211"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-800/50 text-primary px-4 py-2 rounded-lg font-inter font-medium hover:bg-accent/10 hover:text-accent transition-all duration-300 border border-gray-700 hover:border-accent/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </motion.a>
                      
                      <motion.a
                        href="mailto:kidasijunior@gmail.com"
                        className="inline-flex items-center gap-2 bg-gray-800/50 text-primary px-4 py-2 rounded-lg font-inter font-medium hover:bg-accent/10 hover:text-accent transition-all duration-300 border border-gray-700 hover:border-accent/30"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Personal Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-sora font-bold text-accent mb-1">2+</div>
                    <div className="text-xs sm:text-sm text-secondary font-inter">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-sora font-bold text-accent mb-1">4+</div>
                    <div className="text-xs sm:text-sm text-secondary font-inter">Languages Spoken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-sora font-bold text-accent mb-1">4+</div>
                    <div className="text-xs sm:text-sm text-secondary font-inter">Industries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-sora font-bold text-accent mb-1">Dual</div>
                    <div className="text-xs sm:text-sm text-secondary font-inter">Expertise (Tech & Design)</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education & Skills */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Education Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
              {/* Floating accent element */}
              <div className="absolute top-2 right-2 w-8 h-8 bg-accent/10 rounded-full blur-md group-hover:bg-accent/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent text-lg">🎓</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-sora font-bold text-primary">
                    Education
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-accent to-accent/50 rounded-full" />
                    <div className="pl-6">
                      <h4 className="text-lg font-sora font-semibold text-primary mb-2">
                        Bachelor of Science & Technology
                      </h4>
                      <p className="text-accent font-inter font-medium text-sm mb-1">
                        Software Engineering
                      </p>
                      <p className="text-secondary font-inter text-sm mb-2">
                        Bujumbura International University
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent text-xs font-inter rounded-full border border-accent/20">
                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                        2020 - 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Card */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-800 rounded-3xl p-6 sm:p-8 relative overflow-hidden group hover:border-accent/30 transition-all duration-500">
              {/* Floating accent element */}
              <div className="absolute bottom-2 left-2 w-8 h-8 bg-accent/10 rounded-full blur-md group-hover:bg-accent/20 transition-all duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                    <span className="text-accent text-lg">⚡</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-sora font-bold text-primary">
                    Core Skills
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-inter text-sm">Software Development</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-inter text-sm">Graphic Design</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-8/9 h-full bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-inter text-sm">Motion Design</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-7/8 h-full bg-accent rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-secondary font-inter text-sm">Full-Stack Development</span>
                    <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-accent rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

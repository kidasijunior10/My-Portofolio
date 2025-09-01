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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sora font-bold text-primary mb-4 sm:mb-6">
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
                  <p className="text-secondary font-inter leading-relaxed text-base sm:text-lg">
                    I'm a passionate Software Engineer and Multimedia Designer from Bujumbura, Burundi. I thrive on solving complex problems and creating beautiful, intuitive digital experiences.
                  </p>
                  <p className="text-secondary font-inter leading-relaxed text-base sm:text-lg">
                    My goal is to combine my technical skills with my creative vision to build products that not only work well but also look great. When I'm not coding or designing, you can find me enjoying a game of football or sketching new ideas.
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

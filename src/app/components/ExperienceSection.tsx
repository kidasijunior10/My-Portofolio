'use client';

import { motion } from 'framer-motion';

interface ExperienceItemProps {
  number: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  isHighlighted: boolean;
  index: number;
}

function ExperienceItem({ number, title, company, location, duration, isHighlighted, index }: ExperienceItemProps) {
  return (
    <motion.div
      className={`flex flex-col sm:flex-row items-start sm:items-center p-4 sm:p-6 rounded-lg transition-all duration-300 ${
        isHighlighted 
          ? 'bg-accent text-white' 
          : 'bg-gray-900/50 backdrop-blur-sm text-primary border border-gray-800'
      }`}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      whileHover={{ 
        x: 10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Number */}
      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center font-sora font-bold text-base sm:text-lg mb-4 sm:mb-0 sm:mr-6 ${
        isHighlighted ? 'bg-white text-accent' : 'bg-accent text-white'
      }`}>
        {number}
      </div>
      
      {/* Content */}
      <div className="flex-1 mb-4 sm:mb-0">
        <h3 className={`text-xl sm:text-2xl font-sora font-bold mb-2 ${
          isHighlighted ? 'text-white' : 'text-primary'
        }`}>
          {title}
        </h3>
        <p className={`text-base sm:text-lg font-inter ${
          isHighlighted ? 'text-gray-200' : 'text-secondary'
        }`}>
          {company} - {location}
        </p>
      </div>
      
      {/* Duration */}
      <div className={`w-full sm:w-auto text-left sm:text-right border-t-2 sm:border-t-0 sm:border-l-2 pt-4 sm:pt-0 sm:pl-6 ${
        isHighlighted ? 'border-white text-white' : 'border-gray-700 text-secondary'
      }`}>
        <p className="font-inter font-medium text-sm sm:text-base">
          JOB DURATION
        </p>
        <p className="font-inter text-base sm:text-lg">
          {duration}
        </p>
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const experiences = [
    {
      number: 1,
      title: "Consultant Graphic Designer",
      company: " United Nations Population Fund",
      location: "Bujumbura, Burundi",
      duration: "1+ Year (Since July 2024)",
      isHighlighted: true
    },
    {
      number: 2,
      title: " IT Consultant & Developer (Freelance)",
      company: "i-Solutions Ltd",
      location: "Bujumbura, Burundi",
      duration: "2+ Years (Since November 2022)",
      isHighlighted: false
    },
    {
      number: 3,
      title: " Software Developer Intern",
      company: "ASYST",
      location: "Bujumbura, Burundi",
      duration: "5 Months (March 2023 - July 2023)",
      isHighlighted: false
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/3 left-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 sm:w-96 h-64 sm:h-96 bg-accent/1 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-sora font-bold text-primary mb-4 sm:mb-6">
            Experience
          </h2>
          <p className="text-secondary font-inter text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
            A journey of continuous learning and growth in software development and design.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-4 sm:space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.number}
              number={experience.number}
              title={experience.title}
              company={experience.company}
              location={experience.location}
              duration={experience.duration}
              isHighlighted={experience.isHighlighted}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

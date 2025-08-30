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
      className={`flex items-center p-6 rounded-lg transition-all duration-300 ${
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
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-sora font-bold text-lg mr-6 ${
        isHighlighted ? 'bg-white text-accent' : 'bg-accent text-white'
      }`}>
        {number}
      </div>
      
      {/* Content */}
      <div className="flex-1">
        <h3 className={`text-xl font-sora font-bold mb-2 ${
          isHighlighted ? 'text-white' : 'text-primary'
        }`}>
          {title}
        </h3>
        <p className={`text-lg font-inter ${
          isHighlighted ? 'text-gray-200' : 'text-secondary'
        }`}>
          {company} - {location}
        </p>
      </div>
      
      {/* Duration */}
      <div className={`text-right border-l-2 pl-6 ${
        isHighlighted ? 'border-white text-white' : 'border-gray-700 text-secondary'
      }`}>
        <p className="font-inter font-medium">
          JOB DURATION
        </p>
        <p className="font-inter">
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
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc",
      location: "Bujumbura, Burundi",
      duration: "2 YEARS",
      isHighlighted: true
    },
    {
      number: 2,
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Kigali, Rwanda",
      duration: "1 YEAR",
      isHighlighted: false
    },
    {
      number: 3,
      title: "UI/UX Designer",
      company: "Creative Studio",
      location: "Nairobi, Kenya",
      duration: "2 YEARS",
      isHighlighted: false
    },
    {
      number: 4,
      title: "Frontend Developer",
      company: "Web Solutions",
      location: "Dar es Salaam, Tanzania",
      duration: "1 YEAR",
      isHighlighted: false
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/1 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-primary mb-6">
            Experience
          </h2>
          <p className="text-secondary font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            A journey of continuous learning and growth in software development and design.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-6">
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

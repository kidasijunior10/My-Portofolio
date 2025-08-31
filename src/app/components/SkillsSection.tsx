'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  iconUrl: string;
  color: string;
  useWhiteIcon?: boolean;
}

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="group"
    >
      <motion.div
        className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-3 sm:p-4 lg:p-6 hover:border-accent/50 hover:bg-gray-900/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/10"
        whileHover={{ 
          y: -8,
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        {/* Skill Icon with Background */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-3 sm:mb-4">
          <div 
            className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"
            style={{ backgroundColor: skill.color }}
          />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={skill.iconUrl}
              alt={skill.name}
              width={48}
              height={48}
              unoptimized
              className={`transition-all duration-300 group-hover:scale-110 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${
                skill.useWhiteIcon 
                  ? 'filter brightness-0 invert group-hover:filter-none' 
                  : skill.name.includes('Adobe') 
                    ? 'filter-none' 
                    : ''
              }`}
            />
          </div>
        </div>
        
        {/* Skill Name */}
        <div className="text-center">
          <span className="text-primary font-inter font-medium text-xs sm:text-sm group-hover:text-accent transition-colors duration-300">
            {skill.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const allSkills: Skill[] = [
    // Frontend
    {
      name: "React",
      iconUrl: "https://cdn.simpleicons.org/react",
      color: "#61DAFB"
    },
    {
      name: "React Native",
      iconUrl: "https://cdn.simpleicons.org/react",
      color: "#61DAFB"
    },
    {
      name: "Next.js",
      iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      color: "#000000",
      useWhiteIcon: true
    },
    {
      name: "Tailwind CSS",
      iconUrl: "https://cdn.simpleicons.org/tailwindcss",
      color: "#06B6D4"
    },
    {
      name: "JavaScript",
      iconUrl: "https://cdn.simpleicons.org/javascript",
      color: "#F7DF1E"
    },
    // Backend
    {
      name: "Java",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "#ED8B00"
    },
    {
      name: "C#",
      iconUrl: "https://cdn.simpleicons.org/dotnet",
      color: "#239120"
    },
    {
      name: "C++",
      iconUrl: "https://cdn.simpleicons.org/cplusplus",
      color: "#00599C"
    },
    {
      name: "Spring Boot",
      iconUrl: "https://cdn.simpleicons.org/springboot",
      color: "#6DB33F"
    },
    {
      name: "Node.js",
      iconUrl: "https://cdn.simpleicons.org/nodedotjs",
      color: "#339933"
    },
    {
      name: "Express.js",
      iconUrl: "https://cdn.simpleicons.org/express/ffffff",
      color: "#000000",
      useWhiteIcon: true
    },
    {
      name: "PHP",
      iconUrl: "https://cdn.simpleicons.org/php",
      color: "#777BB4"
    },
    {
      name: "Laravel",
      iconUrl: "https://cdn.simpleicons.org/laravel",
      color: "#FF2D20"
    },
    // Version Control
    {
      name: "Git",
      iconUrl: "https://cdn.simpleicons.org/git",
      color: "#F05032"
    },
    // Design Tools
    {
      name: "Figma",
      iconUrl: "https://cdn.simpleicons.org/figma",
      color: "#F24E1E"
    },
    {
      name: "Adobe Photoshop",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
      useWhiteIcon: true,
      color: "#31A8FF"
    },
    {
      name: "Adobe Illustrator",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",
      useWhiteIcon: true,
      color: "#FF9A00"
    },
    {
      name: "Adobe After Effects",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg",
      useWhiteIcon: true,
      color: "#9999FF"
    },
    {
      name: "Adobe Premiere Pro",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
      useWhiteIcon: true,
      color: "#EA77FF"
    },
    {
      name: "DaVinci Resolve",
      iconUrl: "https://cdn.simpleicons.org/davinciresolve",
      useWhiteIcon: true,
      color: "#000000"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/1 rounded-full blur-3xl" />
      
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
            My Tech Stack & Tools
          </h2>
          <p className="text-secondary font-inter text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            A comprehensive collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Unified Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
          {allSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

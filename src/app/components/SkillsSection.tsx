'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Skill {
  name: string;
  iconUrl: string;
  color: string;
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
        className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-accent/50 hover:bg-gray-900/80 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-accent/10"
        whileHover={{ 
          y: -8,
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        {/* Skill Icon with Background */}
        <div className="relative w-16 h-16 mx-auto mb-4">
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
              className="filter brightness-0 invert group-hover:filter-none transition-all duration-300"
            />
          </div>
        </div>
        
        {/* Skill Name */}
        <div className="text-center">
          <span className="text-primary font-inter font-medium text-sm group-hover:text-accent transition-colors duration-300">
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
      iconUrl: "https://cdn.simpleicons.org/react/ffffff",
      color: "#61DAFB"
    },
    {
      name: "React Native",
      iconUrl: "https://cdn.simpleicons.org/react/ffffff",
      color: "#61DAFB"
    },
    {
      name: "Next.js",
      iconUrl: "https://cdn.simpleicons.org/nextdotjs/ffffff",
      color: "#000000"
    },
    {
      name: "Tailwind CSS",
      iconUrl: "https://cdn.simpleicons.org/tailwindcss/ffffff",
      color: "#06B6D4"
    },
    {
      name: "JavaScript",
      iconUrl: "https://cdn.simpleicons.org/javascript/ffffff",
      color: "#F7DF1E"
    },
    // Backend
    {
      name: "Java",
      iconUrl: "https://cdn.simpleicons.org/java/ffffff",
      color: "#ED8B00"
    },
    {
      name: "Spring Boot",
      iconUrl: "https://cdn.simpleicons.org/springboot/ffffff",
      color: "#6DB33F"
    },
    {
      name: "Node.js",
      iconUrl: "https://cdn.simpleicons.org/nodedotjs/ffffff",
      color: "#339933"
    },
    {
      name: "Express.js",
      iconUrl: "https://cdn.simpleicons.org/express/ffffff",
      color: "#000000"
    },
    {
      name: "PHP",
      iconUrl: "https://cdn.simpleicons.org/php/ffffff",
      color: "#777BB4"
    },
    {
      name: "Laravel",
      iconUrl: "https://cdn.simpleicons.org/laravel/ffffff",
      color: "#FF2D20"
    },
    // Design Tools
    {
      name: "Figma",
      iconUrl: "https://cdn.simpleicons.org/figma/ffffff",
      color: "#F24E1E"
    },
    {
      name: "Adobe Photoshop",
      iconUrl: "https://cdn.simpleicons.org/adobephotoshop/ffffff",
      color: "#31A8FF"
    },
    {
      name: "Adobe Illustrator",
      iconUrl: "https://cdn.simpleicons.org/adobeillustrator/ffffff",
      color: "#FF9A00"
    },
    {
      name: "Adobe After Effects",
      iconUrl: "https://cdn.simpleicons.org/adobeaftereffects/ffffff",
      color: "#9999FF"
    },
    {
      name: "Adobe Premiere Pro",
      iconUrl: "https://cdn.simpleicons.org/adobepremierepro/ffffff",
      color: "#EA77FF"
    },
    {
      name: "DaVinci Resolve",
      iconUrl: "https://cdn.simpleicons.org/davinciresolve/ffffff",
      color: "#FF6B35"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/1 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-bold text-primary mb-6">
            My Tech Stack & Tools
          </h2>
          <p className="text-secondary font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Unified Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {allSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

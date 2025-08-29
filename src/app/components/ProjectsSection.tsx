'use client';

import { motion } from 'framer-motion';

// ProjectCard component
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  index: number;
}

function ProjectCard({ title, description, technologies, imageUrl, liveDemoUrl, caseStudyUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:translate-y-[-5px] hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Project Image */}
      <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-accent/40 text-center">
              <div className="text-6xl mb-4">🎨</div>
              <p className="text-lg font-inter">Project Preview</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Project Content */}
      <div className="p-8">
        {/* Project Title */}
        <h3 className="text-2xl font-sora font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        {/* Project Description */}
        <p className="text-secondary font-inter mb-6 leading-relaxed text-base">
          {description}
        </p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-accent/10 text-accent text-sm font-inter rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <motion.button
            className="bg-accent text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors duration-300 flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Live Demo
          </motion.button>
          <motion.button
            className="border border-accent text-accent px-6 py-3 rounded-lg font-inter font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Case Study
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// Main ProjectsSection component
export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern full-stack e-commerce solution featuring seamless user authentication, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A stunning, responsive portfolio website showcasing creative work and professional skills. Features smooth animations, SEO optimization, and exceptional user experience across all devices.",
      technologies: ["React", "Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, intuitive drag-and-drop functionality, and comprehensive team collaboration features. Includes advanced user roles and permissions.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Clean dark background like footer */}
      <div className="absolute inset-0 bg-dark" />
      
      {/* Ultra-subtle accent glow */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/2 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/1 rounded-full blur-3xl" />
      
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
            Featured Projects
          </h2>
          <p className="text-secondary font-inter text-lg max-w-3xl mx-auto leading-relaxed">
            Explore a selection of my recent work, showcasing innovative solutions and creative design approaches.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              liveDemoUrl={project.liveDemoUrl}
              caseStudyUrl={project.caseStudyUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

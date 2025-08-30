'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

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
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      layout
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
  const [activeTab, setActiveTab] = useState('app-dev');

  const projects = [
    {
      category: 'app-dev',
      title: "E-Commerce Platform",
      description: "A modern full-stack e-commerce solution featuring seamless user authentication, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'app-dev',
      title: "Portfolio Website",
      description: "A stunning, responsive portfolio website showcasing creative work and professional skills. Features smooth animations, SEO optimization, and exceptional user experience across all devices.",
      technologies: ["React", "Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'app-dev',
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, intuitive drag-and-drop functionality, and comprehensive team collaboration features. Includes advanced user roles and permissions.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Census Promotion Video",
      description: "An engaging promotional video for the national census campaign, featuring dynamic motion graphics, compelling storytelling, and clear call-to-action elements to encourage participation.",
      technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Motion Graphics"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Logo Animation for TikMoney",
      description: "A sleek and modern logo animation for TikMoney financial services, incorporating smooth transitions, brand colors, and professional visual effects that convey trust and innovation.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Brand Animation"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "UNFPA Infographics",
      description: "A comprehensive set of infographics for UNFPA, presenting complex demographic data in visually appealing and easily digestible formats. Includes charts, icons, and clear typography.",
      technologies: ["Adobe Illustrator", "Photoshop", "Data Visualization", "Infographic Design"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "Brand Identity Package",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "TikMoney",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "Ikawa Burundian Coffee",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => project.category === activeTab);

  const tabs = [
    { id: 'app-dev', label: 'App Development' },
    { id: 'video-motion', label: 'Video & Motion Design' },
    { id: 'graphics', label: 'Graphics & Infographics' },
    { id: 'logo-design', label: 'Logo Design' },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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

        {/* Tab Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-inter font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-transparent text-primary border-2 border-accent hover:bg-accent/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${activeTab}-${index}`}
                index={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                liveDemoUrl={project.liveDemoUrl}
                caseStudyUrl={project.caseStudyUrl}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-accent/40 text-6xl mb-4">📁</div>
            <h3 className="text-2xl font-sora font-bold text-primary mb-2">
              No projects in this category yet
            </h3>
            <p className="text-secondary font-inter">
              Check back soon for new projects in this category!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

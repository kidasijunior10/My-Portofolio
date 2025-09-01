'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

// ProjectCard component
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveDemoUrl?: string;
  caseStudyUrl?: string;
  index: number;
  category: string;
  hasCaseStudy?: boolean;
  onCaseStudyClick: () => void;
}

function ProjectCard({ title, description, technologies, imageUrl, liveDemoUrl, caseStudyUrl, index, category, hasCaseStudy, onCaseStudyClick }: ProjectCardProps) {
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
      <div className="h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-accent/40 text-center">
              <div className="text-4xl sm:text-6xl mb-2 sm:mb-4">🎨</div>
              <p className="text-sm sm:text-lg font-inter">Project Preview</p>
            </div>
          </div>
        )}
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Project Content */}
      <div className="p-4 sm:p-6 lg:p-8">
        {/* Project Title */}
        <h3 className="text-lg sm:text-xl lg:text-2xl font-sora font-bold text-primary mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        {/* Project Description */}
        <p className="text-secondary font-inter mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
          {technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 sm:px-3 py-1 bg-accent/10 text-accent text-xs sm:text-sm font-inter rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          {liveDemoUrl && (
            <motion.a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-inter font-semibold hover:bg-accent/90 transition-colors duration-300 flex-1 text-xs sm:text-sm text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
          )}
          {hasCaseStudy && (
            <motion.button
              onClick={onCaseStudyClick}
              className="border border-accent text-accent px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-inter font-semibold hover:bg-accent hover:text-white transition-all duration-300 flex-1 text-xs sm:text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Case Study
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Main ProjectsSection component
export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState('app-dev');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      category: 'app-dev',
      title: "E-Commerce Platform",
      description: "A modern full-stack e-commerce solution featuring seamless user authentication, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
      technologies: ["React", "Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      imageUrl: "/images/ecommerce-preview.jpg",
      caseStudy: {
        overview: "A modern full-stack e-commerce solution featuring seamless user authentication, secure payment processing, and an intuitive admin dashboard. Built with performance and scalability in mind.",
        screenshots: [
          "/images/ecommerce-screenshot-1.png",
          "/images/ecommerce-screenshot-2.png",
          "/images/ecommerce-screenshot-3.png"
        ]
      },
      features: [
        "Secure payment processing with Stripe integration",
        "Real-time inventory management system",
        "Advanced admin dashboard with analytics"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'app-dev',
      title: "Portfolio Website",
      description: "A stunning, responsive portfolio website showcasing creative work and professional skills. Features smooth animations, SEO optimization, and exceptional user experience across all devices.",
      technologies: ["React", "Next.js", "Framer Motion", "TypeScript", "Tailwind CSS"],
      imageUrl: "/images/portfolio-preview.jpg",
      caseStudy: {
        overview: "A stunning, responsive portfolio website showcasing creative work and professional skills. Features smooth animations, SEO optimization, and exceptional user experience across all devices.",
        screenshots: [
          "/images/portfolio-screenshot-1.png",
          "/images/portfolio-screenshot-2.png"
        ]
      },
      features: [
        "Smooth scroll animations and transitions",
        "Mobile-first responsive design",
        "SEO optimized with meta tags and structured data"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'app-dev',
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, intuitive drag-and-drop functionality, and comprehensive team collaboration features. Includes advanced user roles and permissions.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Express"],
      imageUrl: "/images/taskapp-preview.jpg",
      caseStudy: {
        overview: "A collaborative task management application with real-time updates, intuitive drag-and-drop functionality, and comprehensive team collaboration features. Includes advanced user roles and permissions.",
        screenshots: [
          "/images/taskapp-screenshot-1.png",
          "/images/taskapp-screenshot-2.png",
          "/images/taskapp-screenshot-3.png"
        ]
      },
      features: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop task management",
        "Role-based access control system"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Census Promotion Video",
      description: "An engaging promotional video for the national census campaign, featuring dynamic motion graphics, compelling storytelling, and clear call-to-action elements to encourage participation.",
      technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Motion Graphics"],
      youtubeVideoId: "AAAA",
      imageUrl: "/images/Video_processus.png",
      features: [
        "Dynamic motion graphics and animations",
        "Compelling storytelling narrative",
        "Clear call-to-action elements"
      ],
      liveDemoUrl: "https://youtu.be/uBkgVjMqDMk",
    },
    {
      category: 'video-motion',
      title: "Field Report",
      description: "A sleek and modern logo animation for TikMoney financial services, incorporating smooth transitions, brand colors, and professional visual effects that convey trust and innovation.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Brand Animation"],
      imageUrl: "/images/atelier-rep.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Data Visualization: Census Motion Graphics",
      description: "A sleek and modern logo animation for TikMoney financial services, incorporating smooth transitions, brand colors, and professional visual effects that convey trust and innovation.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Brand Animation"],
      imageUrl: "/images/video-motion.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "The importance of the census",
      description: "A sleek and modern logo animation for TikMoney financial services, incorporating smooth transitions, brand colors, and professional visual effects that convey trust and innovation.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Brand Animation"],
      imageUrl: "/images/motion-design1.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Are you registered?",
      description: "A sleek and modern logo animation for TikMoney financial services, incorporating smooth transitions, brand colors, and professional visual effects that convey trust and innovation.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Brand Animation"],
      imageUrl: "/images/motion-design2.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "Social Media Infographics",
      description: "A comprehensive set of infographics for UNFPA, presenting complex demographic data in visually appealing and easily digestible formats. Includes charts, icons, and clear typography.",
      caseStudy: {
        overview: "A comprehensive set of infographics for UNFPA, presenting complex demographic data in visually appealing and easily digestible formats. Includes charts, icons, and clear typography.",
        screenshots: [
          "/images/Journee femme.jpeg",
          "/images/CAPI.jpg",
          "/images/affiche.jpg",
          "/images/ONU.jpg",
          "/images/suivez-nous.jpeg",
        ]
      },
      technologies: ["Adobe Illustrator", "Photoshop", "Data Visualization", "Infographic Design"],
      imageUrl: "/images/Journee femme.jpeg",
      features: [
        "Complex data visualization",
        "Clear and readable typography",
        "Professional icon design"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "UNFPA Infographics",
      description: "A comprehensive set of infographics for UNFPA, presenting complex demographic data in visually appealing and easily digestible formats. Includes charts, icons, and clear typography.",
      caseStudy: {
        overview: "A comprehensive set of infographics for UNFPA, presenting complex demographic data in visually appealing and easily digestible formats. Includes charts, icons, and clear typography.",
        screenshots: [
          "/images/15-59ans.png",
          "/images/18 et +.png",
          "/images/60 ans et plus_Plan de travail 1.png",
          "/images/Femme en age de procreer.png",
        ]
      },
      technologies: ["Adobe Illustrator", "Photoshop", "Data Visualization", "Infographic Design"],
      imageUrl: "/images/Femme en age de procreer.png",
      features: [
        "Complex data visualization",
        "Clear and readable typography",
        "Professional icon design"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "Roll-up design",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/Mockup(2).jpg",
      caseStudy: {  
        overview: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
        screenshots: [
          "/images/Mockup(1).jpg",
          "/images/Mockup(2).jpg"
        ]
      },
      screenshotUrls: [
        "/images/Mockup(1).jpg",
        "/images/Mockup(2).jpg"
      ],
      features: [
        "Complete logo design system",
        "Comprehensive brand guidelines",
        "Modern minimalist aesthetic"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "TikMoney",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/tikmoney.jpg",
      screenshotUrls: [
        "/images/tikmoney-brand-1.png",
        "/images/tikmoney-brand-2.png"
      ],
      features: [
        "Modern financial brand identity",
        "Scalable logo design",
        "Comprehensive brand guidelines"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "Ikawa Burundian Coffee",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/Ikawa.png",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "Sebalink Africa",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/sebalink.jpg",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "Crepe Happiness",
      description: "Complete brand identity design including logo design, color palette, typography guidelines, and brand collateral. Created for a tech startup with modern, minimalist aesthetic.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/crepe.jpg",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ],
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

  const handleCaseStudyClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
            Featured Projects
          </h2>
          <p className="text-secondary font-inter text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Explore a selection of my recent work, showcasing innovative solutions and creative design approaches.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-inter font-semibold transition-all duration-300 text-xs sm:text-sm ${
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
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
                imageUrl={project.imageUrl}
                liveDemoUrl={project.liveDemoUrl}
                caseStudyUrl={project.caseStudyUrl}
                category={project.category}
                hasCaseStudy={Boolean((project as any).caseStudy)}
                onCaseStudyClick={() => handleCaseStudyClick(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-12 sm:py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-accent/40 text-4xl sm:text-6xl mb-4">📁</div>
            <h3 className="text-xl sm:text-2xl font-sora font-bold text-primary mb-2">
              No projects in this category yet
            </h3>
            <p className="text-secondary font-inter text-sm sm:text-base">
              Check back soon for new projects in this category!
            </p>
          </motion.div>
        )}
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
}

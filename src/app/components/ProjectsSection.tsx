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
        {(liveDemoUrl || hasCaseStudy) && (
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
        )}
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
      title: "Logistics Management System",
      description: "The i-Logistics system is a custom web application that replaces manual spreadsheets for a cross-border fuel transport company. It intelligently manages both the company's own trucks and subcontracted jobs, providing a command center for the internal team and a self-service tracking portal for its clients.",
      technologies: ["Laravel", "PHP", "MySql", "Livewire","Alpine Js","Javascript", "Tailwind CSS"],
      imageUrl: "/images/Dashboard_logi.png",
      caseStudy: {
        overview: "The i-Logistics system is a custom web application that replaces manual spreadsheets for a cross-border fuel transport company. It intelligently manages both the company's own trucks and subcontracted jobs, providing a command center for the internal team and a self-service tracking portal for its clients.",
        screenshots: [
          "/images/client.png",
          "/images/shipment.png",
          "/images/shipment details.png",
          "/images/transporter.png"
        ],
        challenge: "My client, a specialized logistics company, was managing a complex and high-stakes cross-border fuel transport operation using a collection of manual tools, primarily spreadsheets. This disconnected process created significant challenges: it was slow, prone to costly data entry errors in profitability calculations, and offered no real-time visibility for either the internal team or their clients. The added complexity of managing both their own fleet and external subcontractors made it nearly impossible to get a clear, accurate picture of their day-to-day operations and financial health.",
        solution: "I developed i-Logistics, a bespoke, end-to-end web application that digitizes and streamlines their entire operational workflow. The solution provides a centralized command center for the administrative team and a professional self-service portal for their clients. I engineered the system's core logic to intelligently handle their dual operational model (Own Fleet vs. Subcontracted), with dynamic interfaces that adapt to each specific job. Key features include an automated quote-to-shipment wizard, real-time expense tracking, precise loss calculation (Allowable vs. Disallowable), and a dedicated reporting engine.",
        outcome: "The i-Logistics platform has successfully transformed the company's operations, replacing data fragmentation with a single source of truth. The automated financial calculations have eliminated critical errors and now provide precise, real-time insights into the profitability of every shipment. The client portal has significantly enhanced customer satisfaction by offering unprecedented transparency with live tracking and document access. Overall, the system has increased operational efficiency, reduced financial risks, and provided the business with a robust and scalable platform for sustainable growth."
      },
      features: [
        "Intelligent Quote-to-Shipment Workflow",
        "Dual Operational Model Management",
        "Comprehensive Shipment Tracking & Management",
        "Modern User Experience (UX/UI)",
        "Robust Reporting System",

      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'app-dev',
      title: "Electronic Billing Management System(EBMS)",
      description: "I developed and maintained custom software that connected client POS and billing systems to the Burundi Revenue Authority (OBR). As a key part of Burundi's national digitalization, this integration solution automated tax reporting and ensured real-time fiscal compliance for businesses in the retail, hospitality, and service sectors.",
      technologies: ["Laravel", "PHP", "MySql", "JavaScript", "Tailwind CSS","API"],
      imageUrl: "/images/Ebms2.png",
      caseStudy: {
        overview: "The Electronic Billing Management System (EBMS) is a comprehensive software solution designed to streamline and automate the process of reporting and managing electronic billing data for businesses in the retail, hospitality, and service sectors. It ensures real-time synchronization of POS data with the Burundi Revenue Authority (OBR) to facilitate accurate and timely tax compliance.",
        screenshots: [
          "/images/Ebms1.png",
          "/images/Ebms2.png",
          "/images/Ebms3.png",
          "/images/Ebms4.png",
          "/images/Ebms5.png",
          "/images/Ebms6.png",
          "/images/Ebms7.png",
        
        ],
        challenge: "As part of a national digitalization effort, the Burundi Revenue Authority (OBR) required all businesses to report their sales in real-time. My client, i-Solutions, needed to provide its diverse enterprise customers with a reliable and seamless way to comply with this new fiscal regulation without disrupting their daily operations.",
        solution: "I developed and maintained the client-side software that integrates directly with various business systems. The solution connects their existing Point of Sale (POS) and invoicing software to the OBR's central EBMS platform. I focused on creating a robust and adaptable system that could be deployed across different sectors, from retail shops to hotels, ensuring secure and automated data synchronization.",
        outcome: "The integration was a success, enabling numerous businesses to comply with the new tax laws effortlessly. The automated system significantly reduced the risk of manual data entry errors, increased the transparency of sales reporting, and provided clients with peace of mind, knowing their operations were fully compliant with national regulations."
      },
      features: [
        "Real-Time Data Synchronization",
        "Multi-Sector Compatibility",
        "POS (Point of Sale) Integration",
        "Automated Tax Reporting",
        "Secure Data Transmission",
        "Ongoing Maintenance & Support",
      ],
      liveDemoUrl: "#",
      caseStudyUrl: "#",
    },
    {
      category: 'app-dev',
      title: "Online Restaurant Menu",
      description: "I developed a dynamic digital menu platform for Arena Restaurant Lounge Bar and Zanzi Restaurant to replace their traditional physical menus. The application provides customers with an easy-to-view, interactive menu on their personal devices and gives restaurant management a simple, real-time tool to control their offerings.",
      technologies: ["Laravel", "PHP", "MySql", "Tailwind Css", "Breeze"],
      imageUrl: "/images/menu.png",
      caseStudy: {
        overview: "I developed a dynamic digital menu platform for Arena Restaurant Lounge Bar and Zanzi Restaurant to replace their traditional physical menus. The application provides customers with an easy-to-view, interactive menu on their personal devices and gives restaurant management a simple, real-time tool to control their offerings.",
        screenshots: [
          "/images/menu1.png",
          "/images/menu3.png"
        ],
        challenge: "Traditional physical menus were becoming outdated and inefficient for modern restaurants. Arena Restaurant Lounge Bar and Zanzi Restaurant needed a solution that would allow them to easily update their menu offerings, prices, and availability without the cost and hassle of printing new physical menus. They also wanted to provide customers with a better, more interactive dining experience.",
        solution: "I created a responsive web application using Laravel and Tailwind CSS that serves as a digital menu platform. The system includes an admin panel where restaurant management can easily update menu items, prices, and availability in real-time. The customer-facing interface is optimized for mobile devices and provides an intuitive, interactive menu experience with smooth animations and modern design.",
        outcome: "The digital menu system has successfully replaced traditional physical menus for both restaurants. Management can now update their offerings instantly without printing costs, and customers enjoy a modern, interactive menu experience. The system is live and actively used at https://menu.zanzi.bi/ and https://menu.arena.bi/, demonstrating the practical value and user adoption of the solution."
      },
      features: [
        "Interactive Digital Menu",
        "Admin Control Panel",
        "Responsive Design"
      ],
      liveDemoUrl: "https://menu.zanzi.bi/",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Census Process Explainer Video",
      description: "A documentary-style video produced for the national census campaign to explain the census process to the public. The film uses a clear narrative voice-over combined with on-the-ground video footage and photography to build a transparent and easy-to-understand guide, building public trust in the project.",
      technologies: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects", "Animation"],
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
      title: "RGPHAE Workshop Event Coverage",
      description: "An event coverage video documenting the orientation workshop on the thematic analysis of census data. The report captures the key moments and objectives of the session, created to serve as a visual summary for the Bentral Census Bureau and its partners.",
      technologies: ["After Effects", "Adobe Premiere Pro", "DaVinci Resolve", "Motion Graphics", "Animation"],
      imageUrl: "/images/atelier-rep.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "https://youtu.be/4DiCgtsifEc",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Data Visualization: Census Motion Graphics",
      description: "To bring the census data to life, I created a dynamic animation from a series of static infographics I had designed for the official data dissemination campaign. By utilizing the 3D camera in After Effects, I built an immersive journey that navigates through the still images, guiding the viewer through charts and key statistics as if moving through a 3D space.",
      technologies: ["After Effects", "Adobe Premiere Pro", "DaVinci Resolve", "Motion Graphics", "Animation"],
      imageUrl: "/images/video-motion.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "https://youtu.be/zoFThRUqVZQ",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "The Importance of Census Planning",
      description: "An informative motion graphics video explaining the critical role of planning in the success of a national census. The video was designed to educate stakeholders and the public on the logistical steps involved, building confidence in the process.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Animation"],
      imageUrl: "/images/motion-design1.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "https://youtu.be/t7OwS2oe9zE",
      caseStudyUrl: "#",
    },
    {
      category: 'video-motion',
      title: "Êtes-vous Recensé?",
      description: "A direct and eye-catching motion graphics piece for a social media awareness campaign. The animation uses a strong call to action to encourage public participation and ensure everyone is counted in the national census.",
      technologies: ["After Effects", "Adobe Premiere Pro", "Motion Graphics", "Animation"],
      imageUrl: "/images/motion-design2.png",

      features: [
        "Smooth brand color transitions",
        "Professional visual effects",
        "Trust-building animation elements"
      ],
      liveDemoUrl: "https://youtu.be/mwBNMBNg9gs",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "Census Bureau Social Media Graphics",
      description: "As part of the national census communication strategy, I designed a series of engaging infographics and visual content specifically for the Census Bureau's social media channels. The goal was to build public awareness, share key dates and information, and encourage community participation in this vital national project.",
      caseStudy: {
        overview: "As part of the national census communication strategy, I designed a series of engaging infographics and visual content specifically for the Census Bureau's social media channels. The goal was to build public awareness, share key dates and information, and encourage community participation in this vital national project.",
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
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "Census Data Visualization",
      description: "I was tasked with transforming complex demographic data from the census into clear, compelling, and easily digestible infographics for official reports and publications. The objective was to make the key findings of the census accessible and understandable to policymakers, journalists, and the general public.",
      caseStudy: {
        overview: "I was tasked with transforming complex demographic data from the census into clear, compelling, and easily digestible infographics for official reports and publications. The objective was to make the key findings of the census accessible and understandable to policymakers, journalists, and the general public.",
        screenshots: [
          "/images/15-59ans.png",
          "/images/18 et +.png",
          "/images/60 ans et plus_Plan de travail 1.png",
          "/images/Femme en age de procreer.png",
        ]
      },
      technologies: ["Adobe Illustrator", "Photoshop", "Data Visualization", "Infographic Design"],
      imageUrl: "/images/Femme en age de procreer.png",
      caseStudyUrl: "#",
    },
    {
      category: 'graphics',
      title: "Census Visibility Campaign Materials",
      description: "I designed a wide range of official communication and visibility materials. My role was to establish a cohesive and professional visual identity across all physical brand collateral—including posters and roll-up banners—to effectively engage the public.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/Mockup(2).jpg",
      caseStudy: {  
        overview: "As part of the national census communication team, I was responsible for designing a wide range of visibility and communication materials. This included creating key brand collateral such as the roll-up banners shown here, as well as posters, custom t-shirts, official badges, and other promotional items. The objective was to establish a cohesive and professional visual identity for the census campaign, ensuring brand consistency across all physical media to effectively engage the public.",
        screenshots: [
          "/images/Mockup(1).jpg",
          "/images/Mockup(2).jpg",
          "/images/teardrop.png",
        ]
      },
      screenshotUrls: [
        "/images/Mockup(1).jpg",
        "/images/Mockup(2).jpg"
      ],
      caseStudyUrl: "#",
    },
    {
      category: 'logo-design',
      title: "TikMoney",
      description: "A modern and minimalist logo designed for TikMoney, a FinTech startup. The design focuses on conveying trust, security, and technological efficiency, creating a strong brand identity for their financial services.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/tikmoney.jpg",
      screenshotUrls: [
        "/images/tikmoney-brand-1.png",
        "/images/tikmoney-brand-2.png"
      ],
      features: [
        "Modern financial brand identity",
        "Scalable logo design",
        "Comprehensive brand guidelines"
      ]
    },
    {
      category: 'logo-design',
      title: "Ikawa Burundian Coffee",
      description: "A premium and elegant logo concept for Ikawa Burundian Coffee. The design aims to capture the rich quality and heritage of Burundian coffee, creating a sophisticated brand mark suitable for a high-end coffee product.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/Ikawa.png",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ]
    },
    {
      category: 'logo-design',
      title: "Sebalink Africa",
      description: "A corporate logo created for Sebalink Africa that visually represents connection and communication. The clean lines and solid typography establish a professional and reliable image for the brand across the continent.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/sebalink.jpg",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ]
    },
    {
      category: 'logo-design',
      title: "Crepe Happiness",
      description: "A playful and inviting logo developed for the food brand Crepe Happiness. The design uses warm colors and a friendly aesthetic to create an appetizing and memorable identity that appeals directly to customers.",
      technologies: ["Adobe Illustrator", "Adobe Photoshop", "Brand Design", "Logo Design"],
      imageUrl: "/images/crepe.jpg",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ]
    },
    {
      category: 'website',
      title: "Hauge Family Microfinance Website",
      description: "I developed the official website for Hauge Family Microfinance, creating a professional and trustworthy digital presence for the financial institution. The site is designed to clearly present their services, build client confidence, and provide essential information to current and prospective customers.",
      technologies: ["Wordpress", "PHP", "Html/Css", "Javascript","Elementor"],
      imageUrl: "/images/hfm.png",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ],
      liveDemoUrl: "https://hfm.bi/",
      caseStudyUrl: "#",
    },
    {
      category: 'website',
      title: "Bureau Central du Recensement",
      description: "During my role at the UNFPA, I was responsible for the design and development of the official website for the Bureau Central du Recensement. The primary objective was to create a central, accessible, and authoritative source of information for the national census, providing the public with key updates, official documents, and resources.",
      technologies: ["Wordpress", "PHP", "Html/Css", "Javascript","Elementor"],
      imageUrl: "/images/bcr.png",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ],
      liveDemoUrl: "https://bcr.bi/",
      caseStudyUrl: "#",
    },
    {
      category: 'website',
      title: "Akilixo",
      description: "I created the corporate website for Akilixo, a firm specializing in enterprise performance and planning. The goal was to build a modern and professional website that clearly communicates their strategic services to business leaders and serves as a primary point of contact for potential corporate clients.",
      technologies: ["Wordpress", "PHP", "Html/Css", "Javascript","Elementor"],
      imageUrl: "/images/akilixo.png",
      screenshotUrls: [
        "/images/ikawa-coffee-1.png",
        "/images/ikawa-coffee-2.png"
      ],
      features: [
        "Authentic coffee brand identity",
        "Cultural design elements",
        "Premium packaging design"
      ],
      liveDemoUrl: "https://akilixo.com/",
      caseStudyUrl: "#",
    },
  ];

  // Filter projects based on active tab
  const filteredProjects = projects.filter(project => project.category === activeTab);

  const tabs = [
    { id: 'app-dev', label: 'App Development' },
    { id: 'website', label: 'Website' },
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

'use client';

import Marquee from 'react-fast-marquee';

export default function SkillsMarquee() {
  const skills = [
    "Laravel",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "PHP",
    "JavaScript",
    "Node.js",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe After Effects",
    "Adobe Premiere Pro",
    "Adobe InDesign",
    "DaVinci Resolve",
  ];

  return (
    <div className="bg-white py-2 sm:py-4 border-t border-gray-200">
      <Marquee 
        speed={80}
        gradient={false}
        className="overflow-hidden"
      >
        <div className="flex items-center space-x-4 sm:space-x-8 px-2 sm:px-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2 sm:space-x-4">
              <h2 className="text-dark font-sora font-bold text-sm sm:text-lg uppercase tracking-wide whitespace-nowrap">
                {skill}
              </h2>
              {index < skills.length - 1 && (
                <span className="text-accent text-lg sm:text-xl">•</span>
              )}
            </div>
          ))}
          {/* Repeat skills for seamless loop */}
          {skills.map((skill, index) => (
            <div key={`repeat-${index}`} className="flex items-center space-x-2 sm:space-x-4">
              <h2 className="text-dark font-sora font-bold text-sm sm:text-lg uppercase tracking-wide whitespace-nowrap">
                {skill}
              </h2>
              {index < skills.length - 1 && (
                <span className="text-accent text-lg sm:text-xl">•</span>
              )}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

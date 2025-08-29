import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
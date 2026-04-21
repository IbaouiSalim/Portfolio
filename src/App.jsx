import React, { useState, useEffect, useCallback } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import SkillsEducationSection from './sections/SkillsEducationSection';
import FooterSection from './sections/FooterSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollTo = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({ 
        top: offsetTop, 
        behavior: 'smooth' 
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#070708] text-slate-300 selection:bg-indigo-500/30 font-sans antialiased">
      {/* Meta tags for PWA */}
      <meta name="theme-color" content="#070708" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />

      <Navigation 
        scrolled={scrolled} 
        activeSection={activeSection} 
        onScrollTo={scrollTo}
      />

      <HeroSection onScrollTo={scrollTo} />
      <AboutSection />
      <ProjectsSection />
      <SkillsEducationSection />
      <FooterSection />
    </div>
  );
}

export default App;

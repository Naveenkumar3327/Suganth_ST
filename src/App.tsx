import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MouseTracker from './components/MouseTracker';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToNext = () => {
    scrollToSection('about');
  };

  // Loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-16 h-16 border-2 border-slate-200 border-t-slate-900 rounded-full mx-auto mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h1
            className="text-3xl font-light text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Suganth S T
          </motion.h1>
          <p className="text-slate-600 mt-2 font-light">Loading portfolio...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-light relative overflow-x-hidden">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      {/* Mouse Tracker */}
      <MouseTracker />

      {/* Sidebar */}
      <Sidebar activeSection={activeSection} onSectionChange={scrollToSection} />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <div id="home">
            <HeroSection onScrollToNext={handleScrollToNext} />
          </div>
          
          <div id="about">
            <AboutSection />
          </div>
          
          <div id="projects">
            <ProjectsSection />
          </div>
          
          <div id="skills">
            <SkillsSection />
          </div>
          
          <div id="contact">
            <ContactSection />
          </div>
        </AnimatePresence>
      </main>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-4 bg-white shadow-lg rounded-full text-slate-600 hover:text-slate-900 hover:shadow-xl transition-all duration-300 z-40"
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
}

export default App;
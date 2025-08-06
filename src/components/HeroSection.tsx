import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

interface HeroSectionProps {
  onScrollToNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToNext }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />

      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-slate-300 rounded-full" />
        <div className="absolute top-40 right-32 w-24 h-24 border border-slate-300 rounded-full" />
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-slate-300 rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        {/* Professional greeting */}
        <motion.p
          className="text-lg text-slate-600 mb-6 font-light tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-light text-slate-900 mb-8 tracking-tight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: 'easeOut' }}
        >
          Suganth ST
          <motion.span
            className="block text-slate-600 italic"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.h1>

        {/* Professional title */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="text-2xl md:text-3xl text-slate-700 font-light mb-4">
          
          </p>
          <div className="w-24 h-px bg-slate-400 mx-auto" />
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Crafting exceptional digital experiences through clean code, thoughtful design, and innovative solutions. Specializing in modern web technologies with a passion for creating scalable applications.
        </motion.p>

        {/* Social links */}
        <motion.div
          className="flex justify-center space-x-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          {[
            { icon: Github, href: 'https://github.com/Suganth74689', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:suganthst@gmail.com', label: 'Email' },
            { icon: Instagram, href: 'https://www.instagram.com/mr_peace.lover/', label: 'Instagram' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 text-slate-600 hover:text-slate-900 transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          className="px-12 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={onScrollToNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <motion.button
          onClick={onScrollToNext}
          className="p-3 text-slate-600 hover:text-slate-900 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

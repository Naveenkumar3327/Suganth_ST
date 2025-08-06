import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: 'Online Grocery Store',
      category: 'E-commerce Platform',
      description: 'A modern web platform for browsing, purchasing, and scheduling grocery deliveries with real-time notifications using Socket.IO.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      features: ['User Authentication', 'Cart Management', 'Real-time Notifications', 'Order Tracking'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
    },
    {
      title: 'Turf Booking System',
      category: 'Booking Platform',
      description: 'A full-featured online booking system for managing turf reservations with real-time slot availability and location services.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Mapbox'],
      features: ['Live Slot Availability', 'Admin Panel', 'Location Services', 'Booking History'],
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
    },
    {
      title: 'Portfolio Website',
      category: 'Personal Project',
      description: 'A modern, responsive portfolio website showcasing projects and skills with elegant animations and professional design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive Design', 'Smooth Animations', 'Modern UI/UX', 'Performance Optimized'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      demo: '#',
      github: '#',
    },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-8 lg:pl-32 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
            Selected
            <span className="block text-slate-600 italic">Work</span>
          </h2>
          <div className="w-16 h-px bg-slate-400 mb-8" />
          <p className="text-xl text-slate-600 max-w-2xl font-light">
            A collection of projects that showcase my expertise in full-stack development 
            and modern web technologies.
          </p>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demo}
                        className="p-3 bg-white text-slate-900 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        className="p-3 bg-slate-900 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div>
                  <p className="text-sm text-slate-500 uppercase tracking-wider mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-3">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm text-slate-500 uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center text-slate-600">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-6 pt-4">
                  <motion.a
                    href={project.demo}
                    className="flex items-center space-x-2 text-slate-900 hover:text-slate-600 transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium">View Project</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
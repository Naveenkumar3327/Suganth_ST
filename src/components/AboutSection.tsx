import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Music, Plane, Palette } from 'lucide-react';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const interests = [
    { icon: Code, label: 'Problem Solving', description: 'Algorithmic thinking' },
    { icon: Coffee, label: 'Gaming', description: 'Strategic gameplay' },
    { icon: Music, label: 'Music', description: 'Creative inspiration' },
    { icon: Plane, label: 'Travel', description: 'Cultural exploration' },
    { icon: Palette, label: 'Design', description: 'Visual aesthetics' },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-8 lg:pl-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                className="text-5xl md:text-6xl font-light text-slate-900 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                About
                <span className="block text-slate-600 italic">Me</span>
              </motion.h2>
              <div className="w-16 h-px bg-slate-400 mb-8" />
            </div>

            <motion.div
              className="space-y-6 text-lg text-slate-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                I'm a passionate MERN Stack Developer currently pursuing Computer Science 
                at Sri Eshwar College of Engineering. With a strong foundation in full-stack 
                development, I specialize in creating scalable web applications that solve 
                real-world problems.
              </p>
              
              <p>
                My journey in programming has led me to solve 350+ LeetCode problems and 
                build projects like an Online Grocery Store and Turf Booking System. 
                I believe in writing clean, maintainable code and creating user-centric 
                applications.
              </p>
            </motion.div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-light text-slate-900 mb-6">What drives me</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.label}
                      className="p-4 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <Icon className="w-8 h-8 text-slate-600 mb-3 group-hover:text-slate-900 transition-colors" />
                      <h4 className="font-medium text-slate-900 mb-1">{interest.label}</h4>
                      <p className="text-sm text-slate-500">{interest.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl opacity-20"
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.img
                src="https://pbs.twimg.com/media/GxmAF67aIAAoeyF?format=jpg&name=small"
                alt="Suganth S T"
                className="relative w-96 h-96 object-cover rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-slate-900 rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 border-2 border-slate-400 rounded-full"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
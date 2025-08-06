import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 88 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 88 },
        { name: 'Socket.IO', level: 75 },
      ],
    },
    {
      title: 'Programming & Tools',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'C/C++', level: 80 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  const achievements = [
    { number: '350+', label: 'LeetCode Problems', description: 'Algorithm & Data Structures' },
    { number: '400+', label: 'SkillRack Problems', description: 'Programming Challenges' },
    { number: '100+', label: 'CodeChef Problems', description: 'Competitive Programming' },
    { number: '7.1', label: 'CGPA', description: 'Academic Excellence' },
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center p-8 lg:pl-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6">
            Skills &
            <span className="block text-slate-600 italic">Expertise</span>
          </h2>
          <div className="w-16 h-px bg-slate-400 mb-8" />
          <p className="text-xl text-slate-600 max-w-2xl font-light">
            A comprehensive overview of my technical skills and programming achievements.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-light text-slate-900 border-b border-slate-200 pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Skill Bar */}
                    <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full bg-slate-900 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-light text-slate-900 mb-12 text-center">
            Programming Achievements
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.8 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-8 border border-slate-200 rounded-2xl hover:border-slate-300 transition-colors group"
              >
                <motion.div
                  className="text-4xl font-light text-slate-900 mb-2"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  {achievement.number}
                </motion.div>
                <h4 className="font-medium text-slate-900 mb-2">{achievement.label}</h4>
                <p className="text-sm text-slate-500">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
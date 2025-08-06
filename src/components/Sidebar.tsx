import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Award, Mail, Menu, X } from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Work', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleItemClick = (id: string) => {
    onSectionChange(id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-8 left-8 z-50 p-3 bg-white shadow-lg rounded-full"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5 text-slate-700" /> : <Menu className="w-5 h-5 text-slate-700" />}
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.nav
        className="hidden lg:flex fixed left-0 top-0 h-full w-24 flex-col items-center justify-center z-40 bg-white/80 backdrop-blur-xl border-r border-slate-200"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex flex-col space-y-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.id}
                className={`relative p-4 rounded-2xl transition-all duration-300 group ${
                  activeSection === item.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                onClick={() => handleItemClick(item.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
                
                {/* Tooltip */}
                <motion.div
                  className="absolute left-full ml-6 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                >
                  {item.label}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <motion.nav
        className={`lg:hidden fixed inset-0 z-40 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <motion.div
          className="absolute left-0 top-0 h-full w-80 bg-white shadow-2xl p-8"
          initial={{ x: -320 }}
          animate={{ x: isOpen ? 0 : -320 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          <div className="flex flex-col justify-center h-full space-y-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  className={`flex items-center space-x-4 p-4 w-full rounded-2xl transition-all duration-300 text-left ${
                    activeSection === item.id
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                  onClick={() => handleItemClick(item.id)}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-lg font-medium">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Sidebar;
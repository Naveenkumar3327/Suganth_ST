import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Code, Send, ArrowUpRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suganthst@gmail.com',
      href: 'mailto:suganthst@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7418110432',
      href: 'tel:+917418110432',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Suganth74689',
      username: '@Suganth74689'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      username: 'Connect with me'
    },
    {
      icon: Code,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/suganth_st',
      username: '@suganth_st'
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
            Let's
            <span className="block text-slate-600 italic">Connect</span>
          </h2>
          <div className="w-16 h-px bg-slate-400 mb-8" />
          <p className="text-xl text-slate-600 max-w-2xl font-light">
            I'm always interested in discussing new opportunities, exciting projects, 
            or just having a conversation about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-light text-slate-900 mb-8">Send a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors text-lg"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              <div>
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors text-lg"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              <div>
                <motion.textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-0 py-4 bg-transparent border-0 border-b-2 border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 transition-colors text-lg resize-none"
                  whileFocus={{ scale: 1.01 }}
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center space-x-3 px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-8">Get in touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-white transition-colors group"
                      whileHover={{ scale: 1.02, x: 10 }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                        <Icon className="w-5 h-5 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-slate-500 text-sm">{info.label}</p>
                        <p className="text-slate-900 font-medium">{info.value}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-light text-slate-900 mb-8">Find me online</h3>
              
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-2xl hover:border-slate-300 hover:bg-white transition-all group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                          <Icon className="w-5 h-5 text-slate-600" />
                        </div>
                        <div>
                          <p className="text-slate-900 font-medium">{social.label}</p>
                          <p className="text-slate-500 text-sm">{social.username}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
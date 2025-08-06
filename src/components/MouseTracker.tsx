import React from 'react';
import { motion } from 'framer-motion';
import { useMousePosition } from '../hooks/useMousePosition';

const MouseTracker: React.FC = () => {
  const { x, y } = useMousePosition();

  return (
    <>
      {/* Subtle cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-50"
        animate={{
          x: x - 4,
          y: y - 4,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.1,
        }}
      >
        <div className="w-2 h-2 bg-slate-800 rounded-full opacity-60" />
      </motion.div>
      
      {/* Elegant cursor ring */}
      <motion.div
        className="fixed pointer-events-none z-40"
        animate={{
          x: x - 20,
          y: y - 20,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.3,
        }}
      >
        <div className="w-10 h-10 border border-slate-300 rounded-full opacity-30" />
      </motion.div>
    </>
  );
};

export default MouseTracker;
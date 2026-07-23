import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = ({ to = 'about', isRoute = false }) => {
  const handleClick = () => {
    if (isRoute) {
      // On homepage (single section), just scroll down a bit
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    } else {
      const el = document.getElementById(to);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <button onClick={handleClick} className="cursor-pointer group bg-transparent border-none p-0">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 transition-colors duration-300"
          style={{ color: 'rgba(91,82,74,0.5)' }}
          onMouseEnter={e => (e.currentTarget.style.color = '#7A2E3A')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(91,82,74,0.5)')}
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </button>
    </motion.div>
  );
};

export default ScrollIndicator;

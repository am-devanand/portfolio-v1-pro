import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = ({ to = 'about' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <Link to={to} smooth={true} duration={600} offset={-80} className="cursor-pointer group">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-text-secondary/50 group-hover:text-accent-blue transition-colors duration-300"
        >
          <span className="text-[10px] font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ScrollIndicator;

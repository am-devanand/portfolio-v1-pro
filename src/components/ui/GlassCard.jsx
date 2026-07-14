import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', glow = false, hover = true, as = 'div', ...props }) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`relative rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm ${hover ? 'card-hover' : ''} ${glow ? 'glow-blue' : ''} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;

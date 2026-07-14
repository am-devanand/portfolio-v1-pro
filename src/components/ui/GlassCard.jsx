import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', glow = false, hover = true, as = 'div', ...props }) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`relative rounded-2xl border border-white/[0.06] backdrop-blur-sm ${hover ? 'card-hover' : ''} ${glow ? 'glow-blue' : ''} ${className}`}
      style={{ background: 'rgba(24, 34, 53, 0.75)' }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;

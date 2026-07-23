import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', glow = false, hover = true, as = 'div', ...props }) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
       className={`relative rounded-[20px] border border-[rgba(47,42,38,0.08)] ${hover ? 'card-hover' : 'shadow-[0_16px_40px_rgba(0,0,0,0.08)]'} ${className}`}
      style={{ background: 'linear-gradient(180deg, #FCFBF8, #F8F5F1)' }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.06)' } : undefined}
      transition={hover ? { duration: 0.4, ease: [0.16, 1, 0.3, 1] } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;

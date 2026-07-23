import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', glow = false, hover = true, as = 'div', ...props }) => {
  const Component = motion[as] || motion.div;

  return (
    <Component
       className={`relative rounded-[20px] border border-[rgba(47,42,38,0.08)] ${hover ? 'card-hover' : 'shadow-[0_16px_40px_rgba(0,0,0,0.08)]'} ${className}`}
      style={{ background: 'linear-gradient(180deg, #FCFBF8, #F8F5F1)' }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default GlassCard;

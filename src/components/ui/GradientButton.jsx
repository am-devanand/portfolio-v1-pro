import React from 'react';
import { motion } from 'framer-motion';

const GradientButton = ({ children, href, onClick, className = '', variant = 'primary', icon, ...props }) => {
  const baseClasses = 'relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ease-out cursor-pointer overflow-hidden';

  const variants = {
    primary: 'text-white btn-glow',
    secondary: 'text-white border border-white/10 hover:border-accent-blue/40 hover:bg-white/5',
    ghost: 'text-text-secondary hover:text-white hover:bg-white/5',
  };

  const Component = href ? motion.a : motion.button;
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <Component
      href={href ? href : undefined}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant] || variants.primary} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...linkProps}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue to-accent-purple via-accent-pink opacity-90" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon && <span className="w-4 h-4">{icon}</span>}
        {children}
      </span>
    </Component>
  );
};

export default GradientButton;

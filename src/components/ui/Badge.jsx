import React from 'react';

const Badge = ({ children, variant = 'default', className = '', dot = false }) => {
  const variants = {
    default: 'bg-white/5 text-text-secondary border border-white/10',
    accent: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
    success: 'bg-green-500/10 text-green-400 border border-green-500/20',
    gradient: 'gradient-border text-white',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />}
      {children}
    </span>
  );
};

export default Badge;

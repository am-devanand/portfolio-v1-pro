import React from 'react';

const Badge = ({ children, variant = 'default', className = '', dot = false }) => {
  const variants = {
    default: 'bg-white/5 text-text-secondary border border-white/10',
    accent: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
    success: 'bg-status-success/10 text-status-success border border-status-success/20',
    gradient: 'gradient-border text-white',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-status-success" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-status-success" />
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;

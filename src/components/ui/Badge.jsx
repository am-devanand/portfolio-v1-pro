import React from 'react';

const Badge = ({ children, variant = 'default', className = '', dot = false }) => {
  const variants = {
    default: 'bg-white/5 text-text-secondary border border-white/10',
    accent: 'bg-accent-blue/10 text-accent-blue border border-accent-blue/20',
    success: 'bg-[#FCFBF8] text-[#5B524A] border border-[rgba(196,186,178,0.5)] shadow-sm',
    gradient: 'gradient-border text-white',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#7A2E3A]" />
        </span>
      )}
      {children}
    </span>
  );
};

export default Badge;

import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className = '', dark = false, ...props }) => {
  return (
    <section
      id={id}
      className={`relative py-24 md:py-32 overflow-hidden ${dark ? 'bg-white/[0.02]' : ''} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};

export const SectionHeader = ({ label, title, description, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl mb-16 md:mb-20 ${className}`}
    >
      {label && (
        <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export const FadeInView = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const directionValues = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: -40 },
    right: { x: 40 },
    none: {},
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionValues[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, className = '', staggerDelay = 0.1 }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={item}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default SectionWrapper;

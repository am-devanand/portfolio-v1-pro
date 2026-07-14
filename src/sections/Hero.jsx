import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import Badge from '../components/ui/Badge';
import ScrollIndicator from '../components/ui/ScrollIndicator';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'React Developer',
  'Backend Engineer',
  'Problem Solver',
];

const techRow1 = [
  { name: 'React', color: '#4F8CFF' },
  { name: 'Node.js', color: '#22C55E' },
  { name: 'Express', color: '#A8B5CF' },
  { name: 'Python', color: '#F59E0B' },
  { name: 'MongoDB', color: '#22C55E' },
  { name: 'MySQL', color: '#3B82F6' },
];

const techRow2 = [
  { name: 'TailwindCSS', color: '#38BDF8' },
  { name: 'Linux', color: '#F59E0B' },
  { name: 'Git', color: '#EC4899' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const RoleRotator = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-14 md:h-16 text-2xl md:text-4xl font-heading font-semibold">
      <span className="text-text-tertiary mr-3 font-mono text-sm md:text-base opacity-60">//</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-text-primary"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

const TechPill = ({ name, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium cursor-default transition-all duration-300"
      style={{
        background: hovered ? `${color}12` : 'rgba(255, 255, 255, 0.03)',
        border: `1px solid ${hovered ? `${color}40` : 'rgba(255, 255, 255, 0.06)'}`,
        color: hovered ? '#F8FAFC' : '#A8B5CF',
        boxShadow: hovered ? `0 0 20px ${color}18` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="w-1.5 h-1.5 rounded-full transition-all duration-300"
        style={{
          backgroundColor: color,
          transform: hovered ? 'scale(1.25)' : 'scale(1)',
          boxShadow: hovered ? `0 0 6px ${color}` : 'none',
        }}
      />
      {name}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Hero-specific background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(79, 140, 255, 0.12) 0%, rgba(124, 92, 255, 0.06) 30%, transparent 60%)',
            filter: 'blur(100px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.06) 0%, transparent 50%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 text-center"
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10 sm:mb-12">
          <Badge variant="success" dot>
            Available for new projects
          </Badge>
        </motion.div>

        {/* Greeting — smaller */}
        <motion.p
          variants={fadeUp}
          className="text-text-tertiary text-xs sm:text-sm md:text-base font-body tracking-[0.08em] uppercase mb-3"
        >
          Hello, I&apos;m
        </motion.p>

        {/* Branded title — D EV / A NAND / S */}
        <motion.h1
          variants={fadeUp}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold font-heading tracking-tight leading-[0.82] sm:leading-[0.85] mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center justify-center gap-x-6 sm:gap-x-8 lg:gap-x-10 flex-wrap">
            {/* D EV */}
            <span className="inline-flex items-baseline gap-0">
              <span className="gradient-d">D</span>
              <span className="text-[0.7em] font-heading tracking-[0.06em] text-soft-blue">EV</span>
            </span>
            {/* A NAND */}
            <span className="inline-flex items-baseline gap-0">
              <span className="gradient-a">A</span>
              <span className="text-[0.7em] font-heading tracking-[0.06em] text-soft-blue">NAND</span>
            </span>
            {/* S */}
            <span className="gradient-s">S</span>
          </span>
        </motion.h1>

        {/* Rotating roles — larger */}
        <motion.div variants={fadeUp} className="mb-10 sm:mb-12">
          <RoleRotator />
        </motion.div>

        {/* Subtle divider */}
        <motion.div
          variants={fadeUp}
          className="w-14 h-[2px] mx-auto mb-8 rounded-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(79, 140, 255, 0.3), rgba(124, 92, 255, 0.3), transparent)',
          }}
        />

        {/* Description — narrower, better line-height, lighter blue-gray */}
        <motion.p
          variants={fadeUp}
          className="max-w-xl mx-auto leading-[1.8] sm:leading-[1.8] font-body mb-10 sm:mb-12 px-2 text-sm sm:text-base md:text-lg"
          style={{ color: '#B8C5D8' }}
        >
          Engineering scalable digital products with clean architecture, intuitive user experiences and modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16 sm:mb-20"
        >
          <Link
            to="work"
            smooth={true}
            duration={600}
            offset={-80}
            className="relative inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden group cursor-pointer transition-transform duration-300 hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-60 blur-2xl transition-opacity duration-300" />
            <span className="relative z-10">View Selected Work</span>
            <ArrowRight
              size={16}
              className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="inline-flex items-center gap-2 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm font-semibold backdrop-blur-sm transition-all duration-300 cursor-pointer"
            style={{
              color: '#A8B5CF',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              background: 'rgba(255, 255, 255, 0.02)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F8FAFC';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(79, 140, 255, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#A8B5CF';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Let&apos;s Connect
          </Link>
        </motion.div>

        {/* Tech pills — two rows */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-2.5">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {techRow1.map((pill) => (
              <TechPill key={pill.name} name={pill.name} color={pill.color} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {techRow2.map((pill) => (
              <TechPill key={pill.name} name={pill.name} color={pill.color} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator to="about" />
    </section>
  );
};

export default Hero;

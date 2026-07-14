import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Code2, Database, Palette, Terminal, Globe, Cpu } from 'lucide-react';
import AnimatedText from '../components/ui/AnimatedText';
import Badge from '../components/ui/Badge';
import ScrollIndicator from '../components/ui/ScrollIndicator';

const roles = [
  'Website Developer',
  'Full Stack Developer',
  'React Developer',
  'Software Engineer',
];

const featurePills = [
  { icon: <Code2 size={14} />, label: 'Frontend' },
  { icon: <Database size={14} />, label: 'Backend' },
  { icon: <Palette size={14} />, label: 'UI/UX' },
  { icon: <Globe size={14} />, label: 'React' },
  { icon: <Terminal size={14} />, label: 'Node.js' },
  { icon: <Cpu size={14} />, label: 'Python' },
];

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-surface-primary">
      {/* Animated Grid */}
      <div className="grid-background" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-accent-purple/8 rounded-full blur-[150px] animate-blob-delayed" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <Badge variant="success" dot>
              Available for new projects
            </Badge>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-text-secondary text-lg md:text-xl mb-4 font-body"
          >
            Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-white tracking-tight leading-[1.05] mb-4"
          >
            <span className="gradient-text">DEV ANAND S</span>
          </motion.h1>

          {/* Animated Typing Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl md:text-3xl font-heading font-semibold text-text-secondary mb-8 h-10"
          >
            <AnimatedText texts={roles} className="text-white/90" />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            I build fast, scalable and visually stunning digital experiences
            that combine performance, clean architecture and beautiful design.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90" />
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300" />
              <span className="relative z-10">View Projects</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={600}
              offset={-80}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white border border-white/10 hover:bg-white/5 hover:border-accent-blue/40 transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </Link>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-2.5"
          >
            {featurePills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-text-secondary bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all duration-300"
              >
                {pill.icon}
                {pill.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator to="about" />
    </section>
  );
};

export default Hero;

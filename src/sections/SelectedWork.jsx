import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Car, Wrench } from 'lucide-react';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';

const projects = [
  {
    name: 'ClutchD',
    subtitle: 'On-Demand Vehicle Assistance Platform',
    description: 'A full-stack platform connecting users with nearby mechanics during vehicle breakdowns. Features user authentication, mechanic dashboards, service request management, and real-time status updates.',
    problem: 'When a vehicle breaks down, finding a reliable nearby mechanic quickly is difficult. There is no streamlined way to request roadside assistance, track service requests, or manage bookings.',
    solution: 'Built a complete marketplace platform with dual authentication (users + mechanics), nearby mechanic discovery, service request workflows, dedicated dashboards, and REST API backend.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Docker'],
    github: 'https://github.com/am-devanand/ClutchD-App',
    features: [
      'User & mechanic authentication',
      'Customer dashboard',
      'Mechanic dashboard',
      'Service request management',
      'Booking workflow',
      'Responsive UI',
    ],
    gradient: 'bg-[#7A2E3A]/[0.02]',
    accent: '#7A2E3A',
    category: 'Full Stack Web Application',
    isFeatured: true,
  },
  {
    name: 'Zionex Furniture',
    subtitle: 'Business Website',
    description: 'A modern responsive business website developed for a furniture brand. Clean UI, modern product presentation, and professional branding.',
    tech: ['JavaScript', 'Vite', 'CSS'],
    github: 'https://github.com/am-devanand/zionex-furniture',
    live: 'https://am-devanand.github.io/zionex-furniture/',
    gradient: 'bg-[#6A2634]/[0.02]',
    accent: '#6A2634',
    category: 'Business Website',
  },
  {
    name: 'Project CityCare',
    subtitle: 'Civic Complaint System',
    description: 'A department-wise civic complaint system built with Flask. Citizens submit complaints, admins manage them per department, with CSV storage that can be upgraded to SQL.',
    tech: ['Python', 'Flask', 'HTML', 'CSS'],
    github: 'https://github.com/am-devanand/project-citycare',
    gradient: 'bg-[#5B524A]/[0.02]',
    accent: '#5B524A',
    category: 'Web Application',
  },
  {
    name: 'ProjectPyExpo',
    subtitle: 'Django + React Integration',
    description: 'A full-stack web application exploring modern frontend-backend integration with Django REST API and React frontend, authentication, and scalable architecture.',
    tech: ['Django', 'React', 'Vite', 'Tailwind CSS', 'SQLite'],
    github: 'https://github.com/am-devanand/projectpyexpo',
    gradient: 'bg-[#7A2E3A]/[0.02]',
    accent: '#7A2E3A',
    category: 'Full Stack Application',
  },
  {
    name: 'Hotel Management',
    subtitle: 'Billing System',
    description: 'A C++ billing system for hotel management — handles billing calculations with a straightforward terminal-based interface.',
    tech: ['C++'],
    github: 'https://github.com/am-devanand/hotel-management',
    gradient: 'bg-[#6A2634]/[0.02]',
    accent: '#6A2634',
    category: 'CLI Application',
  },
  {
    name: 'Portfolio Website',
    subtitle: 'Personal Brand',
    description: 'Premium personal portfolio showcasing engineering work with fluid animations, glassmorphic UI, midnight blue theme, and a distinctive brand identity.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/am-devanand/Portfolio',
    gradient: 'bg-[#5B524A]/[0.02]',
    accent: '#5B524A',
    category: 'Web Application',
  },
];

const TiltCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-200 ease-out ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard>
        <GlassCard className="overflow-hidden group" hover>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-64 lg:h-auto min-h-[320px] bg-[#FCFBF8] border-r border-[rgba(47,42,38,0.08)] flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-6 left-6 w-28 h-28 border border-black/10 rounded-xl transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute bottom-6 right-6 w-20 h-20 border border-black/10 rounded-lg transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-black/10 rounded-full transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-8 right-12 w-14 h-14 border border-white/10 rounded-2xl rotate-12 transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <Car size={64} className="text-[#7A2E3A] group-hover:scale-110 transition-transform duration-700" />
                  <Wrench size={32} className="text-[#6A2634] group-hover:scale-110 transition-transform duration-700 -mt-2" />
                </div>
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm"
                  aria-label={`${project.name} GitHub`}
                >
                  <Github size={22} />
                </a>
              </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 px-2.5 py-1 rounded-full">
                  Featured Project
                </span>
                <span className="text-[11px] text-text-secondary/60">{project.category}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-text-primary font-heading mb-1 group-hover:text-accent-blue transition-colors duration-300">
                {project.name}
              </h3>
              <p className="text-sm text-accent-blue/80 mb-4">{project.subtitle}</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-red-400/80 mb-1 block">
                    Problem
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-400/80 mb-1 block">
                    Solution
                  </span>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] px-2.5 py-1 rounded-[20px] bg-[rgba(255,255,255,0.75)] border border-[#DDD6CE] text-[#5B524A] font-medium hover:border-[#7A2E3A] hover:text-[#2F2A26] transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {project.features.map((f) => (
                  <span key={f} className="text-xs text-text-secondary flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-accent-blue" />
                    {f}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4 border-t" style={{ borderColor: 'rgba(210,195,178,0.45)' }}>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-text-primary opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100"
                >
                  <Github size={15} />
                  View Code
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto flex items-center gap-1 text-sm font-medium text-accent-blue hover:text-accent-blue/80 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-200"
                >
                  Case Study
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          <div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02), 0 0 20px rgba(0,0,0,0.02)',
            }}
          />
        </GlassCard>
      </TiltCard>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <TiltCard>
        <GlassCard className="h-full overflow-hidden group" hover>
          <div className={`relative h-48 ${project.gradient} border-b flex items-center justify-center overflow-hidden`} style={{ borderColor: 'rgba(210,195,178,0.45)' }}>
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-xl" />
                <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-lg" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full" />
              </div>
              <div className="relative z-10 text-center">
              <div 
                className="text-4xl font-bold font-heading group-hover:scale-110 transition-all duration-500"
                style={{ color: project.accent }}
              >
                {project.name.charAt(0)}
              </div>
              <p className="text-[11px] mt-1" style={{ color: project.accent, opacity: 0.7 }}>{project.category}</p>
            </div>
            </div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                aria-label={`${project.name} GitHub`}
              >
                <Github size={20} />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                  aria-label={`${project.name} live demo`}
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>

          <div className="p-6">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-accent-blue/60 mb-1 block">
              {project.category}
            </span>
            <h3 className="text-lg font-bold text-text-primary font-heading mb-1 group-hover:text-accent-blue transition-colors duration-300">
              {project.name}
            </h3>
            {project.subtitle && (
              <p className="text-xs text-text-secondary/60 mb-2">{project.subtitle}</p>
            )}
            <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-[20px] bg-[rgba(255,255,255,0.75)] border border-[#DDD6CE] text-[#5B524A] font-medium hover:border-[#7A2E3A] hover:text-[#2F2A26] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 pt-3 border-t" style={{ borderColor: 'rgba(210,195,178,0.45)' }}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <Github size={14} />
                Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <ExternalLink size={14} />
                Live Demo
                </a>
              )}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 20px rgba(0,0,0,0.02), 0 0 20px rgba(0,0,0,0.02)`,
                }}
              />
            </div>
          </div>
        </GlassCard>
      </TiltCard>
    </motion.div>
  );
};

const SelectedWork = () => {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <SectionWrapper id="work">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight mb-4">
            Products I&apos;ve{' '}
            <span className="gradient-text">built</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mb-14">
            A curated selection of projects that showcase my approach to engineering.
          </p>
        </FadeInView>

        <FeaturedProject project={featured} />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {rest.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SelectedWork;

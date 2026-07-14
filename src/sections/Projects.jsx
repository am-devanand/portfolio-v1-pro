import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';

const projects = [
  {
    name: 'Zionex Furniture',
    description: 'A modern e-commerce furniture website with a sleek design, smooth user experience, and responsive product showcase.',
    tech: ['CSS', 'HTML', 'JavaScript'],
    github: 'https://github.com/am-devanand/zionex-furniture',
    live: 'https://am-devanand.github.io/zionex-furniture/',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accent: '#EC4899',
  },
  {
    name: 'FarmAlert',
    description: 'An agricultural alert system to help farmers with real-time weather notifications, crop updates, and agricultural insights.',
    tech: ['JavaScript', 'Node.js'],
    github: 'https://github.com/am-devanand/FarmAlert',
    gradient: 'from-green-500/20 to-emerald-500/20',
    accent: '#22C55E',
  },
  {
    name: 'Project CityCare',
    description: 'A city management and civic issue reporting platform connecting citizens with municipal authorities for faster resolution.',
    tech: ['Python', 'Flask', 'MongoDB'],
    github: 'https://github.com/am-devanand/project-citycare',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accent: '#60A5FA',
  },
  {
    name: 'Student Management',
    description: 'A comprehensive student information management system for educational institutions with records, attendance, and reporting.',
    tech: ['Python', 'Database'],
    github: 'https://github.com/am-devanand/Student-management',
    gradient: 'from-purple-500/20 to-violet-500/20',
    accent: '#8B5CF6',
  },
  {
    name: 'Hotel Management',
    description: 'A hotel booking and management system featuring reservation handling, billing, room allocation, and customer management.',
    tech: ['C++'],
    github: 'https://github.com/am-devanand/hotel-management',
    gradient: 'from-red-500/20 to-pink-500/20',
    accent: '#EF4444',
  },
  {
    name: 'Portfolio Website',
    description: 'Personal portfolio website showcasing skills and projects with a modern, premium design and smooth animations.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/am-devanand/Portfolio',
    gradient: 'from-indigo-500/20 to-blue-500/20',
    accent: '#6366F1',
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
          {/* Preview Image Area */}
          <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 border border-white/20 rounded-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border border-white/20 rounded-lg" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full" />
            </div>

            {/* Project icon */}
            <div className="relative z-10 text-4xl font-bold font-heading text-white/30 group-hover:text-white/50 transition-all duration-500 group-hover:scale-110">
              {project.name.charAt(0)}
            </div>

            {/* Hover overlay */}
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

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-accent-blue transition-colors duration-300">
              {project.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-text-secondary font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-3 border-t border-white/[0.06]">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-white transition-colors duration-300"
              >
                <Github size={14} />
                Code
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-white transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1 text-xs font-medium text-accent-blue hover:text-accent-blue/80 transition-colors duration-300"
              >
                Case Study
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Border glow on hover */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              boxShadow: `inset 0 0 30px ${project.accent}20, 0 0 30px ${project.accent}10`,
            }}
          />
        </GlassCard>
      </TiltCard>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mb-16">
            A selection of my recent work spanning web development, applications, and more.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;

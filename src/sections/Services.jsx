import React from 'react';
import { Globe, Monitor, Layout, Layers, Code2, ArrowUpRight, RefreshCw, Wrench } from 'lucide-react';
import SectionWrapper, { FadeInView, StaggerContainer } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Portfolio Websites',
    description: 'Premium personal portfolio websites that showcase your work with stunning design and smooth interactions.',
    gradient: 'from-accent-blue/20 to-cyan-500/20',
    accent: '#4F8CFF',
  },
  {
    icon: <Monitor size={28} />,
    title: 'Business Websites',
    description: 'Professional business websites with modern design, clear messaging, and conversion-focused layouts.',
    gradient: 'from-accent-purple/20 to-violet-500/20',
    accent: '#7C5CFF',
  },
  {
    icon: <Layers size={28} />,
    title: 'Full Stack Applications',
    description: 'End-to-end web applications with robust backends, responsive frontends, and scalable architecture.',
    gradient: 'from-green-500/20 to-emerald-500/20',
    accent: '#22C55E',
  },
  {
    icon: <Code2 size={28} />,
    title: 'React Development',
    description: 'Modern React applications with clean component architecture, state management, and optimal performance.',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    accent: '#6366F1',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'API Development',
    description: 'RESTful API design and implementation with Node.js, Express, Django, and Flask backends.',
    gradient: 'from-orange-500/20 to-amber-500/20',
    accent: '#F59E0B',
  },
  {
    icon: <Wrench size={28} />,
    title: 'UI Modernization',
    description: 'Revitalizing legacy interfaces with modern design patterns, responsive layouts, and improved user experience.',
    gradient: 'from-pink-500/20 to-rose-500/20',
    accent: '#EC4899',
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-pink/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-pink bg-accent-pink/10 rounded-full mb-4">
            What I Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight mb-4">
            Helping businesses{' '}
            <span className="gradient-text">build</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-16">
            Available for freelance work and real-world development projects.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <GlassCard key={service.title} className="p-6 lg:p-8 h-full group" hover>
              <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${service.gradient} w-fit mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{service.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-text-primary font-heading mb-3 group-hover:text-accent-blue transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {service.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-blue hover:text-white transition-colors duration-300"
              >
                Learn more
                <ArrowUpRight size={12} />
              </a>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `inset 0 0 30px ${service.accent}15, 0 0 30px ${service.accent}08` }}
              />
            </GlassCard>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
};

export default Services;

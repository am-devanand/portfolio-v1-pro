import React from 'react';
import { Globe, Monitor, Layout, Layers, Code2, ArrowUpRight, RefreshCw, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionWrapper, { FadeInView, StaggerContainer } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';

const services = [
  {
    icon: <Globe size={28} />,
    title: 'Portfolio Websites',
    description: 'Premium personal portfolio websites that showcase your work with stunning design and smooth interactions.',
    gradient: 'from-[#7A2E3A]/10 to-[#A3475B]/10',
    accent: '#7A2E3A',
  },
  {
    icon: <Monitor size={28} />,
    title: 'Business Websites',
    description: 'Professional business websites with modern design, clear messaging, and conversion-focused layouts.',
    gradient: 'from-[#5B524A]/10 to-[#3B322C]/10',
    accent: '#5B524A',
  },
  {
    icon: <Layers size={28} />,
    title: 'Full Stack Applications',
    description: 'End-to-end web applications with robust backends, responsive frontends, and scalable architecture.',
    gradient: 'from-[#3B322C]/10 to-[#7A2E3A]/10',
    accent: '#3B322C',
  },
  {
    icon: <Code2 size={28} />,
    title: 'React Development',
    description: 'Modern React applications with clean component architecture, state management, and optimal performance.',
    gradient: 'from-[#8C3B4B]/10 to-[#B75D74]/10',
    accent: '#8C3B4B',
  },
  {
    icon: <RefreshCw size={28} />,
    title: 'API Development',
    description: 'RESTful API design and implementation with Node.js, Express, Django, and Flask backends.',
    gradient: 'from-[#E4DDD4]/20 to-[#CFC6BB]/20',
    accent: '#8C3B4B',
  },
  {
    icon: <Wrench size={28} />,
    title: 'UI Modernization',
    description: 'Revitalizing legacy interfaces with modern design patterns, responsive layouts, and improved user experience.',
    gradient: 'from-[#A3475B]/10 to-[#7A2E3A]/10',
    accent: '#A3475B',
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#5B524A] bg-[rgba(47,42,38,0.06)] rounded-full mb-4">
            What I Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight mb-4">
            Helping businesses{' '}
            <span className="gradient-text">build</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-14">
            Available for freelance work and real-world development projects.
          </p>
        </FadeInView>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <GlassCard key={service.title} className="p-6 lg:p-8 h-full group" hover>
              <div className="p-3.5 rounded-[20px] w-fit mb-5 group-hover:scale-110 transition-transform duration-300 border border-[rgba(47,42,38,0.08)]" style={{ background: 'linear-gradient(180deg, #FCFBF8, #F8F5F1)' }}>
                <div style={{ color: service.accent }}>{service.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-[#2F2A26] font-heading mb-3 group-hover:text-[#7A2E3A] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {service.description}
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#8A8178] hover:text-[#7A2E3A] transition-colors duration-300"
              >
                Learn more
                <ArrowUpRight size={12} />
              </Link>

              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: 'inset 0 0 20px rgba(0,0,0,0.02), 0 0 20px rgba(0,0,0,0.02)' }}
              />
            </GlassCard>
          ))}
        </StaggerContainer>
      </div>
    </SectionWrapper>
  );
};

export default Services;

import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import {
  Code2, Globe, Server, Palette, Smartphone, Terminal, Github, Layout
} from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'Building end-to-end applications from database design to polished user interfaces.',
    color: '#4F8CFF',
  },
  {
    icon: Globe,
    title: 'Modern React Applications',
    description: 'Crafting component-driven UIs with React, Next.js, and Tailwind CSS.',
    color: '#7C5CFF',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Designing APIs and server logic with Node.js, Django, Flask, and Express.',
    color: '#22C55E',
  },
  {
    icon: Palette,
    title: 'UI/UX Focused',
    description: 'Designing interfaces that are intuitive, accessible, and visually refined.',
    color: '#EC4899',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Building experiences that work seamlessly across every screen size.',
    color: '#F59E0B',
  },
  {
    icon: Terminal,
    title: 'Python & Automation',
    description: 'Writing clean Python for web applications, scripts, and problem-solving.',
    color: '#6366F1',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const Highlights = () => {
  return (
    <SectionWrapper id="highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
              Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-text-primary">
              What I{' '}
              <span className="gradient-text">bring</span>
            </h2>
          </div>
        </FadeInView>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={itemVariants}>
                <GlassCard className="p-6 h-full group hover:translate-y-[-4px] transition-transform duration-300">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${item.color}18` }}
                  >
                    <Icon size={22} style={{ color: item.color }} />
                  </div>
                  <h3 className="text-base font-heading font-semibold text-text-primary mb-2 group-hover:text-accent-blue transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Highlights;

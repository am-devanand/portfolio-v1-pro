import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import { Shield, Zap, Eye, BookOpen, Target, Box } from 'lucide-react';

const philosophies = [
  {
    icon: Shield,
    title: 'Quality Over Quantity',
    description: 'Writing clean, maintainable code that stands the test of time. One well-built feature is worth more than ten rushed ones.',
    gradient: 'from-blue-500/20 to-blue-600/10',
    accent: '#4F8CFF',
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing for speed and efficiency at every layer — from database queries to bundle size to render cycles.',
    gradient: 'from-purple-500/20 to-violet-500/10',
    accent: '#7C5CFF',
  },
  {
    icon: Eye,
    title: 'User Experience',
    description: 'Designing interfaces that feel intuitive and delightful. The best interfaces are the ones users don\'t notice.',
    gradient: 'from-pink-500/20 to-rose-500/10',
    accent: '#EC4899',
  },
  {
    icon: Target,
    title: 'Problem-First Engineering',
    description: 'Understanding the problem deeply before writing a single line of code. The right solution starts with the right question.',
    gradient: 'from-green-500/20 to-emerald-500/10',
    accent: '#22C55E',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Staying curious and evolving with the craft. Every project is an opportunity to learn something new.',
    gradient: 'from-amber-500/20 to-yellow-500/10',
    accent: '#F59E0B',
  },
  {
    icon: Box,
    title: 'Scalable Architecture',
    description: 'Building systems that grow gracefully. Clean separation of concerns, maintainable codebases, and thoughtful design patterns.',
    gradient: 'from-slate-400/20 to-slate-500/10',
    accent: '#94A3B8',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const Philosophy = () => {
  return (
    <SectionWrapper id="approach">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent-blue/[0.04] rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            How I Build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight mb-4">
            Engineering with{' '}
            <span className="gradient-text">Purpose</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-16">
            Every decision I make is guided by these principles.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {philosophies.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <GlassCard className="p-6 lg:p-8 h-full group hover:translate-y-[-4px] transition-transform duration-300">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} w-fit mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={22} className="text-text-primary" />
                </div>

                <h3 className="text-base font-heading font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 30px ${item.accent}12, 0 0 30px ${item.accent}08` }}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Philosophy;

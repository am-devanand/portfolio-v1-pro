import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import { Code2, Globe, Server, FileCode, Briefcase, Target, GitFork } from 'lucide-react';

const milestones = [
  {
    year: 'Apr 2025',
    title: 'GitHub Account Created',
    description: 'Started my journey on GitHub. First repositories were simple experiments — learning version control and exploring what it means to build software.',
    icon: GitFork,
    color: '#4F8CFF',
  },
  {
    year: 'May 2025',
    title: 'First Python Projects',
    description: 'Built snake-game, password-generator, rock-paper-scissors, and Student-management — foundational projects that established my programming fundamentals.',
    icon: Code2,
    color: '#22C55E',
  },
  {
    year: 'Jul 2025',
    title: 'C++ Exploration',
    description: 'Built a hotel billing system in C++, exploring systems programming and understanding how lower-level languages handle logic and memory.',
    icon: FileCode,
    color: '#F59E0B',
  },
  {
    year: 'Dec 2025',
    title: 'First Web Application',
    description: 'Developed CityCare — a Flask-based civic complaint system with CSV persistence, multi-admin support, and SMS API integration readiness.',
    icon: Globe,
    color: '#7C5CFF',
  },
  {
    year: 'Jan 2026',
    title: 'Full-Stack Leap',
    description: 'Built zionex-furniture (Vite + JS), launched this Portfolio (React + Tailwind), and started projectpyexpo — a Django + React full-stack application.',
    icon: Server,
    color: '#EC4899',
  },
  {
    year: 'Apr 2026',
    title: 'Most Advanced Project',
    description: 'Built ClutchD-App — a Next.js on-demand mechanic platform with Docker, environment separation, professional architecture, and CI-ready configuration.',
    icon: Briefcase,
    color: '#4F8CFF',
  },
];

const Timeline = () => {
  return (
    <SectionWrapper id="journey">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight">
            Building the{' '}
            <span className="gradient-text">future</span>
          </h2>
        </FadeInView>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-accent-pink opacity-20 md:-translate-x-px" />

          <div className="space-y-10 md:space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex items-center md:items-start gap-0 ${
                    isLeft
                      ? 'md:flex-row md:text-right'
                      : 'md:flex-row-reverse md:text-left'
                  }`}
                >
                  <div
                    className="absolute left-[22px] md:left-1/2 w-12 h-12 rounded-xl -translate-x-1/2 flex items-center justify-center border border-white/10 z-10"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon size={18} />
                  </div>

                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    <div
                      className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide mb-2 ${
                        isLeft ? 'md:ml-auto' : ''
                      }`}
                      style={{
                        backgroundColor: `${item.color}18`,
                        color: item.color,
                      }}
                    >
                      {item.year}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary font-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Timeline;

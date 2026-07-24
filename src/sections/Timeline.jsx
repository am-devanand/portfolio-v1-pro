import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import { Code2, Globe, Server, FileCode, Briefcase, Target, GitFork } from 'lucide-react';

const milestones = [
  {
    year: 'Apr 2025',
    title: 'GitHub Account Created',
    description: 'Started my journey on GitHub. First repositories were simple experiments — learning version control and exploring what it means to build software.',
    icon: GitFork,
    color: '#7A2E3A',
  },
  {
    year: 'May 2025',
    title: 'First Python Projects',
    description: 'Built snake-game, password-generator, rock-paper-scissors, and Student-management — foundational projects that established my programming fundamentals.',
    icon: Code2,
    color: '#5B524A',
  },
  {
    year: 'Jul 2025',
    title: 'C++ Exploration',
    description: 'Built a hotel billing system in C++, exploring systems programming and understanding how lower-level languages handle logic and memory.',
    icon: FileCode,
    color: '#A3475B',
  },
  {
    year: 'Dec 2025',
    title: 'First Web Application',
    description: 'Developed CityCare — a Flask-based civic complaint system with CSV persistence, multi-admin support, and SMS API integration readiness.',
    icon: Globe,
    color: '#3B322C',
  },
  {
    year: 'Jan 2026',
    title: 'Full-Stack Leap',
    description: 'Built zionex-furniture (Vite + JS), launched this Portfolio (React + Tailwind), and started projectpyexpo — a Django + React full-stack application.',
    icon: Server,
    color: '#7A2E3A',
  },
  {
    year: 'Apr 2026',
    title: 'Most Advanced Project',
    description: 'Built ClutchD-App — a Next.js on-demand mechanic platform with Docker, environment separation, professional architecture, and CI-ready configuration.',
    icon: Briefcase,
    color: '#5B524A',
  },
];

const Timeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <SectionWrapper id="journey">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-14 md:mb-16">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7A2E3A] bg-[#7A2E3A]/10 rounded-full mb-4">
            Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight">
            Building the{' '}
            <span className="gradient-text">future</span>
          </h2>
        </FadeInView>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-[22px] lg:left-1/2 top-0 bottom-0 w-px bg-[rgba(47,42,38,0.08)] opacity-100 lg:-translate-x-px" />

          <div className="space-y-10 lg:space-y-12">
            {milestones.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isMobile ? 30 : (isLeft ? -30 : 30) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex items-center lg:items-start gap-0 ${
                    isLeft
                      ? 'lg:flex-row lg:text-right'
                      : 'lg:flex-row-reverse lg:text-left'
                  }`}
                >
                  <div
                    className="absolute left-[22px] lg:left-1/2 w-12 h-12 rounded-xl -translate-x-1/2 flex items-center justify-center border z-10 transition-colors duration-300"
                    style={{ backgroundColor: '#FFFFFF', borderColor: '#DDD6CE', color: item.color }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = item.color;
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#FFFFFF';
                      e.currentTarget.style.color = item.color;
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <div
                    className={`ml-16 lg:ml-0 lg:w-[calc(50%-2.5rem)] ${
                      isLeft ? 'lg:mr-auto lg:pr-10' : 'lg:ml-auto lg:pl-10'
                    }`}
                  >
                    <div
                      className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-bold tracking-wide mb-2 ${
                        isLeft ? 'lg:ml-auto' : ''
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

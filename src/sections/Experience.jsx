import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BookOpen, Globe, Server, Briefcase, Target } from 'lucide-react';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';

const milestones = [
  {
    year: '2022',
    title: 'Started Coding',
    description: 'Began my programming journey with Python, building foundational logic and problem-solving skills.',
    icon: <Code2 size={18} />,
    color: '#60A5FA',
  },
  {
    year: '2022',
    title: 'Built First Website',
    description: 'Created my first HTML/CSS website, discovering the power of bringing ideas to life on the web.',
    icon: <Globe size={18} />,
    color: '#22C55E',
  },
  {
    year: '2023',
    title: 'Learned React',
    description: 'Mastered React.js, component architecture, state management, and modern frontend development.',
    icon: <BookOpen size={18} />,
    color: '#8B5CF6',
  },
  {
    year: '2023',
    title: 'Backend Development',
    description: 'Dove into Node.js, Express, databases, and REST APIs, becoming a full-stack developer.',
    icon: <Server size={18} />,
    color: '#EC4899',
  },
  {
    year: '2024',
    title: 'Freelance Projects',
    description: 'Started taking on freelance projects, building real-world applications for clients.',
    icon: <Briefcase size={18} />,
    color: '#F59E0B',
  },
  {
    year: '2025',
    title: 'Present — Continuous Growth',
    description: 'Currently focused on advanced React patterns, system design, open source contributions, and building impactful projects.',
    icon: <Target size={18} />,
    color: '#60A5FA',
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            My{' '}
            <span className="gradient-text">Journey</span>
          </h2>
        </FadeInView>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-accent-pink opacity-20 md:-translate-x-px" />

          <div className="space-y-12">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-12 h-12 rounded-xl -translate-x-1/2 flex items-center justify-center border border-white/10 z-10 shadow-lg"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  {item.icon}
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <span className="text-xs font-semibold tracking-wider" style={{ color: item.color }}>
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1 font-heading">{item.title}</h3>
                  <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;

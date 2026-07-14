import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import SectionWrapper, { FadeInView, StaggerContainer } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';

const stats = [
  { number: '7+', label: 'Projects' },
  { number: '10+', label: 'Technologies' },
  { number: '3+', label: 'Years Learning' },
  { number: '100%', label: 'Dedication' },
];

const timeline = [
  { year: '2022', title: 'Started Programming', description: 'Began my journey with Python and C' },
  { year: '2023', title: 'Learned Frontend', description: 'HTML, CSS, JavaScript, React' },
  { year: '2023', title: 'Learned Backend', description: 'Node.js, Express, Databases' },
  { year: '2024', title: 'Built Real Projects', description: 'Full-stack applications and websites' },
  { year: '2025', title: 'Current Focus', description: 'Advanced React, System Design, Open Source' },
];

const About = () => {
  return (
    <SectionWrapper id="about" dark>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeInView className="mb-16">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight">
            Turning ideas into{' '}
            <span className="gradient-text">digital reality</span>
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Photo */}
          <FadeInView direction="left" className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Decorative glass cards behind */}
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 backdrop-blur-sm rotate-6 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 backdrop-blur-sm -rotate-3 animate-blob-delayed" />

              {/* Main photo */}
              <div className="relative rounded-2xl border border-white/10 bg-surface-card p-2 overflow-hidden shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 z-10 pointer-events-none" />
                <img
                  src={profileImg}
                  alt="Dev Anand S"
                  className="w-full aspect-square object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </FadeInView>

          {/* Right - Content */}
          <div className="space-y-8">
            <FadeInView direction="right">
              <div className="space-y-4 text-text-secondary leading-relaxed text-base md:text-lg">
                <p>
                  I'm <span className="text-white font-semibold">DEV ANAND S</span>, a passionate website builder focused on creating
                  beautiful, functional, and user-centric digital experiences.
                </p>
                <p>
                  My journey in web development has equipped me with a strong foundation in
                  both frontend and backend technologies. I believe in writing clean, maintainable
                  code and designing interfaces that are both aesthetically pleasing and intuitive.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies and contributing to
                  open-source projects. Every error is a stepping stone to success!
                </p>
              </div>
            </FadeInView>

            {/* Stats Grid */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 gap-4" staggerDelay={0.1}>
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="p-4 text-center" hover={false}>
                  <div className="text-2xl md:text-3xl font-bold font-heading gradient-text">
                    {stat.number}
                  </div>
                  <p className="text-xs text-text-secondary mt-1">{stat.label}</p>
                </GlassCard>
              ))}
            </StaggerContainer>
          </div>
        </div>

        {/* Timeline */}
        <FadeInView className="mt-24">
          <h3 className="text-xl md:text-2xl font-bold font-heading text-white mb-10 text-center">
            My Journey
          </h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-blue via-accent-purple to-accent-pink opacity-30 md:-translate-x-px" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent-blue -translate-x-1/2 mt-1.5 ring-4 ring-surface-primary z-10" />

                  {/* Content */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-xs font-semibold text-accent-blue">{item.year}</span>
                    <h4 className="text-base md:text-lg font-semibold text-white mt-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeInView>
      </div>
    </SectionWrapper>
  );
};

export default About;

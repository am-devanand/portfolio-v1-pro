import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import SectionWrapper, { FadeInView, StaggerContainer } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socialLinks = [
  { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/am-devanand', color: '#4F8CFF' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://linkedin.com/in/dev-anand-ba846a359', color: '#7C5CFF' },
  { icon: <Mail size={18} />, label: 'Email', href: 'mailto:amdevanand206@gmail.com', color: '#EC4899' },
];

const stats = [
  { number: '19', label: 'Original Projects', color: '#4F8CFF' },
  { number: '8', label: 'Technologies Used', color: '#7C5CFF' },
  { number: '15', label: 'Months Building', color: '#22C55E' },
  { number: '24', label: 'Total Repositories', color: '#EC4899' },
];

const About = () => {
  return (
    <SectionWrapper id="about">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="mb-16">
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-blue bg-accent-blue/10 rounded-full mb-4">
            Who is DEV?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight">
            The engineer behind the{' '}
            <span className="gradient-text">code</span>
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeInView direction="left" className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="absolute -top-4 -right-4 w-32 h-32 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 backdrop-blur-sm rotate-6 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 backdrop-blur-sm -rotate-3 animate-blob-delayed" />

              <div className="relative rounded-2xl border border-white/10 p-2 overflow-hidden shadow-2xl shadow-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/20 z-10 pointer-events-none" />
                <img
                  src={profileImg}
                  alt="DEV"
                  className="w-full aspect-square object-cover rounded-xl"
                  loading="lazy"
                />
              </div>

              <div className="absolute -inset-4 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </FadeInView>

          <div className="space-y-8">
            <FadeInView direction="right">
              <div className="space-y-4 text-text-secondary leading-relaxed text-base md:text-lg">
                <p>
                  I'm <span className="text-text-primary font-semibold">DEV</span> — a passionate
                  developer exploring the vast world of programming and technology. Every error is a
                  stepping stone, and every project brings me closer to mastery.
                </p>
                <p>
                  My journey started in April 2025 with a simple question: how do websites work? That
                  curiosity evolved through Python scripts, Flask web apps, and into full-stack
                  development with React, Django, and Next.js.
                </p>
                <p>
                  I believe great software is built by understanding problems deeply and crafting
                  solutions that are both functional and elegant. I aim to grow from a beginner into
                  a proficient developer who can contribute meaningfully to projects.
                </p>
              </div>
            </FadeInView>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.08] transition-all duration-300 text-sm text-text-secondary hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="hidden sm:inline">{link.label}</span>
                  <ExternalLink size={10} className="opacity-50" />
                </motion.a>
              ))}
            </div>

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
      </div>
    </SectionWrapper>
  );
};

export default About;

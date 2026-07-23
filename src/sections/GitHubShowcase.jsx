import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitCommit, Code2, FolderOpen, Calendar, Star, GitFork } from 'lucide-react';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import Badge from '../components/ui/Badge';

const githubData = {
  username: 'am-devanand',
  url: 'https://github.com/am-devanand',
  displayName: 'DEV',
  bio: 'A passionate beginner developer eager to become a pro!',
  stats: [
    { icon: FolderOpen, value: '24', label: 'Public Repositories', color: '#4F8CFF' },
    { icon: GitCommit, value: '15+', label: 'Months Active', color: '#7C5CFF' },
    { icon: Code2, value: '5', label: 'Languages Used', color: '#22C55E' },
    { icon: Star, value: '19', label: 'Original Projects', color: '#EC4899' },
  ],
};

const featuredRepos = [
  {
    name: 'ClutchD-App',
    description: 'Full-stack on-demand vehicle assistance platform with Next.js, Docker, and professional architecture.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
  },
  {
    name: 'projectpyexpo',
    description: 'Full-stack Django + React application exploring modern frontend-backend integration.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
  },
  {
    name: 'project-citycare',
    description: 'Flask-based civic complaint system with CSV persistence and multi-admin support.',
    language: 'Python',
    stars: 0,
    forks: 0,
  },
  {
    name: 'zionex-furniture',
    description: 'Modern responsive business website for a furniture brand using Vite and JavaScript.',
    language: 'CSS',
    stars: 0,
    forks: 0,
  },
  {
    name: 'hotel-management',
    description: 'C++ billing system for hotel management operations.',
    language: 'C++',
    stars: 0,
    forks: 0,
  },
  {
    name: 'Portfolio',
    description: 'Premium personal portfolio with React, Tailwind CSS v4, and Framer Motion.',
    language: 'JavaScript',
    stars: 0,
    forks: 0,
  },
];

const GitHubShowcase = () => {
  return (
    <SectionWrapper id="github">
      <div className="absolute -top-20 right-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView className="text-center mb-16">
          <Badge variant="accent" className="bg-accent-blue/10 text-accent-blue border-accent-blue/20 mb-4">
            GitHub
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight mb-4">
            Engineering{' '}
            <span className="gradient-text">footprint</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Every repository tells a story of problems solved and lessons learned.
          </p>
        </FadeInView>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {githubData.stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <GlassCard className="p-5 text-center group hover:scale-105 transition-transform duration-300">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${stat.color}18` }}
                >
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <div className="text-2xl font-bold font-heading gradient-text mb-1">
                  {stat.value}
                </div>
                <p className="text-xs text-text-secondary">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <FadeInView>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold font-heading text-text-primary">Notable Repositories</h3>
            <a
              href={githubData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-accent-blue hover:text-white transition-colors duration-300"
            >
              <Github size={16} />
              View Profile
              <ExternalLink size={12} />
            </a>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={`https://github.com/am-devanand/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="block p-5 rounded-xl bg-black/[0.02] border border-black/[0.06] hover:bg-black/[0.05] hover:border-black/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <Github size={16} className="text-text-secondary group-hover:text-accent-blue transition-colors duration-300" />
                <span className="text-sm font-semibold text-text-primary group-hover:text-accent-blue transition-colors duration-300">
                  {repo.name}
                </span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed mb-3 line-clamp-2">
                {repo.description}
              </p>
              <div className="flex items-center gap-3 text-xs text-text-secondary/60">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded-full" style={{
                    backgroundColor:
                      repo.language === 'JavaScript' ? '#F7DF1E' :
                      repo.language === 'Python' ? '#3572A5' :
                      repo.language === 'CSS' ? '#563D7C' :
                      repo.language === 'C++' ? '#F34B7D' : '#666'
                  }} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} />
                  {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <FadeInView className="text-center mt-10">
          <a
            href={githubData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90" />
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300" />
            <Github size={18} className="relative z-10" />
            <span className="relative z-10">Explore All Repositories</span>
          </a>
        </FadeInView>
      </div>
    </SectionWrapper>
  );
};

export default GitHubShowcase;

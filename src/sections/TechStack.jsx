import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import {
  Code2, Globe, Database, Server, Terminal, Palette,
  LayoutTemplate, Workflow
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe size={20} />,
    skills: [
      { name: 'React.js', desc: 'UI library for building interfaces', icon: <Code2 size={18} /> },
      { name: 'HTML5', desc: 'Semantic web markup', icon: <Globe size={18} /> },
      { name: 'CSS3', desc: 'Styling and animations', icon: <Palette size={18} /> },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', icon: <LayoutTemplate size={18} /> },
    ],
  },
  {
    title: 'Backend',
    icon: <Server size={20} />,
    skills: [
      { name: 'Node.js', desc: 'JavaScript runtime environment', icon: <Server size={18} /> },
      { name: 'Express.js', desc: 'Web application framework', icon: <Workflow size={18} /> },
      { name: 'Python', desc: 'General-purpose programming', icon: <Code2 size={18} /> },
      { name: 'Flask', desc: 'Python web framework', icon: <Terminal size={18} /> },
    ],
  },
  {
    title: 'Languages',
    icon: <Terminal size={20} />,
    skills: [
      { name: 'JavaScript', desc: 'Dynamic scripting language', icon: <Code2 size={18} /> },
      { name: 'Python', desc: 'High-level programming language', icon: <Terminal size={18} /> },
      { name: 'C/C++', desc: 'Systems programming languages', icon: <Code2 size={18} /> },
      { name: 'SQL', desc: 'Database query language', icon: <Database size={18} /> },
    ],
  },
  {
    title: 'Tools & Design',
    icon: <Palette size={20} />,
    skills: [
      { name: 'Git & GitHub', desc: 'Version control and collaboration', icon: <Terminal size={18} /> },
      { name: 'VS Code', desc: 'Code editor', icon: <Code2 size={18} /> },
      { name: 'Photoshop', desc: 'Image editing and design', icon: <Palette size={18} /> },
      { name: 'Vite', desc: 'Build tool and dev server', icon: <Workflow size={18} /> },
    ],
  },
];

const TechStack = () => {
  return (
    <SectionWrapper id="skills">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent-purple bg-accent-purple/10 rounded-full mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-white tracking-tight mb-16">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard className="p-6 lg:p-8">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 text-accent-purple">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white font-heading">{category.title}</h3>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                      className="group flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] hover:border-accent-purple/20 transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-white/5 text-text-secondary group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-all duration-300 shrink-0">
                        {skill.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-white group-hover:text-accent-purple transition-colors duration-300">{skill.name}</p>
                        <p className="text-[11px] text-text-secondary leading-tight mt-0.5">{skill.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TechStack;

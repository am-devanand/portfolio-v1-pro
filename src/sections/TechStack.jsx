import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper, { FadeInView } from '../components/ui/SectionWrapper';
import GlassCard from '../components/ui/GlassCard';
import {
  Code2, Globe, Database, Server, Terminal, Palette,
  LayoutTemplate, Workflow, Box, Container
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Globe size={20} />,
    skills: [
      { name: 'React.js', desc: 'Component-based UI library', icon: <Code2 size={18} /> },
      { name: 'Next.js', desc: 'React framework with SSR', icon: <Globe size={18} /> },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework', icon: <LayoutTemplate size={18} /> },
      { name: 'Vite', desc: 'Frontend build tool', icon: <Workflow size={18} /> },
    ],
  },
  {
    title: 'Backend',
    icon: <Server size={20} />,
    skills: [
      { name: 'Node.js', desc: 'JavaScript runtime', icon: <Server size={18} /> },
      { name: 'Express.js', desc: 'Web application framework', icon: <Workflow size={18} /> },
      { name: 'Django', desc: 'Python web framework', icon: <Code2 size={18} /> },
      { name: 'Flask', desc: 'Lightweight Python web framework', icon: <Terminal size={18} /> },
    ],
  },
  {
    title: 'Languages',
    icon: <Terminal size={20} />,
    skills: [
      { name: 'JavaScript', desc: 'Dynamic scripting language', icon: <Code2 size={18} /> },
      { name: 'Python', desc: 'General-purpose programming', icon: <Terminal size={18} /> },
      { name: 'HTML5 / CSS3', desc: 'Web fundamentals', icon: <Globe size={18} /> },
      { name: 'C / C++', desc: 'Systems programming', icon: <Code2 size={18} /> },
    ],
  },
  {
    title: 'Infrastructure',
    icon: <Container size={20} />,
    skills: [
      { name: 'Git & GitHub', desc: 'Version control', icon: <Terminal size={18} /> },
      { name: 'Docker', desc: 'Containerization', icon: <Box size={18} /> },
      { name: 'MongoDB', desc: 'NoSQL database', icon: <Database size={18} /> },
      { name: 'SQLite', desc: 'Embedded database', icon: <Database size={18} /> },
    ],
  },
];

const categoryCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      delay: i * 0.06,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const TechStack = () => {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeInView>
          <span className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7A2E3A] bg-[#7A2E3A]/10 rounded-full mb-4">
            Technology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-text-primary tracking-tight mb-14">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              custom={catIndex}
              variants={categoryCardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <GlassCard className="p-6 lg:p-8 group/card transition-shadow duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl border border-[rgba(47,42,38,0.08)] text-[#5B524A] group-hover/card:text-[#7A2E3A] transition-colors duration-300" style={{ background: 'linear-gradient(180deg, #FCFBF8, #F8F5F1)' }}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary font-heading">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      custom={catIndex * 4 + skillIndex}
                      variants={skillItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="group relative flex items-start gap-3 p-3 rounded-[20px] bg-[rgba(255,255,255,0.75)] border border-[#DDD6CE] hover:border-[#7A2E3A] hover:bg-white transition-all duration-300"
                    >
                      <div className="p-2 rounded-lg bg-[rgba(47,42,38,0.04)] text-[#5B524A] group-hover:text-[#7A2E3A] group-hover:bg-[#7A2E3A]/[0.08] transition-all duration-300 shrink-0">
                        {skill.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-[#2F2A26] group-hover:text-[#7A2E3A] transition-colors duration-300">
                          {skill.name}
                        </p>
                        <p className="text-[11px] text-text-secondary leading-tight mt-0.5">
                          {skill.desc}
                        </p>
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

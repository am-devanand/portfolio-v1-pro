import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
    {
        name: 'Zionex Furniture',
        description: 'A modern e-commerce furniture website with a sleek design and smooth user experience.',
        tech: ['CSS', 'HTML', 'JavaScript'],
        github: 'https://github.com/am-devanand/zionex-furniture',
        color: 'from-pink-500 to-rose-500',
    },
    {
        name: 'FarmAlert',
        description: 'An agricultural alert system to help farmers with real-time notifications and updates.',
        tech: ['JavaScript', 'Node.js'],
        github: 'https://github.com/am-devanand/FarmAlert',
        color: 'from-green-500 to-emerald-500',
    },
    {
        name: 'Project CityCare',
        description: 'A city management and civic issue reporting platform for urban communities.',
        tech: ['Python', 'Flask'],
        github: 'https://github.com/am-devanand/project-citycare',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        name: 'Student Management',
        description: 'A comprehensive student information management system for educational institutions.',
        tech: ['Python', 'Database'],
        github: 'https://github.com/am-devanand/Student-management',
        color: 'from-purple-500 to-violet-500',
    },
    {
        name: 'Number Guessing Game',
        description: 'An interactive number guessing game with difficulty levels and score tracking.',
        tech: ['Python'],
        github: 'https://github.com/am-devanand/Number-guessing-game',
        color: 'from-orange-500 to-amber-500',
    },
    {
        name: 'Hotel Management',
        description: 'A hotel booking and management system with reservation and billing features.',
        tech: ['C++'],
        github: 'https://github.com/am-devanand/hotel-management',
        color: 'from-red-500 to-pink-500',
    },
    {
        name: 'My Website',
        description: 'Personal portfolio website showcasing skills and projects.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        github: 'https://github.com/am-devanand/my-website',
        color: 'from-indigo-500 to-blue-500',
    },
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-4">
                        Featured <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        A selection of my recent work spanning web development, applications, and more.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="h-full bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 flex flex-col">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                                        <Folder size={24} className="text-white" />
                                    </div>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-muted hover:text-accent transition-colors p-2"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed flex-grow mb-4">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1 bg-background rounded-full text-muted border border-border"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

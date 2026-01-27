import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Terminal, PenTool, LayoutTemplate } from 'lucide-react';

const skills = [
    { name: 'Python', icon: <Code2 className="text-yellow-400" /> },
    { name: 'HTML5', icon: <LayoutTemplate className="text-orange-500" /> },
    { name: 'C++', icon: <Code2 className="text-blue-500" /> },
    { name: 'C', icon: <Code2 className="text-blue-400" /> },
    { name: 'PowerShell', icon: <Terminal className="text-blue-600" /> },
    { name: 'Adobe Photoshop', icon: <PenTool className="text-blue-300" /> },
    { name: 'MySQL', icon: <Database className="text-blue-500" /> },
    { name: 'SQLite', icon: <Database className="text-blue-400" /> },
];

const TechStack = () => {
    return (
        <section id="tech" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-2">
                        <span className="text-accent">#</span> Tech Stack
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-secondary p-6 rounded-lg border border-border flex flex-col items-center justify-center gap-4 hover:border-accent transition-colors group cursor-default"
                            >
                                <div className="p-3 bg-background rounded-full group-hover:scale-110 transition-transform">
                                    {React.cloneElement(skill.icon, { size: 32 })}
                                </div>
                                <span className="font-medium text-text">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;

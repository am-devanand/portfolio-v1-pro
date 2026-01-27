import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitCommit, GitPullRequest, CircleAlert, Trophy } from 'lucide-react';

const GitHubStats = () => {
    return (
        <section id="stats" className="py-20 bg-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold text-text mb-12 flex items-center gap-2">
                        <span className="text-accent">#</span> GitHub Stats
                    </h2>

                    <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-600/20 to-orange-500/20 p-1 rounded-2xl">
                        <div className="bg-[#0d1117] rounded-xl p-8 border border-border relative overflow-hidden">
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10" />

                            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-8">
                                DEV 's GitHub Stats
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <StatItem icon={<Star className="text-yellow-400" />} label="Total Stars Earned" value="1" />
                                    <StatItem icon={<GitCommit className="text-green-400" />} label="Total Commits (last year)" value="33" />
                                    <StatItem icon={<GitPullRequest className="text-blue-400" />} label="Total PRs" value="1" />
                                    <StatItem icon={<CircleAlert className="text-red-400" />} label="Total Issues" value="0" />
                                    <StatItem icon={<Trophy className="text-orange-400" />} label="Contributed to (last year)" value="1" />
                                </div>

                                <div className="flex justify-center">
                                    {/* Circular Progress Mockup */}
                                    <div className="relative w-32 h-32 flex items-center justify-center">
                                        <svg className="w-full h-full transform -rotate-90">
                                            <circle cx="64" cy="64" r="60" stroke="#30363d" strokeWidth="8" fill="transparent" />
                                            <circle cx="64" cy="64" r="60" stroke="#a855f7" strokeWidth="8" fill="transparent" strokeDasharray="377" strokeDashoffset="300" strokeLinecap="round" />
                                        </svg>
                                        <span className="absolute text-4xl font-bold text-text">C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const StatItem = ({ icon, label, value }) => (
    <div className="flex items-center justify-between group">
        <div className="flex items-center gap-3">
            {icon}
            <span className="text-muted group-hover:text-text transition-colors">{label}:</span>
        </div>
        <span className="font-bold text-text">{value}</span>
    </div>
);

export default GitHubStats;

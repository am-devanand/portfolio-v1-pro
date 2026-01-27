import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Text */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
                                About <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">Me</span>
                            </h2>

                            <div className="space-y-4 text-muted text-lg leading-relaxed">
                                <p>
                                    I'm <span className="text-text font-semibold">DEV ANAND S</span>, a passionate website builder focused on creating
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

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 mt-10">
                                <Stat number="7+" label="Projects" />
                                <Stat number="5+" label="Technologies" />
                                <Stat number="100%" label="Dedication" />
                            </div>
                        </div>

                        {/* Right Side - Visual */}
                        <div className="relative">
                            <div className="aspect-square max-w-md mx-auto relative">
                                {/* Decorative elements */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-3xl transform rotate-6" />
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-accent/20 rounded-3xl transform -rotate-3" />
                                <div className="relative bg-secondary rounded-3xl border border-border p-2 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={profileImg}
                                        alt="Dev Anand S"
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Stat = ({ number, label }) => (
    <div className="text-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
            {number}
        </div>
        <p className="text-muted text-sm mt-1">{label}</p>
    </div>
);

export default About;

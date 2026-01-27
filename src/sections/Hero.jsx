import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Palette, Globe } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
            </div>

            {/* Glowing orbs */}
            <div className="absolute top-20 right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />

            <div className="text-center z-10 px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-full border border-border mb-8">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-sm text-muted">Available for new projects</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-text mb-4 tracking-tight leading-tight">
                        <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">DEV ANAND S</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-semibold text-text/80 mb-6">
                        Website Builder & Software Developer
                    </h2>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-muted text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    Crafting beautiful, high-performance websites that elevate brands and deliver exceptional user experiences.
                </motion.p>

                {/* Service Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <ServicePill icon={<Globe size={18} />} text="Web Development" />
                    <ServicePill icon={<Palette size={18} />} text="UI/UX Design" />
                    <ServicePill icon={<Code size={18} />} text="Frontend & Backend" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex justify-center gap-4"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="group px-8 py-4 bg-gradient-to-r from-accent to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-accent/30 transition-all cursor-pointer transform hover:-translate-y-1"
                    >
                        View My Work
                    </Link>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="px-8 py-4 border-2 border-border text-text rounded-full font-semibold hover:bg-secondary hover:border-accent transition-all cursor-pointer transform hover:-translate-y-1"
                    >
                        Get In Touch
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-muted"
            >
                <Link to="about" smooth={true} duration={500}>
                    <ChevronDown size={32} className="animate-bounce" />
                </Link>
            </motion.div>
        </section>
    );
};

const ServicePill = ({ icon, text }) => (
    <div className="flex items-center gap-2 px-5 py-2.5 bg-secondary/50 backdrop-blur-sm rounded-full border border-border text-muted">
        {icon}
        <span className="text-sm font-medium">{text}</span>
    </div>
);

export default Hero;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'tech' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
                            <h1 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-clip-text text-transparent">D E V</span>
                                <span className="text-text"></span>
                            </h1>
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    activeClass="text-accent bg-accent/10"
                                    className="text-muted hover:text-accent cursor-pointer px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-secondary"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="px-6 py-2.5 bg-gradient-to-r from-accent to-purple-600 text-white rounded-full text-sm font-semibold cursor-pointer hover:shadow-lg hover:shadow-accent/25 transition-all"
                        >
                            Hire Me
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-accent p-2 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden bg-secondary/95 backdrop-blur-xl border-b border-border"
                >
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="text-text hover:text-accent hover:bg-background/50 block px-4 py-3 rounded-xl text-base font-medium cursor-pointer transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            onClick={() => setIsOpen(false)}
                            className="block mt-4 px-6 py-3 bg-gradient-to-r from-accent to-purple-600 text-white rounded-full text-center font-semibold cursor-pointer"
                        >
                            Hire Me
                        </Link>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;

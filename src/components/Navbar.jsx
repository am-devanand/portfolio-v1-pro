import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Services', to: 'services' },
  { name: 'Experience', to: 'experience' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-surface-primary/80 backdrop-blur-xl border-b border-white/[0.05]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="hero" smooth={true} duration={600} offset={-80} className="cursor-pointer group">
              <span className="text-xl font-bold font-heading tracking-tight">
                <span className="gradient-text">D</span>
                <span className="text-white/80 group-hover:text-white transition-colors">ev</span>
                <span className="gradient-text ml-1">A</span>
                <span className="text-white/80 group-hover:text-white transition-colors">nand</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-white bg-white/10"
                  className="relative px-4 py-2 rounded-full text-sm text-text-secondary hover:text-white transition-all duration-300 cursor-pointer hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300" />
                <span className="relative z-10">Hire Me</span>
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] p-2 text-text-secondary hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center h-full gap-2 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-heading font-semibold text-white/70 hover:text-white hover:scale-105 transition-all duration-300 py-2 cursor-pointer text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="relative inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold text-white overflow-hidden group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-50 blur-lg" />
                  <span className="relative z-10">Hire Me</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

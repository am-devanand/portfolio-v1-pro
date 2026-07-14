import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Work', to: 'work' },
  { name: 'Services', to: 'services' },
  { name: 'Journey', to: 'journey' },
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
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 sm:pt-5 px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl"
          style={{
            borderRadius: '16px',
            background: scrolled
              ? 'rgba(10, 15, 30, 0.9)'
              : 'rgba(10, 15, 30, 0.55)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.03)'
              : '0 4px 24px rgba(0, 0, 0, 0.25)',
            transition: 'background 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
            {/* Logo */}
            <Link
              to="hero"
              smooth={true}
              duration={600}
              offset={-80}
              className="cursor-pointer group shrink-0"
              aria-label="Back to top"
            >
              <span className="text-xl sm:text-2xl font-bold font-heading tracking-[0.06em] flex items-baseline gap-0">
                <span className="gradient-d">D</span>
                <span className="text-soft-blue-muted">ev</span>
                <span className="text-soft-blue-muted ml-2 gradient-d">A</span>
                <span className="text-soft-blue-muted">nand</span>
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  activeClass="text-white bg-white/10"
                  className="relative px-3.5 py-1.5 rounded-full text-sm font-medium text-text-secondary/80 hover:text-white transition-all duration-300 cursor-pointer hover:bg-white/[0.06]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block shrink-0">
              <Link
                to="contact"
                smooth={true}
                duration={600}
                offset={-80}
                className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <span className="relative z-10">Hire Me</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] p-2 text-text-secondary hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: 'rgba(10, 15, 30, 0.96)', backdropFilter: 'blur(32px)' }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center h-full gap-1 px-6"
            >
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-heading font-semibold text-white/60 hover:text-white hover:scale-105 transition-all duration-300 py-2 cursor-pointer text-center"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-50 blur-xl" />
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

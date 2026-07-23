import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navLinks = [
  { name: 'About',    to: '/about'    },
  { name: 'Skills',   to: '/skills'   },
  { name: 'Work',     to: '/work'     },
  { name: 'Services', to: '/services' },
  { name: 'Journey',  to: '/journey'  },
  { name: 'Contact',  to: '/contact'  },
];

const Navbar = () => {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
              ? 'rgba(255, 255, 255, 0.82)'
              : 'rgba(255, 255, 255, 0.50)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            boxShadow: scrolled
              ? '0 4px 24px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.8)'
              : '0 2px 12px rgba(0, 0, 0, 0.02)',
            transition: 'background 0.4s ease, box-shadow 0.4s ease',
          }}
        >
          <div className="flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6">
            {/* Logo */}
            <Link
              to="/"
              className="cursor-pointer shrink-0 flex items-center gap-1.5 text-xl sm:text-2xl font-[800] tracking-[0.08em] transition-colors duration-300"
              style={{ color: '#7A2E3A' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#6B2533')}
              onMouseLeave={e => (e.currentTarget.style.color = '#7A2E3A')}
              aria-label="Back to home"
            >
              <span style={{ fontSize: '0.7em', opacity: 0.8 }}>&#9670;</span>
              DEV
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#2F2A26] bg-black/5'
                        : 'text-[#57534E] hover:text-[#2F2A26] hover:bg-black/[0.04]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block shrink-0">
              <Link
                to="/contact"
                className="btn-glow relative inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-[20px] text-sm font-semibold text-white overflow-hidden cursor-pointer"
              >
                <span className="relative z-10 text-white">Let&apos;s Connect</span>
                <ArrowUpRight size={14} className="relative z-10 text-white" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] p-2 transition-colors"
              style={{ color: '#5B524A' }}
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
              style={{ background: 'rgba(255, 255, 255, 0.97)', backdropFilter: 'blur(32px)' }}
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
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block text-2xl font-heading font-semibold py-2 cursor-pointer text-center transition-all duration-300 hover:scale-105 ${
                        isActive ? 'text-[#7A2E3A]' : 'text-[#57534E] hover:text-[#2F2A26]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-glow relative inline-flex items-center justify-center gap-1.5 px-8 py-3.5 rounded-[20px] text-base font-semibold text-white overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 text-white">Let&apos;s Connect</span>
                  <ArrowUpRight size={16} className="relative z-10 text-white" />
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

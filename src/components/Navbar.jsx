import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { X, ArrowUpRight } from 'lucide-react';

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
  const navigate                = useNavigate();

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

  // Body scroll lock when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 sm:pt-5 px-4">
        <motion.nav
          role="navigation"
          aria-label="Main navigation"
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
            {/* Logo — "DEV" matching home page branding */}
            <Link
              to="/"
              className="flex items-center gap-2 pl-1"
              aria-label="Back to home"
            >
              <span className="inline-block h-3 w-3 rotate-45 bg-accent-blue" />
              <span className="text-[19px] font-bold tracking-wide text-accent-blue">DEV</span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5" role="tablist" aria-label="Page navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative px-3.5 py-1.5 text-sm font-medium transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#7A2E3A]'
                        : 'text-[#57534E] hover:text-[#7A2E3A]'
                    }`
                  }
                  aria-label={`Navigate to ${link.name}`}
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <AnimatePresence mode="popLayout">
                        {isActive && (
                          <motion.div
                            layoutId="nav-indicator"
                            className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full"
                            style={{ background: '#7A2E3A' }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                          />
                        )}
                      </AnimatePresence>
                    </>
                  )}
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

            {/* Mobile menu button — 3-line hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] p-2 min-h-[44px] min-w-[44px] flex flex-col items-center justify-center gap-[5px] transition-colors"
              style={{ color: '#5B524A' }}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? (
                <X size={20} />
              ) : (
                <span className="flex flex-col gap-[5px]" aria-hidden="true">
                  <span className="block w-5 h-[2px] rounded-full bg-current transition-transform duration-200" />
                  <span className="block w-5 h-[2px] rounded-full bg-current transition-opacity duration-200" />
                  <span className="block w-5 h-[2px] rounded-full bg-current transition-transform duration-200" />
                </span>
              )}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[90] md:hidden"
              style={{ background: 'rgba(0, 0, 0, 0.3)' }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.div
              key="mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-[280px] max-w-[85vw] z-[95] md:hidden overflow-y-auto"
              style={{
                background: 'rgba(252, 251, 248, 0.98)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              {/* Close button */}
              <div className="flex justify-end pt-5 pr-5">
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-full transition-colors hover:bg-black/5 min-h-[48px] min-w-[48px] flex items-center justify-center"
                  style={{ color: '#5B524A' }}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Navigation links */}
              <div className="flex flex-col px-6 mt-2 gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `relative flex items-center min-h-[48px] px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-[#7A2E3A] bg-[#7A2E3A]/5'
                          : 'text-[#57534E] hover:text-[#7A2E3A] hover:bg-black/5'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex-1">{link.name}</span>
                        {isActive && (
                          <span
                            className="w-1 h-5 rounded-full shrink-0"
                            style={{ background: '#7A2E3A' }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              {/* Mobile CTA */}
              <div className="px-6 mt-6 pb-8">
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="btn-glow relative inline-flex items-center justify-center gap-1.5 w-full px-8 py-3.5 rounded-[20px] text-base font-semibold text-white overflow-hidden cursor-pointer"
                >
                  <span className="relative z-10 text-white">Let&apos;s Connect</span>
                  <ArrowUpRight size={16} className="relative z-10 text-white" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
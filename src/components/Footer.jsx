import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Work', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
];

const Footer = () => {
  return (
    <footer
      className="relative z-10 border-t"
      style={{ borderColor: 'rgba(210,195,178,0.45)', background: '#FCFBF8' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <NavLink
            to="/"
            className="text-xl font-[800] tracking-[0.08em] transition-colors duration-300"
            style={{ color: '#7A2E3A' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#6B2533')}
            onMouseLeave={e => (e.currentTarget.style.color = '#7A2E3A')}
          >
            DEV
          </NavLink>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map(link => (
              <NavLink
                key={link.label}
                to={link.to}
                className="text-xs font-medium transition-colors duration-300"
                style={({ isActive }) => ({
                  color: isActive ? '#7A2E3A' : '#8A8178',
                })}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs" style={{ color: '#8A8178' }}>
            © {new Date().getFullYear()} Dev Anand S
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

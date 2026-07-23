import React from 'react';
import { motion } from 'framer-motion';

const PageHero = ({ label, title, titleAccent, description }) => {
  return (
    <div className="relative overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(122,46,58,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-16 sm:pt-40 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Label pill */}
          {label && (
            <span
              className="inline-block px-3 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase rounded-full mb-5"
              style={{
                color: '#7A2E3A',
                background: 'rgba(122,46,58,0.08)',
              }}
            >
              {label}
            </span>
          )}

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading tracking-tight leading-[1.05] mb-5"
            style={{ color: '#2F2A26' }}
          >
            {title}
            {titleAccent && (
              <>
                {' '}
                <span style={{ color: '#7A2E3A' }}>{titleAccent}</span>
              </>
            )}
          </h1>

          {/* Divider */}
          <div
            className="w-12 h-[2px] rounded-full mb-5"
            style={{
              background: 'linear-gradient(90deg, #7A2E3A, rgba(122,46,58,0.2))',
            }}
          />

          {/* Description */}
          {description && (
            <p
              className="text-base sm:text-lg leading-relaxed max-w-2xl"
              style={{ color: '#5B524A' }}
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'rgba(47,42,38,0.07)' }}
      />
    </div>
  );
};

export default PageHero;

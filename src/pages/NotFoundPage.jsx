import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SpotlightBackground from '../components/ui/SpotlightBackground';

const NotFoundPage = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      <SpotlightBackground />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        {/* 404 numeral */}
        <h1
          className="text-[8rem] sm:text-[10rem] font-heading font-bold leading-none mb-4"
          style={{ color: '#7A2E3A' }}
        >
          404
        </h1>

        {/* Editorial message */}
        <p
          className="text-lg sm:text-xl mb-8 max-w-md mx-auto leading-relaxed"
          style={{ color: '#5B524A' }}
        >
          Looks like this page went on a coffee break.
        </p>

        {/* Back Home button */}
        <Link
          to="/"
          className="btn-glow relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[20px] text-base font-semibold text-white cursor-pointer no-underline"
        >
          Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

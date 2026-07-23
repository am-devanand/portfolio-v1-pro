import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = ['DEV', 'Build.', 'Solve.', 'Ship.'];

const LoadingScreen = ({ children }) => {
  const [show, setShow] = useState(
    () => !sessionStorage.getItem('portfolio-loaded'),
  );
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!show) return;

    if (step < words.length) {
      const timer = setTimeout(() => setStep((s) => s + 1), 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
        try {
          sessionStorage.setItem('portfolio-loaded', 'true');
        } catch {
          /* storage may be unavailable */
        }
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [step, show]);

  if (!show) return children;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: '#F7F4EE' }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl font-heading font-bold tracking-tight"
          style={{
            color: step === 0 ? '#7d1f24' : '#2F2A26',
          }}
        >
          {words[step] || ''}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default LoadingScreen;

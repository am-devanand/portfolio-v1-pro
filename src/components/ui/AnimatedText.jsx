import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ texts, className = '', period = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentText = texts[currentIndex];

    if (isDeleting) {
      setDisplayText(currentText.substring(0, displayText.length - 1));
    } else {
      setDisplayText(currentText.substring(0, displayText.length + 1));
    }

    if (!isDeleting && displayText === currentText) {
      setTimeout(() => setIsDeleting(true), period);
      return;
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }
  }, [texts, currentIndex, displayText, isDeleting, period]);

  useEffect(() => {
    const timeout = setTimeout(tick, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [tick, isDeleting]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-[2px] h-[1em] bg-accent-blue ml-1 align-middle"
      />
    </span>
  );
};

export default AnimatedText;

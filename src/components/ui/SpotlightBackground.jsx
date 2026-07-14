import React, { useEffect, useRef } from 'react';

const SpotlightBackground = () => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Spotlight cursor effect */}
      <div ref={spotlightRef} className="spotlight" />

      {/* Gradient blobs */}
      <div className="fixed top-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] animate-blob pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-accent-blue/8 rounded-full blur-[150px] animate-blob-delayed pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[60%] w-[300px] h-[300px] bg-accent-pink/6 rounded-full blur-[100px] animate-float pointer-events-none z-0" />

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              opacity: 0.1 + Math.random() * 0.3,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay" />
    </>
  );
};

export default SpotlightBackground;

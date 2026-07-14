import React, { useEffect, useRef, useMemo } from 'react';

const SpotlightBackground = () => {
  const spotlightRef = useRef(null);

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 13) % 100}%`,
        top: `${(i * 53 + 7) % 100}%`,
        size: 1.5 + (i % 3) * 0.8,
        delay: (i * 1.3) % 10,
        duration: 16 + (i % 5) * 5,
        opacity: 0.12 + (i % 4) * 0.06,
      })),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty('--mouse-x', `${e.clientX}px`);
        spotlightRef.current.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {/* Blue glow — top-left */}
      <div
        style={{
          position: 'absolute',
          width: '100vw',
          height: '70vh',
          top: '-20%',
          left: '-15%',
          background: 'radial-gradient(ellipse at center, rgba(79, 140, 255, 0.22) 0%, rgba(79, 140, 255, 0.08) 35%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'aurora-drift-1 30s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Purple glow — hero section */}
      <div
        style={{
          position: 'absolute',
          width: '90vw',
          height: '60vh',
          top: '15%',
          left: '5%',
          background: 'radial-gradient(ellipse at center, rgba(124, 92, 255, 0.18) 0%, rgba(124, 92, 255, 0.06) 40%, transparent 70%)',
          filter: 'blur(140px)',
          animation: 'aurora-drift-2 35s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Pink glow — bottom-right */}
      <div
        style={{
          position: 'absolute',
          width: '80vw',
          height: '55vh',
          bottom: '-10%',
          right: '-10%',
          background: 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0.04) 40%, transparent 70%)',
          filter: 'blur(130px)',
          animation: 'aurora-drift-3 25s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)',
        }}
      />

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(700px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(79, 140, 255, 0.08), transparent 40%)',
          transition: 'background 0.15s ease-out',
        }}
      />

      {/* Floating particles */}
      <div style={{ position: 'absolute', inset: 0 }}>
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              position: 'absolute',
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              borderRadius: '50%',
              background: 'rgba(148, 163, 184, 0.5)',
              opacity: p.opacity,
              animation: `particle-float ${p.duration}s linear ${p.delay}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* Noise texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
};

export default SpotlightBackground;

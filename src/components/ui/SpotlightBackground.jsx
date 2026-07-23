import React from 'react';

const SpotlightBackground = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">

      {/* Subtle radial accent — top left */}
      <div style={{
        position: 'absolute',
        width: '70vw',
        height: '70vh',
        top: '-15%',
        left: '-10%',
        background: 'radial-gradient(ellipse at center, rgba(91,91,214,0.05) 0%, transparent 60%)',
        filter: 'blur(100px)',
      }} />

      {/* Subtle radial accent — bottom right */}
      <div style={{
        position: 'absolute',
        width: '60vw',
        height: '60vh',
        bottom: '-10%',
        right: '-10%',
        background: 'radial-gradient(ellipse at center, rgba(192,38,211,0.04) 0%, transparent 60%)',
        filter: 'blur(100px)',
      }} />

      {/* Grid overlay — rgba(0,0,0,0.035) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='g' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 40 0 L 0 0 0 40' fill='none' stroke='rgba(0,0,0,0.035)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
      }} />

      {/* Paper texture — 1% opacity */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.01,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
      }} />
    </div>
  );
};

export default SpotlightBackground;

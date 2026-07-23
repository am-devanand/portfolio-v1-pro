import React from 'react';

const SpotlightBackground = () => {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }} aria-hidden="true">
      
      {/* Warm radial accent — top left (very faint maroon) */}
      <div style={{
        position: 'absolute',
        width: '60vw',
        height: '60vh',
        top: '-10%',
        left: '-10%',
        background: 'radial-gradient(ellipse at center, rgba(125,31,36,0.04) 0%, transparent 60%)',
        filter: 'blur(100px)',
      }} />

      {/* Warm radial accent — bottom right (very faint maroon) */}
      <div style={{
        position: 'absolute',
        width: '50vw',
        height: '50vh',
        bottom: '-8%',
        right: '-8%',
        background: 'radial-gradient(ellipse at center, rgba(125,31,36,0.03) 0%, transparent 60%)',
        filter: 'blur(80px)',
      }} />

      {/* Faint circles (desk markings) */}
      <div className="absolute inset-0 hidden lg:block">
        <svg style={{ position: 'absolute', top: '15%', left: '16%', opacity: 0.08 }} width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="59" fill="none" stroke="#2F2A26" strokeWidth="0.8" />
        </svg>
        <svg style={{ position: 'absolute', bottom: '15%', left: '10%', opacity: 0.08 }} width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="99" fill="none" stroke="#2F2A26" strokeWidth="0.8" />
        </svg>
        <svg style={{ position: 'absolute', top: '18%', right: '12%', opacity: 0.06 }} width="150" height="150" viewBox="0 0 150 150">
          <circle cx="75" cy="75" r="74" fill="none" stroke="#2F2A26" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Dot grid patterns */}
      <svg className="absolute pointer-events-none hidden md:block" style={{ top: '16%', left: '14%', zIndex: 1, opacity: 0.12 }} width="44" height="44" viewBox="0 0 44 44">
        {[0,1,2].map(r => [0,1,2].map(c => <circle key={`${r}-${c}`} cx={c * 15 + 7} cy={r * 15 + 7} r="1.5" fill="#8A8178" />))}
      </svg>
      <svg className="absolute pointer-events-none hidden md:block" style={{ top: '42%', right: '8%', zIndex: 1, opacity: 0.12 }} width="30" height="45" viewBox="0 0 30 45">
        {[0,1,2,3].map(r => [0,1].map(c => <circle key={`${r}-${c}`} cx={c * 15 + 7} cy={r * 15 + 7} r="1.5" fill="#8A8178" />))}
      </svg>

      {/* Paper grain texture — multiply at 0.05 opacity */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.05,
        mixBlendMode: 'multiply',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
      }} />
    </div>
  );
};

export default SpotlightBackground;

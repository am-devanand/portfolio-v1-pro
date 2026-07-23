import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Globe } from 'lucide-react';
import Badge from '../components/ui/Badge';
import ScrollIndicator from '../components/ui/ScrollIndicator';

import heroTerminal from '../assets/hero_terminal.jpg';
import heroCoffee   from '../assets/hero_coffee.jpg';
import heroNotebook from '../assets/hero_notebook.jpg';
import heroMountain from '../assets/hero_mountain.jpg';

const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'React Developer',
  'Backend Engineer',
  'Problem Solver',
];

const techRow1 = [
  { name: 'React' },
  { name: 'Node.js' },
  { name: 'Express' },
  { name: 'Python' },
  { name: 'MongoDB' },
  { name: 'MySQL' },
];

const techRow2 = [
  { name: 'TailwindCSS' },
  { name: 'Linux' },
  { name: 'Git' },
];

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const RoleRotator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex(p => (p + 1) % roles.length), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-14 md:h-16 text-2xl md:text-3xl lg:text-[32px] font-heading font-medium tracking-wide">
      <span className="font-mono mr-3" style={{ color: '#7A2E3A' }}>&lt;</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: '#2F2A26' }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
      <span className="font-mono ml-3" style={{ color: '#7A2E3A' }}>/&gt;</span>
    </div>
  );
};

const TechPill = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium cursor-default transition-all duration-300"
      style={{
        background: hovered ? '#FFFFFF' : 'transparent',
        border: `1px solid ${hovered ? '#7A2E3A' : 'rgba(196,186,178,0.5)'}`,
        color: '#5B524A',
        boxShadow: hovered ? '0 10px 25px rgba(122,46,58,0.08)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="w-[5px] h-[5px] rounded-full transition-all duration-300"
        style={{ backgroundColor: '#7A2E3A', transform: hovered ? 'scale(1.25)' : 'scale(1)' }}
      />
      {name}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#F7F4EE]">

      {/* Hero-specific vignette radial glow to match photo lighting */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{ zIndex: 1 }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.03) 100%)',
        }} />
      </div>

      {/* ─── FLAT-LAY PHOTO PROPS ─────────────────────────────────────────── */}
      {/* Terminal tablet — Top Left */}
      <img
        src={heroTerminal}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          top: '-2%', left: '-2%',
          width: 'clamp(200px, 22vw, 300px)',
          opacity: 0.95,
          transform: 'rotate(-4deg)',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.3) brightness(1.1)',
          zIndex: 2,
        }}
      />
      <img
        src={heroCoffee}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          top: '-4%', right: '-3%',
          width: 'clamp(180px, 18vw, 260px)',
          opacity: 0.95,
          mixBlendMode: 'multiply',
          filter: 'contrast(1.3) brightness(1.1)',
          zIndex: 2,
        }}
      />
      <img
        src={heroNotebook}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          bottom: '-3%', left: '2%',
          width: 'clamp(120px, 14vw, 200px)',
          opacity: 0.9,
          transform: 'rotate(-12deg)',
          borderRadius: '24px',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.2) brightness(1.1) saturate(0.9)',
          zIndex: 2,
        }}
      />
      <img
        src={heroMountain}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          bottom: '1%', right: '-1%',
          width: 'clamp(150px, 16vw, 220px)',
          opacity: 0.95,
          transform: 'rotate(-5deg)',
          mixBlendMode: 'multiply',
          filter: 'contrast(1.3) brightness(1.1)',
          zIndex: 2,
        }}
      />

      {/* ─── CSS DECORATIVE OVERLAYS ──────────────────────────────────────── */}

      {/* Far Left edge '01' & line */}
      <div className="absolute left-6 top-1/4 hidden sm:flex flex-col items-center pointer-events-none" style={{ zIndex: 3 }}>
        <span className="text-[10px] font-mono tracking-widest mb-2" style={{ color: '#C4BAB2' }}>01</span>
        <div className="w-4 h-[1px]" style={{ background: 'rgba(196,186,178,0.8)' }} />
      </div>

      {/* Far Right vertical dot stack */}
      <div className="absolute right-8 top-1/3 hidden sm:flex flex-col gap-[14px] pointer-events-none" style={{ zIndex: 3 }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(196,186,178,0.5)' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(196,186,178,0.5)' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7A2E3A' }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'rgba(196,186,178,0.5)' }} />
      </div>

      {/* Left sticky note — "Build / Solve / Elevate" */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ top: '16%', left: '6%', zIndex: 3 }}
      >
        <div
          style={{
            background: '#F3EDE1',
            border: '1px solid rgba(196,186,178,0.4)',
            borderRadius: '1px',
            padding: '12px 14px 16px',
            width: '92px',
            transform: 'rotate(-3deg)',
            boxShadow: '2px 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          {/* Pushpin */}
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#9B9B9B', margin: '0 auto 10px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
          <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#5B524A', lineHeight: 1.8 }}>
            <div>Build</div>
            <div>Solve</div>
            <div>Elevate</div>
          </div>
          <div style={{ height: '2px', width: '24px', background: '#7A2E3A', marginTop: '10px' }} />
        </div>
      </div>

      {/* Right sticky note — "// Focus / // Code / // Ship" */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ top: '38%', right: '6%', zIndex: 3 }}
      >
        <div
          style={{
            background: '#F3EDE1',
            border: '1px solid rgba(196,186,178,0.4)',
            borderRadius: '1px',
            padding: '12px 14px 16px',
            width: '92px',
            transform: 'rotate(2deg)',
            boxShadow: '2px 4px 12px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ fontSize: '10px', fontFamily: 'monospace', color: '#5B524A', lineHeight: 1.8, opacity: 0.8 }}>
            <div>// Focus</div>
            <div>// Code</div>
            <div>// Ship</div>
          </div>
          <div style={{ height: '2px', width: '24px', background: '#7A2E3A', marginTop: '10px' }} />
        </div>
      </div>

      {/* "D" avatar badge — right-middle */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ top: '64%', right: '9%', zIndex: 4 }}
      >
        <div style={{
          width: '36px', height: '36px', borderRadius: '50%',
          background: '#7A2E3A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(122,46,58,0.3)',
        }}>
          <span style={{ color: 'white', fontWeight: 600, fontSize: '15px', fontFamily: 'sans-serif' }}>D</span>
        </div>
      </div>

      {/* "Good code…" quote card — bottom-right */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ bottom: '2%', right: '5%', zIndex: 1 }}
      >
        <div style={{
          background: '#EBE5D9',
          border: '1px solid rgba(196,186,178,0.5)',
          borderRadius: '1px',
          padding: '14px 16px 18px',
          width: '130px',
          transform: 'rotate(1.5deg)',
          boxShadow: '2px 4px 14px rgba(0,0,0,0.08)',
        }}>
          <div style={{ fontSize: '10.5px', color: '#5B524A', lineHeight: 1.7, fontFamily: 'sans-serif', fontWeight: 500 }}>
            Good code is<br />not written,<br />it's crafted.
          </div>
          <div style={{ height: '1.5px', width: '24px', background: '#7A2E3A', marginTop: '10px' }} />
        </div>
      </div>

      {/* "//" bottom-left corner text */}
      <div
        className="absolute hidden lg:block pointer-events-none"
        style={{ bottom: '4%', left: '3%', zIndex: 3 }}
      >
        <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#8A8178', opacity: 0.8 }}>//</span>
      </div>

      {/* Dot grids (top left & right center) */}
      <svg className="absolute pointer-events-none hidden md:block" style={{ top: '15%', left: '15%', zIndex: 1, opacity: 0.2 }} width="44" height="44" viewBox="0 0 44 44">
        {[0,1,2].map(r => [0,1,2].map(c => <circle key={`${r}-${c}`} cx={c * 15 + 7} cy={r * 15 + 7} r="1.5" fill="#8A8178" />))}
      </svg>
      <svg className="absolute pointer-events-none hidden md:block" style={{ top: '18%', right: '15%', zIndex: 1, opacity: 0.2 }} width="30" height="45" viewBox="0 0 30 45">
        {[0,1,2,3].map(r => [0,1].map(c => <circle key={`${r}-${c}`} cx={c * 15 + 7} cy={r * 15 + 7} r="1.5" fill="#8A8178" />))}
      </svg>
      <svg className="absolute pointer-events-none hidden md:block" style={{ bottom: '40%', right: '8%', zIndex: 1, opacity: 0.2 }} width="44" height="44" viewBox="0 0 44 44">
        {[0,1,2].map(r => [0,1,2].map(c => <circle key={`${r}-${c}`} cx={c * 15 + 7} cy={r * 15 + 7} r="1.5" fill="#8A8178" />))}
      </svg>

      {/* Curved ring lines (faint overlapping circles in background) */}
      <svg className="absolute pointer-events-none" style={{ top: '10%', left: '16%', zIndex: 1, opacity: 0.08 }} width="120" height="120" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="59" fill="none" stroke="#2F2A26" strokeWidth="1" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ bottom: '15%', left: '10%', zIndex: 1, opacity: 0.08 }} width="250" height="250" viewBox="0 0 250 250">
        <circle cx="125" cy="125" r="124" fill="none" stroke="#2F2A26" strokeWidth="1" />
      </svg>
      <svg className="absolute pointer-events-none" style={{ top: '15%', right: '10%', zIndex: 1, opacity: 0.05 }} width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="89" fill="none" stroke="#2F2A26" strokeWidth="1" />
      </svg>


      {/* ─── MAIN HERO CONTENT ────────────────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-36 text-center"
        style={{ zIndex: 10 }}
      >
        {/* Availability badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10 sm:mb-12">
          <Badge variant="success" dot>Available for new projects</Badge>
        </motion.div>

        {/* Numbered greeting */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-8 sm:mb-10">
          <span className="font-mono text-[11px]" style={{ color: '#8A8178', letterSpacing: '0.05em' }}>01</span>
          <div className="w-8 sm:w-12 h-[1px]" style={{ background: 'rgba(196,186,178,0.7)' }} />
          <span className="text-[11px] font-sans tracking-[0.15em] font-semibold uppercase" style={{ color: '#5B524A' }}>
            Hello, I'm
          </span>
        </motion.div>

        {/* Name Wrapper (for relative positioning of watermarks) */}
        <div className="relative inline-block w-full">
          {/* Giant watermark letters behind the name, perfectly aligned */}
          <div
            className="absolute inset-0 flex items-center justify-between pointer-events-none select-none"
            style={{ zIndex: -1, top: '50%', transform: 'translateY(-50%)', padding: '0 2%' }}
            aria-hidden="true"
          >
            <span style={{ fontSize: 'clamp(200px, 32vw, 420px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px rgba(122,46,58,0.1)', lineHeight: 1, transform: 'translateX(-15%)' }}>D</span>
            <span style={{ fontSize: 'clamp(200px, 32vw, 420px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px rgba(122,46,58,0.1)', lineHeight: 1, transform: 'translateX(-5%)' }}>A</span>
            <span style={{ fontSize: 'clamp(200px, 32vw, 420px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '1px rgba(122,46,58,0.1)', lineHeight: 1, transform: 'translateX(15%)' }}>S</span>
          </div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="font-bold font-sans tracking-[-0.03em] leading-none mb-0"
            style={{ fontSize: 'clamp(64px, 11vw, 120px)' }}
          >
            <span className="inline-flex items-baseline justify-center gap-x-4 sm:gap-x-7 lg:gap-x-9 whitespace-nowrap">
              {/* D ev */}
              <span className="inline-flex items-baseline gap-0">
                <span style={{ color: '#7A2E3A' }}>D</span>
                <span style={{ color: '#2F2A26', fontSize: '0.8em' }}>ev</span>
              </span>
              {/* A nand */}
              <span className="inline-flex items-baseline gap-0">
                <span style={{ color: '#7A2E3A' }}>A</span>
                <span style={{ color: '#2F2A26', fontSize: '0.8em' }}>nand</span>
              </span>
              {/* S */}
              <span style={{ color: '#7A2E3A' }}>S</span>
            </span>
          </motion.h1>
        </div>

        {/* Full-width center divider with dot */}
        <motion.div variants={fadeUp} className="flex items-center justify-center my-10 sm:my-14 w-full px-[5%]">
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(90deg, transparent, rgba(196,186,178,0.7))' }} />
          <div className="mx-4 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#7A2E3A' }} />
          <div className="flex-1 h-[1px]" style={{ background: 'linear-gradient(270deg, transparent, rgba(196,186,178,0.7))' }} />
        </motion.div>

        {/* Role rotator — angle bracket format */}
        <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
          <RoleRotator />
        </motion.div>

        {/* Location line */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
          <span className="flex items-center gap-2 text-xs sm:text-sm font-medium" style={{ color: '#5B524A' }}>
            <MapPin size={14} style={{ color: '#7A2E3A' }} />
            Coimbatore, India
          </span>
          <span style={{ color: '#D6CEC5' }}>|</span>
          <span className="flex items-center gap-2 text-xs sm:text-sm font-medium" style={{ color: '#5B524A' }}>
            <Globe size={14} style={{ color: '#5B524A' }} />
            Open to Remote
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16 sm:mb-20">
          <Link
            to="/work"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ background: '#7A2E3A' }}
          >
            Explore Projects
            <ArrowUpRight size={16} className="text-white" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-300"
            style={{ color: '#2F2A26', border: '1px solid rgba(196,186,178,0.6)', background: 'transparent' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Let&apos;s Connect
          </Link>
        </motion.div>

        {/* Tech pills */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <div className="flex flex-wrap justify-center gap-3">
            {techRow1.map(p => <TechPill key={p.name} name={p.name} />)}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techRow2.map(p => <TechPill key={p.name} name={p.name} />)}
          </div>
        </motion.div>
      </motion.div>

      <ScrollIndicator to="about" isRoute />
    </section>
  );
};

export default Hero;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

/* ---------- tiny icons ---------- */
function ArrowUpRight({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}



function PinIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function GlobeIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3c2.5 2.4 3.8 5.6 3.8 9S14.5 18.6 12 21C9.5 18.6 8.2 15.4 8.2 12S9.5 5.4 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/* ---------- flat-lay objects ---------- */
function LeafBranch() {
  const leaf = (x, y, r, s = 1, c = '#53402f') => (
    <ellipse
      cx={x}
      cy={y}
      rx={13 * s}
      ry={6 * s}
      fill={c}
      transform={`rotate(${r} ${x} ${y})`}
    />
  );
  return (
    <svg viewBox="0 0 220 200" className="h-full w-full" aria-hidden>
      <path
        d="M-5 -5 C 50 25, 80 55, 120 95 C 140 115, 150 130, 165 150"
        stroke="#3f3025"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M55 35 C 75 45, 88 60, 98 78"
        stroke="#3f3025"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />
      {leaf(28, 18, 35, 1.1)}
      {leaf(58, 30, 55, 1, '#473627')}
      {leaf(46, 52, 10, 1.05)}
      {leaf(86, 46, 70, 1.1, '#473627')}
      {leaf(78, 70, 25, 1)}
      {leaf(112, 70, 80, 1.15)}
      {leaf(104, 96, 30, 1, '#473627')}
      {leaf(138, 98, 95, 1.1)}
      {leaf(132, 124, 40, 1.05, '#473627')}
      {leaf(162, 128, 110, 1)}
      {leaf(158, 152, 55, 0.95, '#473627')}
    </svg>
  );
}

function CoffeeCup() {
  return (
    <div className="relative h-[210px] w-[210px]">
      {/* handle, drawn first so the cup hides its inner half */}
      <div
        className="absolute right-[-4%] top-1/2 z-0 h-[36%] w-[30%] -translate-y-1/2 rounded-full border-[11px] border-[#f1ebdf]"
        style={{ boxShadow: '0 8px 12px -6px rgba(60,40,30,.35)' }}
      />
      {/* saucer */}
      <div
        className="absolute inset-0 z-10 rounded-full"
        style={{
          background: 'radial-gradient(circle at 42% 38%, #f4eee2, #e3d8c5)',
          boxShadow:
            '0 22px 34px -14px rgba(60,40,30,.4), inset 0 0 0 1px rgba(255,255,255,.55)',
        }}
      />
      <div className="absolute inset-[13%] z-10 rounded-full border border-[rgba(42,38,34,0.08)]" />
      {/* cup */}
      <div
        className="absolute inset-[12%] z-20 rounded-full bg-[#fbf7ef]"
        style={{
          boxShadow:
            '0 12px 20px -8px rgba(60,40,30,.4), inset 0 -7px 11px rgba(0,0,0,.07), inset 0 5px 9px rgba(255,255,255,.85)',
        }}
      />
      {/* coffee */}
      <div
        className="absolute inset-[20%] z-30 overflow-hidden rounded-full"
        style={{
          background:
            'radial-gradient(circle at 38% 32%, #4d2619, #2a120c 56%, #150905)',
          boxShadow: 'inset 0 4px 10px rgba(0,0,0,.6)',
        }}
      >
        <div className="absolute left-[16%] top-[14%] h-[26%] w-[34%] rounded-full bg-white/10 blur-[3px]" />
      </div>
    </div>
  );
}

function Notebook() {
  return (
    <div
      className="relative h-[330px] w-[250px] rounded-[10px] bg-[#f2ecdd]"
      style={{ boxShadow: '0 26px 40px -18px rgba(60,40,30,.45)' }}
    >
      {/* spine */}
      <div className="absolute inset-y-0 left-0 w-3 rounded-l-[10px] bg-[#e4d9c4]" />
      {/* ruled lines */}
      <div
        className="absolute inset-0 rounded-[10px]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(to bottom, transparent 0 27px, rgba(42,38,34,.08) 27px 28px)',
          backgroundPosition: '0 22px',
        }}
      />
      <pre className="ff-mono absolute left-7 top-9 text-[12px] leading-[27px] text-[#8a8175]">
{`const dev = {
  code: true,
  coffee: true,
  debug: false,
  ship: true
};`}
      </pre>
    </div>
  );
}

function Pen() {
  return (
    <svg viewBox="0 0 30 240" className="h-[260px] w-[34px]" aria-hidden>
      <defs>
        <linearGradient id="penBody" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5d1519" />
          <stop offset="0.45" stopColor="#8c242a" />
          <stop offset="1" stopColor="#5d1519" />
        </linearGradient>
      </defs>
      {/* clip */}
      <rect x="19" y="20" width="3" height="46" rx="1.5" fill="#d9cfbe" />
      {/* cap band */}
      <rect x="7" y="64" width="16" height="6" rx="2" fill="#3f0f12" />
      {/* body */}
      <rect x="7" y="14" width="16" height="180" rx="8" fill="url(#penBody)" />
      <rect x="10" y="20" width="2.4" height="168" rx="1.2" fill="#ffffff" opacity="0.18" />
      {/* grip */}
      <rect x="8" y="188" width="14" height="18" rx="4" fill="#4a1114" />
      {/* metal tip */}
      <path d="M9 206 L21 206 L15 236 Z" fill="#cfc6b6" />
      <path d="M13.4 226 L16.6 226 L15 236 Z" fill="#3a342c" />
    </svg>
  );
}

function MountainPhoto() {
  return (
    <svg viewBox="0 0 300 210" className="h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ead9bf" />
          <stop offset="1" stopColor="#d6bf9f" />
        </linearGradient>
      </defs>
      <rect width="300" height="210" fill="url(#sky)" />
      <circle cx="210" cy="62" r="30" fill="#f3e6cd" opacity="0.7" />
      <path d="M0 150 L60 96 L110 132 L160 84 L220 130 L300 92 L300 210 L0 210 Z" fill="#b29473" />
      <path d="M0 172 L70 124 L130 162 L190 116 L250 158 L300 128 L300 210 L0 210 Z" fill="#8d7052" />
      <path d="M0 196 L80 156 L150 188 L210 152 L300 184 L300 210 L0 210 Z" fill="#67503a" />
      <path d="M52 104 L60 96 L68 104 L62 110 Z M152 92 L160 84 L168 92 L160 99 Z" fill="#efe3cd" opacity="0.8" />
    </svg>
  );
}

function Paperclip({ className = '' }) {
  return (
    <svg viewBox="0 0 40 80" fill="none" className={className} aria-hidden>
      <path
        d="M28 12v44a8 8 0 0 1-16 0V16a5 5 0 0 1 10 0v38a2 2 0 0 1-4 0V18"
        stroke="#b3aa9b"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ---------- small building blocks ---------- */
function TechPill({ label }) {
  return (
    <span className="group inline-flex items-center gap-2 rounded-full border border-[rgba(42,38,34,0.12)] bg-[#f4eee2]/70 px-4 py-2 text-[13.5px] font-medium text-[#403a33] shadow-[0_2px_0_rgba(42,38,34,0.03)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d1f24] hover:bg-[#f6f1e8] hover:shadow-[0_8px_18px_-10px_rgba(125,31,36,.5)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[#7d1f24] transition-transform duration-300 group-hover:scale-125" />
      {label}
    </span>
  );
}

function Decor({ pos, float = 'none', rotate = 0, children, z = 3, className = '' }) {
  const floatClass =
    float === 'a' ? 'floaty' : float === 'b' ? 'floaty-slow' : float === 'c' ? 'floaty-x' : '';
  return (
    <div
      className={`pointer-events-none absolute hidden lg:block ${className}`}
      style={{ ...pos, zIndex: z }}
    >
      <div className={floatClass}>
        <div style={{ transform: `rotate(${rotate}deg)` }}>{children}</div>
      </div>
    </div>
  );
}

/* ---------- page ---------- */
const Hero = () => {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const isReduced = prefersReducedMotion ?? false;

  // First-visit vs return-visit detection
  const [isFirstVisit, setIsFirstVisit] = React.useState(
    () => !sessionStorage.getItem('heroVisited'),
  );
  React.useEffect(() => {
    sessionStorage.setItem('heroVisited', 'true');
    // Mark as "no longer first visit" after animation completes
    const t = setTimeout(() => setIsFirstVisit(false), 2000);
    return () => clearTimeout(t);
  }, []);

  const nav = ['About', 'Skills', 'Work', 'Services', 'Journey', 'Contact'];
  const techTop = ['React', 'Node.js', 'Express', 'Python', 'MongoDB', 'MySQL'];
  const techBottom = ['TailwindCSS', 'Linux', 'Git'];

  const routeMap = {
    About: '/about',
    Skills: '/skills',
    Work: '/work',
    Services: '/services',
    Journey: '/journey',
    Contact: '/contact',
  };

  return (
    <section id="hero" className="ff-sans relative flex min-h-screen w-full flex-col overflow-hidden px-4 pb-28 pt-6 text-[#2a2622]">
      {/* ---- faint desk markings ---- */}
      <div className="pointer-events-none absolute inset-0 z-[1] hidden lg:block">
        <div className="absolute right-[14%] top-[16%] h-[230px] w-[230px] rounded-full border border-[rgba(42,38,34,0.06)]" />
        <div className="absolute right-[6%] top-[22%] h-[120px] w-[120px] rounded-full border border-[rgba(42,38,34,0.05)]" />
        <div className="absolute bottom-[8%] left-[12%] h-[200px] w-[200px] rounded-full border border-[rgba(42,38,34,0.05)]" />
        <div className="dotted absolute left-[19%] top-[17%] h-[70px] w-[70px] opacity-70" />
        <div className="dotted absolute right-[10%] top-[57%] h-[60px] w-[60px] opacity-70" />
        {/* left vertical marker */}
        <div className="absolute left-[1.8%] top-[23%] flex flex-col items-center">
          <span className="ff-mono text-[11px] tracking-widest text-[#a59c8e]">01</span>
          <span className="mt-2 h-[150px] w-px bg-[rgba(42,38,34,0.18)]" />
          <span className="-mt-1 h-2 w-2 rounded-full bg-[#7d1f24]" />
        </div>
        {/* right vertical dots */}
        <div className="absolute right-[0.7%] top-[40%] flex flex-col items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(42,38,34,0.25)]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(42,38,34,0.25)]" />
          <span className="h-2 w-2 rounded-full bg-[#7d1f24]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[rgba(42,38,34,0.25)]" />
        </div>
        <span className="ff-mono absolute bottom-[3%] left-[1.6%] text-[13px] text-[#a59c8e]">//</span>
      </div>

      {/* ---- flat-lay objects ---- */}
      <Decor pos={{ top: -26, left: -24, width: 300, height: 270 }} float="c" className="sway-wrap">
        <div className="sway h-full w-full">
          <LeafBranch />
        </div>
      </Decor>

      <Decor pos={{ top: -28, right: -22 }} float="b">
        <CoffeeCup />
      </Decor>

      {/* Build / Solve / Elevate note */}
      <Decor pos={{ top: '13%', left: '5%' }} rotate={-4} float="a">
        <div className="relative">
          <div
            className="absolute -top-2 left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #fbf7ef, #cfc6b5)',
              boxShadow: '0 3px 5px rgba(60,40,30,.4)',
            }}
          />
          <div
            className="flex h-[120px] w-[120px] flex-col justify-center gap-1 bg-[#f1ead9] px-5 text-[13px] leading-tight text-[#6f675c]"
            style={{ boxShadow: '0 16px 26px -14px rgba(60,40,30,.45)' }}
          >
            <span>Build</span>
            <span>Solve</span>
            <span>Elevate</span>
            <span className="mt-1 h-[2px] w-7 bg-[#7d1f24]" />
          </div>
        </div>
      </Decor>

      {/* Focus / Code / Ship note */}
      <Decor pos={{ top: '37%', right: '5.5%' }} rotate={3} float="a">
        <div
          className="ff-mono flex h-[110px] w-[120px] flex-col justify-center gap-1 bg-[#f1ead9] px-5 text-[12px] leading-tight text-[#8a8175]"
          style={{ boxShadow: '0 16px 26px -14px rgba(60,40,30,.45)' }}
        >
          <span>// Focus</span>
          <span>// Code</span>
          <span>// Ship</span>
          <span className="mt-1 h-[2px] w-7 bg-[#7d1f24]" />
        </div>
      </Decor>

      {/* notebook + pen */}
      <Decor pos={{ bottom: -54, left: -34 }} rotate={-5}>
        <div className="relative">
          <Notebook />
          <div className="absolute left-[58%] top-[14%] rotate-[24deg]">
            <Pen />
          </div>
        </div>
      </Decor>

      {/* polaroid + quote paper */}
      <Decor pos={{ bottom: '2%', right: '2.5%' }} float="b">
        <div className="relative h-[300px] w-[330px]">
          {/* quote paper behind */}
          <div
            className="absolute bottom-0 right-2 h-[150px] w-[250px] -rotate-2 bg-[#f1ead9] px-6 py-6"
            style={{ boxShadow: '0 18px 30px -16px rgba(60,40,30,.45)' }}
          >
            <p className="text-[15px] leading-snug text-[#5a5249]">
              Good code is
              <br />
              not written,
              <br />
              it&rsquo;s crafted.
            </p>
            <span className="mt-3 block h-[2px] w-8 bg-[#7d1f24]" />
            <Paperclip className="absolute -bottom-3 right-6 h-[58px] w-[30px] rotate-[18deg]" />
          </div>
          {/* polaroid */}
          <div
            className="absolute right-0 top-0 w-[200px] rotate-[7deg] bg-[#fbf8f1] p-3 pb-9 transition-transform duration-500 hover:rotate-[3deg]"
            style={{ boxShadow: '0 20px 32px -16px rgba(60,40,30,.5)' }}
          >
            <div className="h-[130px] w-full overflow-hidden">
              <MountainPhoto />
            </div>
            <div className="absolute -left-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#7d1f24] text-[15px] font-bold text-[#f6f1e8] shadow-[0_6px_12px_-4px_rgba(125,31,36,.7)]">
              D
            </div>
          </div>
        </div>
      </Decor>

      {/* ===================== NAV ===================== */}
      <header className="reveal relative z-10 mx-auto w-[94%] max-w-[1120px]" style={{ animationDelay: '0.05s' }}>
        <nav
          className="flex items-center justify-between rounded-[20px] bg-[#f6f1e8]/95 px-4 py-3 backdrop-blur-sm sm:px-6"
          style={{ boxShadow: '0 18px 40px -22px rgba(60,40,30,.5), inset 0 0 0 1px rgba(255,255,255,.5)' }}
        >
          <Link to="/" className="flex items-center gap-2 pl-1">
            <span className="inline-block h-3 w-3 rotate-45 bg-[#7d1f24]" />
            <span className="text-[19px] font-bold tracking-wide text-[#7d1f24]">DEV</span>
          </Link>
          <ul className="hidden items-center gap-7 text-[14.5px] font-medium text-[#4a443c] md:flex">
            {nav.map((n) => (
              <li key={n}>
                <Link to={routeMap[n]} className="group relative inline-block py-1 transition-colors hover:text-[#7d1f24]">
                  {n}
                  <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-[#7d1f24] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#7d1f24] px-4 py-2.5 text-[13.5px] font-semibold text-[#f6f1e8] shadow-[0_10px_20px_-10px_rgba(125,31,36,.9)] transition-all duration-200 hover:bg-[#67191d] hover:shadow-[0_14px_24px_-10px_rgba(125,31,36,1)]"
          >
            Let&rsquo;s Connect
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </nav>
      </header>

      {/* ===================== HERO ===================== */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center py-10 text-center">
        {/* availability */}
        <div
          className="reveal inline-flex items-center gap-2 rounded-full border border-[rgba(42,38,34,0.12)] bg-[#f4eee2]/70 px-4 py-1.5 text-[13px] font-medium text-[#4a443c]"
          style={{ animationDelay: '0.12s' }}
        >
          <span className="pulse-dot h-2 w-2 rounded-full bg-[#2e9c54]" />
          Available for new projects
        </div>

        {/* hello label */}
        <div className="reveal mt-9 flex items-center gap-3" style={{ animationDelay: '0.18s' }}>
          <span className="ff-mono text-[12px] text-[#a59c8e]">01</span>
          <span className="h-px w-8 bg-[rgba(42,38,34,0.3)]" />
          <div className="flex flex-col items-center">
            <span className="text-[13px] font-semibold tracking-[0.34em] text-[#2a2622]">
              HELLO, I&rsquo;M
            </span>
            <span className="mt-2 h-[3px] w-12 rounded-full bg-[#7d1f24]" />
          </div>
        </div>

        {/* name */}
        <div className="relative isolate mt-5">
          <span
            aria-hidden
            className="watermark pointer-events-none absolute left-[-3%] top-1/2 -z-10 -translate-y-1/2 select-none font-black leading-none"
            style={{ fontSize: 'clamp(9rem,23vw,23rem)' }}
          >
            D
          </span>
          <span
            aria-hidden
            className="watermark pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 select-none font-black leading-none"
            style={{ fontSize: 'clamp(9rem,23vw,23rem)' }}
          >
            A
          </span>
          <span
            aria-hidden
            className="watermark pointer-events-none absolute right-[-3%] top-1/2 -z-10 -translate-y-1/2 select-none font-black leading-none"
            style={{ fontSize: 'clamp(9rem,23vw,23rem)' }}
          >
            S
          </span>
          <motion.h1
            className="relative z-10 font-black leading-[0.95] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(3rem,9.4vw,8.6rem)', caretColor: 'transparent' }}
            aria-label="Dev Anand S"
          >
            <motion.span
              className="text-[#7d1f24]"
              initial={{ opacity: 0, y: isFirstVisit && !isReduced ? 18 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstVisit && !isReduced
                ? { duration: 1, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.4 }
              }
            >D</motion.span>
            <motion.span
              initial={{ opacity: 0, y: isFirstVisit && !isReduced ? 18 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstVisit && !isReduced
                ? { duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.4 }
              }
            >ev</motion.span>{' '}
            <motion.span
              className="text-[#7d1f24]"
              initial={{ opacity: 0, y: isFirstVisit && !isReduced ? 18 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstVisit && !isReduced
                ? { duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.4 }
              }
            >A</motion.span>
            <motion.span
              initial={{ opacity: 0, y: isFirstVisit && !isReduced ? 18 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstVisit && !isReduced
                ? { duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.4 }
              }
            >nand</motion.span>{' '}
            <motion.span
              className="text-[#7d1f24]"
              initial={{ opacity: 0, y: isFirstVisit && !isReduced ? 18 : 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isFirstVisit && !isReduced
                ? { duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
                : { duration: 0.4 }
              }
            >S</motion.span>
          </motion.h1>
        </div>

        {/* divider */}
        <div className="reveal mt-6 flex w-full max-w-[440px] items-center gap-3" style={{ animationDelay: '0.3s' }}>
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[rgba(42,38,34,0.28)]" />
          <span className="h-2 w-2 rounded-full bg-[#7d1f24]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[rgba(42,38,34,0.28)]" />
        </div>

        {/* role */}
        <p
          className="reveal ff-mono mt-6 flex items-center gap-3 font-medium text-[#2a2622]"
          style={{ animationDelay: '0.36s', fontSize: 'clamp(1.05rem,2.5vw,1.9rem)' }}
        >
          <span className="text-[#7d1f24]">&lt;</span>
          Full Stack Developer
          <span className="text-[#7d1f24]">/&gt;</span>
        </p>

        {/* location */}
        <div
          className="reveal mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[14.5px] text-[#4a443c]"
          style={{ animationDelay: '0.42s' }}
        >
          <span className="inline-flex items-center gap-1.5">
            <PinIcon className="h-4 w-4 text-[#7d1f24]" />
            Coimbatore, India
          </span>
          <span className="h-4 w-px bg-[rgba(42,38,34,0.25)]" />
          <span className="inline-flex items-center gap-1.5">
            <GlobeIcon className="h-4 w-4 text-[#8a8175]" />
            Open to Remote
          </span>
        </div>

        {/* CTAs */}
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '0.48s' }}>
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#7d1f24] px-7 py-3.5 text-[15px] font-semibold text-[#f6f1e8] shadow-[0_14px_26px_-12px_rgba(125,31,36,.95)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-[#67191d] hover:shadow-[0_20px_32px_-12px_rgba(125,31,36,1)]"
          >
            Explore Projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-xl border border-[rgba(42,38,34,0.18)] bg-[#f4eee2]/50 px-7 py-3.5 text-[15px] font-semibold text-[#2a2622] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7d1f24]/60 hover:bg-[rgba(122,46,58,0.04)]"
          >
            Let&rsquo;s Connect
          </Link>
        </div>

        {/* tech pills */}
        <div className="reveal mt-10 flex flex-col items-center gap-3" style={{ animationDelay: '0.54s' }}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techTop.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techBottom.map((t) => (
              <TechPill key={t} label={t} />
            ))}
          </div>
        </div>
      </main>

    </section>
  );
};

export default Hero;

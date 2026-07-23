import React, { useState, Suspense, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

import LoadingScreen  from './components/ui/LoadingScreen';
import CommandPalette from './components/ui/CommandPalette';
import EasterEgg      from './components/ui/EasterEgg';

import { updateMeta, injectJsonLd, getPageMeta } from './utils/seo';

const HomePage     = React.lazy(() => import('./pages/HomePage'));
const AboutPage    = React.lazy(() => import('./pages/AboutPage'));
const SkillsPage   = React.lazy(() => import('./pages/SkillsPage'));
const WorkPage     = React.lazy(() => import('./pages/WorkPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const JourneyPage  = React.lazy(() => import('./pages/JourneyPage'));
const ContactPage  = React.lazy(() => import('./pages/ContactPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

const pageRoutes = [
  { path: '/',          name: 'Home',     Component: HomePage },
  { path: '/about',     name: 'About',    Component: AboutPage },
  { path: '/skills',    name: 'Skills',   Component: SkillsPage },
  { path: '/work',      name: 'Work',     Component: WorkPage },
  { path: '/services',  name: 'Services', Component: ServicesPage },
  { path: '/journey',   name: 'Journey',  Component: JourneyPage },
  { path: '/contact',   name: 'Contact',  Component: ContactPage },
  /* 404 — keep last */
];

const pageOrder = pageRoutes.map((r) => r.path);

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const [cmdOpen, setCmdOpen] = useState(false);
  const [eggVisible, setEggVisible] = useState(false);
  const [eggBuffer, setEggBuffer] = useState('');

  const isReduced = prefersReducedMotion ?? false;
  const transition = isReduced
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

  /* ---------- scroll restoration ---------- */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  /* ---------- dynamic browser title + meta tags per route ---------- */
  useEffect(() => {
    const meta = getPageMeta(location.pathname);
    updateMeta(meta);
  }, [location.pathname]);

  /* ---------- inject JSON-LD structured data once ---------- */
  useEffect(() => {
    if (document.getElementById('json-ld-seo')) return;
    const marker = document.createElement('div');
    marker.id = 'json-ld-seo';
    marker.style.display = 'none';
    document.head.appendChild(marker);
    injectJsonLd();
  }, []);

  /* ---------- Ctrl+K / Cmd+K → toggle command palette ---------- */
  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  /* ---------- Easter egg — type "dev" or "sudo" anywhere ---------- */
  useEffect(() => {
    const handler = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      setEggBuffer((prev) => {
        const next = (prev + e.key).toLowerCase();
        if (next.includes('dev') || next.includes('sudo')) {
          setEggVisible(true);
          return '';
        }
        return next.slice(-6);
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  /* ---------- keyboard navigation (left/right arrows) ---------- */
  const handleKeyDown = useCallback(
    (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const idx = pageOrder.indexOf(location.pathname);
      if (e.key === 'ArrowRight' && idx >= 0 && idx < pageOrder.length - 1) {
        e.preventDefault();
        navigate(pageOrder[idx + 1]);
      } else if (e.key === 'ArrowLeft' && idx > 0) {
        e.preventDefault();
        navigate(pageOrder[idx - 1]);
      } else if (e.key === 'Escape') {
        document.activeElement?.blur();
      }
    },
    [location.pathname, navigate],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const is404 = !pageRoutes.find((r) => r.path === location.pathname);
  const pageName = is404 ? 'Not Found' : pageRoutes.find((r) => r.path === location.pathname)?.name ?? 'Page';

  return (
    <>
      {/* Screen-reader route announcement */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {pageName} loaded
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, x: isReduced ? 0 : 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isReduced ? 0 : -15 }}
          transition={transition}
        >
          <Routes location={location}>
            {pageRoutes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
      <EasterEgg visible={eggVisible} onClose={() => setEggVisible(false)} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen>
        <Suspense
          fallback={
            <div
              className="flex min-h-screen items-center justify-center bg-[#F7F4EE]"
              aria-label="Loading page"
            >
              <div
                className="h-8 w-8 animate-spin rounded-full border-2 border-[#7d1f24] border-t-transparent"
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          }
        >
          <AnimatedRoutes />
        </Suspense>
      </LoadingScreen>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const ringRef = useRef(null);
  const diamondRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const isFine = window.matchMedia('(pointer:fine)').matches;
    if (!isFine) return;
    document.body.style.cursor = 'none';

    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let dx = 0, dy = 0;
    let raf = null;
    let isOnInput = false;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const isInteractable = (el) => {
      if (!el || el === document.body || el === document.documentElement) return false;
      const tag = el.tagName;
      if (tag === 'A' || tag === 'BUTTON') return true;
      if (el.closest('a') || el.closest('button')) return true;
      return isInteractable(el.parentElement);
    };

    const isTextInput = (el) => {
      if (!el) return false;
      const tag = el.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
      if (el.getAttribute('contenteditable') === 'true') return true;
      return false;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      const ring = ringRef.current;
      const diamond = diamondRef.current;
      if (!ring || !diamond) return;

      if (isTextInput(target) || isTextInput(target.closest('input') || target.closest('textarea'))) {
        isOnInput = true;
        ring.style.opacity = '0';
        diamond.style.opacity = '0';
        document.body.style.cursor = 'text';
        return;
      }

      if (isOnInput) {
        isOnInput = false;
        ring.style.opacity = '1';
        diamond.style.opacity = '1';
        document.body.style.cursor = 'none';
      }

      if (isInteractable(target)) {
        ring.style.width = '30px';
        ring.style.height = '30px';
        ring.style.margin = '-15px 0 0 -15px';
        ring.style.borderColor = '#7d1f24';
        diamond.style.transform = 'translate(-50%, -50%) rotate(90deg)';
        diamond.style.backgroundColor = '#7d1f24';
      } else {
        ring.style.width = '18px';
        ring.style.height = '18px';
        ring.style.margin = '-9px 0 0 -9px';
        ring.style.borderColor = 'rgba(122, 46, 58, 0.25)';
        diamond.style.transform = 'translate(-50%, -50%) rotate(45deg)';
        diamond.style.backgroundColor = '#7A2E3A';
      }
    };

    let clickTimer = null;

    const onMouseDown = () => {
      const ripple = rippleRef.current;
      if (!ripple) return;
      ripple.style.transform = 'translate(-50%, -50%) scale(1)';
      ripple.style.opacity = '0.35';
      if (clickTimer) clearTimeout(clickTimer);
      clickTimer = setTimeout(() => {
        if (rippleRef.current) {
          rippleRef.current.style.transform = 'translate(-50%, -50%) scale(0)';
          rippleRef.current.style.opacity = '0';
        }
      }, 350);
    };

    const animate = () => {
      // Diamond — snappy, follows mouse closely
      dx += (mx - dx) * 0.22;
      dy += (my - dy) * 0.22;
      // Ring — more inertia, trails behind
      rx += (mx - rx) * 0.09;
      ry += (my - ry) * 0.09;

      if (diamondRef.current) {
        diamondRef.current.style.left = `${dx}px`;
        diamondRef.current.style.top = `${dy}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`;
        ringRef.current.style.top = `${ry}px`;
      }
      if (rippleRef.current) {
        rippleRef.current.style.left = `${dx}px`;
        rippleRef.current.style.top = `${dy}px`;
      }

      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mousedown', onMouseDown);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mousedown', onMouseDown);
      if (raf) cancelAnimationFrame(raf);
      if (clickTimer) clearTimeout(clickTimer);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        style={{
          width: '18px',
          height: '18px',
          margin: '-9px 0 0 -9px',
          border: '1.5px solid rgba(122,46,58,0.25)',
          willChange: 'transform, left, top, width, height',
          transition:
            'width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), margin 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
        }}
        aria-hidden="true"
      />
      <div
        ref={diamondRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#7A2E3A',
          transform: 'translate(-50%, -50%) rotate(45deg)',
          willChange: 'transform, left, top, background-color',
          transition:
            'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease',
        }}
        aria-hidden="true"
      />
      <div
        ref={rippleRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] rounded-full"
        style={{
          width: '24px',
          height: '24px',
          margin: '-12px 0 0 -12px',
          border: '1.5px solid rgba(122,46,58,0.3)',
          transform: 'translate(-50%, -50%) scale(0)',
          opacity: '0',
          willChange: 'transform, opacity',
          transition:
            'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease',
        }}
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;

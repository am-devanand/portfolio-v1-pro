import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only show on devices with fine pointer (mouse, not touch)
    const isFinePointer = window.matchMedia('(pointer:fine)').matches;
    if (!isFinePointer) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let rafId = null;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (!cursorRef.current) return;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        cursorRef.current.style.width = '24px';
        cursorRef.current.style.height = '24px';
        cursorRef.current.style.backgroundColor = 'rgba(122, 46, 58, 0.12)';
        cursorRef.current.style.borderColor = 'rgba(122, 46, 58, 0.25)';
        cursorRef.current.style.margin = '-12px 0 0 -12px';
      } else {
        cursorRef.current.style.width = '8px';
        cursorRef.current.style.height = '8px';
        cursorRef.current.style.backgroundColor = 'rgba(122, 46, 58, 0.25)';
        cursorRef.current.style.borderColor = 'transparent';
        cursorRef.current.style.margin = '-4px 0 0 -4px';
      }
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full border transition-[width,height,background-color,border-color,margin] duration-150"
      style={{
        width: '8px',
        height: '8px',
        margin: '-4px 0 0 -4px',
        backgroundColor: 'rgba(122, 46, 58, 0.25)',
        borderColor: 'transparent',
        borderWidth: '1.5px',
        transform: 'translate(0, 0)',
        willChange: 'transform, width, height',
      }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const responses = {
  help: `Available commands:
  help     — Show this message
  whoami   — Who is this?
  ls       — List directory
  date     — Current date & time
  clear    — Clear terminal
  neofetch — System info`,
  whoami: 'Dev Anand S — Full Stack Developer',
  ls: 'about/  projects/  contact/  resume.pdf',
  date: () =>
    new Date().toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }),
  clear: 'CLEAR',
  sudo: 'Nice try. 😄',
  neofetch: `
  ██████████████████  dev@portfolio
  ██████████████████  ------------
  ██████████████████  OS:      Ubuntu 24.04
  ██████████████████  Shell:   zsh 5.9
  ██████████████████  Editor:  Cursor
  ██████████████████  Role:    Full Stack Developer
  ██████████████████  Stack:   React · Node.js · Python`,
};

/**
 * Tiny terminal easter egg — triggered globally by App.jsx via visible prop.
 */
const EasterEgg = ({ visible, onClose }) => {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState([
    {
      text: 'Welcome to DEV terminal. Type "help" for commands.',
      isOutput: true,
    },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setInput('');
      setLines([
        {
          text: 'Welcome to DEV terminal. Type "help" for commands.',
          isOutput: true,
        },
      ]);
    }
  }, [visible]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  const handleCommand = useCallback((cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    setLines((prev) => [...prev, { text: `$ ${cmd}`, isOutput: false }]);

    if (trimmed === 'clear') {
      setLines([]);
      return;
    }

    const handler = responses[trimmed];
    if (handler) {
      const text = typeof handler === 'function' ? handler() : handler;
      setLines((prev) => [...prev, { text, isOutput: true }]);
    } else {
      setLines((prev) => [
        ...prev,
        { text: `command not found: ${trimmed}`, isOutput: true },
      ]);
    }
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[300] w-[360px] max-w-[calc(100vw-2rem)] rounded-xl overflow-hidden shadow-2xl"
          style={{
            background: 'rgba(30, 27, 24, 0.95)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.08)',
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
          }}
        >
          {/* Header bar */}
          <div
            className="flex items-center justify-between px-3 py-2"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          >
            <span className="text-xs" style={{ color: '#8A8178' }}>
              DEV Terminal
            </span>
            <button
              onClick={onClose}
              className="text-xs px-1.5 py-0.5 rounded cursor-pointer transition-colors"
              style={{
                color: '#8A8178',
                background: 'rgba(255,255,255,0.06)',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')
              }
            >
              ✕
            </button>
          </div>

          {/* Terminal output */}
          <div className="p-3 h-48 overflow-y-auto text-xs leading-relaxed">
            {lines.map((line, i) => (
              <div
                key={i}
                className={line.isOutput ? 'mb-1' : 'mb-0.5'}
                style={{ color: line.isOutput ? '#A8A29E' : '#E4DDD4' }}
              >
                {line.text.split('\n').map((l, j) => (
                  <div key={j}>{l}</div>
                ))}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input line */}
          <div className="flex items-center gap-1.5 px-3 pb-3">
            <span style={{ color: '#7d1f24' }}>$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-xs outline-none"
              style={{
                color: '#E4DDD4',
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              }}
              placeholder="type a command..."
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EasterEgg;

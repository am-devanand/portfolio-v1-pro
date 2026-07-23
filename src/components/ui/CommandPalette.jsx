import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const commands = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'Journey', to: '/journey' },
  { label: 'Contact', to: '/contact' },
  { label: 'GitHub', to: 'https://github.com/am-devanand' },
  { label: 'LinkedIn', to: 'https://linkedin.com/in/dev-anand-ba846a359' },
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  const execute = useCallback(
    (cmd) => {
      onClose();
      if (cmd.to.startsWith('http')) {
        window.open(cmd.to, '_blank', 'noopener,noreferrer');
      } else {
        navigate(cmd.to);
      }
    },
    [navigate, onClose],
  );

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(
        (i) => (i - 1 + filtered.length) % filtered.length,
      );
    } else if (e.key === 'Enter' && filtered[selectedIndex]) {
      execute(filtered[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh] px-4"
          onClick={onClose}
          style={{
            background: 'rgba(47, 42, 38, 0.3)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: '#FCFBF8',
              border: '1px solid rgba(47, 42, 38, 0.08)',
            }}
          >
            {/* Search input */}
            <div
              className="flex items-center gap-3 px-4 py-3.5 border-b"
              style={{ borderColor: 'rgba(47, 42, 38, 0.06)' }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8A8178"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Search pages..."
                className="flex-1 bg-transparent text-base outline-none placeholder:text-[#8A8178]"
                style={{ color: '#2F2A26' }}
              />
              <kbd
                className="hidden sm:inline-flex text-[11px] px-1.5 py-0.5 rounded"
                style={{
                  color: '#8A8178',
                  background: 'rgba(47, 42, 38, 0.05)',
                }}
              >
                ESC
              </kbd>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto py-2">
              {filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  onClick={() => execute(cmd)}
                  onMouseEnter={() => setSelectedIndex(i)}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors cursor-pointer"
                  style={{
                    color: '#2F2A26',
                    background:
                      i === selectedIndex
                        ? 'rgba(122, 46, 58, 0.08)'
                        : 'transparent',
                  }}
                >
                  <span
                    className="w-6 h-6 flex items-center justify-center rounded-md text-xs font-medium"
                    style={{
                      background: 'rgba(122, 46, 58, 0.08)',
                      color: '#7A2E3A',
                    }}
                  >
                    {cmd.label[0]}
                  </span>
                  <span>{cmd.label}</span>
                  {cmd.to.startsWith('http') && (
                    <span className="ml-auto text-xs" style={{ color: '#8A8178' }}>
                      ↗
                    </span>
                  )}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="text-sm text-center py-6" style={{ color: '#8A8178' }}>
                  No results found.
                </p>
              )}
            </div>

            {/* Footer hints */}
            <div
              className="flex items-center gap-4 px-4 py-2.5 border-t text-xs"
              style={{
                borderColor: 'rgba(47, 42, 38, 0.06)',
                color: '#8A8178',
              }}
            >
              <span>↑↓ Navigate</span>
              <span>↵ Open</span>
              <span>ESC Close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;

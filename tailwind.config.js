/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F7F4EE",
        surface: "#FCFBF8",
        primary: "#2F2A26",
        secondary: "#5B524A",
        muted: "#8A8178",
        border: "rgba(47, 42, 38, 0.08)",
        accent: "#7A2E3A",
        "accent-secondary": "#6A2634",
        "accent-dark": "#5B1F2B",
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '10': '40px',
        '14': '56px',
        '16': '64px',
        '24': '96px',
        '40': '160px',
      },
      borderRadius: {
        '20': '20px',
      },
      boxShadow: {
        'editorial': '0 16px 40px rgba(0,0,0,.08)',
        'editorial-hover': '0 22px 48px rgba(0,0,0,.10)',
        'btn-glow': '0 18px 40px rgba(122,46,58,.22)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}

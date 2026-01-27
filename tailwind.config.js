/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0d1117", // GitHub dark bg
        secondary: "#161b22", // GitHub secondary bg
        accent: "#58a6ff", // GitHub link blue
        text: "#c9d1d9", // GitHub text
        muted: "#8b949e", // GitHub muted text
        border: "#30363d", // GitHub border
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

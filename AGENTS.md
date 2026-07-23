# Portfolio — AGENTS.md

## OVERVIEW
Personal portfolio for DEV, a software engineer. React 19 + Vite + Tailwind CSS 4 + Framer Motion 12.

## STRUCTURE
```
src/
├── main.jsx              # Entry point, mounts <App/>
├── App.jsx               # Root layout, composes all sections
├── index.css             # Tailwind base + custom CSS variables
├── assets/               # Static assets
├── components/
│   ├── Navbar.jsx        # Top nav, glassmorphism on scroll
│   └── ui/               # Reusable primitives
│       ├── AnimatedText.jsx
│       ├── Badge.jsx
│       ├── Card.jsx
│       ├── GradientButton.jsx
│       ├── ScrollIndicator.jsx
│       ├── SectionWrapper.jsx
│       └── SpotlightBackground.jsx
└── sections/
    ├── Hero.jsx          # Hero with spotlight + aurora
    ├── WhoIsDEV.jsx      # Bio / intro
    ├── Philosophy.jsx    # Dev philosophy
    ├── Timeline.jsx      # Career timeline
    ├── Highlights.jsx    # Key achievements
    ├── TechStack.jsx     # Skills / tech
    ├── SelectedWork.jsx  # Project showcase
    ├── GitHubShowcase.jsx# GitHub activity
    ├── Services.jsx      # Services offered
    └── Contact.jsx       # Contact form / links
```

## WHERE TO LOOK

| Task | File(s) |
|------|---------|
| Add/remove section | `src/App.jsx` + `src/sections/` |
| Visual style / theme | `src/index.css` + `tailwind.config.js` + `DESIGN.md` |
| New UI component | `src/components/ui/` |
| Navigation / header | `src/components/Navbar.jsx` |
| Animations | `framer-motion` props in individual files |
| Fonts / colors / tokens | `src/index.css` CSS variables |
| Build config | `vite.config.js`, `postcss.config.js` |

## COMMANDS

```
npm run dev       # Start dev server (Vite)
npm run build     # Production build → dist/
npm run preview   # Preview production build
npm run lint      # ESLint check
```

## NOTES

- Design system defined in `DESIGN.md` — read it before any visual work
- Color tokens are CSS custom properties in `index.css`, not Tailwind classes
- Whole site is one continuous canvas (no section dividers)
- Background layers: dark gradient + 3 aurora glows + grid + noise + cursor spotlight
- Animations: Framer Motion, 0.5-0.8s, easing `[0.16, 1, 0.3, 1]`, stagger 0.1s
- Cards use glassmorphism (`backdrop-filter: blur`), not solid fills
- Respect `prefers-reduced-motion`

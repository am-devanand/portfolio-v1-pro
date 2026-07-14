# DEV — Design System

## 1. Brand Identity

**DEV** is a personal brand for a software engineer. Not a portfolio — a brand.

The website should feel like the official site of a confident, minimal, and thoughtful engineer. Every design decision communicates: "This person understands product design."

### Brand Personality
- Confident
- Minimal
- Professional
- Thoughtful
- Calm
- Intelligent
- Modern
- Elegant
- Engineering-first
- Design-conscious

### Design Inspiration
Apple · Linear · Stripe · Notion · Raycast · Vercel · GitHub

---

## 2. Color System

### Midnight Blue Palette

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Surface/primary | `--surface-primary` | `#0F172A` | Main background (top gradient) |
| Surface/secondary | `--surface-secondary` | `#111827` | Mid gradient |
| Surface/card | `--surface-card` | `rgba(24, 34, 53, 0.75)` | Cards, glass panels |
| Surface/elevated | `--surface-elevated` | `#1E293B` | Bottom gradient, elevated surfaces |
| Text/primary | `--text-primary` | `#F8FAFC` | Headlines, body |
| Text/secondary | `--text-secondary` | `#94A3B8` | Descriptions, metadata |
| Text/tertiary | `--text-tertiary` | `#64748B` | Disabled, muted |
| Accent/blue | `--accent-blue` | `#4F8CFF` | Primary accent |
| Accent/purple | `--accent-purple` | `#7C5CFF` | Secondary accent |
| Accent/pink | `--accent-pink` | `#EC4899` | Tertiary accent |
| Status/success | `--status-success` | `#22C55E` | Availability, success |

### Rules
- NO BLACK anywhere in the main background
- Accent gradient: `linear-gradient(135deg, #4F8CFF, #7C5CFF, #EC4899)`
- Card backgrounds use glass morphism, not solid colors
- Border default: `rgba(255, 255, 255, 0.06)`

---

## 3. Typography

- **Headings**: Space Grotesk (500, 600, 700)
- **Body**: Inter (300, 400, 500, 600, 700)
- **Mono**: JetBrains Mono (400, 500)

### Hierarchy
- Hero title: 6rem+ (mobile: 3.5rem)
- Section titles: 3rem (mobile: 2rem)
- Card titles: 1.25rem
- Body: 1rem
- Caption: 0.75rem

---

## 4. Background

The entire website is one continuous canvas — no section separations.

### Layers (back to front)
1. Midnight blue gradient (`#0F172A` → `#111827` → `#1E293B`)
2. Blue aurora glow (top-left, `rgba(79,140,255,0.22)`)
3. Purple aurora glow (hero area, `rgba(124,92,255,0.18)`)
4. Pink aurora glow (bottom-right, `rgba(236,72,153,0.12)`)
5. Subtle grid (`rgba(255,255,255,0.05)`)
6. Noise texture (2.5% opacity)
7. Cursor spotlight (`rgba(79,140,255,0.08)`)

---

## 5. Components

### Cards
- Glass morphism: `rgba(24, 34, 53, 0.75)` + `backdrop-filter: blur`
- Border: `rgba(255, 255, 255, 0.06)`
- Hover: lift 4px + border glow + subtle shadow

### Buttons
- Primary: gradient background + glow hover
- Secondary: border only + hover background
- Ghost: text only + hover background

### Navigation
- Glassmorphism when scrolled
- Center-aligned links
- CTA button right

---

## 6. Motion

- Framer Motion for all animations
- Duration: 0.5–0.8s
- Easing: `[0.16, 1, 0.3, 1]` (Apple-like)
- Stagger children: 0.1s delay
- No bouncing, no excessive motion
- Respect `prefers-reduced-motion`

---

## 7. Accessibility

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus visible states
- Semantic HTML
- Color contrast: minimum 4.5:1 for text

# Dev Anand S — Portfolio Design System

## 1. Atmosphere & Identity

A dark, premium digital showcase. Tech-infused elegance with a human center. The signature is **luminous depth** — content emerges from darkness through subtle gradients, glass surfaces, and controlled light. Like a developer's workspace at midnight: focused, layered, precise.

Dark backgrounds absorb the edges; gradients, glows, and glassmorphism panels create the focal hierarchy. Every interaction feels considered but never loud. The site breathes with slow, deliberate animations that communicate professionalism without distraction.

---

## 2. Color

### Palette

| Role | Token | Value | Usage |
|------|-------|-------|-------|
| Surface/primary | `--surface-primary` | `#09090B` | Main page background |
| Surface/secondary | `--surface-secondary` | `#111827` | Alternate section backgrounds |
| Surface/card | `--surface-card` | `#18181B` | Cards, panels, elevated surfaces |
| Surface/elevated | `--surface-elevated` | `#1F1F23` | Modals, popovers, hover states |
| Text/primary | `--text-primary` | `#FFFFFF` | Headlines, body, nav |
| Text/secondary | `--text-secondary` | `#A1A1AA` | Captions, descriptions, metadata |
| Text/tertiary | `--text-tertiary` | `#52525B` | Disabled, muted, timestamps |
| Border/default | `--border-default` | `rgba(255,255,255,0.08)` | Cards, dividers, outlines |
| Border/subtle | `--border-subtle` | `rgba(255,255,255,0.05)` | Soft separations |
| Border/hover | `--border-hover` | `rgba(255,255,255,0.12)` | Hover state borders |
| Accent/blue | `--accent-blue` | `#60A5FA` | Primary accent |
| Accent/purple | `--accent-purple` | `#8B5CF6` | Secondary accent |
| Accent/pink | `--accent-pink` | `#EC4899` | Tertiary accent |
| Gradient/primary | `--gradient-primary` | `linear-gradient(135deg, #60A5FA, #8B5CF6, #EC4899)` | Buttons, badges, highlights |
| Status/success | `--status-success` | `#22C55E` | Availability, confirmations |
| Glow/blue | `--glow-blue` | `rgba(96,165,250,0.15)` | Subtle glow effects |
| Glow/purple | `--glow-purple` | `rgba(139,92,246,0.15)` | Secondary glow |

### Rules
- Accent gradient used ONLY for primary CTAs, brand marks, and important decorative elements.
- Card backgrounds use tonal shift rather than shadows for elevation.
- Never introduce a color not in this table.

---

## 3. Typography

### Font Stack
- **Headings**: `Space Grotesk`, system-ui, sans-serif
- **Body**: `Inter`, system-ui, -apple-system, sans-serif
- **Mono**: `JetBrains Mono`, Fira Code, monospace

### Scale

| Level | Size | Weight | Line Height | Tracking | Font | Usage |
|-------|------|--------|-------------|----------|------|-------|
| Display | clamp(2.5rem, 5vw, 4.5rem) | 700 | 1.05 | -0.03em | Space Grotesk | Hero name |
| Display/Sm | clamp(2rem, 4vw, 3rem) | 700 | 1.1 | -0.02em | Space Grotesk | Section titles |
| H2 | clamp(1.5rem, 3vw, 2rem) | 600 | 1.2 | -0.015em | Space Grotesk | Subsection headers |
| H3 | 1.25rem | 600 | 1.3 | -0.01em | Space Grotesk | Card titles |
| Body/lg | 1.125rem | 400 | 1.6 | 0 | Inter | Lead paragraphs |
| Body | 1rem | 400 | 1.6 | 0 | Inter | Default text |
| Body/sm | 0.875rem | 400 | 1.5 | 0 | Inter | Secondary info |
| Caption | 0.75rem | 500 | 1.4 | 0.02em | Inter | Labels, metadata |
| Overline | 0.6875rem | 600 | 1.3 | 0.08em | Inter | Section labels, uppercase |
| Code | 0.875rem | 400 | 1.5 | 0 | JetBrains Mono | Code snippets |

### Rules
- Headings use Space Grotesk with negative tracking for compact authority.
- Body text never below 14px.
- Code/monospace elements use JetBrains Mono.

---

## 4. Spacing & Layout

### Base Unit
All spacing derives from a base of **4px**.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight: icon-to-label |
| `--space-2` | 8px | Compact: list items |
| `--space-3` | 12px | Default: form field padding |
| `--space-4` | 16px | Standard: card padding |
| `--space-5` | 20px | Comfortable |
| `--space-6` | 24px | Card padding default |
| `--space-8` | 32px | Between card groups |
| `--space-10` | 40px | Sections within a page |
| `--space-12` | 48px | Major section breaks |
| `--space-16` | 64px | Page-level vertical rhythm |
| `--space-20` | 80px | Hero spacing |
| `--space-24` | 96px | Maximum section separation |

### Grid
- Max content width: 1280px
- Section padding: py-24 (mobile: py-16)
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px

### Border Radius
- Cards: 16px–24px (rounded-2xl to rounded-3xl)
- Buttons: 9999px (full pill)
- Badges: 9999px (full pill)
- Small elements: 8px–12px

---

## 5. Components

### Button (Primary)
- **Structure**: `<button> <span>text</span> </button>`
- **Variants**: primary (gradient-bg), secondary (border-only), ghost
- **Spacing**: px-8 py-3.5, gap-2 for icons
- **States**:
  - Default: bg-gradient-to-r from-accent-blue to-purple-600, text-white
  - Hover: shadow-lg, shadow-accent-blue/25, translateY(-1px), glow
  - Active: scale-[0.98]
  - Focus: ring-2 ring-accent-blue/50
- **Accessibility**: focus-visible ring, aria-label
- **Motion**: 300ms ease-out on all transitions

### Card
- **Structure**: `<div> <content /> </div>`
- **Variants**: default, elevated, glass
- **Spacing**: p-6 to p-8
- **Border**: 1px solid var(--border-default)
- **Radius**: rounded-2xl (16px)
- **States**:
  - Default: bg-card border-border
  - Hover: border-accent-blue/30, shadow-xl, shadow-accent-blue/5, glow
- **Motion**: 400ms ease-out hover transition

### Section
- **Structure**: `<section> <max-width wrapper> <content /> </section>`
- **Spacing**: py-24 (mobile: py-16)
- **Max-width**: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- **Viewport animations**: fade-up on entry

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 150ms | ease-out | Button press, toggle |
| Standard | 300ms | ease-out | Panel open, tab switch |
| Emphasis | 500-700ms | cubic-bezier(0.16, 1, 0.3, 1) | Page transitions, hero entry |
| Scroll | 600-800ms | ease-out | Section reveals |

### Rules
- Animate only `transform` and `opacity`.
- Every interactive element has hover + active + focus states.
- Scroll-triggered animations use Framer Motion's `whileInView`.
- Reduced motion: respect `prefers-reduced-motion`.

### Background Animations
- Subtle animated grid (slow, elegant)
- Radial spotlight following cursor
- Soft gradient blobs
- Low opacity floating particles
- Noise texture overlay (fixed, pointer-events-none)

## 7. Depth & Surface

### Strategy
**Mixed**: Glassmorphism for navigation and overlays, tonal-shift for cards, soft shadows for elevated elements.

| Level | Treatment | Usage |
|-------|-----------|-------|
| Flat (0) | --surface-primary | Page background |
| Surface (1) | --surface-card, 1px --border-default | Cards, sections |
| Glass (2) | backdrop-blur-xl, bg-white/5, --border-default | Navbar, overlays |
| Elevated (3) | --surface-elevated, shadow-xl, glow | Modals, featured cards |
| Glow (accent) | box-shadow with accent color, 0 0 30px | CTA buttons, highlights |

- Glassmorphism: `bg-white/5 backdrop-blur-xl border border-white/10`
- Card shadows: `shadow-lg shadow-black/20` (tinted dark, never generic gray)
- Button glow: `shadow-[0_0_20px_rgba(96,165,250,0.3)]` on hover

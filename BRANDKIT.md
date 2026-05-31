# ApexRow — Brand Kit

> *Premium Digital Agency*

---

## 1. Brand Mark

### Wordmark
**Apex** (white) + **Row** (gradient-text: bronze → soft-white)

```
ApexRow
```

Always capitalize "A" and "R". No space between "Apex" and "Row".

### Icon Mark
Rounded square (6px radius) with brand gradient background, white bold "A" centered.

### Clear Space
Minimum clear space equal to the height of the "A" on all sides.

### Don'ts
- Do not stretch or distort the mark
- Do not change the colors
- Do not place on low-contrast backgrounds
- Do not add effects (shadows, outlines) unless specified

---

## 2. Color Palette

### Primary Colors

| Token | Hex | Usage |
|---|---|---|
| Deep Black | `#0a0a0a` | Page backgrounds, main canvas |
| Dark | `#121212` | Secondary backgrounds, cards, sections |
| Rich Brown | `#4a2c1a` | Dark accents, selection highlight, scrollbar thumb |
| Copper | `#b87333` | Primary metallic accent |
| Bronze | `#cd7f32` | Highlights, hover glow, interactive states |
| Soft White | `#f5f0eb` | Primary text on dark backgrounds |
| Warm Gray | `#a89f94` | Muted/secondary text, captions |

### Gradients

| Name | Direction | Stops |
|---|---|---|
| gradient-bg | left → right | Rich Brown → Copper → Bronze |
| gradient-text | left → right | Bronze → Soft White |
| icon-gradient | top-left → bottom-right | Rich Brown → Copper → Bronze |

### Application
- **Primary background**: Deep Black (`#0a0a0a`)
- **Card/section backgrounds**: Dark (`#121212`)
- **CTA buttons**: gradient-bg
- **Headings**: Soft White or gradient-text
- **Body text**: Soft White / Warm Gray
- **Accents / borders / hover**: Bronze `#cd7f32`

---

## 3. Typography

### Headings — Space Grotesk
- **Weights**: 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Case**: Sentence case
- **Line height**: 1.1–1.3

### Body — Inter
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Line height**: 1.5–1.75

### Hierarchy

| Element | Font | Weight | Size (px) |
|---|---|---|---|
| H1 | Space Grotesk | 700 | 56–72 |
| H2 | Space Grotesk | 600 | 36–48 |
| H3 | Space Grotesk | 600 | 24–30 |
| Body large | Inter | 400 | 18 |
| Body | Inter | 400 | 16 |
| Body small | Inter | 400 | 14 |
| Caption | Inter | 400 | 12–13 |

### Sizing is responsive — scale down ~30% on mobile.

---

## 4. Design Language

### Style Descriptors
Dark, premium, warm-metallic, sophisticated, modern, minimal.

### Backgrounds
Always dark (`#0a0a0a`). Subtle animated elements:
- Radial gradient orbs (copper/bronze)
- Floating geometric shapes (triangles, circles, crosses) with drift animation
- Moving grid squares
- Mouse-follow radial glow
- Optional particle system
- Subtle scanline overlay

### Cards ("glass-card")
```
background: rgba(18, 18, 18, 0.4)
backdrop-filter: blur(12px)
border: 1px solid rgba(255, 255, 255, 0.05)
```

### Card Hover
```
border-color: rgba(205, 127, 50, 0.3)
box-shadow: 0 0 30px rgba(205, 127, 50, 0.1)
```

### Spacing
- **Section padding**: py-20 (80px) / py-24 (96px)
- **Container max-width**: 1280px, centered
- **Gap between cards**: 1.5rem–2rem
- **Content spacing**: 1rem–1.5rem between elements

### Borders & Dividers
- Subtle white at 5% opacity
- Cards use `rgba(255,255,255,0.05)` borders
- Accent borders on hover turn bronze

---

## 5. Animation & Motion

### Timing
- **Standard duration**: 0.5s–0.6s
- **Fade-up scroll**: 0.6s
- **Scale-in**: 0.5s
- **Stagger delay**: 0.1s between children
- **Hover transitions**: 0.3s ease

### Scroll Animation (fadeUp)
```ts
hidden: { opacity: 0, y: 30 }
visible: { opacity: 1, y: 0, duration: 0.6 }
```

### Stagger Container
```ts
staggerChildren: 0.1
delayChildren: 0.1
```

### Scale In
```ts
hidden: { opacity: 0, scale: 0.9 }
visible: { opacity: 1, scale: 1, duration: 0.5 }
```

### CSS Animations
| Name | Duration | Use |
|---|---|---|
| `drift` | 20s linear infinite | Background pattern movement |
| `drift-reverse` | 40s linear infinite | Secondary background movement |
| `marquee` | 30s linear infinite | Testimonial scroll |

### Reduced Motion
All animations respect `prefers-reduced-motion: reduce`.

---

## 6. Logo Variations

| Use | Format |
|---|---|
| Favicon | `public/favicon.svg` — icon mark only |
| Navbar / Footer | Wordmark: "Apex" (white) + "Row" (gradient-text) |
| Social avatar | Icon mark on gradient background |

---

## 7. Voice & Tone

- **Confident but warm** — premium without being pretentious
- **Direct and concise** — no fluff
- **Future-focused** — "we build exceptional digital experiences"
- **Personable** — uses "we" and "you"
- **Professional** — proper punctuation, sentence case

---

## 8. Imagery & Iconography

### Icons (Lucide React)
Consistent 24px stroke-based icons. Line weight: 2px. Used across service cards, feature lists, buttons.

### Social Icons
Minimal style — uppercase single-letter abbreviations (F, T, I, L, G) or Lucide equivalents.

### No photography
The brand uses abstract geometric/glow backgrounds, not stock photography.

---

## 9. Key Applications

| Element | Specification |
|---|---|
| Navbar | Glass effect, fixed top, brand wordmark left, nav links right, mobile hamburger |
| Buttons | Gradient-bg fill (primary), or glass/outline (secondary), rounded-lg, 0.3s hover |
| Sections | Container (max-1280px), centered, optional background orbs |
| Selection | Background: Rich Brown, text: Soft White |
| Scrollbar | Thumb: Rich Brown → Copper on hover, track: Deep Black |
| Footer | Dark background, wordmark, nav links, socials, copyright |

---

## 10. Do's & Don'ts

**Do:**
- Use Deep Black as the primary background
- Use gradient-bg for primary CTAs
- Keep generous whitespace (at least 1.5rem between elements)
- Use glass-card for content containers
- Animate elements on scroll (fade-up)

**Don't:**
- Use light/white backgrounds
- Use bright or saturated accent colors (no blues, reds, greens)
- Crowd the layout — the brand breathes
- Use photography or raster images as backgrounds
- Over-animate — subtlety is key

---

*Maintained by ApexRow Design Team*
*Last updated: May 2026*

# ARPITX Portfolio — PRD

## Problem Statement
Build a world-class cinematic portfolio landing page for freelance video editor **Arpit Gonde** (brand: ARPITX). Premium documentary feel, dark theme (#0a0a0a), electric orange (#FF3D00) accents, Black Ops One + Barlow Condensed typography. Primary goal: convert foreign visitors into paying clients.

## User Choices
- **Stack**: Pure frontend only (no backend, no MongoDB)
- **Contact submission**: `mailto:arpitgonde16@gmail.com` (opens user email client)
- **Assets**: Text-based ARPITX wordmark (no headshot/logo images)

## Architecture
- Single-page React app (`/app/frontend`)
- Sections composed in `App.js`, each section lives in `/app/frontend/src/components/arpitx/`
- Shadcn: `Accordion`, `Dialog`, `Input`, `Textarea`, `Select`, `sonner` toast
- Utility components: `ScrollProgress`, `MouseGlow`, `Reveal`, `CountUp`, `MagneticButton`
- YouTube embed for the featured documentary + lightbox on click (poster fallback if embed blocked)
- Google Fonts loaded in `public/index.html`

## Implemented (2026-Dec)
- ✅ Hero with animated headline, CTAs, 4 stats (animated count-up for numeric, text for others), floating video poster + orange play button + click-to-open lightbox
- ✅ Orange infinite marquee trust bar (9 skills, ✦ separator)
- ✅ Featured Documentary section (thumbnail with hover zoom, case-file metadata, lightbox)
- ✅ Short Form portfolio (1 real Instagram reel card + 5 IN PRODUCTION placeholders)
- ✅ Services (6 glassmorphism cards, emoji icons, orange hover glow)
- ✅ Process (4 numbered orange badges, dashed connecting line)
- ✅ Pricing (Starter $15 / Pro $35 — Most Popular / Bundle $90 per month)
- ✅ FAQ accordion (6 real questions, orange left-border active state)
- ✅ Contact form (Name / Email / YouTube Channel / Project Type / Budget / Message → mailto)
- ✅ Contact links (Email, Instagram, Fiverr, Upwork)
- ✅ Footer (nav + 4 real social links + massive ARPITX text + ambient glow)
- ✅ Scroll progress indicator, mouse-follow orange glow, film-grain overlay, magnetic buttons, reveal-on-scroll, animated counters
- ✅ Responsive: mobile hamburger, stacked layouts

## Testing
- Iteration 1 (2026-Dec): **100% frontend pass** — all 14 flows verified at desktop 1920x1080 and mobile 390x844

## Backlog (Deferred)
- **P1** Contact form: swap mailto for a proper email API (Resend / SendGrid) to prevent lead loss when user has no configured mail client
- **P1** Real reel embed: replace mock "editing timeline" visualization with actual IG reel embed once oEmbed token is available
- **P2** Add lead-capture backend + admin view for CRM (currently no persistence)
- **P2** SEO: meta tags, Open Graph image, sitemap.xml
- **P2** Testimonials section once real client feedback is available (user rule: no fake testimonials)
- **P2** More short-form cards as new reels are published (replace "IN PRODUCTION" placeholders)

## Files
- `/app/frontend/src/App.js` — composition
- `/app/frontend/src/index.css` — tokens, fonts, keyframes, film grain, marquee
- `/app/frontend/src/components/arpitx/*` — all sections
- `/app/frontend/public/index.html` — Google Fonts, meta

## Data Test IDs (naming)
All interactive elements have kebab-case data-testids. See file references in iteration_1.json for exact IDs.

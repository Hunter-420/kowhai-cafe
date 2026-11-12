# Handover Document - Kowhai Cafe

## Deliverable Information

- Project: Kowhai Cafe Business Site
- Target Package: Basic Package ($180)
- Repository: hunter-420/kowhai-cafe
- Live URL: https://hunter-420.github.io/kowhai-cafe/
- Client / Brand: Kowhai Cafe (Grey Lynn, Auckland, NZ)

## Technology Stack

- Language: TypeScript (strict mode)
- Framework: React 18, Vite
- Styling: Tailwind CSS, CSS variables, Google Fonts (Bricolage Grotesque, Manrope)
- Icons: Lucide React (SVG-based, accessible, zero emoji dependencies)
- Validation: Zod v3
- Testing: Vitest

## Verified Checklist

- All pages render at 390px, 768px, and 1440px with no horizontal scroll.
- Responsive mobile drawer navigation functions with accessible keyboard toggling.
- Contact form validates fields via Zod, catches honeypot spam bots, and renders inline error messaging.
- Lightbox opens on photo select and responds to Escape, Arrow Left, and Arrow Right keys.
- Menu renders entirely from typed data structures in src/lib/menu.ts.
- Dietary filtering works across all categories.
- Sitemap and robots.txt exist in the public directory.
- JSON-LD LocalBusiness metadata is present in index.html.
- Zero emotes or emojis exist in code, documentation, or user interfaces.

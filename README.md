# Kowhai Cafe - Business Website

A high-performance, accessible, responsive five-page website built for Kowhai Cafe, an artisan cafe in Grey Lynn, Auckland, New Zealand. Demonstrates the Basic Package for the Next.js and Modern Web App Fiverr gig.

## Demo Notice

This repository contains a demo project demonstrating business website architecture, responsive design, typed data modeling, accessibility, and SEO best practices.

## Project Overview

- Package: Basic Package ($180)
- Brand: Kowhai Cafe (fictional Grey Lynn neighbourhood cafe)
- Location: 27 Richmond Road, Grey Lynn, Auckland 1021
- Live Demo: Hosted on GitHub Pages
- Framework: React 18, TypeScript (strict), Vite, Tailwind CSS, Lucide Icons, Zod

## Design Tokens and Styling

- Headings Typography: Bricolage Grotesque
- Body Typography: Manrope
- Primary Brand Color: Kowhai Yellow (#F6B81A), Deep Ochre (#E39B0B)
- Background: Cream (#FFF8E8)
- Body Ink: Espresso (#2A1B12), Muted (#7C6A58)
- Accent: Flax Green (#4F6B3A), Soft Green (#E6EDD8)
- Oat Surfaces: Surface (#F3E6C8), Border Line (#EBDFC4)
- Layout Radius: 24px to 28px on cards, 36px on banners, pill buttons (9999px)

## Pages and Features

1. Home (/):
   - Hero section with value proposition, proof signal (4.9/5 from 620+ reviews, Metro Top 50 award), and quick actions.
   - Three core brand pillars: 12 Auckland growers, made every morning, everyone welcome.
   - Chef favourites preview with prices and dietary indicators.
   - Ten years in Grey Lynn milestone timeline (2016-2026).
   - Six-question interactive FAQ accordion.
   - Location, trading hours, and visit call to action.

2. Menu (/menu):
   - Rendered from typed data file (src/lib/menu.ts).
   - 4 categories: Breakfast and Bowls, Toast and Sandwiches, Sweet and Bakery, Coffee and Cold Brew.
   - Dietary filter chips: All, Vegetarian (V), Vegan (VG), Gluten-Free (GF), Dairy-Free (DF).
   - Search bar filtering dishes and ingredients in real time.
   - Seasonal harvest special highlight card.

3. About (/about):
   - Story of origin on Richmond Road since 2016.
   - Three promises value cards.
   - Milestone timeline of cafe expansion.
   - Leadership team cards (Co-founders and Head Chef).

4. Gallery (/gallery):
   - Filter chips: All, Food, Coffee, Courtyard, Events.
   - Responsive photo masonry layout.
   - Keyboard-accessible modal lightbox with Escape key close and Arrow Left / Arrow Right navigation.
   - Community Instagram integration card.

5. Contact (/contact):
   - Zod-validated contact form with name, email, subject, and message.
   - Honeypot spam defense field.
   - Real-time inline field error display.
   - Success state feedback.
   - Address, hours breakdown, phone, and location map card.

6. Catering (/catering):
   - Packages for morning tea boxes, artisan sandwich platters, and private evening courtyard hire.

7. Journal (/news):
   - Seasonal menu release notes and roastery profiles.

## UI Skills Compliance

- Applied baseline-ui and interface-design rules:
  - text-balance on headings for balanced line wrapping.
  - text-pretty on paragraphs to avoid typographic orphans.
  - tabular-nums on all numeric data, prices, dates, and service hours.
  - Icon buttons include explicit aria-label attributes.
  - Micro-interactions under 200ms ease-out.
  - Single primary accent color per view hierarchy.
  - Full mobile responsiveness at 390px, 768px, and 1200px+ breakpoints with accessible navigation drawer.

## SEO and Structured Data

- JSON-LD schema (CafeOrCoffeeShop / LocalBusiness) embedded in index.html with opening hours specification, coordinates, address, and cuisine.
- Custom Open Graph meta tags.
- public/robots.txt and public/sitemap.xml included.

## Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Run automated test suite
npm test

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

## License

MIT


# TRES BEAUX BEAUTY SALON — Build Plan

A single-page, mobile-first luxury beauty salon site with editorial styling, a fixed left sidebar nav, and smooth scroll between sections.

## Brand & Design System

- **Palette**: White base, soft lavender `#E8E4F0`, soft pink `#F5C8D8`, bold blue `#2D2DCC` (primary CTA), pink `#E8A0B8` (secondary CTA).
- **Tone**: Premium, modern, editorial.
- **Typography**: Large editorial serif for hero/section titles, clean sans-serif for body and labels. Generous whitespace, oversized type, subtle hover transitions.
- **Tokens**: All colors, fonts, gradients, and shadows defined as semantic tokens in `index.css` + `tailwind.config.ts` (no hard-coded colors in components).

## Layout

```text
┌──────┬────────────────────────────────────┐
│      │  HERO  (full-bleed image + tagline)│
│ SIDE │  ABOUT                             │
│ NAV  │  SERVICES (horizontal carousels)   │
│      │  TESTIMONIALS                      │
│      │  TEAM                              │
│      │  FOOTER / CONTACT                  │
└──────┴────────────────────────────────────┘
```

- Sidebar: fixed left, vertical. Logo "TRES BEAUX" stacked at top. Vertical nav links (HOME, ABOUT, SERVICES, TEAM, CONTACT). Collapses to a top hamburger on mobile.
- All sections share consistent vertical rhythm and anchor IDs for smooth scroll.

## Sections

1. **Hero** — full-bleed Unsplash beauty image, oversized editorial headline, tagline "TRES BEAUX × YOU IS OUR FAVORITE COLLABORATION", bold blue **BOOK APPOINTMENT** button (visual only for now).
2. **About** — two-column editorial layout: large image left, paragraph + small pink secondary CTA right. Bracketed placeholders like `[ABOUT COPY]`.
3. **Services** — grouped into categories (Hair, Nails, Makeup, Skin). Each category is a **horizontal scrollable carousel** of service cards. Each card = Unsplash image with a centered-right frosted-glass label ("[SERVICE NAME]"). 12 services total distributed across categories. Snap-scroll on mobile, arrow controls on desktop.
4. **Testimonials** — editorial quote carousel, large pull-quote styling, client name + `[LOCATION]`, soft lavender background.
5. **Team / Stylists** — responsive grid of stylist cards: portrait image, name, specialty, short bio. All bracketed placeholders.
6. **Footer / Contact** — address `[ADDRESS]`, phone `[PHONE]`, hours `[HOURS]`, social icons, secondary pink CTA "GET IN TOUCH".

## Interactions

- Smooth scroll between sections via anchor links.
- Sidebar active link highlights based on scroll position.
- Service carousels: drag/swipe on touch, arrow buttons on desktop, scroll-snap.
- Hover states on all cards (subtle lift + image zoom).
- Frosted-glass labels use `backdrop-blur` over images.

## Content Conventions

- All client-replaceable content uses bracketed placeholders: `[PHOTO]`, `[ADDRESS]`, `[PHONE]`, `[HOURS]`, `[STYLIST NAME]`, `[SERVICE PRICE]`, `[ABOUT COPY]`, `[TESTIMONIAL]`, etc.
- Unsplash images sourced for: hair styling, nails, makeup, skincare, salon interiors, stylist portraits.

## Technical Notes

- React + Vite + Tailwind + TypeScript (existing stack).
- Components: `Sidebar`, `Hero`, `About`, `ServicesCarousel` (reused per category), `ServiceCard`, `Testimonials`, `Team`, `Footer`.
- shadcn `Carousel` (embla) for service + testimonial scrollers.
- shadcn `Sheet` for mobile sidebar drawer; desktop uses fixed positioned `<aside>`.
- Design tokens in `index.css` (HSL) + Tailwind theme extension.
- Single route `/` — no router changes needed.
- No backend, no forms wired — `BOOK APPOINTMENT` is visual only.
- Lazy-loaded images, `loading="lazy"`, responsive `srcset` via Unsplash size params for fast loading.
- Fully responsive: sidebar → top bar under `md`, carousels become full-width swipeable, type scales down.

## Out of Scope

- Booking backend / form submission.
- CMS or auth.
- Multi-page routing.

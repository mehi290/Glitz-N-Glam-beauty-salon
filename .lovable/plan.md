## Match Reference Screenshots — Hero, About Us, Services

Rebuild the top three sections of the page to mirror the reference screenshots exactly, in this order: **Hero → About Us → Services (horizontal slider)**.

---

### 1. Hero — 8-tile image mosaic (screenshot 1)

```text
┌──────────┬──────────┬──────────┬──────────┐
│  braid   │  face    │  hands   │  hair    │
├──────────┼──────────┼──────────┼──────────┤
│  eye     │  rings   │  smile   │ hand/hair│
└──────────┴──────────┴──────────┴──────────┘
        TRES BEAUX × YOU IS OUR FAVORITE
                 COLLABORATION
   (white uppercase, centered across the seam)
```

- Full-viewport CSS grid: `grid-cols-4 grid-rows-2` desktop, `grid-cols-2 grid-rows-4` mobile.
- 8 Unsplash beauty images (braid, portrait, manicured hands, hair texture, eye makeup, rings, smile, hand-in-hair).
- Tagline overlaid centered, bold uppercase white display type with subtle text-shadow for legibility.
- **Remove** the current "BOOK APPOINTMENT" / "EXPLORE SERVICES" buttons and the "Est. [YEAR]" line — reference has none in the hero body.

### 2. About Us (screenshot 3)

```text
┌──────────────────────────┬───────────────────────────┐
│                          │                           │
│  About gorgeous          │                           │
│  Tres Beaux world!       │                           │
│  (script, soft pink)     │     [LARGE PORTRAIT       │
│                          │      PHOTO — two          │
│  About us                │      stylists / clients]  │
│  (huge bold black,       │                           │
│   underlined accent)     │                           │
│                          │                           │
│  Tres Beaux. That's like │                           │
│  a beauty salon, but way │                           │
│  way better!  (bold)     │                           │
│                          │                           │
│  [3 short paragraphs of  │                           │
│   body copy in muted     │                           │
│   gray]                  │                           │
│                          │                           │
└──────────────────────────┴───────────────────────────┘
```

- Two-column layout, white background.
- **Left column**:
  - Script handwritten-style headline in soft pink: `About gorgeous Tres Beaux world!` (use a Google script font like *Allura* or *Great Vibes*).
  - Below it, large bold sans heading `About us` with a thin pink underline accent through it.
  - A bold lead line, then 3 short body paragraphs in muted gray (Inter, regular).
- **Right column**: single tall portrait image, no frame, fills the column edge-to-edge.
- Replace current About content with this structure; keep all copy as bracketed placeholders where appropriate, but use the reference copy as default text.

### 3. Services — horizontal sliding carousel (screenshot 2)

```text
Services   (huge bold heading, with white strikethrough accent over it)

┌─────────────────────┐ ┌─────────────────────┐ ┌────
│                     │ │                     │ │
│   [SERVICE PHOTO]   │ │   [SERVICE PHOTO]   │ │  …
│                     │ │              ┌────┐ │ │
│              ┌────┐ │ │              │FROST│ │ │
│              │FROST│ │ │              │LABEL│ │ │
│              └────┘ │ │              └────┘ │ │
│                     │ │                     │ │
└─────────────────────┘ └─────────────────────┘ └────
        ← drag / swipe horizontally →
```

- Section background: **soft lavender** (`hsl(var(--lavender))`) to match reference.
- Heading "Services" — huge bold sans, with a thin white horizontal line struck through the text (decorative `::after` or absolute span).
- **Single horizontal carousel** containing ALL services (not split into category sub-carousels — the reference is one long slider). Categories become a small filter row above the slider (Hair / Nails / Makeup / Skin / All).
- Cards: tall portrait aspect (~4:5), large rounded corners optional but reference is square — keep square. Each card has the **frosted-glass label** (`backdrop-blur`, semi-transparent white, uppercase service name) positioned **centered-right** over the image, exactly like the reference.
- Drag/swipe on touch, arrow buttons on desktop, scroll-snap.
- Cards show ~2 at a time on desktop, ~1.2 on mobile so the next card peeks.

### 4. Section order on the page

```text
1. Hero (mosaic)
2. About Us
3. Services (horizontal slider)
4. Team
5. Testimonials
6. Footer / Contact
```

---

### Files to change

- `src/index.css` — add a script font (e.g. Allura) via Google Fonts; add `.font-script` utility; ensure lavender token is exposed.
- `tailwind.config.ts` — register `script` font family.
- `src/components/site/data.ts` — add `HERO_TILES` (8 URLs) and `ABOUT_PORTRAIT` (single tall portrait); flatten services into a single list while keeping category tags for the filter.
- `src/components/site/Hero.tsx` — rebuild as 8-tile mosaic with overlay tagline; remove CTAs.
- `src/components/site/About.tsx` — rebuild with script headline + bold "About us" + lead + 3 paragraphs + right portrait.
- `src/components/site/Services.tsx` — rebuild as a single horizontal slider with category filter chips, lavender background, struck-through heading, frosted-glass labels centered-right.
- `src/pages/Index.tsx` — confirm order Hero → About → Services → Team → Testimonials → Footer.

### Out of scope

- Sidebar, Team, Testimonials, Footer untouched.
- No booking form wiring; all CTAs remain visual only.

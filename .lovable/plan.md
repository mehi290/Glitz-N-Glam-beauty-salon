## Goal

Restyle ONLY the Testimonials section to match the reference video: a dark, atmospheric strip where multiple testimonial cards continuously slide horizontally on their own, each card showing the reviewer's name on top, a row of gold star icons, then the quote text below.

Nothing else on the site changes (Hero, About, Services, Footer stay as they are).

---

## What the new Testimonials section looks like

- Full-width dark section with a soft moody background (subtle dark image or gradient + overlay) so the cards float on top of it.
- Section header on top:
  - Small gold accent line + heading "What Our Customers Say"
  - Subline "What customers think about us"
- A horizontal track of testimonial cards that **auto-scrolls continuously** from right to left (infinite marquee, seamless loop).
- 3 cards visible at once on desktop, 2 on tablet, 1 on mobile.
- Pauses on hover so the user can read.
- Optional left/right chevron arrows on the sides for manual nudging (visual match to the video).

### Card design (matches video)

- Dark translucent rounded rectangle with subtle border and soft glass blur.
- Top: reviewer name in a clean lowercase white font (e.g. "joseph cordray").
- Middle: 5 gold star icons centered.
- Bottom: short quote in light gray, centered, 3–4 lines.

---

## Implementation

### 1. `src/components/site/data.ts`
- Expand `TESTIMONIALS` to ~6 entries (so the marquee feels full) with `name`, `rating` (number 1–5), and `quote`. Drop the unused `location` field for this layout.

### 2. `src/components/site/Testimonials.tsx` (rewrite)
- Replace the current single-quote slider with a marquee:
  - Wrapper section: `bg-[#0c0c0c]` (or existing dark token) with a subtle background image + dark overlay.
  - Header block with gold underline accent.
  - Track: a flex row containing the testimonials list rendered **twice back-to-back** so the CSS animation can loop seamlessly (`translateX(0) → translateX(-50%)`).
  - Each card: fixed width (`w-[320px] md:w-[360px]`), dark glass styling (`bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6`).
  - Star row: 5 `lucide-react` `Star` icons, filled, `text-yellow-400`.
  - `group-hover:[animation-play-state:paused]` to pause on hover.
  - Side arrows (decorative, scroll the container by a card width on click).

### 3. `tailwind.config.ts`
- Add a `marquee` keyframe and animation:
  - `marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } }`
  - `animation: { marquee: 'marquee 40s linear infinite' }`

### 4. No changes to
- Hero, About, Services, Footer, Sidebar, Index page order, fonts, or color tokens.

---

## Files touched

- `src/components/site/Testimonials.tsx` — rewritten
- `src/components/site/data.ts` — testimonials array updated (name + rating + quote)
- `tailwind.config.ts` — add marquee keyframe + animation

That's it — small, surgical, and limited to the testimonials block.

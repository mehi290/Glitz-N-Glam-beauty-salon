## Changes

### 1. Services — auto-scrolling marquee (like Testimonials)
File: `src/components/site/Services.tsx`
- Replace the manual `overflow-x-auto` slider with an infinite horizontal marquee using the existing `animate-marquee` utility.
- Duplicate `items` (`[...items, ...items]`) so the loop is seamless.
- Wrap the track in a `group` and use `group-hover:[animation-play-state:paused]` so hovering pauses the scroll.
- Keep the section heading, filter chips, and the prev/next arrow buttons. Arrows will nudge by scrolling the track via a ref (the marquee animation continues; nudge offsets via `transform` are tricky, so simplest: arrows scroll the outer container which is set to `overflow-hidden`). To preserve arrow nudge, we'll keep arrows but make them re-trigger animation direction via toggling a `[animation-direction:reverse]` class for the back arrow as a brief tap, OR remove arrows since marquee is auto. Decision: remove arrows for a cleaner Testimonials-style look (matches the reference behavior).
- Keep the filter chips functional — switching filter rebuilds the marquee with the filtered items.
- Card sizing stays the same (`aspect-square`, ~38% width on lg).

### 2. Testimonials — full salon photo background, no white overlay
File: `src/components/site/Testimonials.tsx`
- Remove the white gradient overlay div entirely.
- Set the background image to full opacity (no `opacity-30`) so the salon picture shows clearly.
- Keep section base as a fallback dark color in case the image fails.
- Re-tune text and cards for legibility on a photo background:
  - Heading and subheading: white with a subtle text shadow.
  - Cards: semi-transparent dark glass (`bg-black/40 backdrop-blur-md border-white/15`) with white text and gold stars.
  - Arrow buttons: glass style (white/10 bg, white icon).
- Optionally add a very light dark gradient at top/bottom only for header readability (kept minimal so the picture remains the hero of the section).

### 3. Page order — About moves below Services
File: `src/pages/Index.tsx`
New order:
```text
Hero → Services → About → Testimonials → Footer
```
Update the `NAV_LINKS` order in `src/components/site/data.ts` to match: Home, Services, About, Testimonials, Contact.

## Files touched
- `src/components/site/Services.tsx` — marquee conversion
- `src/components/site/Testimonials.tsx` — remove white overlay, restyle for photo bg
- `src/pages/Index.tsx` — reorder sections
- `src/components/site/data.ts` — reorder nav links

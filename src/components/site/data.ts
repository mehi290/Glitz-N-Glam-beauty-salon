export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "team", label: "Team" },
  { id: "testimonials", label: "Voices" },
  { id: "contact", label: "Contact" },
];

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const SERVICE_CATEGORIES: {
  category: string;
  items: { name: string; image: string }[];
}[] = [
  {
    category: "Hair",
    items: [
      { name: "[SIGNATURE CUT]", image: u("photo-1560066984-138dadb4c035") },
      { name: "[COLOR & BALAYAGE]", image: u("photo-1522337360788-8b13dee7a37e") },
      { name: "[BLOWOUT]", image: u("photo-1487412947147-5cebf100ffc2") },
      { name: "[BRIDAL STYLING]", image: u("photo-1595476108010-b4d1f102b1b1") },
    ],
  },
  {
    category: "Nails",
    items: [
      { name: "[CLASSIC MANICURE]", image: u("photo-1604654894610-df63bc536371") },
      { name: "[GEL EXTENSIONS]", image: u("photo-1632345031435-8727f6897d53") },
      { name: "[LUXURY PEDICURE]", image: u("photo-1610992015732-2449b76344bc") },
    ],
  },
  {
    category: "Makeup",
    items: [
      { name: "[EVENT MAKEUP]", image: u("photo-1487412720507-e7ab37603c6f") },
      { name: "[BRIDAL MAKEUP]", image: u("photo-1503236823255-94609f598e71") },
      { name: "[LASH & BROW]", image: u("photo-1571875257727-256c39da42af") },
    ],
  },
  {
    category: "Skin",
    items: [
      { name: "[SIGNATURE FACIAL]", image: u("photo-1570172619644-dfd03ed5d881") },
      { name: "[ADVANCED SKINCARE]", image: u("photo-1512290923902-8a9f81dc236c") },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "[Tres Beaux completely transformed my look. The atmosphere is unmatched — it feels like stepping into an editorial.]",
    name: "[CLIENT NAME]",
    location: "[LOCATION]",
  },
  {
    quote:
      "[Every visit feels considered, from the lighting to the final touch. This is beauty as it should be.]",
    name: "[CLIENT NAME]",
    location: "[LOCATION]",
  },
  {
    quote:
      "[The team listens. They guide. They create. I leave looking like the best version of myself.]",
    name: "[CLIENT NAME]",
    location: "[LOCATION]",
  },
];

export const TEAM = [
  {
    name: "[STYLIST NAME]",
    role: "[CREATIVE DIRECTOR]",
    image: u("photo-1580489944761-15a19d654956", 700),
  },
  {
    name: "[STYLIST NAME]",
    role: "[SENIOR COLORIST]",
    image: u("photo-1544005313-94ddf0286df2", 700),
  },
  {
    name: "[STYLIST NAME]",
    role: "[NAIL ARTIST]",
    image: u("photo-1494790108377-be9c29b29330", 700),
  },
  {
    name: "[STYLIST NAME]",
    role: "[MAKEUP ARTIST]",
    image: u("photo-1438761681033-6461ffad8d80", 700),
  },
];

export const HERO_IMAGE = u("photo-1560869713-7d0954430a87", 1800);
export const ABOUT_IMAGE = u("photo-1522337360788-8b13dee7a37e", 1200);
import { ABOUT_IMAGE } from "./data";

export const About = () => {
  return (
    <section
      id="about"
      className="relative bg-lavender py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={ABOUT_IMAGE}
            alt="[ABOUT PHOTO — salon interior]"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-display text-[11px] text-muted-foreground mb-6">
            About — 01
          </p>
          <h2 className="font-editorial text-4xl md:text-6xl leading-tight mb-8">
            Beauty, considered.
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-6">
            [ABOUT COPY — Tres Beaux is a sanctuary where craft meets care. Our
            stylists, colorists and artists collaborate with each guest to create
            looks that feel honest, modern and entirely their own.]
          </p>
          <p className="text-base md:text-lg leading-relaxed text-foreground/80 mb-10">
            [ABOUT COPY — Every appointment is a quiet, considered ritual. Soft
            light, thoughtful product, and the kind of attention that makes
            beauty feel personal again.]
          </p>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground font-display text-[11px] hover:opacity-90 transition-opacity">
            Our Story
          </button>
        </div>
      </div>
    </section>
  );
};
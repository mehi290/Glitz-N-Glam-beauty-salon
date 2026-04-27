import { ABOUT_PORTRAIT } from "./data";

export const About = () => {
  return (
    <section
      id="about"
      className="relative bg-background py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left — copy */}
        <div className="order-2 md:order-1">
          <p className="font-script text-blush text-3xl md:text-5xl leading-tight mb-4">
            About gorgeous Tres Beaux world!
          </p>

          <h2 className="relative inline-block mb-10">
            <span className="font-display font-black text-foreground text-5xl md:text-7xl tracking-tight normal-case">
              About us
            </span>
            <span
              aria-hidden
              className="absolute left-0 right-0 top-1/2 h-[3px] bg-blush -z-0"
            />
          </h2>

          <p className="font-display normal-case tracking-normal font-bold text-foreground text-lg md:text-xl leading-snug mb-6">
            Tres Beaux. That's like a beauty salon, but way way better!
          </p>

          <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-xl">
            <p>
              [Tres Beaux is a sanctuary where craft meets care. Our stylists,
              colorists and artists collaborate with each guest to create looks
              that feel honest, modern and entirely their own.]
            </p>
            <p>
              [Every appointment is a quiet, considered ritual — soft light,
              thoughtful product, and the kind of attention that makes beauty
              feel personal again.]
            </p>
            <p>
              [From everyday refreshes to once-in-a-lifetime moments, Tres Beaux
              is built around you. Walk in, exhale, and let us take it from
              here.]
            </p>
          </div>
        </div>

        {/* Right — portrait */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src={ABOUT_PORTRAIT}
              alt="[PHOTO — Tres Beaux portrait]"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
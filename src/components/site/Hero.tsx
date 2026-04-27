import { HERO_IMAGE } from "./data";

export const Hero = () => {
  const scroll = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-end overflow-hidden"
    >
      <img
        src={HERO_IMAGE}
        alt="[HERO PHOTO — editorial beauty model]"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-background/30" />

      <div className="relative z-10 w-full px-6 md:px-16 pb-16 md:pb-24 pt-28 md:pt-20">
        <div className="max-w-5xl">
          <p className="font-display text-[11px] text-foreground/80 mb-6">
            Est. [YEAR] · [CITY]
          </p>
          <h1 className="font-editorial text-5xl sm:text-7xl md:text-[8rem] leading-[0.95] text-foreground">
            Tres <em className="not-italic md:italic">Beaux</em>
            <br />
            Beauty Salon.
          </h1>
          <p className="font-display text-xs sm:text-sm text-foreground/80 mt-8 max-w-md">
            Tres Beaux × You is our favorite collaboration.
          </p>
          <div className="flex flex-wrap gap-3 mt-10">
            <button
              onClick={() => scroll("contact")}
              className="px-8 py-4 bg-primary text-primary-foreground font-display text-[11px] hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </button>
            <button
              onClick={() => scroll("services")}
              className="px-8 py-4 bg-secondary text-secondary-foreground font-display text-[11px] hover:opacity-90 transition-opacity"
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
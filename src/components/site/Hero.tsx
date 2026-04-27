import { HERO_TILES } from "./data";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[640px] overflow-hidden bg-background"
    >
      {/* 8-tile mosaic: 4x2 desktop, 2x4 mobile */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-0">
        {HERO_TILES.map((tile, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={tile.src}
              alt={tile.alt}
              loading={i < 4 ? "eager" : "lazy"}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* subtle dark overlay so the tagline reads on every tile */}
      <div className="absolute inset-0 bg-foreground/15 pointer-events-none" />

      {/* Tagline centered across the horizontal seam */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none">
        <h1 className="font-display text-background text-shadow-hero text-center font-bold leading-[1.15] text-[18px] sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl max-w-5xl">
          Tres Beaux <span className="px-1">×</span> You
          <br className="md:hidden" />
          <span className="hidden md:inline"> </span>
          Is Our Favorite Collaboration
        </h1>
      </div>
    </section>
  );
};
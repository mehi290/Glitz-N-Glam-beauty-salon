import { useMemo, useState } from "react";
import { SERVICES_FLAT, SERVICE_FILTERS } from "./data";

export const Services = () => {
  const [filter, setFilter] = useState<string>("All");

  const items = useMemo(
    () =>
      filter === "All"
        ? SERVICES_FLAT
        : SERVICES_FLAT.filter((s) => s.category === filter),
    [filter]
  );

  const loop = [...items, ...items];

  return (
    <section id="services" className="bg-lavender py-20 md:py-28">
      <div className="px-6 md:px-16 mb-10 md:mb-14">
        <div>
          {/* Heading with white strikethrough accent */}
          <h2 className="relative inline-block">
            <span className="font-display font-black text-foreground text-5xl md:text-7xl tracking-tight normal-case">
              Services
            </span>
            <span
              aria-hidden
              className="absolute left-0 right-0 top-1/2 h-[4px] bg-background -z-0"
            />
          </h2>

          {/* Filter chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            {SERVICE_FILTERS.map((f) => {
              const active = f === filter;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-display text-[10px] px-4 py-2 border transition-colors ${
                    active
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-foreground border-foreground/20 hover:border-foreground"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="group overflow-hidden">
        <div
          key={filter}
          className="flex gap-5 w-max animate-marquee group-hover:[animation-play-state:paused] pl-6 md:pl-16"
        >
          {loop.map((item, idx) => (
            <article
              key={`${item.category}-${item.name}-${idx}`}
              className="shrink-0 w-[82vw] sm:w-[60vw] md:w-[44vw] lg:w-[34vw] xl:w-[28vw] aspect-square relative overflow-hidden cursor-pointer"
            >
              <img
                src={item.image}
                alt={`[PHOTO ${item.name}]`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-foreground/15 to-transparent" />

              {/* Frosted glass label, centered-right */}
              <div className="absolute right-5 top-1/2 -translate-y-1/2 glass-label px-5 py-3 max-w-[65%]">
                <p className="font-display text-[9px] text-muted-foreground mb-1">
                  {item.category}
                </p>
                <p className="font-display normal-case tracking-normal font-bold text-base md:text-lg leading-tight text-foreground">
                  {item.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
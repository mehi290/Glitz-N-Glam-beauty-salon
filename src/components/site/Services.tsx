import { useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICES_FLAT, SERVICE_FILTERS } from "./data";

export const Services = () => {
  const [filter, setFilter] = useState<string>("All");
  const ref = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () =>
      filter === "All"
        ? SERVICES_FLAT
        : SERVICES_FLAT.filter((s) => s.category === filter),
    [filter]
  );

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section id="services" className="bg-lavender py-20 md:py-28">
      <div className="px-6 md:px-16 mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
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

        {/* Desktop arrows */}
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="w-12 h-12 border border-foreground/30 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="w-12 h-12 border border-foreground/30 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Single horizontal slider */}
      <div
        ref={ref}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory no-scrollbar pl-6 md:pl-16 pr-6 md:pr-16 pb-2"
      >
        {items.map((item) => (
          <article
            key={`${item.category}-${item.name}`}
            className="snap-start shrink-0 w-[82%] sm:w-[60%] md:w-[44%] lg:w-[38%] aspect-square relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={`[PHOTO ${item.name}]`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
    </section>
  );
};
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SERVICE_CATEGORIES } from "./data";

const ServiceRow = ({
  category,
  items,
}: {
  category: string;
  items: { name: string; image: string }[];
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="mb-16 md:mb-24">
      <div className="flex items-end justify-between mb-6 px-6 md:px-16">
        <div>
          <p className="font-display text-[11px] text-muted-foreground mb-2">
            Category
          </p>
          <h3 className="font-editorial text-3xl md:text-5xl">{category}</h3>
        </div>
        <div className="hidden md:flex gap-2">
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="w-11 h-11 border border-border hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="w-11 h-11 border border-border hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pl-6 md:pl-16 pr-6 md:pr-16 pb-2"
      >
        {items.map((item) => (
          <article
            key={item.name}
            className="snap-start shrink-0 w-[78%] sm:w-[55%] md:w-[40%] lg:w-[32%] aspect-[3/4] relative overflow-hidden group cursor-pointer"
          >
            <img
              src={item.image}
              alt={`[PHOTO ${item.name}]`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 glass-label px-5 py-3 max-w-[70%]">
              <p className="font-display text-[10px] text-muted-foreground mb-1">
                {category}
              </p>
              <p className="font-editorial text-lg md:text-xl leading-tight">
                {item.name}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="services" className="bg-background py-24 md:py-32">
      <div className="px-6 md:px-16 mb-16">
        <p className="font-display text-[11px] text-muted-foreground mb-4">
          Services — 02
        </p>
        <h2 className="font-editorial text-4xl md:text-7xl leading-tight max-w-3xl">
          A complete editorial of beauty services.
        </h2>
      </div>
      {SERVICE_CATEGORIES.map((c) => (
        <ServiceRow key={c.category} category={c.category} items={c.items} />
      ))}
    </section>
  );
};
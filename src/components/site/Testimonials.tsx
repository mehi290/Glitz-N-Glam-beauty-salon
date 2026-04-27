import { useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS } from "./data";

export const Testimonials = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const loop = [...TESTIMONIALS, ...TESTIMONIALS];

  const nudge = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1800&q=80')",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95"
      />

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-3">
            <span className="block h-px w-14 bg-yellow-500/80" />
            <h2 className="text-neutral-900 text-3xl md:text-5xl font-semibold tracking-tight">
              What Our Customers Say
            </h2>
          </div>
          <p className="text-neutral-600 text-sm md:text-base ml-[72px]">
            What customers think about us?
          </p>
        </div>

        <div className="relative group">
          <div
            ref={trackRef}
            className="overflow-x-auto [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            <div className="flex gap-6 w-max animate-marquee group-hover:[animation-play-state:paused]">
              {loop.map((t, idx) => (
                <article
                  key={idx}
                  className="w-[300px] md:w-[360px] shrink-0 rounded-xl border border-neutral-200 bg-white shadow-sm p-6 md:p-7 flex flex-col items-center text-center"
                >
                  <h3 className="text-neutral-900 text-lg font-medium tracking-wide lowercase">
                    {t.name}
                  </h3>
                  <div className="flex gap-1 mt-3 mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {t.quote}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <button
            onClick={() => nudge(-1)}
            aria-label="Previous testimonials"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-800 items-center justify-center shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => nudge(1)}
            aria-label="Next testimonials"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-800 items-center justify-center shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
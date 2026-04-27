import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "./data";

export const Testimonials = () => {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const prev = () => setI((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setI((p) => (p + 1) % TESTIMONIALS.length);

  return (
    <section
      id="testimonials"
      className="bg-blush py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto">
        <p className="font-display text-[11px] text-foreground/60 mb-8">
          Voices — 04
        </p>
        <blockquote className="font-editorial text-3xl md:text-5xl lg:text-6xl leading-[1.15] text-foreground min-h-[200px] md:min-h-[280px]">
          “{t.quote}”
        </blockquote>
        <div className="flex items-end justify-between mt-12 gap-6 flex-wrap">
          <div>
            <p className="font-editorial text-xl">{t.name}</p>
            <p className="font-display text-[11px] text-foreground/60 mt-1">
              {t.location}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-11 h-11 border border-foreground/30 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-11 h-11 border border-foreground/30 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
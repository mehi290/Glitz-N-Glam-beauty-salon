import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "./data";
import { cn } from "@/lib/utils";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-5 h-14 bg-background/85 backdrop-blur border-b border-border">
        <button
          onClick={() => handleNav("home")}
          className="font-editorial font-bold text-xl tracking-tight"
          aria-label="Tres Beaux home"
        >
          Tres Beaux
        </button>
        <div className="flex items-center gap-3">
          <button
            onClick={() => window.dispatchEvent(new Event("open-booking-flow"))}
            className="px-3 py-1.5 border border-foreground/20 text-foreground text-[10px] font-display hover:bg-foreground hover:text-background transition-colors"
            aria-label="Book now"
          >
            Book Now
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="p-2"
            aria-label="Toggle navigation"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-start gap-6 px-8 pt-24">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className="font-editorial text-4xl text-foreground"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("contact")}
            className="mt-4 px-8 py-4 bg-primary text-primary-foreground font-display text-xs"
          >
            Book Appointment
          </button>
        </nav>
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 z-40 w-[88px] flex-col items-center justify-center py-8 border-r border-border bg-background">
        {/* Vertical rotated nav */}
        <nav className="flex-1 flex flex-col items-center justify-center gap-10">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={cn(
                "font-display font-semibold text-[11px] transition-colors",
                active === l.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {l.label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
};
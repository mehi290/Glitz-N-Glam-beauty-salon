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
          className="font-editorial text-xl tracking-tight"
          aria-label="Tres Beaux home"
        >
          Tres Beaux
        </button>
        <button
          onClick={() => setOpen((o) => !o)}
          className="p-2"
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
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
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 z-40 w-[200px] flex-col justify-between px-8 py-10 border-r border-border bg-background">
        <button
          onClick={() => handleNav("home")}
          className="text-left"
          aria-label="Tres Beaux home"
        >
          <div className="font-editorial text-3xl leading-none">Tres</div>
          <div className="font-editorial text-3xl leading-none italic">Beaux</div>
          <div className="font-display text-[10px] text-muted-foreground mt-2">
            Beauty Salon
          </div>
        </button>

        <nav className="flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={cn(
                "text-left font-display text-[11px] transition-colors",
                active === l.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="inline-block w-4 mr-2 align-middle">
                <span
                  className={cn(
                    "block h-px transition-all",
                    active === l.id ? "bg-primary w-4" : "bg-border w-2"
                  )}
                />
              </span>
              {l.label}
            </button>
          ))}
        </nav>

        <div className="font-display text-[10px] text-muted-foreground">
          © Tres Beaux
        </div>
      </aside>
    </>
  );
};
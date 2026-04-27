import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-foreground text-background py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-[11px] opacity-60 mb-6">
          Contact — 05
        </p>
        <h2 className="font-editorial text-5xl md:text-8xl leading-[0.95] mb-16 max-w-4xl">
          Visit the salon.
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <p className="font-display text-[11px] opacity-60 mb-3">Address</p>
            <p className="font-editorial text-xl leading-snug">
              [ADDRESS LINE 1]
              <br />
              [CITY, STATE ZIP]
            </p>
          </div>
          <div>
            <p className="font-display text-[11px] opacity-60 mb-3">Contact</p>
            <p className="font-editorial text-xl leading-snug">
              [PHONE]
              <br />
              [EMAIL]
            </p>
          </div>
          <div>
            <p className="font-display text-[11px] opacity-60 mb-3">Hours</p>
            <p className="font-editorial text-xl leading-snug">
              [MON–FRI · 9–19]
              <br />
              [SAT · 10–18]
              <br />
              [SUN · CLOSED]
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-16">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-display text-[11px] hover:opacity-90 transition-opacity">
            Book Appointment
          </button>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground font-display text-[11px] hover:opacity-90 transition-opacity">
            Get In Touch
          </button>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-background/15">
          <p className="font-display text-[10px] opacity-60">
            © [YEAR] Tres Beaux Beauty Salon. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 border border-background/30 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
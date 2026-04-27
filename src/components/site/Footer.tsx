import { Instagram, Facebook, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-foreground text-background py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 mb-16 items-start">
          <div>
            <p className="font-display text-[11px] opacity-60 mb-5">Find Us</p>
            <h2 className="font-editorial text-5xl md:text-6xl leading-[1.05] mb-10 max-w-4xl">
              Visit Tres Beauty Lounge Dubai
            </h2>

            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-70" />
                <p className="font-editorial text-xl leading-snug">
                  Trio Building, Al Barsha, Dubai, UAE
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 opacity-70" />
                <p className="font-editorial text-xl leading-snug">+971 50 536 5757</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 opacity-70" />
                <p className="font-editorial text-xl leading-snug">Mon-Sun 10:00 AM - 10:00 PM</p>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 mt-1 opacity-70" />
                <p className="font-editorial text-xl leading-snug">Mobile: +971 50 536 5757</p>
              </div>
            </div>

            <button
              onClick={() => window.dispatchEvent(new Event("open-booking-flow"))}
              className="px-8 py-4 bg-primary text-primary-foreground font-display text-[11px] hover:opacity-90 transition-opacity"
            >
              Get Directions
            </button>
          </div>

          <div className="w-full">
            <iframe
              title="Tres Beauty Lounge map"
              src="https://www.google.com/maps?q=Trio+Building+Al+Barsha+Dubai+UAE&output=embed"
              className="w-full h-[340px] md:h-[380px] border border-background/20"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-background/15">
          <p className="font-display text-[10px] opacity-60">
            © 2026 Tres Beaux Beauty Salon. All rights reserved.
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
import { useEffect, useState, useRef } from "react";

export const About = () => {
  const aboutTitle = "About Glitz N Glam";
  const [typedAboutTitle, setTypedAboutTitle] = useState("");

  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let timeoutId: number | undefined;

    const typeTitle = (index: number) => {
      if (index <= aboutTitle.length) {
        setTypedAboutTitle(aboutTitle.slice(0, index));
        timeoutId = window.setTimeout(() => typeTitle(index + 1), 80);
      }
    };

    typeTitle(1);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  // Separate effect to handle video autoplay after DOM mount
  useEffect(() => {
    [mobileVideoRef, desktopVideoRef].forEach((ref) => {
      if (ref.current) {
        ref.current.muted = true;
        ref.current.load();
        ref.current.play().catch(() => {});
      }
    });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-background py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto md:hidden">
        <h2 className="inline-block mb-8">
          <span className="font-display font-black text-[#9F3F5C] text-2xl tracking-tight normal-case">
            {typedAboutTitle}
            {typedAboutTitle.length < aboutTitle.length ? (
              <span className="inline-block w-[0.08em] h-[0.95em] ml-[0.08em] bg-[#9F3F5C] align-[-0.08em] animate-pulse" />
            ) : null}
          </span>
        </h2>

        <h2 className="font-editorial text-[#8F3E59] text-2xl leading-[1.15] tracking-tight mb-8">
          Luxury Beauty Salon in
          <br />
          Dubai
        </h2>

        <div className="mb-8">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <video
              ref={mobileVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/about.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-xl">
          <p>
            Where beauty meets precision, with a signature touch of luxury.
            Glitz N Glam beauty salon is a sanctuary where craft meets care. Our stylists,
            colorists, and artists collaborate with each guest to create looks
            that feel honest, modern, and entirely their own.
          </p>
        </div>

        <button className="mt-8 px-8 py-4 bg-[#9F3F5C] text-white font-display text-sm tracking-[0.06em] hover:bg-[#8E3852] transition-colors">
          Book a Visit
        </button>
      </div>

      <div className="hidden max-w-7xl mx-auto md:grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2 className="inline-block mb-8">
            <span className="font-display font-black text-[#9F3F5C] text-2xl md:text-4xl tracking-tight normal-case">
              {typedAboutTitle}
              {typedAboutTitle.length < aboutTitle.length ? (
                <span className="inline-block w-[0.08em] h-[0.95em] ml-[0.08em] bg-[#9F3F5C] align-[-0.08em] animate-pulse" />
              ) : null}
            </span>
          </h2>

          <h2 className="font-editorial text-[#8F3E59] text-2xl md:text-4xl leading-[1.15] tracking-tight mb-8">
            Luxury Beauty Salon in
            <br />
            Dubai
          </h2>

          <div className="space-y-5 text-muted-foreground text-base leading-relaxed max-w-xl">
            <p>
              Where beauty meets precision, with a signature touch of luxury.
              Glitz N Glam beauty salon is a sanctuary where craft meets care. Our stylists,
              colorists, and artists collaborate with each guest to create looks
              that feel honest, modern, and entirely their own.
            </p>
          </div>

          <button className="mt-8 px-8 py-4 bg-[#9F3F5C] text-white font-display text-sm tracking-[0.06em] hover:bg-[#8E3852] transition-colors">
            Book a Visit
          </button>
        </div>

        <div className="w-full md:max-w-lg md:justify-self-end">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <video
              ref={desktopVideoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/about.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};
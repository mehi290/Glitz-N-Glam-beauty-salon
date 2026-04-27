export const About = () => {
  return (
    <section
      id="about"
      className="relative bg-background py-20 md:py-28 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left — copy */}
        <div className="order-2 md:order-1">
          <h2 className="inline-block mb-8">
            <span className="font-display font-black text-foreground text-3xl md:text-5xl tracking-tight normal-case">
              Trex Beaux Experience
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
              Tres Beaux is a sanctuary where craft meets care. Our stylists,
              colorists, and artists collaborate with each guest to create looks
              that feel honest, modern, and entirely their own.
            </p>
            </div>

          <button className="mt-8 px-8 py-4 bg-[#9F3F5C] text-white font-display text-sm tracking-[0.06em] hover:bg-[#8E3852] transition-colors">
            Book a Visit
          </button>
        </div>

        {/* Right — portrait */}
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <video
              src="/Screen%20Recording%202026-04-27%20182213.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
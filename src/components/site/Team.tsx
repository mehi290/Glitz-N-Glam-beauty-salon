import { TEAM } from "./data";

export const Team = () => {
  return (
    <section id="team" className="bg-background py-24 md:py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <p className="font-display text-[11px] text-muted-foreground mb-4">
          Team — 03
        </p>
        <h2 className="font-editorial text-4xl md:text-6xl leading-tight mb-16 max-w-2xl">
          The artists behind Tres Beaux.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {TEAM.map((member) => (
            <article key={member.role} className="group">
              <div className="aspect-[3/4] overflow-hidden mb-4 bg-muted">
                <img
                  src={member.image}
                  alt={`[PHOTO ${member.name}]`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="font-display text-[10px] text-muted-foreground mb-1">
                {member.role}
              </p>
              <p className="font-editorial text-xl md:text-2xl">{member.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
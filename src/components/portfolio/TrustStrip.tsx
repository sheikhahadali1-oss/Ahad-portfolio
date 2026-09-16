import { disciplines } from "@/content/portfolio";
import { Reveal } from "./Reveal";

export function TrustStrip() {
  return (
    <section aria-label="Areas of work" className="border-y border-border bg-surface/70">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[auto_1fr] md:items-center md:gap-14">
        <Reveal className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {disciplines.map((item) => (
            <span
              key={item}
              className="font-display text-base font-semibold tracking-tight md:text-lg"
            >
              {item}
            </span>
          ))}
        </Reveal>
        <Reveal delay={100} className="md:border-l md:border-border md:pl-14">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            From idea to launch, I help businesses turn their online presence into a professional
            digital experience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

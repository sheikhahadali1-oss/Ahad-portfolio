import { processSteps } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Process() {
  return (
    <section aria-labelledby="process-title" className="bg-surface/60 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Process"
          title="My Work Process"
          subtitle="A straightforward path from first conversation to a launched, optimized website."
          className="[&>h2]:scroll-mt-24"
        />
        <span id="process-title" className="sr-only">
          My work process
        </span>

        <div className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute top-[2.1rem] right-0 left-0 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block"
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.number} delay={index * 110} as="li">
                <div className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand font-mono text-sm font-semibold text-primary-foreground">
                    {step.number}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mt-6 block h-0.5 w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-16"
                  />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

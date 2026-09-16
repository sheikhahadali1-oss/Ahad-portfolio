import { certifications, experience } from "@/content/portfolio";
import { Award, ExternalLink } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Professional Journey"
          subtitle="Areas of professional experience across commercial operations, marketing and web work."
        />

        <ol className="mt-14 relative space-y-8 border-l border-border pl-8 md:pl-10">
          {experience.map((item, index) => (
            <Reveal key={item.area} delay={index * 90} as="li" className="relative">
              <span
                aria-hidden="true"
                className="absolute top-6 -left-[2.4rem] grid h-6 w-6 place-items-center rounded-full border border-border bg-card md:-left-[3.15rem]"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <div className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift">
                <h3 className="font-display text-lg font-semibold md:text-xl">{item.area}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-20">
          <SectionHeader
            eyebrow="Learning"
            title="Continuous Learning"
            subtitle="Areas of training and certification I keep building on."
            headingLevel="h3"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <Reveal key={item.title} delay={index * 50}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    {item.verifyUrl ? (
                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                      >
                        Verify
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

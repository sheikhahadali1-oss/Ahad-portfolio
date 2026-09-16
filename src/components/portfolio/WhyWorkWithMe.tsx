import {
  Layers,
  MessageSquare,
  MonitorSmartphone,
  Search,
  Target,
  type LucideIcon,
} from "lucide-react";
import { whyWorkWithMe } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons: Record<string, LucideIcon> = {
  target: Target,
  layers: Layers,
  search: Search,
  devices: MonitorSmartphone,
  chat: MessageSquare,
};

export function WhyWorkWithMe() {
  return (
    <section aria-label="Why work with me" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Why me"
          title="Why Work With Me"
          subtitle="Practical benefits you can expect while working on your project."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMe.map((item, index) => {
            const Icon = icons[item.icon] ?? Target;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={350}>
            <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-brand p-7 text-primary-foreground shadow-lift">
              <p className="font-display text-xl leading-snug font-semibold">
                Ready to strengthen your online presence?
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-card px-5 py-3 text-sm font-semibold text-foreground transition-transform duration-200 hover:-translate-y-0.5"
              >
                Start a Project
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

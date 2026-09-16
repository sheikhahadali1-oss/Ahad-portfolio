import {
  Code2,
  LayoutTemplate,
  Megaphone,
  Palette,
  Search,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const icons: Record<string, LucideIcon> = {
  palette: Palette,
  code: Code2,
  layout: LayoutTemplate,
  search: Search,
  cart: ShoppingCart,
  megaphone: Megaphone,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-surface/60 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Services"
          title="What I Can Help You With"
          subtitle="Design, development and marketing support that fits the way businesses actually work online."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon] ?? Code2;
            return (
              <Reveal key={service.number} delay={index * 70}>
                <article className="group h-full rounded-3xl border border-border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-gradient-brand group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

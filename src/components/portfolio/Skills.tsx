import { useState } from "react";
import { skillGroups } from "@/content/portfolio";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const [active, setActive] = useState<string>(skillGroups[0]?.id ?? "");
  const activeGroup = skillGroups.find((group) => group.id === active) ?? skillGroups[0];

  if (!activeGroup) return null;

  return (
    <section id="skills" className="scroll-mt-24 bg-surface/60 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Tools, Platforms & Disciplines"
          subtitle="Capabilities grouped by the kind of work they support — pick a category to explore."
        />

        <Reveal delay={100} className="mt-12">
          <div role="tablist" aria-label="Skill categories" className="flex flex-wrap gap-2">
            {skillGroups.map((group) => (
              <button
                key={group.id}
                role="tab"
                type="button"
                aria-selected={active === group.id}
                onClick={() => setActive(group.id)}
                className={cn(
                  "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                  active === group.id
                    ? "border-transparent bg-gradient-brand text-primary-foreground shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {group.title}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="mt-8">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft md:p-9">
            <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              {activeGroup.title}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-3">
              {activeGroup.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/60"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 70}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                <p className="font-display text-base font-semibold">{group.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {group.skills.slice(0, 4).join(" · ")}
                  {group.skills.length > 4 ? " · …" : ""}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

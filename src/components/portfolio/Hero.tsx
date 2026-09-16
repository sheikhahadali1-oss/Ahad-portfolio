import { ArrowRight, ArrowUpRight, BarChart3, Search, TrendingUp } from "lucide-react";
import { profile } from "@/content/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]"
      />
      <div className="section-shell relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="text-[0.7rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase sm:text-xs">
              {profile.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-[2.35rem] leading-[1.06] font-semibold sm:text-5xl lg:text-[3.65rem]">
              I Build Digital Experiences That{" "}
              <span className="text-gradient-brand">Help Businesses Grow.</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.heroSupport}
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-200 hover:-translate-y-0.5"
              >
                View My Work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Let's Work Together
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-soft">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </p>
          </Reveal>
        </div>

        <Reveal delay={180} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

/** Code-built visual: a browser frame with SEO / analytics signals. No stock portraits. */
function HeroVisual() {
  const bars = [38, 55, 46, 68, 60, 82, 74];

  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[2.5rem] bg-gradient-accent opacity-15 blur-2xl"
      />
      <div className="relative rounded-3xl border border-border bg-card p-4 shadow-lift">
        {/* Profile-photo slot: replace with an <img> once a professional photo is provided. */}
        <div className="flex items-center gap-3 border-b border-border pb-4">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
          </div>
          <div className="flex-1 rounded-full bg-secondary px-3 py-1.5 font-mono text-[0.7rem] text-muted-foreground">
            yourbusiness.com
          </div>
        </div>

        <div className="grid gap-4 pt-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-gradient-brand p-4 text-primary-foreground sm:col-span-2">
            <p className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase opacity-80">
              Website performance
            </p>
            <div className="mt-4 flex h-24 items-end gap-2" aria-hidden="true">
              {bars.map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-md bg-primary-foreground/25 last:bg-accent"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <p className="mt-3 text-sm opacity-90">Fast, responsive, search-ready builds</p>
          </div>

          <MetricCard icon={<Search className="h-4 w-4" />} label="SEO" value="On-page & technical" />
          <MetricCard icon={<BarChart3 className="h-4 w-4" />} label="Analytics" value="Tracked & reviewed" />
          <MetricCard
            icon={<TrendingUp className="h-4 w-4" />}
            label="Growth"
            value="Conversion focused"
            className="sm:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon,
  label,
  value,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-4 ${className ?? ""}`}>
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-card text-accent-foreground">
        {icon}
      </span>
      <p className="mt-3 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

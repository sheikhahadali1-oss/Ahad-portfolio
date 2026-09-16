import { Check, Compass, MapPin, Briefcase } from "lucide-react";
import { aboutCapabilities, profile } from "@/content/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader
            eyebrow="About"
            title="A Digital Professional Focused on Results"
            subtitle="I'm Sheikh Ahad Ali, a digital professional with experience across web design, development, SEO, digital marketing, and e-commerce. I enjoy combining design, technology, and marketing to create websites that are not only visually professional but also useful for real businesses."
          />

          <Reveal delay={120} className="mt-10">
            <h3 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
              My work includes
            </h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {aboutCapabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm md:text-base">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            {/* Profile photo area — add an image later without changing this layout. */}
            <div className="flex items-center gap-4">
              {profile.profileImage ? (
                <img
                  src={profile.profileImage}
                  alt={`Portrait of ${profile.name}`}
                  loading="lazy"
                  className="h-16 w-16 rounded-2xl object-cover"
                />
              ) : (
                <span
                  aria-hidden="true"
                  className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-brand font-display text-lg font-semibold text-primary-foreground"
                >
                  SA
                </span>
              )}
              <div>
                <p className="font-display text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.headline}</p>
              </div>
            </div>

            <dl className="mt-7 space-y-4 border-t border-border pt-6">
              <ProfileRow
                icon={<MapPin className="h-4 w-4" aria-hidden="true" />}
                label="Based in"
                value={profile.basedIn}
              />
              <ProfileRow
                icon={<Compass className="h-4 w-4" aria-hidden="true" />}
                label="Focus"
                value={profile.focus}
              />
              <ProfileRow
                icon={<Briefcase className="h-4 w-4" aria-hidden="true" />}
                label="Availability"
                value={profile.availabilityType}
              />
            </dl>

            <p className="mt-7 rounded-2xl bg-surface p-4 text-sm leading-relaxed text-muted-foreground">
              {profile.positioning}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProfileRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="flex items-center gap-2.5 text-sm text-muted-foreground">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-primary">
          {icon}
        </span>
        {label}
      </dt>
      <dd className="text-right text-sm font-medium">{value}</dd>
    </div>
  );
}

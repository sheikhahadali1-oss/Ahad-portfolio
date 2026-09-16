import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  headingLevel?: "h2" | "h3";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  headingLevel: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl leading-tight font-semibold sm:text-4xl md:text-[2.6rem]">
        {title}
      </Heading>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

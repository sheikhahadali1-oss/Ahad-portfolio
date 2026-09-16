import { ArrowRight } from "lucide-react";
import { moreProjects, projects } from "@/content/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          subtitle="A selection of websites and digital projects I've designed and developed."
        />

        <div className="mt-14 space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 90}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-20">
          <SectionHeader
            eyebrow="More"
            title="More Projects"
            subtitle="Additional websites and digital projects will be added here."
            headingLevel="h3"
          />

          {moreProjects.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {moreProjects.map((project, index) => (
                <Reveal key={project.id} delay={index * 70}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={100} className="mt-10">
              <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-dashed border-border bg-surface/70 p-8 md:flex-row md:items-center md:p-10">
                <div>
                  <h4 className="font-display text-xl font-semibold md:text-2xl">
                    Have a project in mind? Let's build it.
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground md:text-base">
                    Tell me about the website you need and I'll suggest a practical way forward.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

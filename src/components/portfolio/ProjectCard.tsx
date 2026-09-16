import { ArrowUpRight, FileText, Github, Globe } from "lucide-react";
import type { Project } from "@/content/portfolio";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`group grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${
        featured ? "lg:grid-cols-2" : ""
      }`}
    >
      <div className="relative overflow-hidden bg-surface">
        {project.image ? (
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            width={1200}
            height={750}
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid aspect-[16/10] place-items-center text-sm text-muted-foreground">
            Project image
          </div>
        )}
        <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-col p-7 md:p-8">
        <h3 className="font-display text-xl font-semibold md:text-2xl">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3 pt-1">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              View Live Website
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
          ) : null}
          {project.caseStudyUrl ? (
            <a
              href={project.caseStudyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              Case Study
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

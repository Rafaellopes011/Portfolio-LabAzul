import { ActionLink } from "@/components/ActionLink";
import { SectionTag } from "@/components/Decor";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectFeatured } from "@/components/ProjectFeatured";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { featuredProject, secondaryProjects } from "@/data/projects";
import { Fragment } from "react";

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="relative bg-shell py-28 text-deep lg:py-40"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <SectionTag index="05" className="text-ocean">
              Portfólio
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="projetos-titulo"
              lines={[
                <Fragment key={0}>Projetos que transformam</Fragment>,
                <Fragment key={1}>
                  pesquisa em{" "}
                  <span className="editorial font-normal text-ocean">
                    impacto
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2rem,4.6vw,3.9rem)]"
            />
          </div>

          <Reveal
            delay={0.12}
            className="col-span-12 lg:col-span-3 lg:col-start-10 lg:text-right"
          >
            <ActionLink href="/projetos" variant="quiet" className="text-ocean">
              Todos os projetos
            </ActionLink>
          </Reveal>
        </div>

        <div className="mt-20 lg:mt-28">
          <ProjectFeatured project={featuredProject} />
        </div>

        <div className="mt-24 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:mt-32 lg:grid-cols-3">
          {secondaryProjects.slice(0, 3).map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} index={index + 2} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-deep/12 pt-8">
          <p className="eyebrow text-[0.625rem] text-deep/45">
            {secondaryProjects.length + 1} projetos · pesquisa aplicada ·
            2025—2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}

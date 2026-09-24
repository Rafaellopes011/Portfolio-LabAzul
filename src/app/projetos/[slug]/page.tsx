import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { PublicationRow } from "@/components/PublicationRow";
import { TeamCard } from "@/components/TeamCard";
import { SectionTag } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { FinalCTA } from "@/sections/FinalCTA";
import { getProject, getRelatedProjects, projects } from "@/data/projects";
import { publications } from "@/data/publications";
import { team } from "@/data/team";
import { Fragment } from "react";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Projeto não encontrado" };

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjetoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const related = getRelatedProjects(slug);
  const relatedPublications = publications.slice(0, 2);
  const crew = team.slice(0, 4);

  const blocks = [
    { tag: "Sobre o projeto", text: project.description },
    project.objective && { tag: "Objetivo", text: project.objective },
    project.methodology && { tag: "Metodologia", text: project.methodology },
  ].filter(Boolean) as { tag: string; text: string }[];

  return (
    <>
      <PageHero
        eyebrow={project.categories.join(" · ")}
        lines={[
          <Fragment key={0}>
            {project.title}
            <span className="text-cyan">.</span>
          </Fragment>,
        ]}
        description={project.subtitle}
        image={project.coverImage}
        meta={[
          project.year
            ? { term: "Ano", value: String(project.year) }
            : { term: "Ano", value: "—" },
          project.location
            ? { term: "Território", value: project.location }
            : { term: "Território", value: "—" },
          {
            term: "Parceiros",
            value: String(project.partners?.length ?? 0).padStart(2, "0"),
          },
        ]}
      />

      {/* Corpo editorial */}
      <section className="bg-shell py-24 text-deep lg:py-32">
        <div className="shell grid grid-cols-12 gap-x-8 gap-y-14">
          <div className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <SectionTag index="01" className="text-ocean">
                Dossiê
              </SectionTag>
              <ul className="mt-6 flex flex-col gap-2 text-[0.875rem] text-deep/50">
                {blocks.map((block) => (
                  <li key={block.tag}>{block.tag}</li>
                ))}
                {project.results && <li>Resultados</li>}
                {project.partners && <li>Parceiros</li>}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:col-start-5">
            {blocks.map((block, index) => (
              <Reveal
                key={block.tag}
                delay={index * 0.08}
                className="border-t border-deep/12 py-10 first:border-t-0 first:pt-0"
              >
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
                  {block.tag}
                </h2>
                <p className="prose-ocean mt-5 max-w-2xl text-deep/70">
                  {block.text}
                </p>
              </Reveal>
            ))}

            {project.partners && (
              <Reveal className="border-t border-deep/12 py-10">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
                  Parceiros
                </h2>
                <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  {project.partners.map((partner, index) => (
                    <li
                      key={partner}
                      className="flex items-baseline gap-4 border-b border-deep/10 pb-4"
                    >
                      <span className="eyebrow text-[0.5625rem] text-ocean">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1rem] font-bold tracking-[-0.02em]">
                        {partner}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {project.results && (
              <Reveal className="border-t border-deep/12 py-10">
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
                  Resultados
                </h2>
                <ul className="mt-6 flex flex-col">
                  {project.results.map((result, index) => (
                    <li
                      key={result}
                      className="flex gap-6 border-b border-deep/10 py-5"
                    >
                      <span className="eyebrow pt-1 text-[0.5625rem] text-ocean">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="max-w-xl text-[1rem] leading-relaxed text-deep/70">
                        {result}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Galeria */}
      {project.gallery && project.gallery.length > 0 && (
        <section
          aria-label="Galeria do projeto"
          className="bg-paper py-20 text-deep lg:py-28"
        >
          <div className="shell">
            <SectionTag index="02" className="text-ocean">
              Galeria
            </SectionTag>

            <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
              {project.gallery.map((src, index) => (
                <Reveal
                  key={src}
                  delay={index * 0.08}
                  className={
                    project.gallery!.length % 2 === 1 && index === 0
                      ? "md:col-span-2"
                      : ""
                  }
                >
                  <div
                    className={`relative overflow-hidden rounded-[2px] bg-deep ${
                      project.gallery!.length % 2 === 1 && index === 0
                        ? "aspect-[16/8]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`${project.title} — registro ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-water)] hover:scale-[1.03]"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Publicações e equipe */}
      <section className="bg-shell py-24 text-deep lg:py-32">
        <div className="shell grid grid-cols-12 gap-x-8 gap-y-20">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="03" className="text-ocean">
              Publicações relacionadas
            </SectionTag>
            <div className="mt-8">
              {relatedPublications.map((publication) => (
                <PublicationRow
                  key={publication.id}
                  publication={publication}
                />
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <SectionTag index="04" className="text-ocean">
              Equipe envolvida
            </SectionTag>
            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-10">
              {crew.map((member, index) => (
                <TeamCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projetos relacionados */}
      <section className="bg-paper py-24 text-deep lg:py-32">
        <div className="shell">
          <SectionTag index="05" className="text-ocean">
            Continue explorando
          </SectionTag>
          <HeadingReveal
            as="h2"
            lines={[
              <Fragment key={0}>
                Projetos{" "}
                <span className="editorial font-normal text-ocean">
                  relacionados
                </span>
                .
              </Fragment>,
            ]}
            className="mt-6 text-[clamp(1.9rem,4vw,3.2rem)]"
          />

          <div className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.1}>
                <ProjectCard project={item} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}

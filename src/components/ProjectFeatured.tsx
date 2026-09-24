import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ActionLink";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/projects";

export function ProjectFeatured({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="group/card grain relative isolate overflow-hidden rounded-[3px] bg-abyss text-paper shadow-[0_40px_80px_-40px_rgba(10,34,64,0.55)]">
        {/* Imagem: faixa no topo no mobile, fundo inteiro no desktop */}
        <Link
          href={`/projetos/${project.slug}`}
          tabIndex={-1}
          aria-hidden="true"
          className="relative block aspect-[16/10] overflow-hidden lg:absolute lg:inset-0 lg:aspect-auto"
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[30%_center] transition-transform duration-[1800ms] ease-[var(--ease-water)] group-hover/card:scale-[1.03]"
            />
          ) : (
            <PortraitPlaceholder
              name={project.title}
              note="Imagem a inserir"
              seed={project.id}
            />
          )}
          {/* Mobile: funde a base da foto no painel */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,var(--color-abyss)_100%)] lg:hidden"
          />
          {/* Desktop: a água "escurece" em direção ao texto */}
          <div
            aria-hidden="true"
            className="absolute inset-0 hidden bg-[linear-gradient(270deg,var(--color-abyss)_0%,rgba(10,34,64,0.92)_34%,rgba(10,34,64,0.35)_62%,rgba(10,34,64,0.05)_100%)] lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 hidden h-1/3 bg-[linear-gradient(0deg,rgba(10,34,64,0.7),transparent)] lg:block"
          />
        </Link>

        <span className="eyebrow absolute top-6 left-6 z-10 flex items-center gap-2.5 rounded-full border border-paper/20 bg-abyss/40 px-3.5 py-2 text-[0.625rem] text-paper backdrop-blur-md lg:top-8 lg:left-8">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-cyan/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          Projeto em destaque
        </span>

        <div className="relative grid grid-cols-12 lg:min-h-[560px]">
          <div className="col-span-12 flex flex-col justify-center px-6 pt-2 pb-10 sm:px-10 lg:col-span-6 lg:col-start-7 lg:py-16 lg:pr-14 lg:pl-4 xl:col-span-5 xl:col-start-8">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {project.categories.map((category, i) => (
                <li
                  key={category}
                  className="eyebrow flex items-center gap-3 text-[0.625rem] text-cyan"
                >
                  {i > 0 && (
                    <span aria-hidden="true" className="h-px w-3 bg-cyan/40" />
                  )}
                  {category}
                </li>
              ))}
            </ul>

            <h3 className="mt-5 font-display text-[clamp(2.4rem,4.6vw,3.8rem)] leading-[0.92] font-extrabold tracking-[-0.045em]">
              <Link
                href={`/projetos/${project.slug}`}
                className="transition-colors duration-500 hover:text-foam"
              >
                {project.title}
              </Link>
            </h3>

            {project.subtitle && (
              <p className="editorial mt-4 max-w-[28ch] text-[1.25rem] leading-snug text-foam">
                {project.subtitle}
              </p>
            )}

            <p className="mt-6 max-w-[46ch] text-[0.9375rem] leading-relaxed text-paper/70">
              {project.description}
            </p>

            <div className="mt-9">
              <ActionLink href={`/projetos/${project.slug}`}>
                Conhecer projeto
              </ActionLink>
            </div>
          </div>
        </div>

        {project.partners && (
          <dl className="relative flex flex-col gap-3 border-t border-paper/10 bg-abyss/60 px-6 py-5 backdrop-blur-sm sm:flex-row sm:items-center sm:gap-8 sm:px-10 lg:px-8">
            <dt className="eyebrow shrink-0 text-[0.5625rem] text-paper/45">
              Parceiros
            </dt>
            <dd className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.8125rem] text-paper/80">
              {project.partners.map((partner, i) => (
                <span key={partner} className="flex items-center gap-3">
                  {i > 0 && (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-cyan/60" />
                  )}
                  {partner}
                </span>
              ))}
            </dd>
          </dl>
        )}
      </article>
    </Reveal>
  );
}

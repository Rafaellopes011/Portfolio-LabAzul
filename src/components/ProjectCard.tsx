import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ActionLink";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <article className="group/card h-full">
      <Link
        href={`/projetos/${project.slug}`}
        className="flex h-full flex-col"
        aria-label={`${project.title} — ver projeto`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2px] bg-deep">
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 32vw"
              className="object-cover transition-transform duration-[1300ms] ease-[var(--ease-water)] group-hover/card:scale-[1.04]"
            />
          ) : (
            <PortraitPlaceholder
              name={project.title}
              note="Imagem a inserir"
              seed={project.id}
            />
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(190deg,rgba(10,34,64,0.5)_0%,rgba(10,34,64,0.16)_38%,rgba(10,34,64,0.62)_100%)] opacity-85 transition-opacity duration-700 group-hover/card:opacity-65"
          />

          {typeof index === "number" && (
            <span className="eyebrow absolute top-5 left-5 text-[0.5625rem] text-paper/70">
              {String(index).padStart(2, "0")}
            </span>
          )}

          {project.year && (
            <span className="eyebrow absolute right-5 bottom-5 text-[0.5625rem] text-paper/70">
              {project.year}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col pt-7">
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {project.categories.slice(0, 3).map((category) => (
              <li
                key={category}
                className="eyebrow text-[0.5625rem] text-ocean/80"
              >
                {category}
              </li>
            ))}
          </ul>

          <h3 className="mt-4 font-display text-[1.5rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-deep lg:text-[1.75rem]">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-2 text-[0.9375rem] leading-snug text-deep/55">
              {project.subtitle}
            </p>
          )}

          <p className="mt-5 mb-7 line-clamp-3 min-h-[4.5rem] text-[0.9375rem] leading-relaxed text-deep/65">
            {project.description}
          </p>

          <span className="mt-auto flex items-center gap-3 border-t border-deep/12 pt-5 font-display text-[0.6875rem] font-bold tracking-[0.12em] text-deep uppercase transition-colors duration-500 group-hover/card:text-ocean">
            Ver projeto
            <Arrow className="w-6 text-ocean" />
          </span>
        </div>
      </Link>
    </article>
  );
}

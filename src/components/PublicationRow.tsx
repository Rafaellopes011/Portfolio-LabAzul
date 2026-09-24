import { Arrow } from "@/components/ActionLink";
import type { Publication } from "@/data/publications";

export function PublicationRow({ publication }: { publication: Publication }) {
  return (
    <a
      href={publication.url ?? "#"}
      className="group/card relative grid grid-cols-12 items-baseline gap-x-4 gap-y-3 border-b border-deep/12 py-8 transition-colors duration-500 hover:border-ocean/40"
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ocean transition-transform duration-700 ease-[var(--ease-water)] group-hover/card:scale-x-100"
      />

      <span className="eyebrow col-span-4 text-[0.625rem] text-ocean sm:col-span-2">
        {publication.year}
      </span>

      <span className="eyebrow col-span-8 text-[0.5625rem] text-deep/40 sm:col-span-2 sm:order-last sm:text-right">
        {publication.type}
      </span>

      <span className="col-span-12 sm:col-span-8">
        <span className="block font-display text-[1.125rem] leading-snug font-bold tracking-[-0.025em] text-deep transition-colors duration-500 group-hover/card:text-ocean lg:text-[1.375rem]">
          {publication.title}
        </span>
        <span className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.875rem] text-deep/55">
          <span>{publication.authors}</span>
          <span aria-hidden="true" className="h-3 w-px bg-deep/20" />
          <span className="italic">{publication.venue}</span>
        </span>
        <span className="mt-4 flex items-center gap-3 font-display text-[0.625rem] font-bold tracking-[0.14em] text-deep/50 uppercase transition-colors duration-500 group-hover/card:text-ocean">
          Acessar publicação
          <Arrow className="w-5" />
        </span>
      </span>
    </a>
  );
}

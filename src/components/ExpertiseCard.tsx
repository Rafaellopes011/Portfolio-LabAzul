import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ActionLink";
import type { ExpertiseArea } from "@/data/expertise";

export function ExpertiseCard({
  area,
  priority = false,
}: {
  area: ExpertiseArea;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projetos?categoria=${encodeURIComponent(area.filter)}`}
      className="group/card grain relative flex overflow-hidden rounded-[2px] bg-deep text-paper"
      aria-label={`${area.title} — ver projetos relacionados`}
    >
      <div
        className="relative min-h-[30rem] w-full sm:min-h-0 sm:aspect-[16/11]"
      >
        <Image
          src={area.image}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 46vw"
          className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-water)] group-hover/card:scale-[1.05]"
        />

        {/* Coluna d'água sobre a imagem */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(185deg,rgba(10,34,64,0.35)_0%,rgba(10,34,64,0.62)_45%,rgba(10,34,64,0.93)_100%)] transition-opacity duration-700 group-hover/card:opacity-90"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover/card:opacity-100 bg-[radial-gradient(90%_70%_at_50%_100%,rgba(37,183,201,0.32)_0%,rgba(37,183,201,0)_70%)]"
        />

        <div className="relative flex min-h-[30rem] flex-col justify-between p-7 sm:absolute sm:inset-0 sm:min-h-0 lg:p-10">
          <div className="flex items-start justify-between gap-6">
            <span className="eyebrow text-[0.5625rem] text-foam/80">
              {area.index} / Área
            </span>
            <span className="eyebrow text-[0.5625rem] text-paper/40">
              {area.depth}
            </span>
          </div>

          <div>
            <h3 className="max-w-[16ch] font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.02] font-extrabold tracking-[-0.035em]">
              {area.title}
            </h3>

            <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-paper/65">
              {area.lead}
            </p>

            {/* Subáreas: sempre visíveis no mobile, reveladas no hover no desktop */}
            <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-water)] sm:grid-rows-[0fr] sm:group-hover/card:grid-rows-[1fr]">
              <ul className="mt-5 flex min-h-0 flex-wrap gap-x-5 gap-y-2 overflow-hidden text-[0.8125rem] text-foam/85">
                {area.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-cyan"
                    />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>

            <span className="mt-7 flex items-center gap-3 font-display text-[0.6875rem] font-bold tracking-[0.12em] text-paper uppercase">
              Ver projetos
              <Arrow className="w-6 text-cyan" />
            </span>
          </div>
        </div>

        {/* Fio de luz na borda inferior */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan via-foam to-transparent transition-transform duration-1000 ease-[var(--ease-water)] group-hover/card:scale-x-100"
        />
      </div>
    </Link>
  );
}

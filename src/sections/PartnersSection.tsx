import { SectionTag } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { partners } from "@/data/partners";
import { Fragment } from "react";

export function PartnersSection() {
  const loop = [...partners, ...partners];

  return (
    <section
      id="parceiros"
      aria-labelledby="parceiros-titulo"
      className="relative overflow-hidden bg-paper py-24 text-deep lg:py-32"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-6">
            <SectionTag index="10" className="text-ocean">
              Rede
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="parceiros-titulo"
              lines={[
                <Fragment key={0}>Construindo soluções</Fragment>,
                <Fragment key={1}>
                  em{" "}
                  <span className="editorial font-normal text-ocean">rede</span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(1.9rem,4vw,3.2rem)]"
            />
          </div>

          <Reveal
            delay={0.1}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[0.9375rem] leading-relaxed text-deep/60">
              Universidades, indústria, fomento, poder público e organizações
              comunitárias que caminham com o laboratório.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Faixa contínua de parceiros — pausa ao passar o mouse */}
      <Reveal className="mt-16 lg:mt-20">
        <div
          className="relative flex overflow-hidden border-y border-deep/12 py-9"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="animate-marquee flex w-max shrink-0 items-center gap-16 pr-16 hover:[animation-play-state:paused] lg:gap-24 lg:pr-24">
            {loop.map((partner, index) => (
              <li
                key={`${partner.mark}-${index}`}
                className="group/mark flex shrink-0 flex-col items-start gap-2"
                title={partner.name}
              >
                <span className="font-display text-[1.35rem] font-extrabold tracking-[-0.03em] text-deep/35 transition-colors duration-500 group-hover/mark:text-ocean lg:text-[1.75rem]">
                  {partner.mark}
                </span>
                <span className="eyebrow text-[0.5rem] text-deep/25 transition-colors duration-500 group-hover/mark:text-deep/50">
                  {partner.kind}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="shell">
        <p className="eyebrow mt-6 text-[0.5625rem] text-deep/35">
          Marcas exibidas em lockup tipográfico provisório — substituir pelos
          logos oficiais.
        </p>
      </div>
    </section>
  );
}

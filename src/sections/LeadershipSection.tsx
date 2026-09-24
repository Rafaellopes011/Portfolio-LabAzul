import Image from "next/image";
import { Bathymetry, SectionTag, WaveEdge } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { ActionLink } from "@/components/ActionLink";
import { Fragment } from "react";

const areas = [
  "Economia Azul",
  "Tecnologias Imersivas",
  "Biotecnologia Azul",
  "Governança Costeira",
];

export function LeadershipSection() {
  return (
    <section
      id="lideranca"
      aria-labelledby="lideranca-titulo"
      className="grain relative overflow-hidden bg-deep py-28 text-paper lg:py-40"
    >
      <Bathymetry
        className="absolute inset-x-0 top-0 h-[70%] w-full text-foam"
        lines={7}
        opacity={0.12}
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 items-center gap-x-8 gap-y-14">
          <Reveal className="col-span-12 sm:col-span-9 lg:col-span-5">
            <figure className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-tr-[8rem] rounded-bl-[2px]">
                <Image
                  src="/images/janaina-lopes.jpg"
                  alt="Retrato da Profa. Janaina Lopes"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 40vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>

              {/* Moldura deslocada — gesto gráfico, não borda decorativa */}
              <span
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 -z-10 h-40 w-40 border-b border-l border-cyan/40"
              />

              <figcaption className="eyebrow mt-5 flex items-center gap-3 text-[0.5625rem] text-paper/45">
                <span className="h-px w-10 bg-current" />
                Unifor · Lab Azul
              </figcaption>
            </figure>
          </Reveal>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <SectionTag index="06" className="text-cyan">
              Liderança científica
            </SectionTag>

            <HeadingReveal
              as="h2"
              id="lideranca-titulo"
              lines={[
                <Fragment key={0}>Profa.</Fragment>,
                <Fragment key={1}>
                  <span className="editorial font-normal text-foam">
                    Janaina Lopes
                  </span>
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2.4rem,5.2vw,4.3rem)]"
            />

            <Reveal delay={0.12} className="mt-8">
              <div className="prose-ocean text-paper/70">
                <p>
                  Professora e pesquisadora da Universidade de Fortaleza,
                  engenheira de pesca e doutora em Desenvolvimento e Meio
                  Ambiente.
                </p>
                <p>
                  No Lab Azul, lidera estratégias e projetos que conectam
                  universidades, setor produtivo e comunidades em torno da
                  economia azul e da inovação sustentável.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-12">
              <ul className="grid grid-cols-1 border-t border-paper/12 sm:grid-cols-2">
                {areas.map((area, index) => (
                  <li
                    key={area}
                    className={`flex items-baseline gap-4 border-b border-paper/12 py-5 ${
                      index % 2 === 0 ? "sm:pr-6" : "sm:pl-6 sm:border-l"
                    }`}
                  >
                    <span className="eyebrow text-[0.5625rem] text-cyan/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[1.0625rem] font-bold tracking-[-0.02em]">
                      {area}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-10 flex flex-wrap gap-8">
              {/* TODO: link do Currículo Lattes — aguardando a URL */}
              <ActionLink
                href="https://www.linkedin.com/in/janaina-lopes-0838a937/"
                variant="quiet"
                className="text-foam"
              >
                LinkedIn
              </ActionLink>
            </Reveal>
          </div>
        </div>
      </div>
      <WaveEdge className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-paper lg:h-16" />
    </section>
  );
}

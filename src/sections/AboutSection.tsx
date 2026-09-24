import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { DepthRule, SectionTag } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { Fragment } from "react";

const tags = ["Pesquisa", "Inovação", "Economia Azul", "Impacto Social"];

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="relative bg-shell py-28 text-deep lg:py-40"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-start gap-x-8 gap-y-16">
          {/* Composição de imagens */}
          <div className="col-span-12 lg:col-span-6">
            <Reveal className="relative">
              <figure className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[7rem] rounded-br-[7rem] sm:aspect-[5/6]">
                  <Image
                    src="/images/feira-conhecimento.jpg"
                    alt="Profa. Janaina Lopes apresenta o Lab Azul Unifor na Feira do Conhecimento 2025"
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover object-[72%_50%]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(200deg,rgba(10,34,64,0)_45%,rgba(10,34,64,0.55)_100%)]"
                  />
                </div>

                <figcaption className="eyebrow mt-5 flex items-center gap-3 text-[0.5625rem] text-deep/45">
                  <span className="h-px w-10 bg-current" />
                  Feira do Conhecimento 2025 · Fortaleza
                </figcaption>
              </figure>

              {/* Segunda imagem, deslocada, quebrando a grade */}
              <div className="absolute -right-2 -bottom-16 hidden w-[42%] lg:block xl:-right-16">
                <div className="relative aspect-square overflow-hidden rounded-tr-[4.5rem] border-[6px] border-shell">
                  <Image
                    src="/images/palco-tec.jpg"
                    alt="Equipe do Lab Azul no Palco TEC da Feira do Conhecimento 2025"
                    fill
                    sizes="22vw"
                    className="object-cover object-[50%_55%]"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <DepthRule
            label="Profundidade 01"
            className="col-span-1 hidden pt-4 text-deep lg:col-start-7 lg:flex"
          />

          {/* Coluna editorial */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 lg:pt-6">
            <SectionTag index="02" className="text-ocean">
              O laboratório
            </SectionTag>

            <HeadingReveal
              as="h2"
              id="sobre-titulo"
              lines={[
                <Fragment key={0}>Pesquisa aplicada</Fragment>,
                <Fragment key={1}>para um oceano</Fragment>,
                <Fragment key={2}>
                  mais{" "}
                  <span className="editorial font-normal text-ocean">
                    sustentável
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2.1rem,4.4vw,3.6rem)]"
            />

            <Reveal delay={0.12} className="mt-9">
              <div className="prose-ocean text-deep/70">
                <p>
                  O Lab Azul — Laboratório de Governança Azul e Cultura Oceânica
                  da Universidade de Fortaleza transforma demandas e desafios
                  relacionados ao oceano e aos territórios costeiros em projetos
                  de pesquisa, inovação e soluções aplicadas.
                </p>
                <p>
                  Atua conectando competências da UNIFOR a parceiros do setor
                  produtivo, poder público e comunidades — em frentes como
                  biotecnologia azul, tecnologias oceânicas, clima e resiliência
                  costeira, governança e novos negócios.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="mt-12">
              <ul className="flex flex-col border-t border-deep/12 sm:flex-row sm:flex-wrap">
                {tags.map((tag, index) => (
                  <li
                    key={tag}
                    className="flex items-baseline gap-3 border-b border-deep/12 py-3 sm:w-1/2 sm:pr-8"
                  >
                    <span className="eyebrow text-[0.5625rem] text-ocean/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-[0.9375rem] font-bold tracking-[-0.015em] text-deep/80">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.26} className="mt-12">
              <ActionLink href="/#areas" variant="quiet" className="text-ocean">
                Ver áreas de atuação
              </ActionLink>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

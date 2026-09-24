"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionTag, WaveEdge } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { Fragment } from "react";

const nodes = [
  {
    index: "01",
    label: "Pesquisa",
    note: "Perguntas científicas nascidas do território costeiro.",
  },
  {
    index: "02",
    label: "Inovação",
    note: "Tecnologia, dados e novos modelos de negócio azuis.",
  },
  {
    index: "03",
    label: "Oceano",
    note: "O mar como sistema vivo, cultura e infraestrutura.",
  },
  {
    index: "04",
    label: "Impacto",
    note: "Políticas, empresas e comunidades transformadas.",
  },
];

export function ConceptSection() {
  const reduce = useReducedMotion();

  return (
    <section
      id="conceito"
      aria-labelledby="conceito-titulo"
      className="grain relative overflow-hidden bg-deep py-28 text-paper lg:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="01" className="text-cyan">
              Corrente de trabalho
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="conceito-titulo"
              lines={[
                <Fragment key={0}>Conectamos ciência,</Fragment>,
                <Fragment key={1}>
                  território e{" "}
                  <span className="editorial font-normal text-foam">
                    inovação
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2.1rem,4.6vw,3.9rem)] leading-[0.98]"
            />
          </div>

          <Reveal
            delay={0.15}
            className="col-span-12 self-end lg:col-span-4 lg:col-start-9"
          >
            <p className="prose-ocean text-paper/65">
              O Lab Azul articula competências da UNIFOR com empresas, poder
              público, comunidades e instituições de pesquisa para desenvolver
              soluções para a economia azul.
            </p>
          </Reveal>
        </div>

        {/* Corrente marítima ligando os quatro movimentos */}
        <div className="relative mt-24 lg:mt-36">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
            className="absolute -top-14 left-0 hidden h-28 w-full lg:block"
          >
            <motion.path
              d="M20 78C160 78 190 26 330 26s180 66 320 66 170-66 310-66 200 40 220 40"
              stroke="url(#currentGradient)"
              strokeWidth="1.4"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2.4, ease: [0.16, 0.84, 0.28, 1] }}
            />
            <defs>
              <linearGradient
                id="currentGradient"
                x1="0"
                x2="1200"
                y1="0"
                y2="0"
              >
                <stop offset="0" stopColor="#25B7C9" stopOpacity="0.1" />
                <stop offset="0.5" stopColor="#25B7C9" stopOpacity="0.8" />
                <stop offset="1" stopColor="#BCE8ED" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            <span
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[5px] w-px bg-gradient-to-b from-cyan/60 via-cyan/20 to-transparent lg:hidden"
            />

            {nodes.map((node, index) => (
              <li key={node.label}>
                <Reveal delay={index * 0.12} className="relative pl-9 lg:pl-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 left-0 h-[11px] w-[11px] rounded-full border border-cyan bg-deep lg:static lg:mb-7 lg:block"
                  />
                  <span className="eyebrow block text-[0.5625rem] text-cyan/70 lg:mt-0">
                    {node.index}
                  </span>
                  <h3 className="mt-3 font-display text-[1.6rem] font-extrabold tracking-[-0.03em] lg:text-[1.9rem]">
                    {node.label}
                  </h3>
                  <p className="mt-3 max-w-[22ch] text-[0.9375rem] leading-relaxed text-paper/55">
                    {node.note}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <WaveEdge className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-shell lg:h-16" />
    </section>
  );
}

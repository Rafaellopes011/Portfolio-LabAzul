import { CountUp } from "@/components/CountUp";
import { Bathymetry, SectionTag, WaveEdge } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { Fragment } from "react";

const stats = [
  {
    prefix: "+",
    value: 17,
    label: "Trabalhos publicados",
    note: "Artigos, congressos e relatórios técnicos",
  },
  {
    prefix: "+",
    value: 9,
    label: "Projetos em desenvolvimento",
    note: "Pesquisa aplicada com parceiros e comunidades",
  },
  {
    prefix: "",
    value: 2025,
    label: "Institucionalização",
    note: "Registro no repositório de grupos do CNPq",
  },
];

export function StatsSection() {
  return (
    <section
      aria-labelledby="numeros-titulo"
      className="grain relative overflow-hidden bg-abyss py-24 text-paper lg:py-32"
    >
      <Bathymetry
        className="absolute inset-x-0 -bottom-10 h-full w-full text-cyan"
        lines={8}
        opacity={0.18}
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 items-end gap-y-8">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="03" className="text-cyan">
              Dimensão
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="numeros-titulo"
              lines={[
                <Fragment key={0}>Números que mostram</Fragment>,
                <Fragment key={1}>
                  a dimensão do{" "}
                  <span className="editorial font-normal text-foam">
                    Lab Azul
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(1.9rem,4vw,3.4rem)]"
            />
          </div>
          <Reveal
            delay={0.1}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[0.9375rem] leading-relaxed text-paper/55">
              Um laboratório jovem, com produção científica contínua e projetos
              em execução ao lado de parceiros públicos, privados e
              comunitários.
            </p>
          </Reveal>
        </div>

        <dl className="mt-20 grid gap-px overflow-hidden border-y border-paper/12 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 0.12}
              className={`relative py-12 lg:px-10 ${
                index === 0 ? "lg:pl-0" : ""
              } ${index > 0 ? "border-t border-paper/12 lg:border-t-0 lg:border-l" : ""}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="flex items-start font-display text-[clamp(3.6rem,8vw,6.2rem)] leading-[0.82] font-extrabold tracking-[-0.055em]">
                  {stat.prefix && (
                    <span className="editorial mr-2 text-[0.42em] leading-[1.6] font-normal text-cyan">
                      {stat.prefix}
                    </span>
                  )}
                  <CountUp to={stat.value} />
                </span>

                <span className="mt-7 block font-display text-[1.0625rem] font-bold tracking-[-0.01em] text-paper">
                  {stat.label}
                </span>
                <span className="mt-2 block max-w-[28ch] text-[0.875rem] leading-relaxed text-paper/45">
                  {stat.note}
                </span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
      <WaveEdge className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-paper lg:h-16" />
    </section>
  );
}

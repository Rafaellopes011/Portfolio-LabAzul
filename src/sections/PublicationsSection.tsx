"use client";

import { useState, Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionTag } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { PublicationRow } from "@/components/PublicationRow";
import { publicationFilters, publications } from "@/data/publications";

export function PublicationsSection() {
  const [filter, setFilter] = useState<string>("Todos");

  const list =
    filter === "Todos"
      ? publications
      : publications.filter((publication) => publication.type === filter);

  return (
    <section
      id="publicacoes"
      aria-labelledby="publicacoes-titulo"
      className="relative bg-shell py-28 text-deep lg:py-40"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="08" className="text-ocean">
              Produção científica
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="publicacoes-titulo"
              lines={[
                <Fragment key={0}>O que a pesquisa</Fragment>,
                <Fragment key={1}>
                  deixa{" "}
                  <span className="editorial font-normal text-ocean">
                    registrado
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2rem,4.4vw,3.6rem)]"
            />
          </div>

          <Reveal
            delay={0.1}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <p className="text-[0.9375rem] leading-relaxed text-deep/60">
              Artigos, estudos, relatórios e produções acadêmicas desenvolvidas
              pelo Lab Azul e sua rede de parceiros.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <div
            role="tablist"
            aria-label="Filtrar publicações por tipo"
            className="flex flex-wrap items-center gap-x-7 gap-y-3 border-b border-deep/12 pb-4"
          >
            {publicationFilters.map((item) => {
              const active = item === filter;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(item)}
                  className={`group/btn relative eyebrow py-1 text-[0.625rem] transition-colors duration-400 ${
                    active ? "text-ocean" : "text-deep/45 hover:text-deep"
                  }`}
                >
                  {item}
                  {active && (
                    <motion.span
                      layoutId="publication-filter"
                      className="absolute -bottom-[17px] left-0 h-px w-full bg-ocean"
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 0.84, 0.28, 1],
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((publication) => (
              <motion.div
                key={publication.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.16, 0.84, 0.28, 1] }}
              >
                <PublicationRow publication={publication} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="eyebrow mt-8 text-[0.625rem] text-deep/40">
          {String(list.length).padStart(2, "0")} registros · repositório em
          atualização
        </p>
      </div>
    </section>
  );
}

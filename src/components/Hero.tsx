"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ActionLink } from "@/components/ActionLink";
import { Bathymetry } from "@/components/Decor";
import { site } from "@/data/site";

const EASE = [0.16, 0.84, 0.28, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    // min-h (e não altura fixa): em janelas baixas o hero cresce em vez de
    // empurrar o título para baixo do menu fixo
    <section
      ref={ref}
      className="grain relative flex min-h-svh flex-col justify-end overflow-hidden bg-abyss text-paper"
    >
      {/* Imagem de fundo com paralaxe mínima */}
      <motion.div
        aria-hidden="true"
        style={{ y: reduce ? undefined : imageY }}
        className="absolute inset-0 -top-[14%] h-[114%]"
      >
        <Image
          src="/images/ocean-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Profundidade: coluna d'água + luz entrando pela superfície */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(178deg,rgba(10,34,64,0.88)_0%,rgba(16,47,88,0.55)_42%,rgba(10,34,64,0.9)_88%,rgba(10,34,64,0.98)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[60%] bg-[radial-gradient(70%_100%_at_50%_0%,rgba(37,183,201,0.26)_0%,rgba(37,183,201,0)_70%)]"
      />
      <Bathymetry
        className="absolute inset-x-0 bottom-0 h-[42%] w-full text-foam"
        lines={11}
        opacity={0.22}
      />

      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="shell relative z-10 pt-28 pb-14 lg:pt-48 lg:pb-20"
      >
        <div className="grid grid-cols-12 items-end gap-y-12">
          <div className="col-span-12 xl:col-span-9">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
              className="eyebrow flex items-center gap-3 text-foam"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-cyan opacity-70" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-cyan" />
              </span>
              Lab Azul — Unifor
            </motion.p>

            <h1 className="mt-7 text-[clamp(2rem,min(7.6vw,9.5vh),6.6rem)] leading-[0.94] font-extrabold tracking-[-0.045em] sm:leading-[0.92]">
              {[
                <>Ciência, inovação</>,
                <>e desenvolvimento</>,
                <>
                  para o{" "}
                  <span className="editorial font-normal tracking-[-0.02em] text-foam">
                    oceano
                  </span>
                  <span className="text-cyan">.</span>
                </>,
              ].map((line, index) => (
                <span key={index} className="line-mask">
                  <motion.span
                    className="block"
                    initial={
                      reduce ? { opacity: 0 } : { opacity: 0, y: "110%" }
                    }
                    animate={{ opacity: 1, y: "0%" }}
                    transition={{
                      duration: 1.15,
                      delay: 0.25 + index * 0.11,
                      ease: EASE,
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
            className="col-span-12 flex flex-col gap-9 md:col-span-8 xl:col-span-6"
          >
            <p className="max-w-lg border-l border-cyan/40 pl-6 text-[1.0625rem] leading-relaxed text-paper/80 lg:text-[1.125rem]">
              Transformamos desafios relacionados ao oceano e aos territórios
              costeiros em pesquisa, inovação e soluções aplicadas.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <ActionLink href="/projetos">Conheça nossos projetos</ActionLink>
              <ActionLink href="/#sobre" variant="outline">
                Sobre o Lab Azul
              </ActionLink>
            </div>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1, ease: EASE }}
            className="col-span-12 flex flex-wrap gap-x-8 gap-y-5 xl:col-span-6 xl:justify-end xl:gap-10 xl:text-right"
          >
            {[
              { term: "Estação", value: "Fortaleza · Ceará" },
              { term: "Bacia", value: "Atlântico Sul" },
              { term: "Desde", value: "2025" },
            ].map((item) => (
              <div key={item.term} className="flex flex-col gap-2">
                <dt className="eyebrow text-[0.5625rem] text-paper/40">
                  {item.term}
                </dt>
                <dd className="font-display text-sm font-bold tracking-[-0.01em] text-paper/85">
                  {item.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* Linha de água com marcações de sonda */}
      <div className="shell relative z-10 pb-8">
        <div aria-hidden="true" className="flex items-end gap-1">
          {Array.from({ length: 48 }, (_, index) => (
            <span
              key={index}
              className="flex-1 bg-foam"
              style={{
                height: index % 6 === 0 ? 10 : 4,
                opacity: index % 6 === 0 ? 0.5 : 0.22,
              }}
            />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="eyebrow text-[0.5625rem] text-paper/50">
            {site.coordinates}
          </span>

          <span className="flex items-center gap-3">
            <span className="eyebrow text-[0.5625rem] text-paper/50">
              Descer
            </span>
            <span
              aria-hidden="true"
              className="animate-sink block h-10 w-px bg-gradient-to-b from-cyan to-transparent"
            />
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionTag, WaveEdge } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";

/**
 * Carta de conexões do Atlântico: graticulado de latitude/longitude com os
 * territórios onde o Lab Azul atua. Projeção equiretangular simples
 * (-60°..10° long · -15°..50° lat) — sem mapa decorativo, só coordenada.
 */

const VIEW = { w: 900, h: 560, lng0: -58, lng1: 16, lat0: -22, lat1: 54 };

function project(lat: number, lng: number) {
  const x = ((lng - VIEW.lng0) / (VIEW.lng1 - VIEW.lng0)) * VIEW.w;
  const y = ((VIEW.lat1 - lat) / (VIEW.lat1 - VIEW.lat0)) * VIEW.h;
  return { x, y };
}

const stations = [
  {
    id: "brasil",
    label: "Brasil",
    place: "Fortaleza · Ceará",
    lat: -3.73,
    lng: -38.52,
    projects: ["Smart Cocó", "Mar de Experiências", "BioTec Azul"],
    anchor: true,
  },
  {
    id: "cabo-verde",
    label: "Cabo Verde",
    place: "Arquipélago · Atlântico Central",
    lat: 15.12,
    lng: -23.6,
    projects: ["ResiliaMar"],
  },
  {
    id: "africa",
    label: "África",
    place: "Costa ocidental africana",
    lat: 6.5,
    lng: -1.5,
    projects: ["Feminino Azul"],
  },
  {
    id: "europa",
    label: "Europa",
    place: "Península Ibérica",
    lat: 38.72,
    lng: -9.14,
    projects: ["Feminino Azul", "Redes de cooperação"],
  },
];

export function ImpactSection() {
  const [active, setActive] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const origin = project(stations[0].lat, stations[0].lng);

  return (
    <section
      id="impacto"
      aria-labelledby="impacto-titulo"
      className="grain relative overflow-hidden bg-abyss py-28 text-paper lg:py-40"
    >
      <div className="shell relative">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-6">
            <SectionTag index="08" className="text-cyan">
              Alcance
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="impacto-titulo"
              lines={[
                <Fragment key={0}>O Lab Azul além</Fragment>,
                <Fragment key={1}>
                  das{" "}
                  <span className="editorial font-normal text-foam">
                    fronteiras
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
            <p className="text-[0.9375rem] leading-relaxed text-paper/55">
              A pesquisa costeira do Ceará conecta-se a redes transatlânticas —
              da resiliência pesqueira em Cabo Verde ao empreendedorismo azul
              entre África e Europa.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-8 gap-y-12 lg:mt-24">
          <Reveal className="col-span-12 lg:col-span-8">
            <div className="relative">
              <svg
                viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
                className="w-full"
                role="img"
                aria-label="Carta de conexões do Atlântico com as estações do Lab Azul: Brasil, Cabo Verde, África e Europa"
              >
                {/* Graticulado */}
                <g stroke="#BCE8ED" strokeWidth="0.5" opacity="0.14">
                  {Array.from({ length: 8 }, (_, i) => (
                    <line
                      key={`lat-${i}`}
                      x1="0"
                      x2={VIEW.w}
                      y1={(i * VIEW.h) / 7}
                      y2={(i * VIEW.h) / 7}
                    />
                  ))}
                  {Array.from({ length: 10 }, (_, i) => (
                    <line
                      key={`lng-${i}`}
                      y1="0"
                      y2={VIEW.h}
                      x1={(i * VIEW.w) / 9}
                      x2={(i * VIEW.w) / 9}
                    />
                  ))}
                </g>

                {/* Linha do Equador, marcada */}
                <line
                  x1="0"
                  x2={VIEW.w}
                  y1={project(0, 0).y}
                  y2={project(0, 0).y}
                  stroke="#25B7C9"
                  strokeWidth="0.9"
                  strokeDasharray="6 8"
                  opacity="0.45"
                />
                <text
                  x="12"
                  y={project(0, 0).y - 12}
                  fill="#BCE8ED"
                  opacity="0.5"
                  style={{ fontSize: 13, letterSpacing: "0.22em" }}
                  className="font-mono"
                >
                  EQUADOR
                </text>

                {/* Rotas */}
                {stations.slice(1).map((station, index) => {
                  const point = project(station.lat, station.lng);
                  const mx = (origin.x + point.x) / 2;
                  const my = (origin.y + point.y) / 2 - 90 - index * 20;
                  const on = active === station.id;

                  return (
                    <motion.path
                      key={station.id}
                      d={`M${origin.x} ${origin.y} Q ${mx} ${my} ${point.x} ${point.y}`}
                      fill="none"
                      stroke={on ? "#25B7C9" : "#BCE8ED"}
                      strokeWidth={on ? 1.8 : 1}
                      opacity={on ? 0.95 : 0.5}
                      initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{
                        duration: 1.3,
                        delay: 0.15 + index * 0.16,
                        ease: [0.16, 0.84, 0.28, 1],
                      }}
                    />
                  );
                })}

                {/* Estações */}
                {stations.map((station) => {
                  const point = project(station.lat, station.lng);
                  const on = active === station.id;

                  return (
                    <g
                      key={station.id}
                      tabIndex={0}
                      role="button"
                      aria-label={`${station.label}: ${station.projects.join(", ")}`}
                      onMouseEnter={() => setActive(station.id)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(station.id)}
                      onBlur={() => setActive(null)}
                      className="cursor-pointer outline-none"
                    >
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r="26"
                        fill="transparent"
                      />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={on ? 16 : 11}
                        fill="none"
                        stroke="#25B7C9"
                        strokeWidth="1"
                        opacity={on ? 0.9 : 0.4}
                        style={{ transition: "all .5s var(--ease-water)" }}
                      />
                      <circle
                        cx={point.x}
                        cy={point.y}
                        r={station.anchor ? 5.5 : 4}
                        fill={on ? "#25B7C9" : "#BCE8ED"}
                      />
                      <text
                        x={point.x + 22}
                        y={point.y + 5}
                        fill="#F7F9FA"
                        opacity={on ? 1 : 0.7}
                        style={{ fontSize: 15, letterSpacing: "0.16em" }}
                        className="font-mono"
                      >
                        {station.label.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </Reveal>

          {/* Legenda viva — espelha o hover do mapa */}
          <Reveal
            delay={0.15}
            className="col-span-12 lg:col-span-3 lg:col-start-10"
          >
            <ul className="border-t border-paper/12">
              {stations.map((station) => {
                const on = active === station.id;
                return (
                  <li key={station.id} className="border-b border-paper/12">
                    <button
                      type="button"
                      onMouseEnter={() => setActive(station.id)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(station.id)}
                      onBlur={() => setActive(null)}
                      className="w-full py-5 text-left"
                    >
                      <span className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
                            on ? "bg-cyan" : "bg-foam/40"
                          }`}
                        />
                        <span className="font-display text-[1.0625rem] font-bold tracking-[-0.02em]">
                          {station.label}
                        </span>
                      </span>
                      <span className="eyebrow mt-2 block text-[0.5625rem] text-paper/40">
                        {station.place}
                      </span>
                      <span
                        className={`mt-3 grid text-[0.875rem] text-foam transition-[grid-template-rows,opacity] duration-600 ease-[var(--ease-water)] ${
                          on
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <span className="overflow-hidden">
                          {station.projects.join(" · ")}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
      <WaveEdge className="pointer-events-none absolute inset-x-0 bottom-0 h-10 w-full text-paper lg:h-16" />
    </section>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProjectsExplorer } from "@/components/ProjectsExplorer";
import { FinalCTA } from "@/sections/FinalCTA";
import { projects } from "@/data/projects";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Iniciativas do Lab Azul em pesquisa, inovação, economia azul e desenvolvimento sustentável dos territórios costeiros.",
};

export default async function ProjetosPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;

  return (
    <>
      <PageHero
        eyebrow="Portfólio — Lab Azul"
        lines={[
          <Fragment key={0}>
            Projetos
            <span className="text-cyan">.</span>
          </Fragment>,
        ]}
        description="Conheça as iniciativas desenvolvidas pelo Lab Azul em pesquisa, inovação, economia azul e desenvolvimento sustentável."
        image="/images/coast-aerial.jpg"
        meta={[
          { term: "Em portfólio", value: `${projects.length} projetos` },
          { term: "Período", value: "2025 — 2026" },
          { term: "Territórios", value: "Brasil · Cabo Verde · Europa" },
        ]}
      />
      <ProjectsExplorer initialCategory={categoria ?? "Todos"} />
      <FinalCTA />
    </>
  );
}

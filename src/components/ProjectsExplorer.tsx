"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projectCategories, projects } from "@/data/projects";

export function ProjectsExplorer({
  initialCategory = "Todos",
}: {
  initialCategory?: string;
}) {
  const [category, setCategory] = useState(
    projectCategories.includes(initialCategory as never)
      ? initialCategory
      : "Todos",
  );

  const list =
    category === "Todos"
      ? projects
      : projects.filter((project) => project.categories.includes(category));

  return (
    <section
      id="grade"
      aria-label="Lista de projetos"
      className="bg-shell py-20 text-deep lg:py-28"
    >
      <div className="shell">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5 border-b border-deep/12 pb-5">
          <div
            role="tablist"
            aria-label="Filtrar projetos por área"
            className="flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            {projectCategories.map((item) => {
              const active = item === category;
              return (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setCategory(item)}
                  className={`eyebrow relative py-1 text-[0.625rem] transition-colors duration-400 ${
                    active ? "text-ocean" : "text-deep/45 hover:text-deep"
                  }`}
                >
                  {item}
                  {active && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute -bottom-[22px] left-0 h-px w-full bg-ocean"
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

          <p className="eyebrow text-[0.625rem] text-deep/40">
            {String(list.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")} projetos
          </p>
        </div>

        <motion.div
          layout
          className="mt-16 grid gap-x-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {list.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                  ease: [0.16, 0.84, 0.28, 1],
                }}
              >
                <ProjectCard project={project} index={index + 1} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {list.length === 0 && (
          <p className="mt-16 font-display text-[1.25rem] text-deep/50">
            Nenhum projeto nesta categoria por enquanto.
          </p>
        )}
      </div>
    </section>
  );
}

import { ExpertiseCard } from "@/components/ExpertiseCard";
import { SectionTag } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { expertise } from "@/data/expertise";
import { Fragment } from "react";

export function ExpertiseSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-titulo"
      className="relative bg-paper py-28 text-deep lg:py-40"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="04" className="text-ocean">
              Expertise
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="areas-titulo"
              lines={[
                <Fragment key={0}>Onde ciência e</Fragment>,
                <Fragment key={1}>
                  oceano se{" "}
                  <span className="editorial font-normal text-ocean">
                    encontram
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2.1rem,4.8vw,4rem)]"
            />
          </div>

          <Reveal
            delay={0.12}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <p className="prose-ocean text-[1rem] text-deep/65">
              Nossas áreas de atuação conectam conhecimento científico,
              inovação, economia azul e desenvolvimento territorial.
            </p>
          </Reveal>
        </div>

        {/* Grade 2 × 2 — quatro blocos de mesmo peso, alinhados */}
        <div className="mt-20 grid gap-4 md:grid-cols-2 md:gap-5 lg:mt-28">
          {expertise.map((area, index) => (
            <Reveal key={area.index} delay={(index % 2) * 0.1}>
              <ExpertiseCard area={area} priority={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { SectionTag } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { team, teamGroups } from "@/data/team";
import { Fragment } from "react";

export function TeamSection() {
  const members = team.filter((member) => member.group !== "Liderança");

  return (
    <section
      id="equipe"
      aria-labelledby="equipe-titulo"
      className="relative bg-paper py-28 text-deep lg:py-40"
    >
      <div className="shell">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <SectionTag index="07" className="text-ocean">
              Equipe
            </SectionTag>
            <HeadingReveal
              as="h2"
              id="equipe-titulo"
              lines={[
                <Fragment key={0}>Quem faz o Lab Azul</Fragment>,
                <Fragment key={1}>
                  <span className="editorial font-normal text-ocean">
                    acontecer
                  </span>
                  .
                </Fragment>,
              ]}
              className="mt-7 text-[clamp(2rem,4.4vw,3.6rem)]"
            />
          </div>

          <Reveal
            delay={0.12}
            className="col-span-12 lg:col-span-4 lg:col-start-9"
          >
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {teamGroups.map((group) => (
                <li
                  key={group}
                  className="eyebrow text-[0.5625rem] text-deep/50"
                >
                  {group}
                  <span className="ml-2 text-ocean">
                    {String(
                      members.filter((member) => member.group === group).length,
                    ).padStart(2, "0")}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-x-5 gap-y-12 lg:mt-24 lg:grid-cols-4 lg:gap-x-6">
          {members.map((member, index) => (
            <Reveal
              key={member.id}
              delay={(index % 4) * 0.08}
              className={index % 4 === 1 || index % 4 === 3 ? "lg:mt-12" : ""}
            >
              <TeamCard member={member} index={index} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-deep/12 pt-6">
          <p className="eyebrow text-[0.625rem] text-deep/40">
            Composição em atualização · dados provisórios
          </p>
        </Reveal>
      </div>
    </section>
  );
}

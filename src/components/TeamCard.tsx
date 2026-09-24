import Image from "next/image";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import type { TeamMember } from "@/data/team";

export function TeamCard({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  const vacancy = /vaga/i.test(member.name);

  return (
    <article className="group/card">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[2px] bg-deep">
        {member.photo ? (
          <>
            <Image
              src={member.photo}
              alt={`Retrato de ${member.name}`}
              fill
              sizes="(max-width: 768px) 50vw, 24vw"
              className="object-cover grayscale transition-all duration-[1200ms] ease-[var(--ease-water)] group-hover/card:scale-[1.03] group-hover/card:grayscale-0"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-deep/45 mix-blend-multiply transition-opacity duration-700 group-hover/card:opacity-0"
            />
          </>
        ) : (
          <PortraitPlaceholder
            name={member.name}
            seed={index}
            slot={vacancy ? String(index + 1).padStart(2, "0") : undefined}
            note={vacancy ? "Posição em aberto" : "Retrato a inserir"}
          />
        )}

        <span className="eyebrow absolute top-4 left-4 text-[0.5rem] text-paper/70">
          {member.group}
        </span>

        {(member.linkedin || member.lattes) && (
          <div className="absolute inset-x-4 bottom-4 flex translate-y-3 gap-4 opacity-0 transition-all duration-500 ease-[var(--ease-water)] group-hover/card:translate-y-0 group-hover/card:opacity-100">
            {member.lattes && (
              <a
                href={member.lattes}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-[0.5625rem] text-paper underline-offset-4 hover:underline"
              >
                Lattes
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-[0.5625rem] text-paper underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        )}
      </div>

      <h3 className="mt-5 font-display text-[1.0625rem] font-extrabold tracking-[-0.025em] text-deep">
        {member.name}
      </h3>
      <p className="eyebrow mt-2 text-[0.5625rem] text-ocean">{member.role}</p>
      <p className="mt-2 text-[0.875rem] leading-snug text-deep/55">
        {member.area}
      </p>
    </article>
  );
}

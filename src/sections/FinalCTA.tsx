import Image from "next/image";
import { ActionLink } from "@/components/ActionLink";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import { site } from "@/data/site";
import { Fragment } from "react";

export function FinalCTA() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="grain relative isolate overflow-hidden bg-abyss text-paper"
    >
      <Image
        src="/images/cta-ocean.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(175deg,rgba(10,34,64,0.9)_0%,rgba(23,79,122,0.72)_50%,rgba(10,34,64,0.94)_100%)]"
      />

      <div className="shell relative py-32 lg:py-48">
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-8">
            <HeadingReveal
              as="h2"
              id="contato-titulo"
              lines={[
                <Fragment key={0}>Vamos construir soluções</Fragment>,
                <Fragment key={1}>
                  para o{" "}
                  <span className="editorial font-normal text-foam">
                    oceano
                  </span>
                  <span className="text-cyan">?</span>
                </Fragment>,
              ]}
              className="text-[clamp(2.2rem,5.6vw,4.6rem)]"
            />

            <Reveal delay={0.14} className="mt-9">
              <p className="max-w-xl text-[1.0625rem] leading-relaxed text-paper/75">
                O Lab Azul conecta ciência, inovação e sociedade para criar
                novas possibilidades para a economia azul.
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-11 flex flex-wrap gap-4">
              <ActionLink href="/projetos">Conheça nossos projetos</ActionLink>
              <ActionLink href={`mailto:${site.email}`} variant="outline">
                Entre em contato
              </ActionLink>
            </Reveal>
          </div>

          <Reveal
            delay={0.24}
            className="col-span-12 self-end lg:col-span-3 lg:col-start-10"
          >
            <dl className="border-t border-paper/20 pt-6">
              <dt className="eyebrow text-[0.5625rem] text-paper/45">
                Fale com o laboratório
              </dt>
              <dd className="mt-3">
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-[1.0625rem] font-bold tracking-[-0.02em] underline-offset-8 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
              <dd className="eyebrow mt-4 text-[0.5625rem] leading-relaxed text-paper/50">
                {site.address}
              </dd>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

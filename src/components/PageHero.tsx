import Image from "next/image";
import { Bathymetry } from "@/components/Decor";
import { HeadingReveal, Reveal } from "@/components/Reveal";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  lines,
  description,
  image,
  meta,
  children,
}: {
  eyebrow: string;
  lines: ReactNode[];
  description?: string;
  image?: string;
  meta?: { term: string; value: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="grain relative flex min-h-[32rem] flex-col justify-end overflow-hidden bg-abyss pt-36 pb-16 text-paper lg:min-h-[40rem] lg:pt-44 lg:pb-20">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(178deg,rgba(10,34,64,0.92)_0%,rgba(16,47,88,0.7)_45%,rgba(10,34,64,0.95)_100%)]"
      />
      <Bathymetry
        className="absolute inset-x-0 bottom-0 h-1/2 w-full text-foam"
        lines={8}
        opacity={0.18}
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 items-end gap-y-10">
          <div className="col-span-12 lg:col-span-8">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-foam">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                {eyebrow}
              </p>
            </Reveal>

            <HeadingReveal
              as="h1"
              lines={lines}
              delay={0.1}
              className="mt-7 text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.94]"
            />

            {description && (
              <Reveal delay={0.24}>
                <p className="mt-8 max-w-xl border-l border-cyan/40 pl-6 text-[1.0625rem] leading-relaxed text-paper/75">
                  {description}
                </p>
              </Reveal>
            )}

            {children}
          </div>

          {meta && (
            <Reveal
              delay={0.3}
              className="col-span-12 lg:col-span-3 lg:col-start-10"
            >
              <dl className="flex flex-col gap-5 border-t border-paper/15 pt-6">
                {meta.map((item) => (
                  <div key={item.term}>
                    <dt className="eyebrow text-[0.5625rem] text-paper/40">
                      {item.term}
                    </dt>
                    <dd className="mt-2 font-display text-[0.9375rem] font-bold tracking-[-0.01em] text-paper/90">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { LogoMark } from "@/components/Logo";
import { Bathymetry } from "@/components/Decor";
import { navigation, site } from "@/data/site";

const quickLinks = navigation.filter((item) =>
  ["Início", "Sobre", "Projetos", "Publicações", "Equipe"].includes(item.label),
);

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-abyss pt-24 pb-10 text-paper">
      <Bathymetry
        className="absolute inset-x-0 bottom-0 h-64 w-full text-foam"
        lines={6}
        opacity={0.14}
      />

      <div className="shell relative">
        <div className="grid grid-cols-12 gap-y-14">
          <div className="col-span-12 lg:col-span-5">
            <LogoMark className="h-11 w-11 text-foam" />
            <p className="mt-6 font-display text-[1.6rem] leading-[1.05] font-extrabold tracking-[-0.035em]">
              Lab Azul
            </p>
            <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-paper/55">
              {site.full}
              <br />
              {site.institution}
            </p>
          </div>

          <nav
            aria-label="Navegação do rodapé"
            className="col-span-6 lg:col-span-3 lg:col-start-7"
          >
            <p className="eyebrow text-[0.5625rem] text-paper/40">Navegação</p>
            <ul className="mt-6 flex flex-col gap-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-paper/70 underline-offset-8 transition-colors duration-400 hover:text-foam hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-6 lg:col-span-3">
            <p className="eyebrow text-[0.5625rem] text-paper/40">Contato</p>
            <ul className="mt-6 flex flex-col gap-3 text-[0.9375rem] text-paper/70">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-8 transition-colors duration-400 hover:text-foam hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.href}
                  className="underline-offset-8 transition-colors duration-400 hover:text-foam hover:underline"
                >
                  Instagram · {site.instagram.label}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin.href}
                  className="underline-offset-8 transition-colors duration-400 hover:text-foam hover:underline"
                >
                  LinkedIn · {site.linkedin.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-paper/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-[0.5625rem] text-paper/40">
            © 2026 Lab Azul — Universidade de Fortaleza
          </p>
          <p className="eyebrow text-[0.5625rem] text-paper/40">
            {site.coordinates} · Atlântico Sul
          </p>
        </div>
      </div>
    </footer>
  );
}

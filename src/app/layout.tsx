import type { Metadata } from "next";
import {
  DM_Sans,
  IBM_Plex_Mono,
  Instrument_Serif,
  Manrope,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollReset } from "@/components/ScrollReset";

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  variable: "--font-manrope",
  weight: ["500", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  weight: ["400", "500"],
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lab Azul — Governança Azul e Cultura Oceânica · UNIFOR",
    template: "%s · Lab Azul Unifor",
  },
  description:
    "Laboratório de Pesquisa em Governança Azul e Cultura Oceânica da Universidade de Fortaleza. Ciência, inovação e desenvolvimento para o oceano e os territórios costeiros.",
  keywords: [
    "Lab Azul",
    "UNIFOR",
    "economia azul",
    "governança costeira",
    "biotecnologia azul",
    "cultura oceânica",
  ],
  openGraph: {
    title: "Lab Azul — Governança Azul e Cultura Oceânica · UNIFOR",
    description:
      "Transformamos desafios relacionados ao oceano e aos territórios costeiros em pesquisa, inovação e soluções aplicadas.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${manrope.variable} ${dmSans.variable} ${instrument.variable} ${plexMono.variable} antialiased`}
      >
        <ScrollReset />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-[3px] focus:bg-cyan focus:px-5 focus:py-3 focus:font-display focus:text-[0.75rem] focus:font-bold focus:tracking-[0.1em] focus:text-abyss focus:uppercase"
        >
          Ir para o conteúdo
        </a>
        <Header />
        <main id="conteudo">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

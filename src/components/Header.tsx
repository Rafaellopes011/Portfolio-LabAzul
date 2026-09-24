"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Logo } from "@/components/Logo";
import { Arrow } from "@/components/ActionLink";
import { navigation, site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-paper transition-[background-color,backdrop-filter,border-color] duration-700 ease-[var(--ease-water)] ${
        open
          ? "border-b border-paper/10 bg-abyss"
          : scrolled
            ? "border-b border-paper/10 bg-abyss/80 backdrop-blur-xl"
            : // Véu de contraste: o menu precisa se sustentar sobre a foto do hero
              "border-b border-transparent bg-[linear-gradient(180deg,rgba(10,34,64,0.72)_0%,rgba(10,34,64,0.38)_55%,rgba(10,34,64,0)_100%)] pb-6"
      }`}
    >
      <div className="shell relative z-50 flex h-20 items-center justify-between gap-6 lg:h-24">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navigation.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group/nav relative py-2 text-[0.8125rem] tracking-[0.01em] text-paper/75 transition-colors duration-300 hover:text-paper"
                >
                  {item.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-cyan transition-transform duration-500 ease-[var(--ease-water)] group-hover/nav:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/projetos"
            className="group/btn hidden items-center gap-3 rounded-[3px] border border-paper/25 px-5 py-3 font-display text-[0.6875rem] font-bold tracking-[0.12em] uppercase transition-colors duration-500 hover:border-cyan hover:text-cyan lg:inline-flex"
          >
            Conheça nossos projetos
            <Arrow className="w-5" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-[3px] border border-paper/20 xl:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-paper transition-all duration-500 ease-[var(--ease-water)] ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-paper transition-all duration-500 ease-[var(--ease-water)] ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className={`h-[2px] origin-left bg-gradient-to-r from-cyan to-foam transition-opacity duration-500 ${
          scrolled ? "opacity-90" : "opacity-0"
        }`}
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 top-20 z-40 bg-abyss xl:hidden"
          >
            <nav
              aria-label="Navegação principal (mobile)"
              className="shell flex h-full flex-col justify-between py-10"
            >
              <ul className="flex flex-col">
                {navigation.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.06 * index,
                      duration: 0.6,
                      ease: [0.16, 0.84, 0.28, 1],
                    }}
                    className="border-b border-paper/10"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4"
                    >
                      <span className="eyebrow text-[0.5625rem] text-cyan">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.9rem] font-extrabold tracking-[-0.04em]">
                        {item.label}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="eyebrow flex flex-col gap-2 text-[0.5625rem] text-paper/45">
                <span>{site.coordinates}</span>
                <span>{site.email}</span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

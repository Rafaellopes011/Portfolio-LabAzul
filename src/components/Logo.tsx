import Image from "next/image";
import Link from "next/link";

/**
 * Marca do Lab Azul: escudo hexagonal (referência à marca institucional da
 * UNIFOR) com três arcos concêntricos de onda — ciência + oceano.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M24 2.5 44 13v22L24 45.5 4 35V13L24 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M24 9.5 37.5 16.6v14.8L24 38.5 10.5 31.4V16.6L24 9.5Z"
        fill="currentColor"
        opacity="0.1"
      />
      <path
        d="M14.5 30c0-5.5 4.3-9.8 9.5-9.8s9.5 4.3 9.5 9.8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M18.5 30c0-3.2 2.5-5.6 5.5-5.6s5.5 2.4 5.5 5.6"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="24" cy="30" r="1.9" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Lab Azul — página inicial"
      className={`group flex items-center gap-3 ${className}`}
    >
      {/* Logo oficial (versão branca) — o cabeçalho é sempre escuro */}
      <Image
        src="/images/logo-labazul-branco.png"
        alt=""
        width={297}
        height={307}
        priority
        className={`w-auto transition-transform duration-500 ease-[var(--ease-water)] group-hover:-translate-y-0.5 ${
          compact ? "h-12" : "h-14 lg:h-[4.25rem]"
        }`}
      />
    </Link>
  );
}

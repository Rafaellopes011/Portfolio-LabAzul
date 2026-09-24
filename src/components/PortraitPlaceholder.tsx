import { Bathymetry } from "@/components/Decor";

function initials(name: string) {
  const parts = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter(
      (part) =>
        part.length > 2 && !["Profa.", "Prof.", "vaga", "—"].includes(part),
    );

  if (parts.length === 0) return "LA";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

/**
 * Espaço reservado para o retrato oficial. Em vez de uma foto genérica de
 * banco de imagens, um painel de profundidade — cada posição recebe seu
 * próprio número de registro, como uma ficha de campo ainda em aberto.
 */
export function PortraitPlaceholder({
  name,
  note = "Retrato a inserir",
  slot,
  seed = 0,
  className = "",
}: {
  name: string;
  note?: string;
  /** Número de registro exibido no lugar das iniciais (posições em aberto). */
  slot?: string;
  seed?: number;
  className?: string;
}) {
  const glyph = slot ?? initials(name);
  const tilt = [0, 8, -6, 4, -10, 6][seed % 6];

  return (
    <div
      className={`grain group/ph relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(200deg,#174F7A_0%,#102F58_55%,#0A2240_100%)] ${className}`}
    >
      <Bathymetry
        className="absolute inset-x-0 bottom-0 h-3/4 w-full text-foam transition-transform duration-[1600ms] ease-[var(--ease-water)] group-hover/ph:-translate-y-2"
        lines={5 + (seed % 4)}
        opacity={0.18}
      />
      <span
        aria-hidden="true"
        className="editorial relative text-[clamp(2.6rem,7vw,4.6rem)] leading-none text-foam/70"
        style={{ transform: `translateY(${tilt}px)` }}
      >
        {glyph}
      </span>
      <span className="eyebrow absolute bottom-4 left-4 text-[0.5rem] text-paper/0 transition-colors duration-500 group-hover/card:text-paper/40 group-hover/ph:text-paper/40">
        {note}
      </span>
    </div>
  );
}

/**
 * Elementos gráficos do sistema visual: curvas batimétricas, réguas de
 * profundidade e etiquetas de seção. Todos server-side, sem custo de JS.
 */

export function Bathymetry({
  className = "",
  lines = 9,
  opacity = 0.5,
}: {
  className?: string;
  lines?: number;
  opacity?: number;
}) {
  const paths = Array.from({ length: lines }, (_, index) => {
    const y = 30 + index * 30;
    const amp = 18 + (index % 3) * 12;
    return `M-40 ${y} C 220 ${y - amp}, 430 ${y + amp}, 700 ${y - amp / 2} S 1180 ${
      y + amp
    }, 1480 ${y - amp / 3}`;
  });

  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ opacity }}
    >
      {paths.map((d, index) => (
        <path
          key={index}
          d={d}
          stroke="currentColor"
          strokeWidth={index % 4 === 0 ? 1.1 : 0.6}
          opacity={0.18 + (index % 4 === 0 ? 0.22 : 0)}
        />
      ))}
    </svg>
  );
}

/** Régua vertical com marcações de sonda — ancora as seções editoriais. */
export function DepthRule({
  label,
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none flex flex-col items-center gap-3 ${className}`}
    >
      <span className="h-16 w-px bg-current opacity-25" />
      <span className="flex flex-col gap-[6px]">
        {Array.from({ length: 6 }, (_, index) => (
          <span
            key={index}
            className="block h-px bg-current opacity-40"
            style={{ width: index % 2 === 0 ? 14 : 7 }}
          />
        ))}
      </span>
      {label && (
        <span className="eyebrow [writing-mode:vertical-rl] text-[0.5625rem] opacity-50">
          {label}
        </span>
      )}
      <span className="h-24 w-px bg-current opacity-15" />
    </div>
  );
}

/** Etiqueta de seção: índice + nome, no ritmo de um instrumento de campo. */
export function SectionTag({
  index,
  children,
  className = "",
}: {
  index: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${className}`}>
      <span className="opacity-45">{index}</span>
      <span className="h-px w-8 bg-current opacity-30" />
      <span>{children}</span>
    </p>
  );
}

/** Transição orgânica entre blocos: crista de onda achatada. */
export function WaveEdge({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        d="M0 90V38c180 0 300-26 520-26s340 30 560 30 200-14 360-22V90H0Z"
        fill="currentColor"
      />
    </svg>
  );
}

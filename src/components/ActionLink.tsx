import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "solid" | "outline" | "quiet";

const base =
  "group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-[3px] px-6 py-4 font-display text-[0.8125rem] font-bold tracking-[0.06em] uppercase transition-colors duration-500 ease-[var(--ease-water)]";

const variants: Record<Variant, string> = {
  // A cor "sobe" como maré no hover
  solid: "bg-cyan text-abyss hover:text-paper",
  outline:
    "border border-current/25 text-current hover:border-current/50 hover:text-paper",
  quiet: "px-0 py-2 text-current",
};

export function ActionLink({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const external = /^https?:\/\//.test(href);

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {variant !== "quiet" && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-deep transition-transform duration-600 ease-[var(--ease-water)] group-hover/btn:scale-y-100"
        />
      )}
      <span className="relative">{children}</span>
      <Arrow />
      {variant === "quiet" && (
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[var(--ease-water)] group-hover/btn:scale-x-100"
        />
      )}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 10"
      fill="none"
      aria-hidden="true"
      className={`h-[10px] w-6 shrink-0 transition-transform duration-500 ease-[var(--ease-water)] group-hover/btn:translate-x-1.5 group-hover/card:translate-x-1.5 ${className}`}
    >
      <path d="M0 5h22" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M17.5 1 22 5l-4.5 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="square"
      />
    </svg>
  );
}

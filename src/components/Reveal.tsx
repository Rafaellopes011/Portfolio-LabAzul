"use client";

import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type HTMLMotionProps,
} from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 0.84, 0.28, 1] as const;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children">;

/** Entrada discreta: sobe 18px e aparece, uma única vez. */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/**
 * Título revelado linha a linha por máscara — o gesto tipográfico principal
 * do site. Recebe as linhas já quebradas para manter o controle editorial.
 * O observador fica no próprio título (e não em cada linha), porque as linhas
 * começam deslocadas para fora da máscara e nem sempre disparam sozinhas.
 */
export function HeadingReveal({
  lines,
  as: Tag = "h2",
  className = "",
  delay = 0,
  id,
}: {
  lines: ReactNode[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  id?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Tag className={className} id={id} ref={ref}>
      {lines.map((line, index) => (
        <span key={index} className="line-mask">
          <motion.span
            className="block"
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: "110%" }}
            animate={inView ? { opacity: 1, y: "0%" } : undefined}
            transition={{
              duration: 1,
              delay: delay + index * 0.09,
              ease: EASE,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

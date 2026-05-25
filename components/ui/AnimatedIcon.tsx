"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  /** The rendered icon element (e.g. <Activity ... />). */
  children: ReactNode;
  /** Entrance delay in seconds. */
  delay?: number;
};

/**
 * Wraps an icon with a soft entrance — it scales and floats up gently as
 * it scrolls into view, then settles into a whisper-soft perpetual float
 * so the section feels alive without being distracting.
 *
 * Takes the icon as `children` (not as a component prop) so it can be used
 * from server components — React component functions cannot cross the
 * server/client boundary, but already-rendered elements can.
 *
 * Honours prefers-reduced-motion (renders the icon statically).
 */
export default function AnimatedIcon({ children, delay = 0 }: Props) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <span className="inline-flex">{children}</span>;
  }

  return (
    <motion.span
      className="inline-flex"
      initial={{ opacity: 0, scale: 0.7, y: 6 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {/* Inner layer carries the perpetual float so it never collides with
          the entrance transform on the outer layer. */}
      <motion.span
        className="inline-flex"
        animate={{ y: [0, -2.5, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.7,
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

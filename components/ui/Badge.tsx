import type { ReactNode } from "react";

type Variant = "default" | "near-launch" | "in-development";

const styles: Record<Variant, string> = {
  default:
    "border-border bg-white text-fg/70",
  "near-launch":
    "border-[var(--color-solution-border)] bg-[var(--color-solution-bg)] text-[var(--color-solution-fg)]",
  "in-development":
    "border-border bg-surface text-fg",
};

export default function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-wide ${styles[variant]}`}
    >
      {children}
    </span>
  );
}

type Props = {
  /** What this image will eventually show. Rendered inside [brackets]. */
  label: string;
  /** Aspect ratio: "1/1", "4/3", "16/9", or arbitrary CSS aspect-ratio. */
  ratio?: string;
  className?: string;
};

/**
 * Labeled placeholder for unbuilt assets. Stays in place until real
 * artwork is supplied. Intentionally plain so it never reads as a
 * shipping image.
 */
export default function Placeholder({
  label,
  ratio = "4/3",
  className = "",
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Placeholder for ${label}`}
      className={`flex items-center justify-center rounded-md border border-dashed border-border bg-surface px-6 py-8 text-center ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <span className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">
        [{label}]
      </span>
    </div>
  );
}

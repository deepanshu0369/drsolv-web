import Image from "next/image";

type Props = {
  className?: string;
  /** Display height in pixels. */
  height?: number;
  /** If true, renders just the cross+feather icon. Defaults to the full
   *  icon + wordmark lockup. */
  iconOnly?: boolean;
};

/**
 * DRSOLV brand mark. Two variants:
 *   • full lockup (icon + wordmark) — for the footer and navbar
 *   • icon only — for compact contexts
 *
 * Source files in /public are pre-trimmed to artwork bounds.
 */
export default function Logo({
  className = "",
  height = 36,
  iconOnly = false,
}: Props) {
  if (iconOnly) {
    return (
      <Image
        src="/drsolv-icon.png"
        alt="DRSOLV"
        width={239}
        height={238}
        priority
        sizes="80px"
        className={`w-auto object-contain ${className}`}
        style={{ height }}
      />
    );
  }

  return (
    <Image
      src="/drsolv-logo.png"
      alt="DRSOLV"
      width={812}
      height={238}
      priority
      sizes="320px"
      className={`w-auto object-contain ${className}`}
      style={{ height }}
    />
  );
}

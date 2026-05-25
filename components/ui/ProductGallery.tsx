"use client";

import { useState } from "react";
import Image from "next/image";

export type GalleryImage = {
  /** Real photo path once available; omit to render a labeled placeholder. */
  src?: string;
  /** Describes the angle/shot — used as alt text and placeholder label. */
  label: string;
};

type Props = {
  images: GalleryImage[];
  /** Aspect ratio of the main image. */
  ratio?: string;
  /** Horizontal padding for the thumbnail strip — match the card's padding. */
  stripClassName?: string;
};

/**
 * 2D product gallery — a main image with a thumbnail strip to switch
 * between angles. Each slot accepts a real photo path or falls back to a
 * labeled placeholder until product photography is supplied.
 */
export default function ProductGallery({
  images,
  ratio = "4/3",
  stripClassName = "px-7 md:px-9",
}: Props) {
  const [active, setActive] = useState(0);
  const current = images[active] ?? images[0];

  return (
    <div>
      {/* Main image */}
      <div
        className="relative w-full overflow-hidden border-b border-border bg-surface"
        style={{ aspectRatio: ratio }}
      >
        {current.src ? (
          <Image
            src={current.src}
            alt={current.label}
            fill
            sizes="(max-width: 768px) 92vw, 560px"
            className="object-contain"
          />
        ) : (
          <div
            role="img"
            aria-label={`Placeholder for ${current.label}`}
            className="flex h-full w-full items-center justify-center px-6 text-center"
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-fg-muted">
              [{current.label} — to be replaced]
            </span>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className={`flex gap-2 pt-4 ${stripClassName}`}>
          {images.map((img, i) => {
            const selected = i === active;
            return (
              <button
                key={img.label}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`View ${img.label}`}
                aria-pressed={selected}
                className={`press relative h-14 w-14 shrink-0 overflow-hidden rounded-md border transition-colors duration-200 ease-in-out ${
                  selected
                    ? "border-fg"
                    : "border-border hover:border-border-strong"
                }`}
              >
                {img.src ? (
                  <Image
                    src={img.src}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center bg-surface text-[11px] font-medium text-fg-subtle">
                    {i + 1}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

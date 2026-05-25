"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

/**
 * Global page background. One canvas, fixed behind everything.
 * Palette spans pale → mid-steel so the motion is actually visible
 * but the deepest stop never gets dark enough to obscure navy text.
 * Honors prefers-reduced-motion with a static gradient fallback.
 */
export default function GlobalShaderBackground() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(m.matches);
    update();
    m.addEventListener("change", update);
    return () => m.removeEventListener("change", update);
  }, []);

  // Pale → mid steel-blue. Lightness range is wide enough for visible
  // drift, but the darkest stop (#7BA3C7) is still light enough that
  // navy body text reads cleanly on top of it.
  const colors = ["#FFFFFF", "#E8EEF5", "#B9CCDD", "#7BA3C7"];

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      {reduceMotion ? (
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 35%, ${colors[2]} 70%, ${colors[3]} 100%)`,
          }}
        />
      ) : (
        <MeshGradient
          className="absolute inset-0 h-full w-full"
          colors={colors}
          speed={0.55}
          distortion={0.95}
          swirl={0.22}
        />
      )}
    </div>
  );
}

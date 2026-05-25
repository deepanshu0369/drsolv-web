import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

// Run on Node so we can read /public from the filesystem.
export const runtime = "nodejs";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Dynamic favicon — composites the real /drsolv-logo.png onto a white
 * background so the navy mark stays visible in browser tabs (both
 * light and dark themes).
 */
export default async function Icon() {
  const buffer = await fs.readFile(
    path.join(process.cwd(), "public", "drsolv-icon.png"),
  );
  const dataUrl = `data:image/png;base64,${buffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "6px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dataUrl}
          width={58}
          height={58}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    size,
  );
}

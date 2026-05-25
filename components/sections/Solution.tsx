import { Check } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import Badge from "../ui/Badge";
import ProductGallery, { type GalleryImage } from "../ui/ProductGallery";

type Product = {
  id: string;
  stage: string;
  title: string;
  description: string;
  bullets: string[];
  badge: { label: string; variant: "near-launch" | "in-development" };
  images: GalleryImage[];
  footnote?: string;
};

const products: Product[] = [
  {
    id: "qr-band",
    stage: "Entry product",
    title: "QR Emergency Band",
    description:
      "A battery-free silicone band with laser-engraved QR and NFC, linked to a secure DRSOLV medical profile.",
    bullets: [
      "Battery-free QR + NFC identification",
      "Scannable by any smartphone — no app required",
      "Secure DRSOLV medical profile (blood group, allergies, conditions, medications)",
      "Emergency contact alerting on scan",
    ],
    badge: { label: "Near launch", variant: "near-launch" },
    images: [
      { src: "/qr-band-1.jpeg", label: "QR Emergency Band — 3/4 perspective" },
      { src: "/qr-band-2.jpeg", label: "QR Emergency Band — top view" },
      { src: "/qr-band-3.jpeg", label: "QR Emergency Band — side profile" },
      { src: "/qr-band-4.jpeg", label: "QR Emergency Band — worn on the wrist" },
    ],
  },
  {
    id: "wearable",
    stage: "In development",
    title: "Medical-Grade Biosensing Wearable",
    description:
      "A wrist-worn medical-grade device combining continuous vital monitoring with autonomous emergency response.",
    bullets: [
      "Continuous heart rate, SpO₂, single-lead ECG, and temperature",
      "Fall detection and GPS",
      "On-device AI for AFib classification and fall detection",
      "Automated SOS to emergency contacts and responder network",
      "Designed for ISO 13485 compliance",
      "Pursuing CDSCO Class B medical device certification",
    ],
    badge: { label: "Prototype phase · 2026–27", variant: "in-development" },
    images: [
      {
        src: "/wearable-1.jpeg",
        label: "Medical-grade biosensing wearable — front",
      },
      {
        src: "/wearable-2.jpeg",
        label: "Medical-grade biosensing wearable — side profile",
      },
      {
        src: "/wearable-3.jpeg",
        label: "Medical-grade biosensing wearable — biosensor array",
      },
      {
        src: "/wearable-4.jpeg",
        label: "Medical-grade biosensing wearable — worn on the wrist",
      },
    ],
    footnote:
      "Compliance and certification work is in progress. The device is not yet certified.",
  },
];

export default function Solution() {
  return (
    <Section id="products" className="border-t border-border">
      <Reveal>
        <Eyebrow>Product</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Two products, one system.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {products.map((p, i) => (
          <Reveal key={p.id} delay={0.06 * (i + 1)}>
            <article
              id={p.id}
              className="solution-card interactive flex h-full flex-col overflow-hidden rounded-lg border"
            >
              <ProductGallery images={p.images} ratio="16/10" />
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <p className="mb-5 border-b border-border pb-4 text-[11px] leading-relaxed text-fg-subtle">
                  Images are for demonstration purposes only. The actual
                  design may vary as development progresses.
                </p>
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-fg-subtle">
                    {p.stage}
                  </p>
                  <Badge variant={p.badge.variant}>{p.badge.label}</Badge>
                </div>

                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-fg md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
                  {p.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-fg"
                    >
                      <Check
                        size={16}
                        strokeWidth={2}
                        className="mt-0.5 shrink-0 text-fg-muted"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {p.footnote && (
                  <p className="mt-6 text-xs leading-relaxed text-fg-subtle">
                    {p.footnote}
                  </p>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

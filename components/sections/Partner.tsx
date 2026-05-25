import { Truck, HeartPulse, Landmark, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

type Category = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const categories: Category[] = [
  {
    icon: Truck,
    title: "Logistics & fleet operators",
    body: "Protect your workforce on the road with identity and vital monitoring.",
  },
  {
    icon: HeartPulse,
    title: "Hospitals & ambulance services",
    body: "Integrate emergency identity into your triage and pre-hospital workflows.",
  },
  {
    icon: Landmark,
    title: "Government & public health",
    body: "Scale district-level emergency response infrastructure.",
  },
];

// TODO: swap to partnerships@drsolv.in once the mailbox is live.
const CONTACT_EMAIL = "solvpvtltd@gmail.com";

export default function Partner() {
  return (
    <Section id="partner" className="border-t border-border">
      <Reveal>
        <Eyebrow>Partner with us</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Build emergency response infrastructure with us.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted">
          We&rsquo;re looking for partners who move first and operate at the
          edges of healthcare delivery.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {categories.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={0.05 * (i + 1)}>
              <article className="solution-card interactive flex h-full flex-col gap-4 rounded-lg border p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface">
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                    className="text-fg"
                    aria-hidden
                  />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">{c.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.25}>
        <div className="mt-14 flex flex-col items-start gap-4 rounded-lg border border-border bg-white p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-fg-subtle">
              Get in touch
            </p>
            <p className="mt-1 font-display text-lg font-semibold tracking-tight text-fg md:text-xl">
              Tell us how you want to partner.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Partnership%20enquiry`}
            className="inline-flex items-center gap-1.5 rounded-md bg-fg px-5 py-3 text-sm font-medium text-white press hover:bg-fg/90"
          >
            {CONTACT_EMAIL}
            <ArrowRight size={14} strokeWidth={2} aria-hidden />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

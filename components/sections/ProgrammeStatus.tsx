import { ArrowRight } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

// TODO: replace with the live Google Form link for early-product applications.
const EARLY_ACCESS_FORM_URL = "#";

type Update = {
  label: string;
  title: string;
  body: string;
};

const updates: Update[] = [
  {
    label: "Incubation",
    title: "STARTINUP",
    body: "Selected under STARTinUP, Uttar Pradesh's official startup programme. Incubated at GICRISE, Galgotias University.",
  },
  {
    label: "Incubator",
    title: "Incubated at GIC-RISE",
    body: "Part of GIC-RISE, the incubation centre at Galgotias University.",
  },
  {
    label: "Recognition",
    title: "DPIIT-recognised startup",
    body: "Recognised by the Department for Promotion of Industry and Internal Trade (DIPP233670).",
  },
  {
    label: "Validation",
    title: "Field research and beta testing",
    body: "Running active surveys — online and offline — among students, gig workers, daily commuters, and emergency healthcare professionals, with parallel beta testing of our data systems.",
  },
];

export default function ProgrammeStatus() {
  return (
    <Section id="pilots" className="border-t border-border">
      <Reveal>
        <Eyebrow>Programme status</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Where we are today.
        </h2>
      </Reveal>

      <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {updates.map((u, i) => (
          <Reveal key={u.label} delay={0.05 * (i + 1)}>
            <article className="solution-card interactive flex h-full flex-col gap-3 rounded-lg border p-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-fg-subtle">
                {u.label}
              </p>
              <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                {u.title}
              </h3>
              <p className="text-sm leading-relaxed text-fg-muted">{u.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <Eyebrow>Pilot updates</Eyebrow>
        </Reveal>
        <Reveal delay={0.05}>
          <article className="solution-card interactive mt-4 flex flex-col gap-4 rounded-lg border p-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h3 className="font-display text-lg font-semibold tracking-tight text-fg">
                Logistics pilot programme — launching 2026
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                We are onboarding the first users for the QR Emergency Band.
                Apply to receive the product early and help shape the pilot.
              </p>
            </div>
            <a
              href={EARLY_ACCESS_FORM_URL}
              target={EARLY_ACCESS_FORM_URL === "#" ? undefined : "_blank"}
              rel={
                EARLY_ACCESS_FORM_URL === "#"
                  ? undefined
                  : "noopener noreferrer"
              }
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-fg px-5 py-3 text-sm font-medium text-white press hover:bg-fg/90"
            >
              Apply for early product
              <ArrowRight size={14} strokeWidth={2} aria-hidden />
            </a>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

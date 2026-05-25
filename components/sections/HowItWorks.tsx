import { UserPlus, Watch, Activity, Siren } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import AnimatedIcon from "../ui/AnimatedIcon";

type Step = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    icon: UserPlus,
    title: "Onboard",
    body: "Create your secure DRSOLV medical profile — allergies, conditions, medications, emergency contacts.",
  },
  {
    icon: Watch,
    title: "Wear",
    body: "Carry your QR Emergency Band or wear the medical-grade biosensing wearable.",
  },
  {
    icon: Activity,
    title: "Detect",
    body: "The wearable monitors vitals continuously and flags real medical events on-device.",
  },
  {
    icon: Siren,
    title: "Respond",
    body: "SOS alerts your emergency contacts and gives responders instant access to your medical profile.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="border-t border-border">
      <Reveal>
        <Eyebrow>How it works</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          From profile to saving lives.
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={0.05 * (i + 1)}>
              <li className="solution-card interactive flex h-full flex-col gap-4 rounded-lg border p-7">
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface">
                  <AnimatedIcon delay={0.12}>
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="solution-icon"
                      aria-hidden
                    />
                  </AnimatedIcon>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-fg-subtle">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="solution-title mt-2 font-display text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {s.body}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

import { Activity, ShieldAlert, Timer, QrCode } from "lucide-react";
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
    icon: Activity,
    title: "Real-time vital tracking",
    body: "Continuous monitoring of heart rate, SpO₂, single-lead ECG, and temperature.",
  },
  {
    icon: ShieldAlert,
    title: "Detect real emergency vs artifact",
    body: "On-device AI distinguishes a genuine event from movement noise before raising an alert.",
  },
  {
    icon: Timer,
    title: "Auto-SOS within 30 seconds",
    body: "If the wearer doesn't respond, emergency contacts and the responder network are notified automatically.",
  },
  {
    icon: QrCode,
    title: "Scan to access vitals",
    body: "Nearby responders scan the QR or tap the NFC band to access critical medical data — no app required.",
  },
];

export default function Approach() {
  return (
    <Section className="border-t border-border">
      <Reveal>
        <Eyebrow>Our approach</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight md:text-5xl">
          <span className="block">Read vitals.</span>
          <span className="block">Identify emergency-causing trends.</span>
          <span className="block">Send an alert within 30 seconds.</span>
        </h2>
      </Reveal>

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={0.05 * (i + 1)}>
              <li className="solution-card interactive flex h-full flex-col gap-4 rounded-lg border p-7">
                <div className="flex items-center justify-between">
                  <AnimatedIcon delay={0.12}>
                    <Icon
                      size={20}
                      strokeWidth={1.6}
                      className="solution-icon"
                      aria-hidden
                    />
                  </AnimatedIcon>
                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-fg-subtle">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="solution-title font-display text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-fg-muted">
                  {s.body}
                </p>
              </li>
            </Reveal>
          );
        })}
      </ol>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-2xl text-pretty text-base leading-relaxed text-fg">
          We deliver information when it matters most.
        </p>
      </Reveal>
    </Section>
  );
}

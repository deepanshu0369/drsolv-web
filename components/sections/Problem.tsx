import { ArrowUpRight } from "lucide-react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

type Stat = {
  value: string;
  label: string;
  source: string;
  href: string;
};

const stats: Stat[] = [
  {
    value: "1.70 lakh",
    label: "Road accident deaths in India annually.",
    source: "PIB · Deaths Due to Road Accidents in India (MoRTH)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2036268",
  },
  {
    value: "4.73 lakh",
    label: "Road accidents recorded across India annually.",
    source: "PIB · Deaths Due to Road Accidents in India (MoRTH)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2036268",
  },
  {
    value: "30–40%",
    label: "Of road accident deaths occur within the first hour.",
    source:
      "TRIP Centre, IIT Delhi · India Status Report on Road Safety 2024",
    href: "https://tripc.iitd.ac.in/assets/publication/India_Status_Report_on_Road_Safety-20242.pdf",
  },
  {
    value: "11%",
    label:
      "Of global road deaths happen in India — with only 1% of the world's vehicles.",
    source: "PIB · Road Accidents and Safety Measures (MoRTH)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2042509",
  },
  {
    value: "60%+",
    label:
      "Of all deaths in India are now from non-communicable diseases.",
    source: "PIB · Status of Non-Communicable Diseases in India (MoHFW)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1796435",
  },
  {
    value: "44%",
    label:
      "Of road accident fatalities are two-wheeler riders — the most exposed road users.",
    source: "PIB · Deaths Due to Road Accidents in India (MoRTH)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2036268",
  },
  {
    value: "3–5%",
    label:
      "Of hospital beds in India are dedicated to emergency admissions — even though emergencies account for 1 in 10 patient visits.",
    source: "NITI Aayog & AIIMS — Pan-India Emergency Care Study (JOGH 2023)",
    href: "https://jogh.org/2023/jogh-13-03015",
  },
  {
    value: "1.6 M",
    label:
      "Indians die every year due to poor-quality care — nearly twice the toll of non-access to care (2016 data).",
    source:
      "Kruk et al. · The Lancet · Mortality due to low-quality health systems (2018, open access on PMC)",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6238021/",
  },
  {
    value: "79.5%",
    label:
      "Shortfall of specialist doctors at India's rural Community Health Centres.",
    source: "PIB · MoHFW Rural Health Statistics 2021–22",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1896950",
  },
  {
    value: "+50%",
    label:
      "Government commitment under Union Budget 2026–27 (Para 88) to expand emergency and trauma care capacity at India's district hospitals.",
    source:
      "PIB · Post-Budget Webinar (NITI Aayog, Dr. V.K. Paul, March 2026)",
    href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2236917",
  },
];

export default function Problem() {
  return (
    <Section id="problem" className="border-t border-border">
      <Reveal>
        <Eyebrow>The problem</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          THE GOLDEN HOUR CRISIS.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="problem-trail-mask mt-12" aria-label="Problem statistics">
          <div className="problem-trail">
            {stats.map((s) => (
              <StatCard key={`a-${s.label}`} stat={s} />
            ))}
            {/* Duplicate set — hidden from assistive tech, used to make the
                linear translateX loop seamless. */}
            {stats.map((s) => (
              <StatCard
                key={`b-${s.label}`}
                stat={s}
                ariaHidden
                tabbable={false}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-12 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted">
          Emergency healthcare professionals don&rsquo;t know who the
          patient is, what conditions they have, or whom to call. Critical
          minutes are lost on basics.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <p className="mt-6 text-xs text-fg-subtle">
          Each card links to its primary source — government, peer-reviewed,
          or official press release — and opens in a new tab. Hover the
          trail to pause and click through.
        </p>
      </Reveal>
    </Section>
  );
}

function StatCard({
  stat,
  ariaHidden = false,
  tabbable = true,
}: {
  stat: Stat;
  ariaHidden?: boolean;
  tabbable?: boolean;
}) {
  return (
    <article
      aria-hidden={ariaHidden || undefined}
      className="problem-card interactive relative flex h-[260px] w-[320px] shrink-0 flex-col overflow-hidden rounded-lg border p-7"
    >
      <a
        href={stat.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${stat.label} Read source: ${stat.source}`}
        tabIndex={tabbable ? undefined : -1}
        className="absolute inset-0 z-10 rounded-lg"
      />

      <div className="flex items-start justify-between gap-3">
        <p className="problem-value font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {stat.value}
        </p>
        <ArrowUpRight
          size={18}
          strokeWidth={1.8}
          aria-hidden
          className="problem-icon mt-1 shrink-0 opacity-50"
        />
      </div>

      <p className="relative mt-4 line-clamp-3 text-sm leading-relaxed text-fg">
        {stat.label}
      </p>

      <p className="problem-divider relative mt-auto line-clamp-2 border-t pt-3 text-[11px] uppercase tracking-[0.14em] text-fg-subtle">
        {stat.source}
      </p>
    </article>
  );
}

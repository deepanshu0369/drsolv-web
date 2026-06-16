import Image from "next/image";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

type Member = {
  name: string;
  role: string;
  bio: string[];
  photo?: string;
};

const founders: Member[] = [
  {
    name: "Dr. Rashi Gupta",
    role: "Co-Founder and CEO",
    bio: [
      "MBBS.",
      "Emergency care experience in government and private setups.",
      "Clinical Lead.",
    ],
    photo: "/team-rashi-gupta.jpeg",
  },
  {
    name: "Deepanshu Pandey",
    role: "Co-Founder and COO",
    bio: [
      "B.Tech Computer Science.",
      "MBA in Marketing and Analytics.",
      "Product and Operations.",
    ],
    photo: "/team-deepanshu.png",
  },
];

const advisors: Member[] = [
  {
    name: "Dheeraj Khetwal",
    role: "Advisor",
    bio: [
      "Founder, Raasta R&D.",
      "HealthTech experience.",
      "Long-term Roadmap.",
    ],
  },
  {
    name: "Suraj Chand Rajwar",
    role: "Advisor",
    bio: [
      "Previously at UNDP.",
      "Public Health Policy.",
      "Government Ecosystem.",
    ],
  },
  {
    name: "Kamal Kishor Malhotra",
    role: "Advisor",
    bio: [
      "CEO, Galgotias Incubation Centre (GIC-RISE).",
      "Startup Ecosystem Builder.",
      "Incubation & Investment.",
    ],
  },
  {
    name: "Dr. Nikita Deopa",
    role: "Clinical Advisor",
    bio: ["MD Psychiatrist."],
  },
  {
    name: "Dr. Chirag Saini",
    role: "Clinical Advisor",
    bio: ["MD Dermatologist."],
  },
  {
    name: "Dr. Anjali Sagar",
    role: "Clinical Advisor",
    bio: ["MD Microbiologist."],
  },
  {
    name: "Dr. Rishi Sharma",
    role: "Clinical Advisor",
    bio: ["MD Community Medicine."],
  },
  {
    name: "Dr. Gaurav Singh Tomar",
    role: "Clinical Advisor",
    bio: ["DA, DNB, DM — AIIMS New Delhi.", "HOD Critical Care, ISIC."],
  },
  {
    name: "Dr. Aparna Pant",
    role: "Clinical Advisor",
    bio: ["Cardiologist."],
  },
];

export default function Team() {
  return (
    <Section id="team" className="border-t border-border">
      <Reveal>
        <Eyebrow>Team</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
          Built by clinicians and engineers.
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted">
          One vision. One mission. Better healthcare for India.
        </p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-3xl gap-5 sm:grid-cols-2">
        {founders.map((m, i) => (
          <Reveal key={m.name} delay={0.04 * (i + 1)}>
            <FounderCard member={m} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15}>
        <div
          className="team-trail-mask mt-12"
          aria-label="Advisors and clinical advisors"
        >
          <div className="team-trail">
            {advisors.map((m) => (
              <AdvisorCard key={`a-${m.name}`} member={m} />
            ))}
            {/* Duplicate set — hidden from assistive tech, used to make the
                linear translateX loop seamless. */}
            {advisors.map((m) => (
              <AdvisorCard key={`b-${m.name}`} member={m} ariaHidden />
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function FounderCard({ member }: { member: Member }) {
  return (
    <article className="solution-card interactive flex h-full items-stretch overflow-hidden rounded-lg border border-border bg-white">
      {member.photo ? (
        <div className="relative w-36 shrink-0 self-stretch bg-surface">
          <Image
            src={member.photo}
            alt={`${member.name}, ${member.role}`}
            fill
            sizes="176px"
            className="object-cover object-top"
          />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-col justify-center p-5">
        <h3 className="font-display text-base font-semibold tracking-tight text-fg">
          {member.name}
        </h3>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-fg-subtle">
          {member.role}
        </p>
        <ul className="mt-3 space-y-1 text-sm leading-relaxed text-fg-muted">
          {member.bio.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function AdvisorCard({
  member,
  ariaHidden = false,
}: {
  member: Member;
  ariaHidden?: boolean;
}) {
  return (
    <article
      aria-hidden={ariaHidden || undefined}
      className="solution-card interactive flex w-[230px] shrink-0 flex-col rounded-lg border border-border bg-white p-5"
    >
      <h3 className="font-display text-base font-semibold tracking-tight text-fg">
        {member.name}
      </h3>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-fg-subtle">
        {member.role}
      </p>
      <ul className="mt-3 space-y-1 text-sm leading-relaxed text-fg-muted">
        {member.bio.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </article>
  );
}

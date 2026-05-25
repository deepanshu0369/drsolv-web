import Image from "next/image";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

type Member = {
  name: string;
  role: string;
  bio: string[];
  photo: string;
};

const team: Member[] = [
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
  {
    name: "Dheeraj Khetwal",
    role: "Advisor",
    bio: [
      "Founder, Raasta R&D.",
      "HealthTech experience.",
      "Long-term Roadmap.",
    ],
    photo: "/team-dheeraj-khetwal.jpeg",
  },
  {
    name: "Suraj Chand Rajwar",
    role: "Advisor",
    bio: [
      "Previously at UNDP.",
      "Public Health Policy.",
      "Government Ecosystem.",
    ],
    photo: "/team-suraj-rajwar.png",
  },
  {
    name: "Dr. Nikita Deopa",
    role: "Clinical Advisor",
    bio: ["MD Psychiatrist."],
    photo: "/team-nikita-deopa.jpeg",
  },
  {
    name: "Dr. Chirag Saini",
    role: "Clinical Advisor",
    bio: ["MD Dermatologist."],
    photo: "/team-chirag-saini.jpeg",
  },
  {
    name: "Dr. Anjali Sagar",
    role: "Clinical Advisor",
    bio: ["MD Microbiologist."],
    photo: "/team-anjali-sagar.jpeg",
  },
  {
    name: "Dr. Rishi Sharma",
    role: "Clinical Advisor",
    bio: ["MD Community Medicine."],
    photo: "/team-rishi-sharma.jpeg",
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

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((m, i) => (
          <Reveal key={m.name} delay={0.04 * (i + 1)}>
            <MemberCard member={m} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="solution-card interactive flex h-full flex-col gap-4 rounded-lg border border-border bg-white p-6">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-surface">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 260px"
          className="object-cover object-center"
        />
      </div>
      <div>
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

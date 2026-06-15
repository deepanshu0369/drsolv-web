import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import Reveal from "../ui/Reveal";

type SurveyVideo = {
  title: string;
  instagramUrl: string;
  // Optional self-hosted poster in /public (e.g. "/reels/accident.jpg").
  // When set, it renders as the card thumbnail; otherwise a branded poster
  // is shown. Clicking the card always opens the Instagram reel.
  poster?: string;
};

const surveys: SurveyVideo[] = [
  { title: "If you ever had an accident?", instagramUrl: "https://www.instagram.com/reel/DYuT017p-cu/", poster: "/reels/accident.jpg" },
  { title: "What is your biggest fear as a delivery agent?", instagramUrl: "https://www.instagram.com/reel/DY1xItVJo_P/", poster: "/reels/fear.jpg" },
  { title: "People are suffering with no one to help!", instagramUrl: "https://www.instagram.com/reel/DYSBVadpU6O/", poster: "/reels/suffering.jpg" },
];

export default function Hero() {
  return (
    <section id="top" className="relative w-full pt-32 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 md:px-10">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              Building India&rsquo;s first medical-grade biosensing wearable
              with built-in emergency response.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted md:text-lg">
              When seconds decide outcomes, DRSOLV delivers identity and
              vitals — even when you can&rsquo;t speak.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#how-it-works"
                className="press inline-flex items-center rounded-md bg-fg px-5 py-3 text-sm font-medium text-white hover:bg-fg/90"
              >
                See how it works
              </Link>
              <Link
                href="#partner"
                className="press inline-flex items-center rounded-md border border-border bg-white px-5 py-3 text-sm font-medium text-fg hover:bg-surface"
              >
                Partner with us
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Voices from the people — field survey reels on Instagram */}
        <Reveal delay={0.24} className="mt-20 md:mt-28">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-fg/70">
              Why DRSOLV
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance md:text-4xl">
              Voices from the people who carry the risk.
            </h2>
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted">
              Field conversations with gig workers across logistics, delivery,
              and ride-hail — the workforce most exposed to road incidents and
              least likely to be reached in time.
            </p>
          </div>

          <div
            className="mt-10 grid gap-5 md:grid-cols-3"
            aria-label="Field survey videos"
          >
            {surveys.map((s) => (
              <VideoCard key={s.title} video={s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: SurveyVideo }) {
  return (
    <a
      href={video.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Watch “${video.title}” on Instagram (opens in a new tab)`}
      className="solution-card interactive group block overflow-hidden rounded-lg border"
    >
      <div
        className="relative overflow-hidden bg-surface"
        style={{ aspectRatio: "16 / 9" }}
      >
        {video.poster ? (
          <>
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="(max-width: 768px) 92vw, 360px"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-fg/25" />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 120% at 30% 20%, #16324f 0%, #0a2540 72%)",
            }}
          >
            <span className="absolute left-4 top-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
              Field survey
            </span>
          </div>
        )}

        {/* Play affordance */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-fg shadow-md ring-1 ring-black/5 transition-transform duration-200 ease-out group-hover:scale-105">
            <Play
              size={16}
              strokeWidth={2.5}
              fill="currentColor"
              aria-hidden
              className="ml-0.5"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-3">
        <span className="text-sm font-medium text-fg">{video.title}</span>
        <span className="shrink-0 text-[11px] font-medium text-fg-subtle">
          Instagram ↗
        </span>
      </div>
    </a>
  );
}

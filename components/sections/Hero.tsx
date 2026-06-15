import Link from "next/link";
import Script from "next/script";
import Reveal from "../ui/Reveal";

type SurveyVideo = {
  title: string;
  instagramUrl: string;
};

const surveys: SurveyVideo[] = [
  { title: "If you ever had an accident?", instagramUrl: "https://www.instagram.com/reel/DYuT017p-cu/" },
  { title: "What is your biggest fear as a delivery agent?", instagramUrl: "https://www.instagram.com/reel/DY1xItVJo_P/" },
  { title: "People are suffering with no one to help!", instagramUrl: "https://www.instagram.com/reel/DYSBVadpU6O/" },
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

        {/* Voices from the people — field survey videos hosted on YouTube */}
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
      <Script src="//www.instagram.com/embed.js" strategy="lazyOnload" />
    </section>
  );
}

function VideoCard({ video }: { video: SurveyVideo }) {
  return (
    <figure className="solution-card interactive group block overflow-hidden rounded-lg border">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`${video.instagramUrl}?utm_source=ig_embed&utm_campaign=loading`}
        data-instgrm-version="14"
      >
        <a href={video.instagramUrl}>View this reel on Instagram</a>
      </blockquote>
      <figcaption className="flex items-center justify-between gap-3 border-t border-border px-5 py-3">
        <span className="text-sm font-medium text-fg">{video.title}</span>
      </figcaption>
    </figure>
  );
}

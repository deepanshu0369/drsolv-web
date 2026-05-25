# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Marketing site for **DRSOLV Healthcare Pvt Ltd** — an Indian healthtech startup building a medical-grade biosensing wearable plus a QR/NFC emergency-identification band. Single-page Next.js site, anchor-based navigation, no CMS, all content hardcoded in section components.

## Commands

```bash
npm run dev      # Next.js dev server on :3000 (allows LAN access from 192.168.1.5 — see next.config.ts)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (eslint-config-next)
npx tsc --noEmit # Standalone TypeScript check
```

**No test suite.** No vitest, jest, or playwright is installed. Don't propose running tests; if you need to verify, run `tsc --noEmit` and `npm run build`.

## Stack

- **Next.js 16.2.6** with the App Router (`app/` directory). Turbopack is used in dev.
- **React 19.2** + **TypeScript 5** (`strict: true`).
- **Tailwind CSS v4** via `@tailwindcss/postcss`. **No `tailwind.config.js`** — theme tokens live in `app/globals.css` under `@theme`.
- **Framer Motion 12** — used for the quiet scroll-reveal pattern site-wide. Do not introduce cursor-trail effects, page-wide parallax, or page-transition motion (intentionally removed earlier).
- **Lucide React** for icons. No emoji icons anywhere.
- **`@paper-design/shaders-react`** powers the one live full-page background — `GlobalShaderBackground` (a very pale mesh gradient, rendered in `app/layout.tsx`).
- **No 3D / WebGL.** A `@google/model-viewer` integration was tried and removed (it didn't perform well). The Solution section uses `ProductGallery` — a 2D image gallery (main image + angle thumbnails). Do not reintroduce Three.js / GLB / model-viewer.

The path alias is `@/*` → repo root.

## Architecture

### Page composition

The whole site is one route. `app/page.tsx` composes 8 sections in fixed order:

```
Hero → Problem → Approach → Solution → HowItWorks → ProgrammeStatus → Team → Partner
```

Anchors used by `Navbar` links: `#top` (Hero), `#problem`, `#products` (Solution), `#how-it-works`, `#pilots` (ProgrammeStatus), `#team`, `#partner`. Don't rename these without updating `components/Navbar.tsx`.

`app/icon.tsx` generates the favicon dynamically — it reads `public/drsolv-icon.png` from disk via `node:fs`, composites it on white via `next/og`'s `ImageResponse`. Requires `runtime = "nodejs"`. Updating the logo PNGs in `public/` auto-updates the favicon on next build.

### Components

Three buckets:

- `components/Navbar.tsx`, `components/Footer.tsx` — site shell, rendered in `app/layout.tsx`.
- `components/sections/*` — one file per section. Content is hardcoded inside the section file (data arrays at the top, JSX below). No section is reused.
- `components/ui/*` — small primitives: `Section`, `Reveal`, `Eyebrow`, `Badge`, `Logo`, `Placeholder` (dashed-border image placeholder), `ProductGallery` (2D product image gallery — main image + angle thumbnails, falls back to labeled placeholders), `GlobalShaderBackground` (page background).

`Section` enforces `max-w-[1200px]` and `py-16 md:py-24`. Don't bypass it on new sections.

### Styling

Tailwind theme tokens are defined in `app/globals.css` under `@theme`. The committed palette is **navy + white + black plus two scoped accents**:

| Token group | Use case | Default flip target |
|---|---|---|
| `--color-fg`, `--color-bg`, `--color-border` etc. | Default site palette (navy on white) | — |
| `--color-problem-*` | Problem-section card hover | Light red `#FEE2E2` / `#B91C1C` |
| `--color-solution-*` | Approach/Solution card hover, "Near launch" badge | Pale blue `#EFF6FF` / `#1E40AF` |

**Hard rules** carried from the original signoff and reinforced over many iterations:

1. **No teal or cyan anywhere.** Earlier versions had a teal/cyan accent palette — it was deliberately removed. Don't reintroduce, including via copy-pasted components from 21st.dev / motion-primitives demos.
2. **Two accents only**, and only in their semantic contexts. Red = problem state. Blue = solution/active state. Nowhere else.
3. **One background only: `GlobalShaderBackground`** — a very pale mesh gradient kept deliberately subtle so navy text stays legible. Heartbeat-ECG canvases, lamp effects, and conic-gradient halos were all considered and rejected; don't add more decorative background layers.
4. **No autoplay videos, no cursor effects, no parallax, no 3D tilt cards.** Those primitives existed at one point and were stripped.

### Interactive card utilities (custom, in `globals.css`)

These are the load-bearing styling utilities — use them rather than inline Tailwind for card hover states:

- `.interactive` — hover lift (`translateY(-3px)` + soft shadow), active press (`scale(0.985)`). Applied to every card on the site.
- `.problem-card` — hover (and `:focus-visible` via `:has()` on inner link) flips card to light-red palette. Inner color-flip elements need classes `.problem-value`, `.problem-icon`, `.problem-divider`. **Drop any `text-fg` Tailwind utility from those inner elements** — it competes with the hover rule and breaks the color flip.
- `.solution-card` — same pattern, pale-blue palette. Inner classes `.solution-icon`, `.solution-title`. Same `text-fg` warning.
- `.press` — button click scale-down feedback.
- `.problem-trail` + `.problem-trail-mask` — slow 120s horizontal marquee used by the Problem section. Pauses on `:hover` and `:focus-within`. `prefers-reduced-motion: reduce` disables the animation; the container falls back to native `overflow-x: auto`. The stat cards are duplicated and the second set is `aria-hidden` for screen-reader sanity.

### Navbar + Hero coupling

The Hero's `pt-*` and the Navbar's `h-*` are linked. The fixed nav sits over the Hero — Hero top padding must clear it. If you change one, check the other. Logo size in Navbar is `height={50}` currently; if you change it, you may also need to adjust nav height and Hero `pt`.

The logo PNGs in `public/drsolv-logo.png` (full lockup, 812×238) and `public/drsolv-icon.png` (cross+feather only, 239×238) were programmatically trimmed from a 1024×1024 source. The intrinsic `width`/`height` props in `components/ui/Logo.tsx` MUST match — if you swap the source artwork, re-trim with `sharp().trim()` and update those dimensions.

## Project-specific rules (carried from the brief)

These are non-negotiable because they have legal/regulatory consequences on a healthtech site.

1. **Never write "ISO certified" or "CDSCO certified".** The wearable has not received either. Acceptable: *"Designed for ISO 13485 compliance"*, *"Pursuing CDSCO Class B medical device certification"*.
2. **Wearable is "in development", QR band is "near launch".** Never write present tense for the wearable shipping.
3. **No invented statistics.** The Problem section uses only government / peer-reviewed sources with citation links. If a new stat is requested, either find a primary source (MoHFW, MoRTH, NITI Aayog, ICMR, Lancet, etc.) or push back. Perplexity links, news aggregators, and similar are not acceptable citations.
4. **No stock photography, no AI-generated renders.** All images are labeled placeholder boxes via the `Placeholder` component (or `ProductViewer` with placeholder `.glb`) until the founders supply real assets.
5. **Contact email** is `solvpvtltd@gmail.com`. The `Partner` section has a TODO marker for the eventual `partnerships@drsolv.in` once the official mailbox is live.

## Things outside this repo

- **The Vercel deployment at `https://dr-solv-main.vercel.app/` is NOT wired to this codebase.** This local folder has no `.git` directory and no remote. The user (Deepanshu) handles git init / GitHub / Vercel hookup themselves. Do not propose `git init`, `git push`, or `vercel deploy` actions.
- **README.md is the unmodified create-next-app boilerplate.** It can be ignored.

# Kino Royale — Claude Code Build Brief
### Film Lady Productions · Podcast Website
**Version 1.1 — Decap CMS added**

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Design Rationale & Reference Material](#2-design-rationale--reference-material)
3. [Design System](#3-design-system)
4. [Tech Stack & Architecture](#4-tech-stack--architecture)
5. [Project Scaffold — Step by Step](#5-project-scaffold--step-by-step)
6. [CSS Modules — How They Work](#6-css-modules--how-they-work)
7. [Data Architecture](#7-data-architecture)
8. [Pages & Routes](#8-pages--routes)
9. [Components](#9-components)
10. [Audio & R2 Integration](#10-audio--r2-integration)
11. [RSS Feed](#11-rss-feed)
12. [Decap CMS — Content Editing Without Code](#12-decap-cms--content-editing-without-code)
13. [Deployment](#13-deployment)
14. [File Structure Reference](#14-file-structure-reference)

---

## 1. Project Overview

**Kino Royale** is the third project under Film Lady Productions, a creative platform run by Sonia (the Film Lady) from Sydney, Australia. It is a podcast website — the audio home of a film criticism show that pairs each episode with a written review on the Cinefile Blog and a scenario in the Royal Simulator app.

The three projects form the **Unholy Trinity**:
- **Cinefile Blog** — `cinefile-blog.netlify.app` — written film reviews
- **Kino Royale** — this project — podcast episodes
- **Royal Simulator** — interactive horror scenario generator

### What the site needs to do

- Tell the story of the podcast and the Film Lady persona
- Host and play podcast episodes (self-hosted audio via Cloudflare R2)
- Link each episode to its corresponding blog review and Royal Simulator scenario (the Unholy Trinity)
- Grow gracefully from 4 episodes to an eventual back-catalogue

### What it explicitly does NOT need

- User accounts or authentication
- A paid CMS or database (Decap CMS is git-based and free)
- Server-side logic beyond static generation
- Paid podcast platform dependency

---

## 2. Design Rationale & Reference Material

This section documents every major design decision and its source. This is important context for Claude Code to understand *why* things look the way they do — not just *what* to build.

---

### 2.1 The Core Aesthetic: Iridescent Midnight

The site uses a palette derived from two Bond film posters discussed during the design process:

**Thunderball (1965)**
- Source of: the two-colour stacked title treatment (KINO white / ROYALE cobalt blue), Bebas Neue as the display face, the condensed credit-block typographic hierarchy, the underwater world as the homepage's primary visual metaphor

**The Living Daylights (1987)**
- Source of: the near-black navy background deepening to pure dark at the bottom, the cobalt blue gun barrel as a structural graphic device, the bright atmospheric light source at the top of the frame with rays descending, the silhouette figure composition (figure large in frame, title anchored separately), the tension between a warm light source and cold dark surroundings

The palette is called **Iridescent Midnight** — like the sequins on a 1920s evening gown catching light underwater. The reference image used during design was a deep teal beaded gown with an Art Deco beading pattern in elongated diamond chevrons.

---

### 2.2 The Homepage Composition

The homepage hero is directly modelled on the **Living Daylights poster composition**:
- A figure bleeds off the left edge of the frame, partially cropped — mysterious, you see only part of her
- Light source is off-left (where the figure is), with rays descending into dark water
- Title is anchored to the right, with space to breathe
- The background suggests being underwater, looking up toward a surface light

The **silhouette SVG** (`/public/silhouette.svg`) is a third-party asset showing a woman in a flowing dress with negative space. The white paths are recoloured to dark navy so the figure reads as negative space against the background. The red lips (`#c1272d`) are preserved exactly as-is from the original SVG.

> **Important:** Red is NOT a design token — it never appears in the Tailwind theme or CSS variables. It is used as a hardcoded accent in four specific places: the silhouette SVG lips, the `CrownIcon` component, certain bubbles in the `DiamondDivider`, and the Royal Simulator `UniverseCard` top border.

---

### 2.3 The Target / Gun Barrel Motif

The concentric ring target graphic (used on episode pages and as section dividers) comes directly from the **Bond gun barrel sequence** — specifically as seen in The Living Daylights. It is used at three scales:

- **Episode pages** — large, partially cropped, ghost opacity in the background behind episode content
- **Section dividers** — small 32px icon next to section headings
- **Not on the homepage** — the homepage has the water light source instead

---

### 2.4 Typography Rationale

The type system uses three faces, each with a distinct role:

| Face | Role | Why |
|---|---|---|
| **DM Serif Display Italic** | Display — hero title "Kino", episode titles on their own pages, pull quotes | Soft, cinematic, warm italic energy. Contrasts with the cold geometric Bebas. |
| **Bebas Neue** | UI — "ROYALE" subtitle, nav links, section headings, episode numbers, CTAs, metadata labels | The condensed all-caps face of film posters and title cards. Directly from the Thunderball / Living Daylights poster typography. |
| **Barlow Condensed 300** | Body — episode descriptions, show notes, eyebrows, secondary text | Already present in the system as the condensed UI face. Lean, slightly cinematic. At weight 300 it reads as fine and editorial rather than heavy. |

The tension between **DM Serif Display** (warm, flowing, feminine, italic) and **Bebas Neue** (cold, geometric, all-caps, blunt) is intentional — it mirrors the Film Lady persona: critical intelligence wrapped in elegance.

**Cormorant Garamond italic** may be used sparingly for the Film Lady's own voice — pull quotes, the story page tagline — but is NOT a general body face.

---

### 2.5 The Silhouette & Red Lips

The silhouette appears **only on the homepage hero**. It connects to:
- The Thunderball poster's illustrated figures
- The Bond title sequence tradition of silhouetted female figures
- The Film Lady persona — the site is authored by a woman with a strong aesthetic identity

The red lips are a **signature**, not a colour. They reference the Thunderball poster's red text and the classic Bond-girl visual language. Red is used sparingly as a recurring accent — the CrownIcon, certain DiamondDivider bubbles, and the Royal Simulator card border — but never as a token and never in body text or UI chrome.

---

## 3. Design System

### 3.1 Colour Palette

All colours as CSS custom properties and Tailwind `@theme` tokens.

```css
/* Backgrounds — darkest to lightest */
--color-midnight:    #020810;   /* page background */
--color-deep:        #060D1A;   /* card surfaces, sections */
--color-navy:        #0C1828;   /* elevated surfaces, episode cards */
--color-navy-mid:    #1A3A50;   /* borders, rule lines */

/* Cobalt — structural accent, gun barrel blue */
--color-cobalt:      #1A4A8A;
--color-cobalt-mid:  #2860B0;
--color-cobalt-glow: #4A8AD4;   /* interactive labels, metadata */

/* Teal — primary interactive accent */
--color-teal:        #7DD4D0;   /* CTAs, play buttons, active states */
--color-teal-dim:    #3A7878;   /* muted teal, tags, episode labels */

/* Type */
--color-silver:      #C8DCE0;   /* body text */
--color-silver-dim:  #4A6878;   /* muted text, descriptions */
--color-white:       #EEF6FA;   /* display headings */
```

> **Red (#c1272d) is NOT a token.** It is never in the Tailwind theme or CSS variables. It appears hardcoded in four places: silhouette SVG lips, `CrownIcon`, `DiamondDivider` bubbles, and the Royal Simulator `UniverseCard` top border.

#### Colour usage rules

- **Backgrounds:** midnight → deep → navy, in that order of elevation (page → section → card)
- **Borders and rules:** always `navy-mid`
- **Primary CTA (Listen Now, Play):** teal background, midnight text
- **Ghost/secondary CTA:** navy-mid border, silver-dim text
- **Interactive labels, metadata, section markers:** cobalt-glow
- **Episode card left border accent:** teal (2px solid)
- **Active nav item:** teal
- **Tags/badges:** cobalt border, cobalt-glow text

---

### 3.2 Typography

```css
--font-display: 'DM Serif Display', serif;        /* italic always */
--font-ui:      'Bebas Neue', sans-serif;          /* all-caps always */
--font-body:    'Barlow Condensed', sans-serif;    /* weight 300 */
--font-voice:   'Cormorant Garamond', serif;       /* italic, Film Lady only */
```

#### Type scale

| Role | Font | Size | Weight | Notes |
|---|---|---|---|---|
| Hero title (Kino) | DM Serif Display | 96px | 400 | Italic, line-height 0.85 |
| Hero subtitle (ROYALE) | Bebas Neue | 30px | 400 | letter-spacing 0.44em |
| Episode title (page) | Bebas Neue | 44px | 400 | letter-spacing 0.08em |
| Episode title (card) | Bebas Neue | 20px | 400 | letter-spacing 0.1em |
| Nav links | Bebas Neue | 12px | 400 | letter-spacing 0.18em |
| Section headings | Bebas Neue | 14px | 400 | letter-spacing 0.22em |
| Episode numbers | Bebas Neue | 36px | 400 | muted cobalt-mid colour |
| Body / descriptions | Barlow Condensed | 15px | 300 | line-height 1.72 |
| Eyebrows / labels | Barlow Condensed | 9–10px | 300 | letter-spacing 0.3em, uppercase |
| Pull quotes | Cormorant Garamond | 17–26px | 300 | Italic |
| Film Lady tagline | Cormorant Garamond | 14px | 300 | Italic, silver-dim |

---

### 3.3 Decorative Motifs

#### Water / light source (homepage only)
Three SVG ellipses stacked with Gaussian blur filters:
1. Outer cobalt atmospheric wash — large radius, `stdDeviation="24"`, opacity 0.52
2. Mid cobalt bloom — medium radius, `stdDeviation="10"`, opacity 0.40
3. Bright light source — small radius, `stdDeviation="6"`, opacity 0.38

Plus: descending light rays (wide semi-transparent strokes), surface ripple lines, and rising bubble circles.

#### Target / gun barrel (episode pages, section dividers)
Concentric circles at decreasing radii, colours stepping from `navy` at outer edge to `teal-dim` at centre. Crosshair lines through the centre. Teal dot at the centre point.

#### Bubble divider (`DiamondDivider`)
A row of 7 small circles in varying sizes, alternating `cobalt-glow` and red (`#c1272d`) strokes at low opacity. Used between major sections.

#### Corner bracket box
A content box with four 10px L-shaped corner marks in `cobalt-glow`. Used for the Film Lady quote on the story page.

---

### 3.4 Component Patterns

#### Episode card
- Background: `navy`
- Border: 0.5px `navy-mid`, left border 2px `teal`
- Episode number: large Bebas, `cobalt-mid` (muted, decorative)
- Play button: 36px circle, `teal-dim` border, `teal` fill SVG triangle, hover fills circle with `teal`

#### Navigation
- Background: `deep`
- Border-bottom: 0.5px `navy-mid`
- Logo: DM Serif italic "Kino" + Bebas "ROYALE" subtitle
- Links: Bebas, `silver-dim`, active state `teal`
- CTA pill: Bebas, `teal` background, `midnight` text

#### Unholy Trinity cards
Three cards side by side, each with a 2px top border:
- Review card (Cinefile Blog): `cobalt-glow` top border
- Podcast card (Kino Royale): `cobalt-glow` top border
- Royal Simulator card: red (`#c1272d`) top border — `accent="red"` on `UniverseCard`

#### Audio player
- Background: `navy`
- Top border: 1px `cobalt`
- Play button: filled `teal` circle
- Progress bar: 3px, `navy-mid` track, `teal` fill
- Time display: Barlow Condensed, `silver-dim`

---

## 4. Tech Stack & Architecture

### Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | **Next.js 15** | Learning goal. App Router. Static export. |
| Language | **TypeScript** | Type safety for episode data, component props |
| Styling | **Tailwind v4 + CSS Modules** | Tailwind for utility classes; CSS Modules to learn scoped styles |
| Fonts | **Google Fonts via `next/font`** | Zero layout shift, self-hosted at build time |
| Bundler | **Turbopack** (built into Next 15) | Faster dev builds |
| Audio storage | **Cloudflare R2** | Zero egress fees. Free tier covers ~200 episodes at 50MB each |
| Deployment | **Netlify** | Consistent with Cinefile Blog |
| Content | **Single JSON file** | Consistent with Royal Simulator approach |

### Why Next.js over Vite for this project

The Royal Simulator uses Vite + React Router. Kino Royale uses Next.js because:
- Learning goal: Next.js App Router is the industry standard for React projects in 2025/26
- `generateStaticParams` pre-renders every episode page at build time — real static HTML for each episode URL, better for sharing on Bluesky
- `next/font` gives zero-layout-shift Google Fonts with one import line
- RSS feed can be a `route.ts` file — no separate build script needed
- Deploys cleanly to Netlify via `@netlify/plugin-nextjs`

### Why CSS Modules alongside Tailwind

- **Tailwind** handles spacing, layout, responsive behaviour, and common utilities
- **CSS Modules** handle component-specific styles that are complex, stateful, or benefit from being co-located with their component — particularly the water/bloom hero, the animated player, and the decorative SVG motifs
- Learning CSS Modules is valuable for understanding scoped styles in React — this project is a good opportunity because the components are meaningful but not overwhelming

---

## 5. Project Scaffold — Step by Step

> **Tutorial note:** These steps assume you have Node.js installed. Each command should be run in your terminal. After each step, the expected outcome is described.

### Step 1 — Create the Next.js project

```bash
npx create-next-app@latest kino-royale \
  --typescript \
  --tailwind \
  --app \
  --turbopack \
  --no-src-dir \
  --import-alias "@/*"
```

**What this does:**
- `--typescript` — sets up TypeScript throughout
- `--tailwind` — installs Tailwind v4 and creates `tailwind.config.ts`
- `--app` — uses the App Router (not the old Pages Router)
- `--turbopack` — enables the fast bundler
- `--no-src-dir` — puts `app/` at the root, not inside `src/`
- `--import-alias "@/*"` — lets you write `import X from '@/components/X'` instead of `../../components/X`

**Expected outcome:** A folder called `kino-royale` with a working Next.js project. Running `npm run dev` should show the default Next.js page at `localhost:3000`.

---

### Step 2 — Install additional dependencies

```bash
cd kino-royale
npm install clsx
```

**What `clsx` does:** A tiny utility for conditionally joining CSS class names. You'll use it constantly: `clsx(styles.card, isActive && styles.active)`. It's the standard for combining Tailwind classes with CSS Module classes.

---

### Step 3 — Configure Tailwind theme

Open `app/globals.css` and replace its contents with:

```css
@import "tailwindcss";

@theme {
  /* Colours */
  --color-midnight:    #020810;
  --color-deep:        #060D1A;
  --color-navy:        #0C1828;
  --color-navy-mid:    #1A3A50;
  --color-cobalt:      #1A4A8A;
  --color-cobalt-mid:  #2860B0;
  --color-cobalt-glow: #4A8AD4;
  --color-teal:        #7DD4D0;
  --color-teal-dim:    #3A7878;
  --color-silver:      #C8DCE0;
  --color-silver-dim:  #4A6878;
  --color-white:       #EEF6FA;

  /* Typography */
  --font-display: 'DM Serif Display', serif;
  --font-ui:      'Bebas Neue', sans-serif;
  --font-body:    'Barlow Condensed', sans-serif;
  --font-voice:   'Cormorant Garamond', serif;
}

/* Base resets */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  background-color: #020810;
  color: #C8DCE0;
}

body {
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 300;
  line-height: 1.72;
  -webkit-font-smoothing: antialiased;
}
```

**What this does:** In Tailwind v4, the theme is defined in CSS using `@theme` — no separate `tailwind.config.ts` needed for colours. This means you can use classes like `bg-midnight`, `text-teal`, `border-navy-mid` throughout the project.

---

### Step 4 — Set up Google Fonts

Open `app/layout.tsx` and replace with:

```tsx
import type { Metadata } from 'next'
import { Bebas_Neue, DM_Serif_Display, Barlow_Condensed, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
})

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  weight: ['300', '400'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const cormorantGaramond = Cormorant_Garamond({
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-voice',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kino Royale — A Podcast About Film',
  description: 'Cinema criticism with a pretentious streak, a royal pedigree, and absolutely no restraint.',
  openGraph: {
    title: 'Kino Royale',
    description: 'Cinema criticism with a pretentious streak.',
    siteName: 'Kino Royale',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSerifDisplay.variable} ${barlowCondensed.variable} ${cormorantGaramond.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

**What `next/font` does:** Downloads the font files at build time and serves them from your own domain. No request to Google's servers when users visit the site. No layout shift. This is the correct way to use Google Fonts in Next.js.

---

### Step 5 — Add the silhouette SVG asset

Copy the silhouette SVG file into:
```
public/silhouette.svg
```

This file contains the woman-in-dress silhouette with white paths (recoloured to navy in the component) and the red lips at `#c1272d`. The SVG is used as a raw inline element in the Hero component — **not** as an `<img>` tag — so the paths can be styled.

---

### Step 6 — Create the episodes data file

Create `data/episodes.ts`:

```ts
export interface Episode {
  id: string
  slug: string
  number: number
  title: string
  date: string
  duration: string
  description: string
  showNotes: string
  audioUrl: string        // empty string until R2 is wired up
  coverArt: string        // path to cover image in /public
  tags: string[]
  blogUrl: string         // link to Cinefile Blog review
  simulatorId: string     // ID of corresponding Royal Simulator scenario
}

export const episodes: Episode[] = [
  {
    id: 'ep-02',
    slug: 'heretic-2024',
    number: 2,
    title: 'Heretic',
    date: '2025-01-15',
    duration: '44:12',
    description: 'Faith, manipulation, and two missionaries in a very suspicious house. Hugh Grant at his most unsettling.',
    showNotes: '',
    audioUrl: '',           // fill in when R2 is ready
    coverArt: '/covers/ep02.jpg',
    tags: ['Horror', '2024', 'Hugh Grant'],
    blogUrl: 'https://cinefile-blog.netlify.app/heretic',
    simulatorId: 'heretic',
  },
  {
    id: 'ep-01',
    slug: 'pilot',
    number: 1,
    title: 'Pilot',
    date: '2024-12-01',
    duration: '38:05',
    description: 'The unholy trinity — an introduction to the Film Lady universe.',
    showNotes: '',
    audioUrl: '',
    coverArt: '/covers/ep01.jpg',
    tags: ['Intro'],
    blogUrl: '',
    simulatorId: '',
  },
]
```

**Why TypeScript here:** The `Episode` interface means that if you add a new episode and forget a field, TypeScript will tell you immediately — before you deploy.

**The `audioUrl` pattern:** When it's an empty string, the play button renders as disabled. When you wire up R2 later, you paste in the public URL and the player works. No code changes needed.

---

## 6. CSS Modules — How They Work

> **Tutorial note:** CSS Modules are a fundamental concept worth understanding before you start writing components.

### The problem they solve

In a regular CSS file, all class names are global. If you write `.card { background: navy }` in one file and `.card { background: red }` in another, they will conflict. In a large project this becomes unmanageable.

### What CSS Modules do

CSS Modules scope styles to a single component. You create a file called `ComponentName.module.css` alongside your component. The class names in that file are automatically transformed into unique strings at build time.

### How to use them

**Step 1 — Create the module file:**
```css
/* components/EpisodeCard/EpisodeCard.module.css */

.card {
  background: var(--color-navy);
  border: 0.5px solid var(--color-navy-mid);
  border-left: 2px solid var(--color-teal);
  padding: 16px 20px;
  display: flex;
  gap: 16px;
  align-items: center;
}

.card:hover {
  border-color: var(--color-teal);
}

.number {
  font-family: var(--font-ui);
  font-size: 36px;
  color: var(--color-cobalt-mid);
  line-height: 1;
  min-width: 40px;
}
```

**Step 2 — Import and use in the component:**
```tsx
// components/EpisodeCard/EpisodeCard.tsx
import styles from './EpisodeCard.module.css'
import clsx from 'clsx'

export function EpisodeCard({ episode, isActive }) {
  return (
    <div className={clsx(styles.card, isActive && styles.active)}>
      <span className={styles.number}>
        {String(episode.number).padStart(2, '0')}
      </span>
    </div>
  )
}
```

**What happens at build time:** Next.js transforms `.card` into something like `EpisodeCard_card__x7k2p` — unique, impossible to conflict with anything else. You never see or type this string; you just use `styles.card`.

### When to use CSS Modules vs Tailwind in this project

| Use CSS Modules for | Use Tailwind for |
|---|---|
| Complex hover/focus states | Padding, margin, gap |
| Pseudo-elements (`::before`, `::after`) | Flex/grid layout |
| CSS custom property animations | Responsive breakpoints |
| The water bloom hero (filter effects) | Text size, weight, colour |
| The player progress bar animation | Border radius |
| Anything that needs `@keyframes` | Width, height |

---

## 7. Data Architecture

Episode content is managed through **Decap CMS** (see Section 12) and stored as individual Markdown files with YAML frontmatter in `content/episodes/`. At build time, Next.js reads these files and renders the site statically. No database, no API calls at runtime.

This is a step up from the Royal Simulator's single JSON file approach — the structure is the same (plain files in the repo) but you never have to touch those files directly. Decap gives you a web form UI at `/admin` that writes to them for you.

### Episode file format

Each episode is a `.md` file in `content/episodes/`. Decap CMS creates and edits these automatically. For reference, a file looks like this:

```markdown
---
id: ep-02
slug: heretic-2024
number: 2
title: Heretic
date: 2025-01-15
duration: "44:12"
description: Faith, manipulation, and two missionaries in a very suspicious house.
audioUrl: https://pub-xxxx.r2.dev/ep02.mp3
coverArt: /covers/ep02.jpg
tags:
  - Horror
  - "2024"
  - Hugh Grant
blogUrl: https://cinefile-blog.netlify.app/heretic
simulatorId: heretic
---

Show notes go here as regular Markdown. This field supports full Markdown —
links, bold, lists, etc.
```

### Adding a new episode (with Decap CMS)

1. Go to `https://kinoroyale.net/admin`
2. Log in with your GitHub account
3. Click **New Episode**
4. Fill in the form fields
5. Upload cover art via the media uploader
6. Upload audio to Cloudflare R2 separately, paste the URL into the Audio URL field
7. Click **Publish**
8. Netlify detects the new commit and rebuilds the site — live in ~60 seconds

No terminal. No VS Code. No git commands.

### Reading episode files in Next.js

Install the frontmatter parser:

```bash
npm install gray-matter
```

Create `lib/episodes.ts` to replace the old `data/episodes.ts`:

```ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const EPISODES_DIR = path.join(process.cwd(), 'content/episodes')

export interface Episode {
  id: string
  slug: string
  number: number
  title: string
  date: string
  duration: string
  description: string
  showNotes: string       // the markdown body below the frontmatter
  audioUrl: string
  coverArt: string
  tags: string[]
  blogUrl: string
  simulatorId: string
}

export function getAllEpisodes(): Episode[] {
  const files = fs.readdirSync(EPISODES_DIR)
    .filter(f => f.endsWith('.md'))

  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(EPISODES_DIR, filename), 'utf8')
      const { data, content } = matter(raw)
      return {
        ...(data as Omit<Episode, 'showNotes'>),
        showNotes: content,
      }
    })
    .sort((a, b) => b.number - a.number) // newest first
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return getAllEpisodes().find(ep => ep.slug === slug)
}
```

**Why `gray-matter`:** It parses the YAML frontmatter (the `---` block) from the Markdown body in one call. The result is a clean JavaScript object plus the raw Markdown content for show notes.

### Cover art

Episode cover art is managed through Decap's **media library**. When you upload an image in the Decap admin, it is committed to `public/covers/` in your repo. The `coverArt` frontmatter field stores the path (e.g. `/covers/ep02.jpg`). Next.js `<Image>` handles resizing and optimisation automatically.

---

## 8. Pages & Routes

All routes use the App Router file-system convention.

```
/                         → app/page.tsx
/episodes                 → app/episodes/page.tsx
/episodes/[slug]          → app/episodes/[slug]/page.tsx
/story                    → app/story/page.tsx
/feed.xml                 → app/feed.xml/route.ts
```

### Route details

#### `/` — Homepage
- Hero section with water background, silhouette, title
- Latest 2 episodes (cards)
- Universe strip (Cinefile Blog + Royal Simulator links)

#### `/episodes` — Archive
- Full episode list, newest first
- Minimal, list-focused

#### `/episodes/[slug]` — Individual episode
- Episode hero with cover art, title, tags
- Audio player
- Show notes
- Unholy Trinity cards (links to blog review + Royal Simulator scenario)
- Target/gun barrel motif in background

This page uses `generateStaticParams` to pre-render at build time:

```tsx
// app/episodes/[slug]/page.tsx
import { getAllEpisodes, getEpisodeBySlug } from '@/lib/episodes'

export function generateStaticParams() {
  return getAllEpisodes().map((ep) => ({ slug: ep.slug }))
}

export default function EpisodePage({ params }: { params: { slug: string } }) {
  const episode = getEpisodeBySlug(params.slug)
  if (!episode) return notFound()
  // render episode
}
```

**What this means:** At build time, Next.js calls `generateStaticParams`, gets the list of slugs, and renders a static HTML file for each one. `/episodes/heretic-2024` is a real file, not a client-side rendered page. Fast, SEO-friendly, shareable on Bluesky.

#### `/story` — The Film Lady
- Two-column layout
- Pull quote in corner-bracket box
- Film Lady bio
- Links to Letterboxd, Bluesky

#### `/feed.xml` — RSS feed
- Returns valid podcast RSS XML
- Required for Apple Podcasts, Spotify, Overcast submissions
- See Section 11

---

## 9. Components

Build these components in order. Each one is self-contained and testable before moving to the next.

### Component list

```
components/
  Nav/
    Nav.tsx
    Nav.module.css
  Hero/
    Hero.tsx
    Hero.module.css
    WaterBackground.tsx          ← the SVG bloom effect
    WaterBackground.module.css
  EpisodeCard/
    EpisodeCard.tsx
    EpisodeCard.module.css
  EpisodeGrid/
    EpisodeGrid.tsx
  AudioPlayer/
    AudioPlayer.tsx
    AudioPlayer.module.css
    useAudioPlayer.ts            ← custom hook for audio state
  UnholyTrinity/
    UnholyTrinity.tsx
    UnholyTrinity.module.css
  TargetMotif/
    TargetMotif.tsx              ← the SVG concentric rings
  SectionHeader/
    SectionHeader.tsx
    SectionHeader.module.css
  DiamondDivider/
    DiamondDivider.tsx
  CornerBox/
    CornerBox.tsx
    CornerBox.module.css
  UniverseCard/
    UniverseCard.tsx
    UniverseCard.module.css
  Footer/
    Footer.tsx
    Footer.module.css
```

---

### Nav component

**Props:** none (reads from router for active state)

**Behaviour:**
- Logo: italic DM Serif "Kino" + Bebas "ROYALE" — links to `/`
- Links: Episodes → `/episodes`, The Story → `/story`, Film Lady → `/story#film-lady`, Universe → external links section on homepage
- "Listen" CTA pill links to `/episodes`
- Active link uses `teal` colour

```tsx
// Skeleton
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'
import clsx from 'clsx'

const links = [
  { label: 'Episodes', href: '/episodes' },
  { label: 'The Story', href: '/story' },
  { label: 'Film Lady', href: '/story#film-lady' },
  { label: 'Universe', href: '/#universe' },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>
        <span className={styles.logoDisplay}>Kino</span>
        <span className={styles.logoUi}>ROYALE</span>
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(styles.link, pathname.startsWith(link.href) && styles.active)}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <Link href="/episodes" className={styles.cta}>Listen</Link>
    </nav>
  )
}
```

---

### WaterBackground component

This is the most visually complex component. It renders the SVG water/light effect behind the homepage hero.

**Structure:**
- One `<svg>` element, `position: absolute`, fills the parent
- Three blurred ellipses (the bloom — outer cobalt wash, mid bloom, bright core)
- Descending light ray paths (wide, low-opacity strokes)
- Surface ripple lines at the top
- Rising bubble circles scattered in the lower half

**CSS Modules usage:** The `feGaussianBlur` filter IDs must be unique. Define them in the component, not in a shared file.

**Important:** The light source is positioned **left-of-centre** (around x=200 in a 680-wide viewBox) because the silhouette figure bleeds off the left edge — the light appears to come from where she is.

---

### AudioPlayer component

The custom HTML5 audio player. This is the most interactive component.

**The `useAudioPlayer` hook** manages all state:

```ts
// components/AudioPlayer/useAudioPlayer.ts
import { useRef, useState, useEffect } from 'react'

export function useAudioPlayer(audioUrl: string) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)       // 0–100
  const [currentTime, setCurrentTime] = useState(0) // seconds
  const [duration, setDuration] = useState(0)       // seconds

  const toggle = () => {
    if (!audioUrl) return
    const audio = audioRef.current
    if (!audio) return
    isPlaying ? audio.pause() : audio.play()
    setIsPlaying(!isPlaying)
  }

  const seek = (percent: number) => {
    const audio = audioRef.current
    if (!audio || !duration) return
    audio.currentTime = (percent / 100) * duration
  }

  // Format seconds to MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return {
    audioRef,
    isPlaying,
    progress,
    currentTime: formatTime(currentTime),
    duration: formatTime(duration),
    toggle,
    seek,
    isDisabled: !audioUrl,
  }
}
```

**Disabled state:** When `audioUrl` is an empty string, the play button renders with `opacity: 0.4`, `cursor: not-allowed`, and a "Coming soon" label. This is how episodes look before R2 is wired up.

---

### TargetMotif component

```tsx
// components/TargetMotif/TargetMotif.tsx

interface Props {
  size?: number      // default 200
  opacity?: number   // default 0.06
  className?: string
}

export function TargetMotif({ size = 200, opacity = 0.06, className }: Props) {
  const cx = size / 2
  const radii = [0.94, 0.78, 0.62, 0.46, 0.30, 0.22, 0.14, 0.07]
    .map(r => r * size / 2)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ opacity }}
      className={className}
      aria-hidden="true"
    >
      {radii.map((r, i) => (
        <circle
          key={r}
          cx={cx} cy={cx} r={r}
          fill="none"
          stroke={i > 4 ? '#3A7878' : i > 2 ? '#1A3A5A' : '#0C1828'}
          strokeWidth={i > 5 ? 1.5 : 0.5}
        />
      ))}
      <circle cx={cx} cy={cx} r={size * 0.025} fill="#3A7878" opacity={0.5}/>
      <line x1={cx} y1={0}   x2={cx} y2={cx * 0.88} stroke="#0C1828" strokeWidth={0.5}/>
      <line x1={cx} y1={cx * 1.12} x2={cx} y2={size} stroke="#0C1828" strokeWidth={0.5}/>
      <line x1={0}   y1={cx} x2={cx * 0.88} y2={cx} stroke="#0C1828" strokeWidth={0.5}/>
      <line x1={cx * 1.12} y1={cx} x2={size} y2={cx} stroke="#0C1828" strokeWidth={0.5}/>
    </svg>
  )
}
```

Usage on episode pages: `<TargetMotif size={240} opacity={0.06} className={styles.targetBg}/>` — positioned absolutely, right side, vertically centred.

---

## 10. Audio & R2 Integration

### Setting up Cloudflare R2

1. Go to [cloudflare.com/developer-platform/r2](https://www.cloudflare.com/developer-platform/r2/)
2. Create a free Cloudflare account (requires credit card, no charge until 10GB storage exceeded)
3. Create a new R2 bucket — name it `kino-royale-audio`
4. Under bucket settings, enable **Public access** — this gives each file a public URL
5. Upload your `.mp3` file
6. Copy the public URL — it will look like `https://pub-xxxx.r2.dev/ep02.mp3`
7. Paste that URL into `audioUrl` in `data/episodes.ts`

### Cost reality

- Storage: $0.015/GB/month
- Egress (downloads/plays): **$0.00** — this is R2's key advantage
- Free tier: 10GB storage, covers approximately 200 × 50MB episodes
- At 4 episodes (~200MB total): **$0.00/month**

### CORS configuration

When the Next.js site (on Netlify) loads audio from R2, the browser will check CORS headers. Add this CORS policy to your R2 bucket settings:

```json
[
  {
    "AllowedOrigins": ["https://kinoroyale.net", "http://localhost:3000"],
    "AllowedMethods": ["GET", "HEAD"],
    "AllowedHeaders": ["*"],
    "MaxAgeSeconds": 3600
  }
]
```

Domain is `kinoroyale.net`.

---

## 11. RSS Feed

The RSS feed makes Kino Royale a real podcast — subscribable in Apple Podcasts, Spotify, Overcast, and Pocket Casts.

Create `app/feed.xml/route.ts`:

```ts
import { getAllEpisodes } from '@/lib/episodes'

const SITE_URL = 'https://kinoroyale.net/'

export async function GET() {
  const episodes = getAllEpisodes()
  const items = episodes
    .filter(ep => ep.audioUrl) // only include episodes with audio
    .map(ep => `
      <item>
        <title>${ep.title}</title>
        <description>${ep.description}</description>
        <pubDate>${new Date(ep.date).toUTCString()}</pubDate>
        <enclosure url="${ep.audioUrl}" type="audio/mpeg" length="0"/>
        <itunes:duration>${ep.duration}</itunes:duration>
        <guid isPermaLink="true">${SITE_URL}/episodes/${ep.slug}</guid>
        <link>${SITE_URL}/episodes/${ep.slug}</link>
      </item>
    `).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>Kino Royale</title>
    <description>Cinema criticism with a pretentious streak, a royal pedigree, and absolutely no restraint.</description>
    <link>${SITE_URL}</link>
    <language>en-au</language>
    <itunes:author>The Film Lady</itunes:author>
    <itunes:category text="Arts">
      <itunes:category text="Film Reviews"/>
    </itunes:category>
    ${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
```

**How to submit to podcast directories:**
- Apple Podcasts: [podcastsconnect.apple.com](https://podcastsconnect.apple.com) — paste `https://kinoroyale.net/feed.xml`
- Spotify: [podcasters.spotify.com](https://podcasters.spotify.com) — same URL

---

## 12. Decap CMS — Content Editing Without Code

> **Why this exists:** The Royal Simulator uses a single JSON file for all scenario data. Adding a new scenario means opening VS Code, editing the file, and committing to GitHub. For a podcast where new episodes drop regularly, that workflow is friction you don't need. Decap CMS gives you a web-based editor at `/admin` — fill in a form, click Publish, and the site rebuilds automatically. You never touch code to add an episode.

### What Decap CMS is

Decap CMS (formerly Netlify CMS) is an open-source, git-based content management system. It has no database and no monthly fee. Instead:

- It runs as a single-page app at `/admin` on your own site
- You log in using your **GitHub account** (OAuth)
- When you save content, Decap commits the file to your GitHub repo on your behalf
- Netlify detects the new commit and triggers a rebuild — the site is live in ~60 seconds
- The actual content files (Markdown with YAML frontmatter) sit in your repo at `content/episodes/` — they're just files, readable and editable by hand if you ever need to

### How it feels to use

1. Visit `https://kinoroyale.net/admin`
2. Click **Login with GitHub**
3. See a list of your episodes
4. Click **New Episode** — a form appears with fields for every piece of episode data
5. Fill in title, date, description, show notes (rich text editor), audio URL, tags, blog link, simulator ID
6. Upload cover art through the built-in media uploader
7. Click **Publish**
8. Done — Netlify rebuilds and the new episode is live

---

### Step-by-step Decap setup

#### Step 1 — Enable Netlify Identity

Decap uses Netlify Identity for GitHub OAuth. In your Netlify dashboard:

1. Go to **Site settings → Identity**
2. Click **Enable Identity**
3. Under **Registration**, set to **Invite only** (so only you can log in)
4. Under **External providers**, enable **GitHub**
5. Under **Services → Git Gateway**, click **Enable Git Gateway**

Git Gateway is what allows Decap to commit to your repo on your behalf — without exposing your GitHub token.

---

#### Step 2 — Create the admin UI files

Create two files:

**`public/admin/index.html`**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Kino Royale — Admin</title>
  </head>
  <body>
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

**`public/admin/config.yml`**

This is the most important file — it defines the editing form fields that match your episode data structure:

```yaml
backend:
  name: git-gateway
  branch: main

media_folder: public/covers
public_folder: /covers

collections:
  - name: episodes
    label: Episodes
    label_singular: Episode
    folder: content/episodes
    create: true
    slug: "{{slug}}"
    identifier_field: slug
    sort: number
    fields:
      - { label: "ID",          name: id,          widget: string }
      - { label: "Slug",        name: slug,         widget: string,
          hint: "URL-safe, e.g. heretic-2024. No spaces." }
      - { label: "Episode No.", name: number,       widget: number }
      - { label: "Title",       name: title,        widget: string }
      - { label: "Date",        name: date,         widget: datetime,
          format: "YYYY-MM-DD", date_format: "DD/MM/YYYY", time_format: false }
      - { label: "Duration",    name: duration,     widget: string,
          hint: "Format: MM:SS e.g. 44:12" }
      - { label: "Description", name: description,  widget: text,
          hint: "1–2 sentence summary shown on cards and in RSS feed" }
      - { label: "Show Notes",  name: body,         widget: markdown,
          hint: "Full show notes. Supports Markdown formatting." }
      - { label: "Audio URL",   name: audioUrl,     widget: string,
          required: false,
          hint: "Cloudflare R2 public URL, e.g. https://pub-xxxx.r2.dev/ep02.mp3. Leave blank until audio is uploaded." }
      - { label: "Cover Art",   name: coverArt,     widget: image,
          required: false }
      - { label: "Tags",        name: tags,         widget: list,
          hint: "e.g. Horror, 2024, Hugh Grant" }
      - { label: "Blog URL",    name: blogUrl,      widget: string,
          required: false,
          hint: "Link to the Cinefile Blog review for this episode" }
      - { label: "Simulator ID", name: simulatorId, widget: string,
          required: false,
          hint: "The ID of the Royal Simulator scenario for this episode" }
```

**What each field maps to:**
- `widget: string` → single-line text input
- `widget: text` → multi-line text input
- `widget: markdown` → rich text editor with bold, italic, links, lists
- `widget: datetime` → date picker
- `widget: number` → number input
- `widget: image` → file uploader, saves to `public/covers/`
- `widget: list` → add/remove tag chips

---

#### Step 3 — Create the content directory

Create the folder structure and add your existing episodes as Markdown files:

```bash
mkdir -p content/episodes
```

Create `content/episodes/ep-02-heretic.md`:

```markdown
---
id: ep-02
slug: heretic-2024
number: 2
title: Heretic
date: 2025-01-15
duration: "44:12"
description: Faith, manipulation, and two missionaries in a very suspicious house. Hugh Grant at his most unsettling.
audioUrl: ""
coverArt: /covers/ep02.jpg
tags:
  - Horror
  - "2024"
  - Hugh Grant
blogUrl: https://cinefile-blog.netlify.app/heretic
simulatorId: heretic
---

Show notes for this episode go here.
```

Create `content/episodes/ep-01-pilot.md`:

```markdown
---
id: ep-01
slug: pilot
number: 1
title: Pilot
date: 2024-12-01
duration: "38:05"
description: The unholy trinity — an introduction to the Film Lady universe.
audioUrl: ""
coverArt: /covers/ep01.jpg
tags:
  - Intro
blogUrl: ""
simulatorId: ""
---

Show notes for the pilot episode go here.
```

---

#### Step 4 — Invite yourself as a user

After deploying to Netlify:

1. Go to **Netlify → Site settings → Identity → Users**
2. Click **Invite users**
3. Enter your own email address
4. You will receive an invitation email — click the link to set a password
5. Visit `https://kinoroyale.net/admin` and log in

> **Important:** Set registration to **Invite only** before deploying, otherwise anyone can create an account.

---

#### Step 5 — Add the Identity widget to the homepage

Netlify Identity requires a small script on the main site to handle the OAuth redirect after login. Add this to `app/layout.tsx` inside the `<head>`:

```tsx
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

And add this script anywhere in the body (a good place is in a `useEffect` in a client component):

```tsx
'use client'
import { useEffect } from 'react'

export function IdentityWidget() {
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user: unknown) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/'
          })
        }
      })
    }
  }, [])
  return null
}
```

This handles the redirect back to `/admin` after GitHub login completes.

---

### What Decap cannot do (and how to handle it)

| Limitation | Workaround |
|---|---|
| Cannot upload audio to R2 | Upload `.mp3` to R2 separately, paste the URL into the Audio URL field in Decap |
| No live preview of the actual site design | The Markdown preview in Decap is plain — visual check happens after Netlify deploys |
| Rebuild takes ~60 seconds | This is fine for a podcast — episodes don't need to go live instantly |
| No draft/scheduled publishing natively | Set `audioUrl` to blank to keep an episode from appearing in the player — it still shows as a card |

---

### Decap vs the old JSON approach

| | Old (JSON/TS file) | New (Decap CMS) |
|---|---|---|
| Add episode | Open VS Code → edit file → git commit | Visit `/admin` → fill form → Publish |
| Edit description | Open VS Code → find the right field → save → commit | Click episode → edit → Save |
| Upload cover art | Copy file to `/public/covers/` → git commit | Upload via Decap media library |
| View all episodes | Read the TS file | Visual list in Decap dashboard |
| Tech required | VS Code, git, terminal | Web browser |

---

## 13. Deployment

### Netlify configuration

Create `netlify.toml` at the project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

Install the plugin:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

### Deploy steps

1. Push the project to a GitHub repository
2. Log in to Netlify
3. New site → Import from GitHub → select the repo
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy

### Environment variables

No secrets are needed for the initial build. When Decap CMS is set up, Netlify Identity handles authentication automatically — no environment variables needed for that either. When R2 is set up, the audio URLs are public and stored in the Markdown frontmatter files, so again no environment variables required.

---

## 14. File Structure Reference

```
kino-royale/
├── app/
│   ├── layout.tsx                    ← Root layout, fonts, metadata
│   ├── globals.css                   ← Tailwind @theme, base styles
│   ├── page.tsx                      ← Homepage
│   ├── episodes/
│   │   ├── page.tsx                  ← Episode archive
│   │   └── [slug]/
│   │       └── page.tsx              ← Individual episode
│   ├── story/
│   │   └── page.tsx                  ← The Story / Film Lady
│   └── feed.xml/
│       └── route.ts                  ← RSS feed
│
├── components/
│   ├── Nav/
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   ├── Hero.module.css
│   │   └── WaterBackground.tsx
│   ├── EpisodeCard/
│   ├── EpisodeGrid/
│   ├── AudioPlayer/
│   │   ├── AudioPlayer.tsx
│   │   ├── AudioPlayer.module.css
│   │   └── useAudioPlayer.ts
│   ├── UnholyTrinity/
│   ├── TargetMotif/
│   ├── SectionHeader/
│   ├── DiamondDivider/
│   ├── CornerBox/
│   ├── UniverseCard/
│   ├── IdentityWidget/               ← Netlify Identity redirect handler
│   └── Footer/
│
├── content/
│   └── episodes/                     ← Markdown files, managed by Decap CMS
│       ├── ep-01-pilot.md
│       └── ep-02-heretic.md
│
├── lib/
│   └── episodes.ts                   ← Reads content/episodes/, exports getAllEpisodes()
│
├── public/
│   ├── silhouette.svg                ← Homepage hero figure
│   ├── covers/                       ← Episode cover art (managed via Decap media library)
│   │   ├── ep01.jpg
│   │   └── ep02.jpg
│   └── admin/                        ← Decap CMS admin UI
│       ├── index.html
│       └── config.yml
│
├── netlify.toml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Appendix — Design Decisions Summary

| Decision | What | Why |
|---|---|---|
| Homepage composition | Figure left-bleeding, title right | Living Daylights poster — figure in space, title anchored |
| Red (`#c1272d`) | Silhouette lips, CrownIcon, DiamondDivider bubbles, Royal Simulator card border — never a token | Bond-girl signature used sparingly as a recurring accent, never in UI chrome or body text |
| Two-colour title | "Kino" DM Serif white / "ROYALE" Bebas cobalt | Thunderball two-colour stacked title treatment |
| Water background | Light rays descending from top-left, bubbles rising | Thunderball underwater sequences + Living Daylights surface light |
| Target motif | Episode pages only, ghost opacity | Bond gun barrel — applied to the depth of individual films, not the homepage |
| Teal as primary accent | `#7DD4D0` for all CTAs | From the iridescent midnight palette — the sequin colour |
| Cobalt as structure | `#1A4A8A` → `#4A8AD4` for borders, labels | The gun barrel blue from Living Daylights |
| Bebas Neue for UI | All navigation, metadata, labels | Film poster condensed title tradition — Thunderball/Living Daylights |
| Barlow Condensed for body | Descriptions, show notes | Lean, cinematic, consistent with the condensed system |
| DM Serif Display italic | Hero title, episode titles, pull quotes | Warm feminine counterpoint to cold geometric Bebas |
| CSS Modules + Tailwind | Both used together | Tailwind for layout/utilities; Modules for complex/animated component styles |
| Decap CMS | Git-based, no database, web UI at `/admin` | Avoids opening code to add episodes. Commits to GitHub on your behalf, Netlify rebuilds automatically. Free forever. |
| Content as Markdown | `content/episodes/*.md` with YAML frontmatter | Same plain-file philosophy as Royal Simulator JSON, but editable via a form UI instead of by hand. |
| R2 for audio | Cloudflare R2 | Zero egress fees. Free tier covers ~200 episodes. |

---

*Document prepared for review — v1.1*
*Film Lady Productions · Kino Royale Podcast*

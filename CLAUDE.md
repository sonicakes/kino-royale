@AGENTS.md

# Kino Royale — Claude Code Instructions

Film Lady Productions podcast website. Built by Sonia (the Film Lady), Sydney, Australia.

---

## Project Overview

A podcast website that hosts and plays episodes, links each to a Cinefile Blog review and a Royal Simulator scenario — the **Unholy Trinity**:
- **Cinefile Blog** — written film reviews
- **Kino Royale** — this project — podcast episodes
- **Royal Simulator** — interactive horror scenario generator

No user accounts, no paid CMS, no server-side logic beyond static generation.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15, App Router, static export |
| Language | TypeScript |
| Styling | Tailwind v4 + CSS Modules |
| Fonts | Google Fonts via `next/font` |
| Audio storage | Cloudflare R2 (zero egress fees) |
| Deployment | Netlify |
| Content | Markdown files in `content/episodes/` managed via Decap CMS |

---

## Design System

### Aesthetic: Iridescent Midnight

Inspired by two Bond film posters:
- **Thunderball (1965)** — two-colour stacked title, Bebas Neue, underwater world
- **The Living Daylights (1987)** — near-black navy, cobalt gun barrel, light source top-left, silhouette figure composition

### Colour Palette

```css
--color-midnight:    #020810;   /* page background */
--color-deep:        #060D1A;   /* card surfaces, sections */
--color-navy:        #0C1828;   /* elevated surfaces, episode cards */
--color-navy-mid:    #1A3A50;   /* borders, rule lines */
--color-cobalt:      #1A4A8A;
--color-cobalt-mid:  #2860B0;
--color-cobalt-glow: #4A8AD4;   /* interactive labels, metadata */
--color-teal:        #7DD4D0;   /* CTAs, play buttons, active states */
--color-teal-dim:    #3A7878;   /* muted teal, tags */
--color-silver:      #C8DCE0;   /* body text */
--color-silver-dim:  #4A6878;   /* muted text */
--color-white:       #EEF6FA;   /* display headings */
```

**Red (`#c1272d`) is NOT a design token** — it never appears in the Tailwind theme or CSS variables. It is used as a hardcoded accent in four specific places only:
- Silhouette SVG — the red lips signature
- `CrownIcon` — the crown is entirely red; used in the Hero eyebrow, Nav, and Footer
- `DiamondDivider` — some bubble circles are red (mixed with `cobalt-glow`)
- `UniverseCard` — the Royal Simulator card uses a red top border (`accent="red"`)

Do not add red anywhere outside these four uses.

#### Colour usage rules
- Backgrounds elevate: `midnight` → `deep` → `navy` (page → section → card)
- Borders and rules: always `navy-mid`
- Primary CTA: `teal` background, `midnight` text
- Ghost CTA: `navy-mid` border, `silver-dim` text
- Labels, metadata, section markers: `cobalt-glow`
- Episode card left accent border: `teal` (2px)
- Active nav: `teal`

### Typography

```css
--font-display: 'DM Serif Display', serif;   /* italic, hero title, pull quotes */
--font-ui:      'Bebas Neue', sans-serif;    /* all-caps, nav, metadata, CTAs */
--font-body:    'Barlow Condensed', sans-serif; /* weight 300, descriptions */
--font-voice:   'Cormorant Garamond', serif; /* italic, Film Lady voice only */
```

The tension between DM Serif Display (warm, feminine, italic) and Bebas Neue (cold, geometric, all-caps) is intentional — it mirrors the Film Lady persona.

| Role | Font | Size |
|---|---|---|
| Hero title "Kino" | DM Serif Display italic | 124px, line-height 0.85 |
| Hero subtitle "ROYALE" | Bebas Neue | 42px, letter-spacing 0.44em |
| Episode title (page) | Bebas Neue | 44px |
| Episode title (card) | Bebas Neue | 20px |
| Nav links | Bebas Neue | 12px |
| Section headings | Bebas Neue | 14px |
| Body / descriptions | Barlow Condensed 300 | 15px, line-height 1.72 |
| Eyebrows / labels | Barlow Condensed 300 | 9–10px, uppercase, letter-spacing 0.3em |
| Pull quotes | Cormorant Garamond italic | 17–26px |

### Decorative Motifs

**Water / light source** (homepage hero only) — SVG with three blurred ellipses (outer cobalt wash, mid bloom, bright core), descending light rays, surface ripple lines, rising bubble circles. Light source is top-left because the silhouette figure is there.

**Target / gun barrel** (episode pages and section dividers only, never homepage) — concentric rings from `navy` outer to `teal-dim` centre, crosshair lines, teal centre dot.

**Bubble divider** (`DiamondDivider`) — a row of 7 small circles in varying sizes, alternating `cobalt-glow` and red (`#c1272d`) strokes at low opacity. Used between major sections.

**Corner bracket box** — four L-shaped corner marks in `cobalt-glow`. Used for Film Lady quote on the story page.

---

## Styling Rules: CSS Modules vs Tailwind

| Use CSS Modules for | Use Tailwind for |
|---|---|
| Complex hover/focus states | Padding, margin, gap |
| Pseudo-elements (`::before`, `::after`) | Flex/grid layout |
| Animations and `@keyframes` | Responsive breakpoints |
| Filter effects (the water bloom) | Text size, weight, colour |
| The player progress bar | Width, height, border radius |

**Important:** Always place base component styles **before** media query overrides in CSS Module files. If a base rule appears after a media query in the same file, the base rule will win due to cascade order, overriding the responsive styles.

---

## Homepage Hero Composition

Modelled on the Living Daylights poster:
- Silhouette figure bleeds off the **left** edge, partially cropped
- Light source is **top-left** (where the figure is)
- Title is anchored to the **right**, with space
- Background suggests being underwater looking up toward surface light

The silhouette SVG (`public/silhouette.svg`) is inlined in the Hero component (not an `<img>`) so its paths can be controlled via CSS. Navy paths make the figure read as negative space. The red lips (`#c1272d`) are hardcoded in the SVG — do not change them.

---

## Component Patterns

### Episode card
- Background: `navy`, border: 0.5px `navy-mid`, left border: 2px `teal`
- Episode number: large Bebas, `cobalt-mid` (muted, decorative)
- Play button: 36px circle, `teal-dim` border, `teal` triangle, hover fills with `teal`

### Nav
- Background: `deep`, border-bottom: 0.5px `navy-mid`
- Logo: DM Serif italic "Kino" + Bebas "ROYALE"
- Links: Bebas, `silver-dim`, active: `teal`
- CTA pill: Bebas, `teal` background, `midnight` text

### Unholy Trinity cards
Three cards with 2px top borders — Review (Cinefile): `cobalt-glow`, Podcast (Kino Royale): `cobalt-glow`, Royal Simulator: red (`#c1272d`, via `accent="red"`).

### Audio player
- Background: `navy`, top border: 1px `cobalt`
- Play button: filled `teal` circle
- Progress bar: 3px, `navy-mid` track, `teal` fill
- Disabled state (no `audioUrl`): opacity 0.4, cursor not-allowed, "Coming soon" label

---

## Data Architecture

Episodes are Markdown files with YAML frontmatter in `content/episodes/`. Decap CMS writes these files via a web UI at `/admin` — Sonia never needs to touch them directly. Each commit triggers a Netlify rebuild (~60 seconds to live).

```
content/episodes/ep-01-pilot.md
content/episodes/ep-02-heretic.md
```

Reading episodes: `lib/episodes.ts` uses `gray-matter` to parse frontmatter + body, returns sorted by episode number descending.

`audioUrl` is an empty string until audio is uploaded to R2. When empty, the player renders in disabled state — no code changes needed to enable it later, just paste the R2 URL into the frontmatter.

---

## Pages & Routes

```
/                    Homepage — hero, latest 2 episodes, universe strip
/episodes            Archive — full list, newest first
/episodes/[slug]     Individual episode — player, show notes, Unholy Trinity cards, target motif
/story               The Film Lady — bio, pull quote, Letterboxd/Bluesky links
/feed.xml            RSS feed (podcast directories)
```

Episode pages use `generateStaticParams` — pre-rendered as static HTML at build time.

---

## File Structure

```
kino-royale/
├── app/
│   ├── layout.tsx            Root layout, fonts, metadata
│   ├── globals.css           Tailwind @theme, base styles
│   ├── page.tsx              Homepage
│   ├── episodes/page.tsx     Archive
│   ├── episodes/[slug]/page.tsx
│   ├── story/page.tsx
│   └── feed.xml/route.ts    RSS
├── components/
│   ├── Hero/                 Hero.tsx, Hero.module.css, WaterBackground.tsx
│   ├── AudioPlayer/          AudioPlayer.tsx, useAudioPlayer.ts
│   ├── EpisodeCard/
│   ├── EpisodeGrid/
│   ├── UnholyTrinity/
│   ├── TargetMotif/
│   ├── SectionHeader/
│   ├── DiamondDivider/
│   ├── CornerBox/
│   ├── UniverseCard/
│   ├── IdentityWidget/       Netlify Identity redirect handler
│   ├── Nav/
│   └── Footer/
├── content/episodes/         Markdown episode files (Decap CMS managed)
├── lib/episodes.ts           getAllEpisodes(), getEpisodeBySlug()
├── public/
│   ├── silhouette.svg        Homepage hero figure — do not alter red lips
│   ├── covers/               Episode cover art
│   └── admin/                Decap CMS (index.html + config.yml)
└── netlify.toml
```

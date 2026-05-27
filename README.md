# Kino Royale

Podcast website for **Kino Royale Productions** — the audio home of a film criticism show pairing each episode with a written review on the Cinefile Blog and a scenario in the Royal Simulator app.

**The Unholy Trinity:**
- [Cinefile Blog](https://cinefileblog.com) — written film reviews
- **Kino Royale** — this project — podcast episodes
- [Royal Simulator](https://royal-simulator.netlify.app/) — interactive horror scenario generator
- [Film Lady's Portfolio](https://filmladyproductions.netlify.app/) - Film Lady Productions Website

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15, App Router, static export |
| Language | TypeScript |
| Styling | Tailwind v4 + CSS Modules |
| Fonts | Google Fonts via `next/font` |
| Audio | Cloudflare R2 (zero egress fees) |
| CMS | Decap CMS (git-based, no database) |
| Deployment | Netlify |

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
kino-royale/
├── app/                        Next.js App Router pages
│   ├── page.tsx                Homepage
│   ├── episodes/page.tsx       Episode archive
│   ├── episodes/[slug]/        Individual episode pages
│   ├── story/page.tsx          The Film Lady
│   └── globals.css             Tailwind theme + base styles
├── components/                 All UI components
├── content/episodes/           Markdown episode files (Decap CMS managed)
├── lib/episodes.ts             Episode data helpers (getAllEpisodes, getEpisodeBySlug)
├── public/
│   ├── silhouette.svg          Homepage hero figure
│   ├── covers/                 Episode cover art
│   └── admin/                  Decap CMS admin UI
├── TODO.md                     Outstanding content & setup tasks
└── kino-royale-claude-code-brief.md   Full design brief & rationale
```

---

## Design System

**Aesthetic:** Iridescent Midnight — inspired by the Thunderball (1965) and The Living Daylights (1987) Bond film posters.

### Colours

```css
--color-midnight:    #020810;   /* page background */
--color-deep:        #060D1A;   /* sections */
--color-navy:        #0C1828;   /* cards */
--color-navy-mid:    #1A3A50;   /* borders */
--color-cobalt-glow: #4A8AD4;   /* labels, metadata */
--color-teal:        #7DD4D0;   /* CTAs, play buttons */
--color-silver:      #C8DCE0;   /* body text */
--color-white:       #EEF6FA;   /* headings */
```

Red (`#c1272d`) is never a token — used only as a hardcoded accent in the silhouette SVG lips, CrownIcon, DiamondDivider bubbles, and the Royal Simulator card border.

### Fonts

| Variable | Face | Role |
|---|---|---|
| `--font-display` | DM Serif Display italic | Hero title, pull quotes |
| `--font-ui` | Bebas Neue | Nav, headings, CTAs, metadata |
| `--font-body` | Barlow Condensed 300 | Descriptions, body text |
| `--font-voice` | Cormorant Garamond italic | Film Lady voice only |

---

## Adding Episodes

Episodes are Markdown files in `content/episodes/` with YAML frontmatter. The easiest way is via the Decap CMS admin UI at `/admin` — no code required.

**Manually**, create a file like `content/episodes/ep-03-title.md`:

```markdown
---
id: ep-03
slug: your-slug
number: 3
title: Episode Title
date: 2025-06-01
duration: "42:00"
description: One or two sentence summary.
audioUrl: https://pub-xxxx.r2.dev/ep03.mp3
coverArt: /covers/ep03.jpg
tags:
  - Horror
  - 2025
blogUrl: https://cinefileblog.com/your-review
simulatorId: your-scenario-id
---

Show notes in Markdown go here.
```

Leave `audioUrl` empty until the audio is uploaded to R2 — the player will render in a disabled "coming soon" state automatically.

---

## Audio (Cloudflare R2)

1. Create a bucket in Cloudflare R2, enable public access
2. Upload `.mp3` file
3. Copy the public URL (`https://pub-xxxx.r2.dev/ep03.mp3`)
4. Paste into the episode's `audioUrl` frontmatter field

Zero egress fees. Free tier covers ~200 episodes at 50MB each.

---

## CMS (Decap)

Visit `/admin` to manage episodes via a web form — no VS Code or git required. Requires Netlify Identity to be enabled in the Netlify dashboard (see `kino-royale-claude-code-brief.md` §12 for setup steps).

---

## Domain

Live at **[kinoroyale.net](https://kinoroyale.net)** — a custom domain purchased on Namecheap, pointed at Netlify via custom DNS (Namecheap nameservers replaced with Netlify's). Netlify provisions the SSL certificate automatically. The Netlify subdomain (`kino-royale.netlify.app`) remains active as a fallback but the canonical URL is `kinoroyale.net`.

Decap CMS at `/admin` is unaffected by the custom domain — it uses Netlify Identity (git-gateway), which is tied to the Netlify site, not the domain name.

---

## Deployment

Deploys to Netlify automatically on every push to `main`. Build config is in `netlify.toml`.

See `TODO.md` for all outstanding setup tasks.

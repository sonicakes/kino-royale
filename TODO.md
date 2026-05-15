# Kino Royale — Outstanding Items

All code is complete. Everything below is content and external setup.

---

## Content

- [V] **Cover art — Pilot (ep01)** — add image to `public/covers/ep01.jpg`
- [V] **Cover art — Heretic (ep02)** — add image to `public/covers/ep02.jpg`
- [ ] **Audio — Pilot** — upload `.mp3` to R2, paste URL into `content/episodes/ep-01-pilot.md` → `audioUrl`
- [ ] **Audio — Heretic** — upload `.mp3` to R2, paste URL into `content/episodes/ep-02-heretic.md` → `audioUrl`
- [V] **Show notes — Pilot** — replace placeholder text in `content/episodes/ep-01-pilot.md`
- [V] **Show notes — Heretic** — replace placeholder text in `content/episodes/ep-02-heretic.md`
- [V] **Blog URL — Pilot** — add Cinefile Blog link to `content/episodes/ep-01-pilot.md` → `blogUrl` when review is published

---

## Infrastructure

- [ ] **Cloudflare R2** — create bucket `kino-royale-audio`, enable public access, configure CORS (see brief §10)
- [ ] **Netlify Identity** — enable Identity + Git Gateway in Netlify dashboard, set registration to Invite Only, invite yourself (see brief §12)
- [ ] **Verify Decap CMS** — after enabling Netlify Identity, visit `/admin`, log in, and confirm you can edit and save an episode (see `ADMIN.md`)
- [V] **Site URL updated** — custom domain `kinoroyale.net` is live (RSS feed is served via Anchor, not `feed.xml/route.ts`)

---

## When you're ready to go live

- [V] Submit RSS feed to Apple Podcasts — `https://kinoroyale.net/feed.xml`
- [ ] Submit RSS feed to other platforms

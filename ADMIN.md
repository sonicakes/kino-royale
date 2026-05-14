# Kino Royale — Admin Guide

How to enable the CMS and manage episodes once the site is live on Netlify.

---

## One-time setup (do this once after deploying)

### 1. Enable Netlify Identity

1. Go to your Netlify dashboard → your site → **Identity** tab
2. Click **Enable Identity**
3. Under **Registration**, set to **Invite only** (so random people can't sign up)
4. Under **Services → Git Gateway**, click **Enable Git Gateway**
   — this is what lets Decap write files back to your GitHub repo

### 2. Invite yourself

1. Still on the Identity tab, click **Invite users**
2. Enter your email address
3. Check your email — click the invite link, set a password
4. You're now the sole admin

---

## Logging in to the CMS

1. Go to `https://https://kino-royale.netlify.app/admin`
2. Click **Login with Netlify Identity**
3. Enter the email and password you set above

You'll see the Decap CMS dashboard with the **Episodes** collection.

---

## Adding a new episode

1. In the CMS, click **Episodes → New Episode**
2. Fill in the fields:
   - **ID** — e.g. `ep-03-title` (must be unique)
   - **Slug** — URL-safe, e.g. `title-2026` (this becomes `/episodes/title-2026`)
   - **Episode No.** — the number shown on cards
   - **Title**, **Date**, **Duration**, **Description**
   - **Show Notes** — full Markdown, shown on the episode page
   - **Audio URL** — leave blank until audio is uploaded to R2, then paste the R2 public URL
   - **Cover Art** — upload directly from the CMS (saves to `public/covers/`)
   - **Tags** — comma-separated, e.g. `Horror, 2024`
   - **Blog URL** — paste the Cinefile Blog link once the review is published
   - **Simulator ID** — the Royal Simulator scenario ID, if applicable
3. Click **Publish** (or **Save Draft** to hold it)

Netlify detects the commit and rebuilds the site — usually live within 60 seconds.

---

## Editing an existing episode

1. Click **Episodes** in the sidebar
2. Click the episode you want to edit
3. Make your changes, click **Publish**

---

## Adding audio after upload

1. Upload the `.mp3` to your Cloudflare R2 bucket (`kino-royale-audio`)
2. Copy the public URL (format: `https://pub-xxxx.r2.dev/ep-01.mp3`)
3. In the CMS, open the episode → paste into **Audio URL** → **Publish**

The player on the episode page activates automatically — no code changes needed.

---

## Uploading cover art

Cover art can be uploaded directly in the CMS via the **Cover Art** field. It saves to `public/covers/` in the repo. Recommended size: **1400 × 1400px**, square, JPEG or PNG.

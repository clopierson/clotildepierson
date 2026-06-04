---
name: give-page-supporters-redesign
description: Redesign the Give page for impact, add Supporters marquee, migrate to shadcn/ui, improve navigation CTAs, update research page and DIAL FAQ JSON-LD
metadata:
  type: project
---

# Give Page + Supporters Redesign

**Date:** 2026-06-03
**Status:** Approved, ready for implementation

## Overview

A multi-part improvement touching the Give page, navigation, a new Supporters marquee component, research page content presentation, and DIAL FAQ structured data. shadcn/ui is installed and used for all new and existing interactive components.

---

## Section 1: shadcn/ui Setup and Migration

### Installation

Install shadcn/ui using the Tailwind v4 path:

```
npx shadcn@latest init
```

The existing `@theme` tokens in `styles/globals.css` (OSU brand colors: `osu-beaver-orange`, `osu-luminance`, `osu-candela`, `osu-pine-stand`) are preserved alongside the shadcn CSS variable layer. shadcn variables are added without removing existing tokens.

### Components to install

- `button` — used for all CTAs sitewide
- `sheet` — used for mobile navigation
- `separator` — available for dividers if needed

### Mobile navigation migration

The current mobile nav uses a Radix `Dialog` triggered by a floating button in the bottom-right corner. Replace with:

- A shadcn `Sheet` (side panel from the right)
- Trigger: a `Menu` icon button placed in the **header top-right** (inside `header.js`, visible only on `< lg` screens)
- The existing floating back-to-top buttons (both desktop and mobile variants in `navigation.js`) are **removed entirely**
- The floating hamburger trigger button in the bottom-right is **removed**
- The desktop nav (horizontal link list, `lg:flex`) is unchanged in structure; the `give` link becomes a shadcn `Button` (see Section 2)

### Desktop nav Give button

In `navigation.js`, the `give` menu item currently renders as a colored `<Link>`. Replace with a shadcn `Button` component styled with `osu-beaver-orange` background, white text, small size. It remains a `next/link` wrapped by the button.

---

## Section 2: Give Page Redesign

**File:** `app/give/page.js`

### Page structure (top to bottom)

1. **Impact hero**
   - Large `h1`: "Support Daylighting Research"
   - 2-sentence impactful statement (light shapes health; most buildings ignore this)
   - A shadcn `Button` ("Give Now") that anchors to `#how-to-give`

2. **"How to Give" section** (`id="how-to-give"`)
   - Moved from the bottom to near the top (second section)
   - Full-width background using a muted tint of `osu-beaver-orange` (e.g., `bg-orange-50 dark:bg-neutral-800`) that visually distinguishes it from the standard white/neutral page background. Since the Give page content lives inside the prose column (`max-w-prose mx-auto`), this section breaks out using the same negative-margin + `w-screen` technique as the marquee, or is placed outside the prose wrapper entirely.
   - The 4 numbered OSU Foundation steps are displayed larger and more prominently
   - A direct CTA link to the OSU Foundation giving page (`https://give.fororegonstate.org/PL1Uv3Fkug`) styled as a shadcn `Button`

3. **Supporters marquee** (see Section 3)

4. **"What Your Gift Funds"**
   - Three categories (Student Researchers, Research Equipment, Daylighting Research) displayed as a responsive 3-column card grid (1 col mobile, 3 col desktop)
   - Each card has a heading and the existing prose content; styled using shadcn card aesthetics (border, rounded, padding) without necessarily using the shadcn `card` component

5. **"Why Private Support Matters"** — kept as prose, shortened to 1 paragraph

6. **"Partnerships and Major Gifts"** — unchanged, at the bottom

### Give Now button on other pages

- **Home page** (`app/page.js`): the existing small footer note (`The RadiantLab relies on private support...`) is updated to use a shadcn `Button` instead of a plain `<a>` link
- **Research page** (`app/research/page.js`): the existing plain `<a href="/give">Support this research</a>` link is replaced with a shadcn `Button`

---

## Section 3: Supporters Marquee Component

**File:** `components/SupportersMarquee.js`

### Data

Hardcoded array of supporter objects. Initial data (placeholder -- more to be added):

```js
const supporters = [
  { name: "Medical Research Foundation New Investigator Grant", amount: 50000 },
  { name: "Oregon Partnership for Alzheimer's Research Grant", amount: 35000 },
  // More to be added
];
```

Format per item: `Name · $XX,XXX` (comma-formatted dollar amount). If `amount` is absent, show name only.

### Animation

- Pure CSS `@keyframes` translating from `translateX(0)` to `translateX(-50%)` on the inner track
- The `supporters` array is duplicated in the DOM (rendered twice in sequence) so the loop is seamless with no visible gap at the wrap point
- Duration: ~30s linear infinite (adjust for readability)
- Hover: `animation-play-state: paused` on the track

### Edge treatment

CSS `mask-image` gradient on the outer container:

```css
mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
```

This fades both edges to transparent, blending the marquee into the page background.

### Full-bleed

The component uses `w-screen` with a negative horizontal margin (`-mx-[calc((100vw-100%)/2)]`) to break out of the parent prose column and span the full viewport width.

### Background

A subtle band: `bg-neutral-100 dark:bg-neutral-800` with `py-3`. Reads as a distinct visual strip without competing with the OSU orange.

### Usage

Drop `<SupportersMarquee />` anywhere. Used on:
- Give page (below "How to Give", above "What Your Gift Funds")
- Can be added to home page or other pages later

---

## Section 4: Research Page and DIAL FAQ

### Research page (`app/research/page.js`)

Remove the 3 `<details>`/`<summary>` blocks. All content (diagrams, project cards) is always visible.

Add a **table of contents** near the top of the page content (after the intro paragraph, before the first section):

```
Jump to: Natural & Built Environment · Light & Occupants · Energy & Environment
```

Styled as small pill-shaped anchor links using OSU color tokens. Each links to a corresponding `id` on the heading of each former details section:
- `#natural-built-environment`
- `#light-and-occupants`
- `#energy-and-environment`

No other content changes on this page.

### DIAL page (`app/facilities/dial/page.js`)

**No UI changes.**

Update `faqJsonLd` to add the following Q&A entries (all drawn from content already on the page):

1. **What is DIAL?** — DIAL (Daylighting Innovation and Analysis Lab) is a state-of-the-art mobile laboratory platform that enables researchers to conduct experiments on daylighting strategies in real-world settings. It contains two symmetrical office rooms with electrochromic windows, dimmable LED lighting, and environmental sensors.

2. **Where is DIAL located?** — DIAL is currently located at Oregon State University in Corvallis, Oregon. As a trailer-based facility, it can be transported and deployed to other locations.

3. **What research can be done in DIAL?** — DIAL supports research on the impact of daylighting on human health, productivity, and well-being, including studies on circadian rhythm, sleep, cognitive performance, and indoor environmental quality. It can also be used to test new daylighting technologies and materials.

4. **Is DIAL ADA-compliant?** — Yes, the DIAL facility is fully ADA-compliant.

5. **What is electrochromic glazing?** — (existing entry, unchanged)

---

## Out of Scope

- `components/experience.js` — no changes
- `components/teaching.js` — no changes
- DIAL `<details>` UI element — no changes
- Any page not mentioned above

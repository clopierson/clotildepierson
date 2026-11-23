---
name: press-mentions
description: Show press mentions as a Home pull quote and an About list, fed by one data file
metadata:
  type: project
---

# Press Mentions: Home Pull Quote and About List

**Date:** 2026-11-23
**Status:** Approved 2026-11-23, done criteria amended
**Size:** Small change, no new route
**Mockups:** kept outside the repo, reference only. Where they differ, this
document wins.

## Intent

AARP quoted Dr. Pierson on November 19, 2026. Show that on the site, and make
the next mention a data edit instead of a design task.

Article: "6 Ways to Get Your Circadian Rhythm Back on Track" by Lynne Peeples,
https://www.aarp.org/health/healthy-living/reset-circadian-rhythm/

The article quotes Dr. Pierson as an OSU architectural engineer in two of its
six tips. It does not name RadiantLab, so the copy credits Dr. Pierson.

## Goals

- Home: a pull quote from the newest mention that has one.
- About: an "In the Press" list with every mention, newest first.
- One data file feeds both.

## Non-goals

- No `/press` route and no navigation item.
- No JSON-LD. The article mentions Dr. Pierson but is not about her, and adding
  a type means changing the AI/SEO manifest for little return.
- No outlet logos. Outlet names are text.

## Anti-goals

- Nothing that looks like the removed funder banner. `supporters-marquee.js` and its
  commented-out imports stay as they are.
- No "featured in AARP" or other wording that implies a profile or endorsement.
  The wording is "quoted by AARP".

## Approaches

| Option | Trade-off |
|---|---|
| A. Full-width band on Home | Most visible, but resembles the removed funder banner |
| B. Pull quote on Home | Supports the circadian paragraph, but dates unless replaced |
| C. List on About | Permanent and grows by one row, but less visible |
| D. Quote and portrait on Give | Credibility for donors, but delays the giving steps |

Picked: B and C. C is the permanent record and B gives it
visibility.

## Design

### Data: `lib/press.js`

Newest first, same style as `lib/publications.js`:

```js
export const pressMentions = [
  {
    outlet: "AARP",
    title: "6 Ways to Get Your Circadian Rhythm Back on Track",
    author: "Lynne Peeples",
    date: "2026-11-19",
    url: "https://www.aarp.org/health/healthy-living/reset-circadian-rhythm/",
    summary:
      "Dr. Pierson on why older adults need brighter days and darker nights.",
    quote: {
      text: "Light is becoming more important as we age.",
      highlight: "Light",
    },
  },
];
```

- `quote` is optional. `featuredPressMention` is the first mention with quote
  text.
- `author`, `summary`, and `quote.highlight` are optional. Missing values render
  nothing.
- Dates format with `Intl.DateTimeFormat("en-US", { timeZone: "UTC" })`.
  Without UTC, an article dated the 1st shows the previous month in Oregon.
- A date that is not a real `YYYY-MM-DD` day fails the build and names the URL.

### B: `components/press-quote.js`, used in `app/page.js`

- Placed between the "Light induces visual and non-visual responses" paragraph
  and the "Besides the human-related aspects" paragraph.
- `<figure class="not-prose">` with a hairline above and below, no background.
- `<blockquote>` in Spartan bold, 28px on mobile and 36px from `sm`. The
  highlighted word is `osu-beaver-orange`, or `osu-luminance` in dark mode,
  like the lab wordmark.
- `<figcaption>`: "Dr. Clotilde Pierson, quoted by AARP, November 2026", then
  the article title as the link.
- Renders nothing when no mention has a quote.
- The quote stays on Home until a newer quoted mention replaces it or the line
  in `app/page.js` is removed. There is no expiry date.

### C: `components/press-list.js`, used in `app/about/page.js`

- Placed between the "In a Nutshell" list and `<Experience />`.
- `<h2>In the Press</h2>`, then one `<article class="not-prose">` per mention,
  separated by hairlines.
- From `sm`: outlet (Spartan bold) and date in a left column, then the linked
  title, summary, and byline. On mobile the outlet and date sit on one line
  above the title.

### Shared rules

- Links open in a new tab with `rel="noreferrer noopener"` and end with `↗` in
  the sans font. The Spartan subset has no `↗`.
- Link color comes from the existing `.prose a` rule, which also applies inside
  `not-prose`. No color utility is needed.
- Both blocks sit on the page background. Beaver Orange is 4.56:1 on white but
  4.18:1 on `neutral-100`, below the 4.5:1 AA minimum.
- Secondary text is `neutral-600`, or `neutral-400` in dark mode.

### AI-facing summaries

Add a `## Press` section before `## Team` in `public/llms.txt` and
`public/llms-full.txt`:

```
- AARP (Nov 19, 2026). 6 Ways to Get Your Circadian Rhythm Back on Track, by Lynne Peeples. Quotes Dr. Pierson on light exposure and aging. https://www.aarp.org/health/healthy-living/reset-circadian-rhythm/
```

## Constraints

- Each block is one line in its page, so either can be dropped without touching
  the other.
- No new dependencies and no new images, so the CSP is unaffected.

## Done means

- `npm run check` and `npm run build` pass.
- Axe passes on every route in light and dark (16 tests).
- Both blocks render as described above at 390px and 1024px, in light and dark,
  without clipping or overflowing their text column.

## Left to the builder

Exact spacing utilities, and how the highlighted word is split out of the quote.

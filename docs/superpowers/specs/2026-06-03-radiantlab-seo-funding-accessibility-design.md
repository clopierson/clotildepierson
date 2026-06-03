# RadiantLab Website: SEO, Donor Funnel & Accessibility

**Date:** 2026-06-03
**Status:** Approved

## Overview

Three interdependent improvements to `clotildepierson.com`:

1. **Give page and donor funnel:** build the empty `/give` route into a compelling private-funding page targeting alumni, industry partners, and health/dementia philanthropists; add secondary CTAs site-wide.
2. **SEO and AI visibility:** add JSON-LD structured data to all pages, restructure publications into a data file, and add `llms.txt` / `llms-full.txt` for AI agent discoverability.
3. **Accessibility:** achieve WCAG 2.2 AA compliance, verified by Playwright + axe-core with a GitHub Actions CI gate.

These three areas are treated as one spec because they share content. The dementia/health narrative on the Give page also anchors the `llms.txt` summary and improves homepage copy. The publications restructure enables ScholarlyArticle JSON-LD. The accessibility CI gate protects all of the above going forward.

---

## Section 1: Give Page & Donor Funnel

### Navigation

Add a "give" entry to `MenuItems` in `components/navigation.js`. Style it distinctly from plain nav links using `text-osu-beaver-orange` with a hover state, so it reads as a call-to-action rather than a plain page link.

### Secondary CTAs

Add a one-sentence "Support this research" nudge with a link to `/give` in two places:
- Homepage (`app/page.js`): below the mission/research summary paragraph
- Research page (`app/research/page.js`): below the funding acknowledgment sentence

These are inline text links, not banners.

### Give Page Content (`app/give/page.js`)

**Structure:**

1. **Opening impact statement.** Lead with the dementia/circadian angle. Example framing: "Millions of people worldwide live with Alzheimer's or dementia. Emerging evidence links disrupted light exposure to accelerated cognitive decline. The RadiantLab is working to understand this relationship and find solutions." Note: the specific statistic must be sourced to a real citation (Alzheimer's Association or WHO) before going live. The framing above is a placeholder for the final copy. This hook serves all three donor audiences: health advocates, alumni, and industry partners.

2. **"What your gift funds" -- three named purposes:**
   - *Student researchers:* graduate stipend support, enabling a PhD or MS student to pursue a semester or year of research
   - *DIAL operations:* sensors, maintenance, deployments, and upgrades to the mobile daylighting lab
   - *Daylighting and health research:* the current focus: light, circadian rhythm, and dementia

3. **How to give** -- step-by-step instructions for the OSU Foundation portal:
   - Link: `https://give.fororegonstate.org/PL1Uv3Fkug`
   - Designation: **Civil & Construction Engineering research Fund**
   - Special instructions: **Clotilde Pierson**
   - Investigate whether the OSU Foundation URL accepts query parameters to pre-fill these fields; use them if available.

4. **Partnership and major gifts contact.** A short paragraph for industry partners or major donors to reach out before committing. Include Clotilde's email (`clotilde.pierson@oregonstate.edu`). This addresses the industry audience who need a conversation before committing.

### Metadata

Fill in the empty `description` fields currently in `app/give/page.js`. Also fix the misnamed component export (`DIAL` to `Give`).

---

## Section 2: SEO & AI Visibility

### JSON-LD Structured Data

Add via `<Script id="..." type="application/ld+json">` co-located with each page's `metadata` export. No new abstractions needed.

| Page | Schema type | Key fields |
|------|-------------|------------|
| Homepage (`/`) | `Organization` | name, url, description, logo, founder (Clotilde), parentOrganization (OSU), sameAs (OSU faculty page) |
| About (`/about`) | `Person` | name, jobTitle, affiliation (OSU + RadiantLab), email, sameAs array: `https://orcid.org/0000-0001-7847-6568`, Google Scholar, ResearchGate, LinkedIn, X/Twitter |
| Research (`/research`) | `Project` (x3) | name, description, funder (Nuckolls Fund, Oregon Partnership for Alzheimer's Research), one per research theme |
| Software (`/software`) | `SoftwareApplication` (x2) | name, description, url, codeRepository, applicationCategory, license -- one for Lark, one for HDRI Calibration Tool |
| Publications (`/publications`) | `ItemList` + `ScholarlyArticle` (xN) | identifier (DOI), headline, author, datePublished, isPartOf (venue) -- one per paper |
| DIAL (`/facilities/dial`) | `FAQPage` | wraps the existing `<details>/<summary>` elements |

The `Person` schema on the About page is the highest-priority entry: it is the primary signal AI agents use to identify Clotilde as a researcher and link her to her work.

### Publications Page Restructure

Move all publication data out of inline JSX and into `lib/publications.js` as a structured array. Each entry is an object:

```js
{
  authors: ["Pierson C.", "Aarts M.", "Andersen M."],
  year: 2022,
  title: "Validation of spectral simulation tools...",
  venue: "Journal of Building Performance Simulation",
  volume: "16(2)",
  pages: "179-197",
  doi: "10.1080/19401493.2022.2125582",
  url: "https://doi.org/10.1080/19401493.2022.2125582",
  openAccessUrl: null,
  type: "journal", // journal | conference | dataset | thesis
}
```

The page renders these as semantic `<article>` elements grouped by year. The JSON-LD `ScholarlyArticle` entries are generated from the same array. Future publication additions become data changes, not JSX edits. The `<br>` layout tags currently used to separate secondary links are eliminated by this restructure.

### `llms.txt` and `llms-full.txt`

Served as static files from `public/`. Both follow the emerging llms.txt convention (plain text, structured with `#` headings).

**`llms.txt`** (~50 lines): who Clotilde is, what RadiantLab does, the three research themes, the DIAL facility, key publications (journal papers only), software tools, current team, and a pointer to `/give`.

**`llms-full.txt`:** expands `llms.txt` with the full publication list, complete facility technical specifications, and detailed software descriptions.

These files are what Perplexity, ChatGPT browsing, and Claude use to summarize the lab accurately when someone asks "who researches daylighting at OSU?" or "what is RadiantLab?".

---

## Section 3: Accessibility (WCAG 2.2 AA) + Tech Cleanup

### Playwright + axe-core Setup

**Install:**
```
bun add -D @playwright/test @axe-core/playwright
```

**Test location:** `tests/accessibility/`

One test file per route:
- `/`
- `/about`
- `/research`
- `/publications`
- `/software`
- `/team`
- `/facilities/dial`
- `/give`

Each test launches the page and runs `checkA11y()`. A shared Playwright fixture handles dev server startup via `webServer` config in `playwright.config.js` (`.js` to match the project's all-JS convention).

### CI Gate

`.github/workflows/accessibility.yml` -- runs on every pull request:
1. `bun install`
2. `bun run build`
3. `bun run start` (background)
4. `npx playwright test tests/accessibility/`

PRs are blocked if any axe violation is introduced.

### Violation Fix Process

The axe-core run against all pages is the authoritative source of violations. The static analysis below identifies likely candidates, but the tool output owns the final list:

- **Empty `alt` attributes on software images** (`app/software/page.js`): `larkImage` and `hdriImage` use `alt=""` but are meaningful product logos, not decorative. Fix with descriptive alt text.
- **`<br>` layout tags in publications:** eliminated by the publications restructure in Section 2.
- **Focus Not Obscured (WCAG 2.4.11):** the fixed "back to top" button (`bottom-6 right-6`) can overlap focused elements near the bottom of the page. Fix with `scroll-padding-bottom` on `<html>` or by adjusting z-stacking.
- **Focus Appearance (WCAG 2.4.13):** audit Tailwind's focus ring across all interactive elements, including on orange hover states. Ensure 3:1 contrast minimum.
- **Target Size (WCAG 2.5.8):** verify inline DOI links and nav items meet the 24x24 CSS pixel minimum.

All other violations are discovered and fixed from the axe run output.

### Tech Cleanup

- Remove `components/layout.js` -- dead code from the Pages Router migration, not imported anywhere
- Fix component export name in `app/give/page.js` (`DIAL` to `Give`)
- Fix dark mode shadow on Research page `<details>` elements (existing README TODO)

---

## Out of Scope

- Blog / news section (README TODO, separate project)
- Shadcn/ui migration (README TODO, separate project)
- Per-publication open-access PDF hosting
- Donor recognition / named giving levels
- experiment.com integration (README TODO)

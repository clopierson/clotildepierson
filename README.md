![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

# Clotilde Pierson's Professional Website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## To Do

- Update teaching, publications
- Investigate David Hurwitz website to figure out how he gets money: https://www.davidhurwitz.org/ 
- Add link to https://experiment.com/ 
- Add current projects for marketing purposes
- Write some blog posts, maybe based on latest research (vulgarize it for a general audience)
- Keep the AI/SEO maintenance gate current when adding routes or content; see `docs/ai-seo-maintenance.md`
- Marketing strategies: https://grok.com/share/bGVnYWN5LWNvcHk_d5770326-d9ca-4222-af38-ed6e683671aa 

## Getting Started

You can install required packages (listed in `packages.json`) with:

```bash
pnpm install
```

Run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build the Static Site

```bash
pnpm run build
```

```bash
pnpm run start
```

### Lint and Format

```bash
pnpm run check
pnpm run format
```

`pnpm run check` runs Ultracite plus the AI/SEO maintenance gate documented in
[`docs/ai-seo-maintenance.md`](docs/ai-seo-maintenance.md).

## Style Guide

- Dark Background: #171717

### Oregon State University

[Color Palette](https://communications.oregonstate.edu/brand-guide/visual-identity/colors)

Never use Pine Stand and Luminance together in large fields or in close proximity in any instance.

- Beaver Orange: #D73F09
- Paddletail Black: #000
- Bucktooth White: #FFF
- Luminance: #FFB500
- Candela: #FDD26E
- Pine Stand: #4A773C
- Crater: #8E9089
- Moondust: #B8DDE1
- Coastline: #A7ACA2

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

### Next.js + TailwindCSS

- [Next.js with Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
- [Custom _document.js](https://nextjs.org/docs/advanced-features/custom-document)

### Illustrations, Images, Icons

- [Undraw](https://undraw.co/)
- [DrawKit](https://drawkit.com)
- [Unsplash](https://unsplash.com)
- [React Feather](https://github.com/feathericons/react-feather)
- [Emojipedia](https://emojipedia.org/)

## SEO and Funding Presence Plan

Goal: improve visibility in search results and social media to attract funding from private and public sources. Two phases: technical SEO first, then funder-facing content.

Constraints and decisions:

- Every metadata or route change must update `scripts/ai-seo-routes.mjs` in the same commit; `pnpm run check` string-matches titles, descriptions, OG images, structured-data types, a11y test coverage, committed sitemaps, and `llms.txt` anchors (see `docs/ai-seo-maintenance.md`).
- The PI does not want the supporters/"Funded By" banner. `components/supporters-marquee.js` stays unrendered; funders remain mentioned only in research-page prose and JSON-LD.
- Google Search Console is already configured separately; no verification code is needed in the site.

### Phase 1: Technical SEO

1. **Title template centralization** (`lib/metadata.js`, all `app/**/page.js`, `scripts/ai-seo-routes.mjs`): set `rootMetadata.title.template` to `"%s | RadiantLab"` and switch pages to short titles (`"Research"`, `"Publications"`, ...). In `createPageMetadata`, keep the short title for `<title>` (template appends the suffix) but compute the full suffixed title for `openGraph.title` and `twitter.title`, since those bypass the template. Sync manifest titles.
2. **Proper icons** (`public/`, `lib/metadata.js`): from a square mark of at least 512px, generate `favicon.ico` (16/32/48), `icon-192.png`, `icon-512.png`, and `apple-touch-icon.png` (180x180); list them in `rootMetadata.icons`. Stay with static `public/` files rather than `app/icon.png` conventions. Skippable until the asset exists (current favicon is a non-standard 113x113 PNG).
3. **JSON-LD additions** (`app/layout.js`, `app/team/page.js`, `app/give/page.js`, `app/facilities/dial/page.js`, manifest): `WebSite` schema in the root layout (untracked by the checker, which only scans `page.js`); `ItemList` of `Person` on `/team` from the existing data arrays; `WebPage` with `potentialAction: DonateAction` on `/give` targeting the OSU Foundation URL; `BreadcrumbList` (Home > Facilities > DIAL) on `/facilities/dial` alongside the existing FAQPage.
4. **Sitemap priorities** (`next-sitemap.config.js`): add a `transform` with per-path priority/changefreq: `/` 1.0/weekly; `/research` and `/publications` 0.9/monthly; `/facilities/dial` and `/give` 0.8/monthly; others 0.6/monthly; later `/news` 0.8/weekly. Keep `autoLastmod: false`. Rebuild and commit regenerated `public/sitemap*.xml`.
5. **Cross-linking pass**: add `id="partnerships"` to the "Partnerships and Major Gifts" section on `/give`; closing CTA on the DIAL page (home-page fund-CTA pattern) linking to `/give#partnerships` and `/research`; inline links from `/research` to `/publications`, `/software`, and `/facilities/dial`; intro line on `/publications` linking to the Google Scholar profile and ORCID (0000-0001-7847-6568); optional `links: [{label, url}]` per team member rendered in `TeamCard` (filled in later).
6. **ORCID in Socials** (`components/socials.js`): add ORCID as a visible text link in the existing separator pattern (footer and about page). It currently appears only in JSON-LD.
7. **Light keyword/description audit** (`lib/metadata.js`, manifest): extend `rootMetadata.keywords` with "circadian lighting", "electrochromic glazing", "building science", "sponsored research", "Oregon State University". At most one or two page-description tweaks (e.g. `/give` mentions industry partnership opportunities), each synced to the manifest.

### Phase 2: Funder-facing content

1. **Strengthen the partnership section on `/give`** (no new page): expand "Partnerships and Major Gifts" into three concrete offerings styled like the "What Your Gift Funds" cards: DIAL product testing (electrochromic glazing, lighting, sensors, linking to `/facilities/dial`), sponsored research studies, and data/monitoring partnerships. Add a mailto button with a prefilled subject. Dark-mode variants required.
2. **`/news` page** (`lib/news.js`, `app/news/page.js`, `components/navigation.js`, manifest, `tests/accessibility/axe.spec.js`): a hand-maintained data file mirroring `lib/publications.js` with `{ id, date, title, excerpt, href?, tag? }` (tags: grant, award, publication, press, talk), rendered as a prose page grouped by year with tag badges. JSON-LD `ItemList` of `NewsArticle`. Register the route in the manifest and axe tests, add to `MenuItems`, rebuild sitemaps. Seed with 3 to 5 real items. Reuse `/og/home.jpg` unless a dedicated `/og/news.jpg` (1200x630) is created. Fresh content is the single biggest SEO lever the site lacks, and each entry doubles as a LinkedIn post.
3. **RSS feed** (optional, cheap): `app/feed.xml/route.js` building RSS 2.0 from `lib/news.js`, `force-static`, excluded from the sitemap. Advertise via `alternates.types`; note that per-page `alternates.canonical` shallow-overrides root `alternates`, so either add the feed link inside `createPageMetadata` too or accept it on layout-default pages only.
4. **Off-site checklist** (no code): submit the sitemap and request indexing for key pages in the already-configured Search Console; import the site into Bing Webmaster from GSC; point the Google Scholar profile homepage field at the site; add the website and current employment to the ORCID record; request a link back from the OSU faculty page (high-authority .edu backlink, the biggest single off-site win); add the site to LinkedIn and post news items there; validate OG cards with the LinkedIn Post Inspector, Facebook Sharing Debugger, and X Card Validator; validate schema with the Google Rich Results Test on all routes.

### Verification

- `pnpm run check` after every step (Biome plus the AI/SEO manifest gate).
- `pnpm run build` then `pnpm run test:a11y` (must include `/news` once added; the checker enforces this).
- Manual: view-source `<title>` on home and two pages (no doubled "| RadiantLab"), Rich Results Test on the new JSON-LD, OG debuggers, feed content type, `/feed.xml` absent from the sitemap.

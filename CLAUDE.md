# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun install          # install dependencies
bun run dev          # dev server at localhost:3000
bun run build        # production build (also runs next-sitemap via postbuild)
bun run start        # serve production build
bun run lint         # ESLint via next lint
bun run test:a11y    # WCAG 2.2 AA accessibility tests (requires build first: bun run build)
```

There are no tests in this project except for accessibility tests.

## Architecture

This is a **Next.js 16 App Router** website for Dr. Clotilde Pierson's Daylighting Research Laboratory (RadiantLab) at Oregon State University, deployed on Vercel.

**Routing:** All pages live in `app/` as `page.js` files. The root layout (`app/layout.js`) wraps every page with `<Header>` + `<FooterWrapper>` in a 12-column grid. Each page exports a `metadata` object for SEO/OG tags -- this is the App Router pattern, not the legacy `<Head>` approach. The legacy Pages Router `components/layout.js` has been removed.

**Navigation:** Menu items are defined in `components/navigation.js` as the `MenuItems` array. The `/facilities` route currently points directly to `/facilities/dial` (the DIAL lab page). The nav comment notes that a dropdown should eventually replace this when more facilities are added.

**Styling:** Tailwind CSS v4 is used. Custom OSU brand colors are defined as `@theme` tokens in `styles/globals.css` (not in a config file). Available custom tokens: `osu-beaver-orange` (#D73F09), `osu-luminance` (#FFB500), `osu-candela` (#FDD26E), `osu-pine-stand` (#4A773C). The `@tailwindcss/typography` plugin provides the `prose` class used on content-heavy pages. Dark mode is implemented throughout using Tailwind's `dark:` variant.

**Analytics:** Plausible analytics is proxied through Next.js rewrites in `next.config.js` to avoid ad-blockers. The script loads from `/js/script.file-downloads.js` and posts events to `/api/event`.

**Content Security Policy:** CSP headers are applied to all routes via `next.config.js`. CSP is intentionally disabled in `NODE_ENV=development` and only enforced in production.

**Images:** `next/image` is used with `avif`/`webp` formats. The `ResearchDiagram` component renders SVG diagrams with separate light (`rel_*_light.svg`) and dark (`rel_*_dark.svg`) variants using `dark:hidden` / `dark:flex` toggling. OSU institution logos follow a similar pattern via `components/InstitutionLogo.js`.

**Sitemap:** `next-sitemap` runs automatically after `next build` via the `postbuild` script. Config is in `next-sitemap.config.js`; `public/files/` is disallowed in robots.txt.

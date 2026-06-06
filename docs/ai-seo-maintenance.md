# AI/SEO Maintenance

This website uses source-level checks to keep public routes, metadata,
structured data, sitemap output, accessibility coverage, and AI-facing summary
files aligned.

Run the full gate with:

```bash
pnpm run check
```

Run only the AI/SEO gate with:

```bash
pnpm run check:ai-seo
```

## Required Updates

When adding, removing, or renaming a public page:

- Update `scripts/ai-seo-routes.mjs`.
- Export page metadata with `createPageMetadata`.
- Add the route to `tests/accessibility/axe.spec.js`.
- Regenerate the sitemap with `pnpm run build`.
- Confirm `public/sitemap-0.xml` includes the route.

When changing a page title, description, canonical path, Open Graph image, or
Open Graph image alt text:

- Update the page metadata.
- Update the matching route entry in `scripts/ai-seo-routes.mjs`.
- Review whether `public/llms.txt` or `public/llms-full.txt` should change.

When adding or removing structured data:

- Keep the `<StructuredData />` usage close to the page metadata.
- Update `structuredDataTypes` in `scripts/ai-seo-routes.mjs`.
- Preserve existing structured data types unless the page purpose changes.

When changing donor-critical content:

- Review `/give`, the homepage donor CTA, and research-page donor CTAs.
- Review the `## Support` sections in `public/llms.txt` and
  `public/llms-full.txt`.
- Preserve the OSU Foundation designation and the contact path for major gifts.

## Current Guardrails

The AI/SEO check fails when:

- an `app/**/page.js` route is not listed in the manifest,
- required metadata fields drift from the manifest,
- expected structured data is removed,
- a public route is missing from the accessibility route list,
- a public route is missing from the tracked sitemap,
- `robots.txt`, `next-sitemap.config.js`, or donor-critical `llms*.txt`
  anchors drift.

# Press Mentions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show Dr. Pierson's press mentions as a pull quote on Home and a list on About.

**Architecture:** `lib/press.js` holds the mentions and three pure helpers. Two server components read it directly, and each page renders one of them with a single line.

**Tech Stack:** Next.js 16 App Router, React 19, Tailwind CSS 4.3 with the typography plugin, Biome through Ultracite, Playwright with axe.

**Spec:** `docs/superpowers/specs/2026-11-23-press-mentions-design.md`

## Global Constraints

- No new dependencies, images, routes, navigation items, JSON-LD, or committed test files. The repo's only tests are the axe suite.
- Do not touch `components/supporters-marquee.js` or its commented-out imports.
- Wording is "quoted by AARP", never "featured in".
- Links use `rel="noreferrer noopener"` and `target="_blank"`, and end with `<span aria-hidden="true">↗</span>` outside any Spartan text.
- Add no color utility to links. `.prose a` in `styles/globals.css` is unlayered, reaches inside `not-prose`, and already sets the color.
- Both blocks sit on the page background. Secondary text is `text-neutral-600 dark:text-neutral-400`.
- Call tools directly with `export PATH="$PWD/node_modules/.bin:$PATH"`.
- `next build`, `next start`, and Playwright bind local ports, which a sandboxed shell may block.
- Throwaway checks live in one fixed absolute directory outside the repo, exported as `CHECKS`. Do not use `$TMPDIR`: it differs inside and outside the sandbox.
- Start a server, use it, and stop it by PID inside one unsandboxed command: `next start & PID=$!; ...; kill $PID`. A sandboxed command cannot stop another command's process. Never use `pkill -f`.
- Work on branch `feat/press-mentions`. Commit locally, do not push.

## Review Focus

1. A mention added at the bottom of the array: list order and the Home quote still follow the date. (Task 1)
2. A highlight that is missing, absent from the quote, or repeated in it: the full quote renders once. (Task 1)
3. A malformed date such as `2026-13-01`: the build fails instead of publishing "Invalid Date". (Task 1)
4. No mention has a quote: Home shows no empty box between hairlines. (Task 2)
5. A long one-word outlet name: it wraps inside its column instead of overlapping the title. (Task 3)

---

### Task 1: Press data

**Files:**
- Create: `lib/press.js`

**Interfaces:**
- Produces: `pressMentions`, an array sorted newest first. Each item is `{ outlet, title, date, url, author?, summary?, quote?: { text, highlight? } }`, with `date` as `YYYY-MM-DD`.
- Produces: `featuredPressMention`, the first item of `pressMentions` with a `quote`, else `undefined`.
- Produces: `newestFirst(mentions) -> array` (a new array), `formatPressDate(date, month: "short" | "long") -> string`, `splitHighlight(text, highlight?) -> { before, match, after }`.

- [ ] **Step 1: Create the branch and commit the spec and plan**

```bash
git switch -c feat/press-mentions
git add docs/superpowers/specs/2026-11-23-press-mentions-design.md docs/superpowers/plans/2026-11-23-press-mentions.md
git commit -m "docs: add press mentions spec and plan"
```

- [ ] **Step 2: Write the failing check at `$CHECKS/press-data.mjs`**

```js
import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

const press = await import(pathToFileURL(`${process.cwd()}/lib/press.js`));
const { featuredPressMention, formatPressDate, newestFirst, pressMentions, splitHighlight } = press;

const older = { date: "2026-11-19" };
const newer = { date: "2027-01-02" };
const input = [older, newer];
assert.deepEqual(newestFirst(input), [newer, older]);
assert.deepEqual(input, [older, newer]);

assert.equal(formatPressDate("2026-11-19", "short"), "Nov 2026");
assert.equal(formatPressDate("2026-11-19", "long"), "November 2026");
assert.equal(formatPressDate("2026-12-01", "short"), "Dec 2026");
assert.throws(() => formatPressDate("2026-13-01", "short"), RangeError);

assert.deepEqual(splitHighlight("Light is light", "Light"), { before: "", match: "Light", after: " is light" });
assert.deepEqual(splitHighlight("a b a", "a"), { before: "", match: "a", after: " b a" });
assert.deepEqual(splitHighlight("a b", "z"), { before: "a b", match: "", after: "" });
assert.deepEqual(splitHighlight("a b"), { before: "a b", match: "", after: "" });

assert.equal(pressMentions[0].outlet, "AARP");
assert.equal(featuredPressMention.quote.text, "Light is becoming more important as we age.");
console.log("press data ok");
```

- [ ] **Step 3: Run it and see it fail**

Run: `TZ=America/Los_Angeles node "$CHECKS/press-data.mjs"`
Expected: `ERR_MODULE_NOT_FOUND` for `lib/press.js`

- [ ] **Step 4: Implement `lib/press.js`**

Use the single entry from the spec's Data section verbatim. `newestFirst` compares the ISO strings. `formatPressDate` uses `Intl.DateTimeFormat("en-US", { month, year: "numeric", timeZone: "UTC" })`. `splitHighlight` splits on the first occurrence only.

- [ ] **Step 5: Run it and see it pass**

Run: `TZ=America/Los_Angeles node "$CHECKS/press-data.mjs"`, then `biome check lib/press.js`
Expected: `press data ok`, then no errors. A `MODULE_TYPELESS_PACKAGE_JSON` warning is normal.

- [ ] **Step 6: Commit** `lib/press.js` as `feat: add press mentions data`

---

### Task 2: Home pull quote

**Files:**
- Create: `components/press-quote.js`
- Modify: `app/page.js` (imports, and between the paragraphs at lines 120 and 129)

**Interfaces:**
- Consumes: `featuredPressMention`, `formatPressDate`, `splitHighlight` from `../lib/press`.
- Produces: default export `PressQuote()`, no props. Returns `null` without a featured mention.

- [ ] **Step 1: Write the page-text helper at `$CHECKS/page-text.mjs`**

```js
import { readFileSync } from "node:fs";

export const pageText = (page) =>
  readFileSync(`.next/server/app/${page}.html`, "utf8")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ");
```

- [ ] **Step 2: Write the failing check at `$CHECKS/press-home.mjs`**

```js
import assert from "node:assert/strict";
import { pageText } from "./page-text.mjs";

const home = pageText("index");
const quote = home.indexOf("“Light is becoming more important as we age.”");
assert.ok(quote > home.indexOf("onset of mental illnesses"));
assert.ok(quote < home.indexOf("Besides the human-related aspects"));
assert.ok(home.includes("Dr. Clotilde Pierson, quoted by AARP, November 2026"));
assert.ok(home.includes("6 Ways to Get Your Circadian Rhythm Back on Track"));
console.log("home ok");
```

- [ ] **Step 3: Build, run it, and see it fail**

Run: `next build && node "$CHECKS/press-home.mjs"`
Expected: `AssertionError` on the first `assert.ok`

- [ ] **Step 4: Implement `PressQuote` and render `<PressQuote />` after the "Light induces" paragraph**

| Element | Content | Classes |
|---|---|---|
| `figure` | wrapper | `not-prose my-10 border-neutral-200 border-y py-8 dark:border-neutral-700` |
| `blockquote` | curly quotes around the split text | `font-[Spartan] font-bold text-[1.75rem] text-neutral-900 leading-tight sm:text-4xl dark:text-white` |
| `span` | `match` | `text-osu-beaver-orange dark:text-osu-luminance` |
| `figcaption` | credit and link | `mt-4 flex flex-col gap-1 text-neutral-600 text-sm dark:text-neutral-400` |
| `span` | `Dr. Clotilde Pierson, quoted by {outlet}, {long date}` | none |
| `a` | `{title} ↗` | `w-fit` |

- [ ] **Step 5: Build, run it, and see it pass**

Run: `next build && node "$CHECKS/press-home.mjs" && biome check components/press-quote.js app/page.js`
Expected: `home ok` and no Biome errors. Fix class order with `ultracite fix` on those two files only.

- [ ] **Step 6: Commit** both files as `feat: add press pull quote to home page`

- [ ] **Step 7: Prove the no-quote case**

Delete the `quote` key in `lib/press.js`, run `next build`, then:

```bash
node -e 'const h=require("fs").readFileSync(".next/server/app/index.html","utf8");if(h.includes("<figure")||h.includes("quoted by"))throw new Error("empty quote rendered");console.log("no-quote ok")'
git restore lib/press.js
```

Expected: `no-quote ok`, and `git status --short` is clean

---

### Task 3: About list and AI summaries

**Files:**
- Create: `components/press-list.js`
- Modify: `app/about/page.js:148` (between `</ul>` and `<Experience />`, plus the import)
- Modify: `public/llms.txt`, `public/llms-full.txt` (before `## Team`)

**Interfaces:**
- Consumes: `pressMentions`, `formatPressDate` from `../lib/press`, and `$CHECKS/page-text.mjs` from Task 2.
- Produces: default export `PressList()`, no props.

- [ ] **Step 1: Write the failing check at `$CHECKS/press-about.mjs`**

```js
import assert from "node:assert/strict";
import { pageText } from "./page-text.mjs";

const about = pageText("about");
const list = about.indexOf("In the Press");
assert.ok(list > about.indexOf("In a Nutshell"));
assert.ok(list < about.indexOf("Education and Work History"));
for (const copy of [
  "AARP",
  "Nov 2026",
  "6 Ways to Get Your Circadian Rhythm Back on Track",
  "Dr. Pierson on why older adults need brighter days and darker nights.",
  "By Lynne Peeples",
]) {
  assert.ok(about.includes(copy), copy);
}
console.log("about ok");
```

- [ ] **Step 2: Run it and see it fail**

Run: `node "$CHECKS/press-about.mjs"`
Expected: `AssertionError` on the first `assert.ok`

- [ ] **Step 3: Implement `PressList` and render `<PressList />` before `<Experience />`**

A plain `<section>` holds `<h2>In the Press</h2>` and one article per mention, keyed by `url`. Skip `summary` and the byline when absent.

| Element | Content | Classes |
|---|---|---|
| `article` | row | `not-prose grid gap-2 border-neutral-200 border-b py-5 text-sm first-of-type:border-t sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-6 dark:border-neutral-700` |
| `p` | outlet and date | `flex items-baseline gap-2.5 sm:flex-col sm:items-start sm:gap-0` |
| `span` | `outlet` | `wrap-anywhere max-w-full font-[Spartan] font-bold text-base text-neutral-900 dark:text-white` |
| `time` with `dateTime={date}` | short date | `shrink-0 text-neutral-600 dark:text-neutral-400` |
| `div` | right column | `flex flex-col gap-1` |
| `h3` holding `a` | `{title} ↗` | `text-base` on the `h3` |
| `p` | `summary` | none |
| `p` | `By {author}` | `text-neutral-600 dark:text-neutral-400` |

- [ ] **Step 4: Add the `## Press` section to both llms files**

Use the line from the spec's AI-facing summaries section verbatim.

- [ ] **Step 5: Build, run it, and see it pass**

Run: `next build && node "$CHECKS/press-about.mjs" && biome check components/press-list.js app/about/page.js && node scripts/check-ai-seo.mjs && grep -c "^## Press" public/llms.txt public/llms-full.txt`
Expected: `about ok`, no Biome errors, `AI/SEO check passed.`, and a count of 1 per file

- [ ] **Step 6: Commit** the four files as `feat: add press list to about page`

- [ ] **Step 7: Prove order, optional fields, and a long outlet**

Append `{ outlet: "Architecturalilluminationmagazine", title: "Test Title", date: "2026-12-01", url: "https://example.com/" }` to the array in `lib/press.js`, run `next build`, then run this check:

```bash
node --input-type=module -e '
import assert from "node:assert/strict";
const { pageText } = await import(process.env.CHECKS + "/page-text.mjs");
const a = pageText("about");
assert.ok(a.indexOf("Test Title") < a.indexOf("6 Ways to Get"));
assert.ok(a.includes("Dec 2026") && !a.includes("undefined"));
assert.ok(pageText("index").includes("quoted by AARP"));
console.log("second mention ok")'
```

Expected: `second mention ok`

- [ ] **Step 8: Write `$CHECKS/press-look.mjs`, look at the long outlet, and restore**

```js
import { createRequire } from "node:module";

const { chromium } = createRequire(`${process.cwd()}/package.json`)("@playwright/test");
const browser = await chromium.launch();
for (const colorScheme of ["light", "dark"]) {
  for (const width of [390, 1024]) {
    for (const path of ["/", "/about"]) {
      const page = await browser.newPage({ colorScheme, viewport: { width, height: 900 } });
      await page.goto(`http://localhost:3000${path}`);
      const fits = await page.evaluate(() =>
        [...document.querySelectorAll("figure.not-prose, article.not-prose")].every(
          (el) => el.scrollWidth <= el.clientWidth &&
            el.getBoundingClientRect().right <= el.closest(".prose").getBoundingClientRect().right + 1
        )
      );
      const name = `${path === "/" ? "home" : "about"}-${width}-${colorScheme}`;
      await page.screenshot({ fullPage: true, path: `${process.env.CHECKS}/${name}.png` });
      console.log(name, fits);
      await page.close();
    }
  }
}
await browser.close();
```

Run: start the server, `node "$CHECKS/press-look.mjs"`, stop the server
Expected: 8 lines ending in `true`, and in the four `about` shots the long outlet wraps without touching the title. Then `git restore lib/press.js`.

---

### Task 4: Whole-change verification

**Files:** none

**Interfaces:**
- Consumes: the built site from Tasks 1 to 3.

- [ ] **Step 1: Rebuild, then run every check against one server**

Port 3000 must be free first. In one command: `next build`, start the server, then run these and stop the server.

| Run | Expected |
|---|---|
| `playwright test -g '/(about)? passes'` | `4 passed` |
| `playwright test` | `16 passed` |
| `node "$CHECKS/press-look.mjs"` | 8 lines ending in `true` |

- [ ] **Step 2: Look at the 8 screenshots**

Confirm nothing is clipped in either block. Home already scrolls sideways where scrollbars take space, because its hero is `w-screen`, so page-level scroll is not the test.

- [ ] **Step 3: Confirm scope**

Run: `git status --short && git diff --stat main`
Expected: a clean tree, and only these files: the spec, this plan, `lib/press.js`, `components/press-quote.js`, `components/press-list.js`, `app/page.js`, `app/about/page.js`, `public/llms.txt`, `public/llms-full.txt`

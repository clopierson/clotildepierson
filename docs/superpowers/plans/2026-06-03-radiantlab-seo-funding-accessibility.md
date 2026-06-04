# RadiantLab SEO, Donor Funnel & Accessibility Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve organic and AI search visibility, build a private donor funnel, and achieve WCAG 2.2 AA compliance with an automated CI gate.

**Architecture:** JSON-LD is added inline to each page component via `<script dangerouslySetInnerHTML>`. Publications move from raw JSX into `lib/publications.js`, which the page renders and which also drives ScholarlyArticle JSON-LD. Accessibility is enforced by Playwright + axe-core tests in GitHub Actions on every PR.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, Radix UI, Playwright, @axe-core/playwright, bun

**Spec:** `docs/superpowers/specs/2026-06-03-radiantlab-seo-funding-accessibility-design.md`

---

## File Map

**Create:**
- `lib/publications.js` -- structured publication data array (~40 entries)
- `public/llms.txt` -- brief AI agent summary
- `public/llms-full.txt` -- full AI agent reference
- `playwright.config.js` -- Playwright config with webServer
- `tests/accessibility/axe.spec.js` -- axe-core WCAG 2.2 AA tests for all pages
- `.github/workflows/accessibility.yml` -- CI gate

**Modify:**
- `components/navigation.js` -- add Give link with orange highlight styling
- `app/give/page.js` -- full Give page content (currently empty placeholder)
- `app/page.js` -- add Organization JSON-LD + secondary CTA
- `app/about/page.js` -- add Person JSON-LD with ORCID
- `app/research/page.js` -- add three Project JSON-LD schemas + secondary CTA
- `app/publications/page.js` -- render from lib/publications.js + ScholarlyArticle JSON-LD
- `app/software/page.js` -- add SoftwareApplication JSON-LD + fix empty alt text
- `app/facilities/dial/page.js` -- add FAQPage JSON-LD
- `styles/globals.css` -- add scroll-padding-bottom (WCAG 2.4.11)
- `package.json` -- add @playwright/test, @axe-core/playwright, test:a11y script
- `CLAUDE.md` -- add test:a11y command

**Delete:**
- `components/layout.js` -- dead code from Pages Router migration

---

## Task 1: Playwright + axe-core Test Infrastructure

**Files:**
- Create: `playwright.config.js`
- Create: `tests/accessibility/axe.spec.js`
- Modify: `package.json`

- [ ] **Step 1: Install test dependencies**

```bash
bun add -D @playwright/test @axe-core/playwright
```

Expected: packages added to devDependencies in package.json.

- [ ] **Step 2: Install Chromium browser binary**

```bash
bunx playwright install chromium --with-deps
```

Expected: Chromium downloaded to Playwright's browser cache.

- [ ] **Step 3: Create playwright.config.js**

```js
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/accessibility',
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: process.env.CI ? 'bun run start' : 'bun run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

- [ ] **Step 4: Create tests/accessibility/axe.spec.js**

```js
import { test } from '@playwright/test';
import { checkA11y, injectAxe } from '@axe-core/playwright';

const routes = [
  '/',
  '/about',
  '/research',
  '/publications',
  '/software',
  '/team',
  '/facilities/dial',
  '/give',
];

for (const route of routes) {
  test(`${route} passes WCAG 2.2 AA`, async ({ page }) => {
    await page.goto(route);
    await injectAxe(page);
    await checkA11y(page, undefined, {
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'],
        },
      },
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });
}
```

- [ ] **Step 5: Add test:a11y script to package.json**

In `package.json`, inside `"scripts"`:

```json
"test:a11y": "playwright test tests/accessibility/"
```

- [ ] **Step 6: Run baseline -- capture current violations**

Start the dev server in one terminal, then in another:

```bash
bun run test:a11y
```

Expected: Some tests fail. Read the output carefully. The list of violations is the baseline to fix in Task 14. Copy-paste the failure output into a scratch note -- you will return to it. The `/give` test will pass trivially (the page is currently empty).

- [ ] **Step 7: Commit**

```bash
git add playwright.config.js tests/accessibility/axe.spec.js package.json bun.lock
git commit -m "feat: add Playwright + axe-core WCAG 2.2 AA test suite"
```

---

## Task 2: Give Page Navigation Link

**Files:**
- Modify: `components/navigation.js`

- [ ] **Step 1: Add highlight field to MenuItems and the Give entry**

In `components/navigation.js`, replace the `MenuItems` array:

```js
export const MenuItems = [
  { link: "/research", name: "research" },
  { link: "/software", name: "software" },
  { link: "/facilities/dial", name: "facilities" },
  { link: "/publications", name: "publications" },
  { link: "/team", name: "team" },
  { link: "/about", name: "about" },
  { link: "/give", name: "give", highlight: true },
];
```

- [ ] **Step 2: Apply highlight styling in the desktop nav**

In `components/navigation.js`, replace the non-mobile map:

```jsx
{MenuItems.map((link) => (
  <div
    className={`capitalize text-sm no-underline md:text-base inline ${
      link.highlight
        ? "text-osu-beaver-orange hover:text-osu-luminance"
        : "hover:text-osu-luminance"
    }`}
    key={link.name}
  >
    <Link href={link.link}>{link.name}</Link>
  </div>
))}
```

- [ ] **Step 3: Apply highlight styling in the mobile Dialog nav**

In `components/navigation.js`, replace the mobile map (inside Dialog.Content):

```jsx
{MenuItems.map((link) => (
  <div
    className={`capitalize no-underline md:text-base inline ${
      link.highlight
        ? "text-osu-beaver-orange hover:text-osu-luminance"
        : "hover:text-osu-luminance"
    }`}
    key={link.name}
    onClick={handleLinkClick}
  >
    <Link href={link.link}>{link.name}</Link>
  </div>
))}
```

- [ ] **Step 4: Build check**

```bash
bun run build
```

Expected: Build completes with no errors.

- [ ] **Step 5: Commit**

```bash
git add components/navigation.js
git commit -m "feat: add Give link to navigation with orange highlight"
```

---

## Task 3: Give Page Content

**Files:**
- Modify: `app/give/page.js`

The stat placeholder `[STAT]` must be replaced with a sourced figure (Alzheimer's Association or WHO) before this page goes live. The page is built now with the placeholder so the rest of the work can proceed.

- [ ] **Step 1: Write app/give/page.js**

```jsx
export const metadata = {
  title: "Support Daylighting Research | RadiantLab",
  description:
    "Support the RadiantLab's research on daylight, circadian health, and dementia at Oregon State University through the OSU Foundation.",
  openGraph: {
    url: "https://www.clotildepierson.com/give",
    title: "Support Daylighting Research | RadiantLab",
    description:
      "Support the RadiantLab's research on daylight, circadian health, and dementia at Oregon State University through the OSU Foundation.",
  },
  twitter: {
    title: "Support Daylighting Research | RadiantLab",
    description:
      "Support the RadiantLab's research on daylight, circadian health, and dementia at Oregon State University through the OSU Foundation.",
  },
};

export default function Give() {
  return (
    <>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Support Daylighting Research</h1>

        {/* TODO: replace [STAT] with a sourced figure from the Alzheimer's Association or WHO */}
        <p className="font-semibold">
          [STAT] people worldwide live with Alzheimer&apos;s disease or related
          dementias. Emerging evidence links disrupted light exposure (the kind
          caused by modern buildings and urban life) to accelerated cognitive
          decline. The RadiantLab is working to understand this relationship and
          find design solutions that protect brain health.
        </p>

        <p>
          Private support is critical as federal research funding faces mounting
          uncertainty. Your gift directly enables the researchers, the research,
          and the facilities that can make a difference.
        </p>

        <h2>What Your Gift Funds</h2>

        <h3>Student Researchers</h3>
        <p>
          Graduate students are the engine of the lab. A gift to student support
          helps fund a PhD or MS researcher&apos;s stipend, freeing them to
          focus on advancing knowledge of how buildings affect human health.
        </p>

        <h3>DIAL Operations</h3>
        <p>
          The{" "}
          <a href="/facilities/dial">
            Daylighting Innovation and Analysis Lab (DIAL)
          </a>{" "}
          is a first-of-its-kind mobile research facility equipped with
          electrochromic windows, spectral sensors, and off-grid power. Gifts to
          DIAL fund equipment maintenance, sensor upgrades, and deployments to
          reach diverse populations including older adults and remote
          communities.
        </p>

        <h3>Daylighting and Health Research</h3>
        <p>
          The lab&apos;s current focus is the relationship between light,
          circadian rhythm, and cognitive health. This work requires
          experimental studies, data analysis, and collaboration with clinicians
          and neuroscientists. Unrestricted research gifts support this work
          directly.
        </p>

        <h2>How to Give</h2>
        <p>
          Donations are processed through the Oregon State University Foundation,
          ensuring your gift is tax-deductible and directed to the RadiantLab.
        </p>
        <ol>
          <li>
            Visit the{" "}
            <a
              href="https://give.fororegonstate.org/PL1Uv3Fkug"
              target="_blank"
              rel="noreferrer noopener"
            >
              OSU Foundation giving page
            </a>
            .
          </li>
          <li>
            In the <strong>Designation</strong> field, search for and select{" "}
            <strong>Civil &amp; Construction Engineering research Fund</strong>.
          </li>
          <li>
            In the <strong>Comments or special instructions</strong> field,
            enter <strong>Clotilde Pierson</strong> to direct your gift to the
            RadiantLab.
          </li>
          <li>Complete your gift amount and payment information.</li>
        </ol>

        <h2>Partnerships and Major Gifts</h2>
        <p>
          Industry partners and major donors are welcome to reach out directly
          to discuss research collaboration, naming opportunities, or multi-year
          commitments. Contact Dr. Pierson at{" "}
          <a href="mailto:clotilde.pierson@oregonstate.edu">
            clotilde.pierson@oregonstate.edu
          </a>
          .
        </p>
      </div>
    </>
  );
}
```

- [ ] **Step 2: Investigate OSU Foundation URL pre-fill**

Open `https://give.fororegonstate.org/PL1Uv3Fkug` in a browser. Check whether the URL accepts query parameters that pre-fill the designation or special instructions fields (look for `?designation=` or similar in the page source or network requests when you manually fill the form). If query parameters work, update the OSU Foundation link in the Give page to use them. If not, the step-by-step instructions in the How to Give section are sufficient -- leave the URL as-is.

- [ ] **Step 3: Build check**

```bash
bun run build
```

Expected: Build completes. No errors.

- [ ] **Step 4: Run axe test for /give**

With dev server running:

```bash
bunx playwright test tests/accessibility/axe.spec.js --grep "give"
```

Expected: PASS. If it fails, fix the reported violations before committing.

- [ ] **Step 5: Commit**

```bash
git add app/give/page.js
git commit -m "feat: build Give page with donor funnel content"
```

---

## Task 4: Secondary CTAs

**Files:**
- Modify: `app/page.js`
- Modify: `app/research/page.js`

- [ ] **Step 1: Add CTA to homepage**

In `app/page.js`, directly before the closing `</div>` of the `my-8 prose` div, add:

```jsx
<p className="text-sm border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-8">
  The RadiantLab relies on private support to advance this work.{" "}
  <a href="/give" className="font-medium">
    Support daylighting research
  </a>{" "}
  through the OSU Foundation.
</p>
```

- [ ] **Step 2: Add CTA to research page**

In `app/research/page.js`, replace the opening paragraph (the "Our research is generously supported..." paragraph) with:

```jsx
<p>
  Our research is generously supported by a number of sources, such as
  the Nuckolls Fund for Lighting Education and the Oregon Partnership
  for Alzheimer&apos;s Research.{" "}
  <a href="/give">Support this research</a> through the OSU Foundation.
  The main topics that our research focuses on include:
</p>
```

- [ ] **Step 3: Build check**

```bash
bun run build
```

Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add app/page.js app/research/page.js
git commit -m "feat: add secondary Give CTAs to homepage and research page"
```

---

## Task 5: Publications Data File

**Files:**
- Create: `lib/publications.js`

Each entry shape:
```js
{
  authors: string[],      // "Pierson C." is the canonical bolded form
  year: number,
  title: string,
  venue: string,          // includes location for conferences
  volume: string | null,  // "16(2)" or "55(7-8)" format
  pages: string | null,   // "179-197" format
  doi: string | null,     // DOI only, not full URL
  url: string | null,     // for non-DOI primary URLs (theses, datasets)
  type: "journal" | "conference" | "dataset" | "thesis",
  links: { label: string, url: string }[],  // secondary open-access or resource links
}
```

- [ ] **Step 1: Create lib/publications.js**

```js
export const publications = [
  // 2025
  {
    authors: ["Sogodok Y.", "Pierson C."],
    year: 2025,
    title:
      "A review of current recommendations for lighting in buildings for optimal non-visual responses of occupants",
    venue: "IES Annual Conference, Anaheim (CA), USA, Aug. 21-23, 2025",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Vali K.", "Au-Yeung W.-T.", "Kaye J.", "Pierson C."],
    year: 2025,
    title: "Light exposure of older adults living alone: a pilot study",
    venue: "CIE Midterm Meeting, Vienna, Austria, July 4-11, 2025",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Orman A.", "Safranek S.", "Pierson C."],
    year: 2025,
    title:
      "Evaluation of spectral light simulation tools for prediction of ipRGC-influenced light responses in real-world offices with electrochromic glazing",
    venue: "Journal of Building Performance Simulation",
    volume: null,
    pages: "1-20",
    doi: "10.1080/19401493.2025.2515123",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: [
      "Knoop M.",
      "Balakrishnan P.",
      "Blaszczak U.",
      "Diakite-Kortlever A.",
      "Dumortier D.",
      "Hernandez-Andres J.",
      "Inanici M.",
      "Kenny P.",
      "Maskarenj M.",
      "O'Mahoney P.",
      "Pierson C.",
      "Rudawski F.",
      "Thorseth A.",
    ],
    year: 2025,
    title:
      "Methodology to modify and adapt the standardised spectral power distributions for daylight to account for geographical, seasonal and diurnal variations for practical applications",
    venue: "Lighting Research & Technology",
    volume: null,
    pages: null,
    doi: "10.1177/14771535251322386",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: ["Ko W. H.", "Suk J. Y.", "Pierson C.", "Pokhrel B."],
    year: 2025,
    title:
      "Estimating the visual and non-visual effects of window views through field data collection",
    venue:
      "ARCC 2025 International Conference, College Park (MD), USA, April 2-5, 2025",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: [
      "Knoop M.",
      "Balakrishnan P.",
      "Bellia L.",
      "Blaszczak U.",
      "Diakite-Kortlever A.",
      "Dumortier D.",
      "Hernandez-Andres J.",
      "Inanici M.",
      "Kenny P.",
      "Kobav M. B.",
      "Liang S.",
      "Luo T.",
      "Maskarenj M.",
      "O'Mahoney P.",
      "Pierson C.",
      "Thorseth A.",
      "Xue P.",
    ],
    year: 2025,
    title: "Our skies are too grey: Where is the colour?",
    venue: "Lighting Research & Technology",
    volume: null,
    pages: null,
    doi: "10.1177/14771535251322618",
    url: null,
    type: "journal",
    links: [],
  },
  // 2024
  {
    authors: ["Orman A.", "Pierson C."],
    year: 2024,
    title: "Accuracy of spectral simulation tools in field conditions",
    venue:
      "IES Annual Conference, New York City (NY), USA, Aug. 15-17, 2024",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Pierson C."],
    year: 2024,
    title: "Teaching daylighting design through experiential learning",
    venue:
      "IES Annual Conference, New York City (NY), USA, Aug. 15-17, 2024",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Pierson C."],
    year: 2024,
    title: "Experiencing Window Views",
    venue: "2024 SBSE Retreat, Oracle (AZ), USA, July 9-12, 2024",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  // 2023
  {
    authors: [
      "Quek G.",
      "Jain S.",
      "Karmann C.",
      "Pierson C.",
      "Wienold J.",
      "Andersen M.",
    ],
    year: 2023,
    title:
      "Comparison of questionnaire items for discomfort glare studies in daylit spaces",
    venue: "Lighting Research & Technology",
    volume: "55(7-8)",
    pages: "730-758",
    doi: "10.1177/14771535231203564",
    url: null,
    type: "journal",
    links: [
      {
        label: "Paper available on Infoscience",
        url: "https://infoscience.epfl.ch/record/306185",
      },
    ],
  },
  {
    authors: ["Orman A.", "Safranek S.", "Pierson C."],
    year: 2023,
    title:
      "Implementation of a reconstructed spectral sky definition in a light simulation tool and comparison to measurements",
    venue:
      "CIE Quadrennial Session, Ljubljana, Slovenia, Sep. 18-20, 2023",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: [
      "Karmann C.",
      "Pierson C.",
      "Danell M.",
      "Wienold J.",
      "Barthelemes V.",
      "Khovaly D.",
      "Andersen M.",
    ],
    year: 2023,
    title:
      "Variation in photopic and melanopic lighting in Swiss offices: a field study",
    venue:
      "CIE Quadrennial Session, Ljubljana, Slovenia, Sep. 18-20, 2023",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: [
      "Balakrishnan P.",
      "Diakite-Kortlever A.",
      "Dumortier D.",
      "Hernandez-Andres J.",
      "Kenny P.",
      "Maskarenj M.",
      "Pierson C.",
      "Thorseth A.",
      "Xue P.",
      "Knoop M.",
    ],
    year: 2023,
    title:
      "SkySpectra: an opensource data package of worldwide spectral daylight",
    venue:
      "CIE Quadrennial Session, Ljubljana, Slovenia, Sep. 18-20, 2023",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  // 2022
  {
    authors: ["Pierson C.", "Aarts M.", "Andersen M."],
    year: 2022,
    title:
      "Validation of spectral simulation tools in the context of ipRGC-influenced light responses of building occupants",
    venue: "Journal of Building Performance Simulation",
    volume: "16(2)",
    pages: "179-197",
    doi: "10.1080/19401493.2022.2125582",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: ["Ko W. H.", "Schiavon S.", "et al."],
    year: 2022,
    title: "Window View Quality: Why It Matters and What We Should Do",
    venue: "LEUKOS",
    volume: "18:3",
    pages: "259-267",
    doi: "10.1080/15502724.2022.2055428",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: [
      "Gkaintatzi-Masouti M.",
      "Pierson C.",
      "Van Duijnhoven J.",
      "Andersen M.",
      "Aarts M.",
    ],
    year: 2022,
    title:
      "A simulation tool for building and lighting design considering ipRGC-influenced light responses",
    venue: "BuildSim Nordic, Copenhagen, Denmark, Aug. 22-23, 2022",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Pierson C.", "Gkaintatzi-Masouti M."],
    year: 2022,
    title:
      "Lark 2.0 -- a simulation tool to support the design of healthy indoor environments",
    venue: "IES Annual Conference, New Orleans, US, Aug. 18-20, 2022",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Pierson C."],
    year: 2022,
    title:
      "Validation of Spectral Light Simulation Tools: Dataset of Simulated and Measured Indoor Light Exposure",
    venue: "Zenodo",
    volume: null,
    pages: null,
    doi: "10.5281/zenodo.5919054",
    url: null,
    type: "dataset",
    links: [],
  },
  // 2021
  {
    authors: [
      "Pierson C.",
      "Gkaintatzi-Masouti M.",
      "Aarts M.",
      "Andersen M.",
    ],
    year: 2021,
    title:
      "Validation of Spectral Simulation Tools for the Prediction of Indoor Electric Light Exposure",
    venue: "CIE Midterm Session, Online, Sep. 27-29, 2021",
    volume: null,
    pages: null,
    doi: "10.25039/x48.2021.OP05",
    url: null,
    type: "conference",
    links: [
      {
        label: "Paper available on Infoscience",
        url: "https://infoscience.epfl.ch/record/291397",
      },
    ],
  },
  {
    authors: ["Pierson C.", "Soto Magan V.", "Aarts M.", "Andersen M."],
    year: 2021,
    title:
      "A Conceptual Simulation Workflow to Guide Design Decisions Regarding the Effects of Daylight on Occupants' Alertness",
    venue: "Journal of Physics: Conference Series 2042, CISBAT 2021",
    volume: null,
    pages: null,
    doi: "10.1088/1742-6596/2042/1/012116",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: ["Pierson C.", "Aarts M.", "Andersen M."],
    year: 2021,
    title:
      "Validation of Spectral Simulation Tools for the Prediction of Indoor Daylight Exposure",
    venue: "Building Simulation 2021, Bruges, Belgium, September 1-3, 2021",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Paper available on Infoscience",
        url: "https://infoscience.epfl.ch/record/291396",
      },
    ],
  },
  // 2020
  {
    authors: ["Andersen M.", "Soto Magan V.", "Webler F.", "Pierson C."],
    year: 2020,
    title: "Light Hygiene in the Built Environment",
    venue: "ANFA International Conference, Online, September 14-25, 2020",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Extended Abstract available on Infoscience",
        url: "https://infoscience.epfl.ch/record/282954",
      },
    ],
  },
  {
    authors: ["Pierson C.", "Aarts M.", "Andersen M."],
    year: 2020,
    title:
      "Applicability of Spectral Simulation to Predict Non-Visual Response to Daylight",
    venue:
      "EuroTech Postdoc Workshop, Copenhagen, Denmark, March 9-11, 2020",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Pierson C.", "Cauwerts C.", "Bodart M.", "Wienold J."],
    year: 2020,
    title:
      "Tutorial: Luminance Maps for Daylighting Studies from High Dynamic Range Photography",
    venue: "LEUKOS",
    volume: "14(3)",
    pages: "111-148",
    doi: "10.1080/15502724.2019.1684319",
    url: null,
    type: "journal",
    links: [],
  },
  // 2019
  {
    authors: ["Pierson C."],
    year: 2019,
    title:
      "Discomfort glare perception from daylight: influence of the socio-environmental context",
    venue: "Universite catholique de Louvain (doctoral dissertation)",
    volume: null,
    pages: null,
    doi: null,
    url: "http://hdl.handle.net/2078.1/222924",
    type: "thesis",
    links: [],
  },
  {
    authors: ["Pierson C.", "Wienold J.", "Bodart M."],
    year: 2019,
    title:
      "Is Daylight Glare Perceived Differently by People from Different Cultures?",
    venue:
      "VELUX Daylight Symposium, Paris, France, October 09-10, 2019",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Presentation video on YouTube",
        url: "https://www.youtube.com/watch?v=T6bmLisPsTo",
      },
    ],
  },
  {
    authors: [
      "Wienold J.",
      "Iwata T.",
      "Sarey Khanie M.",
      "Erell E.",
      "Kraftan E.",
      "Rodriguez R.",
      "Yamin Garreton J.A.",
      "Tzempelikos T.",
      "Konstantzos I.",
      "Christoffersen J.",
      "Kuhn T.E.",
      "Pierson C.",
      "Andersen M.",
    ],
    year: 2019,
    title: "Cross-Validation and Robustness of Daylight Glare Metrics",
    venue: "Lighting Research & Technology",
    volume: "51(7)",
    pages: "983-1013",
    doi: "10.1177/1477153519826003",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: [
      "Pierson C.",
      "Sarey Khanie M.",
      "Bodart M.",
      "Wienold J.",
    ],
    year: 2019,
    title:
      "Discomfort Glare Cut-Off Values from Field and Laboratory Studies",
    venue:
      "CIE Quadrennial Session, Washington D.C., USA, June 17-20, 2019",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Paper available on Infoscience",
        url: "https://infoscience.epfl.ch/record/274582",
      },
    ],
  },
  // 2018
  {
    authors: ["Pierson C.", "Wienold J.", "Bodart M."],
    year: 2018,
    title:
      "Daylight Discomfort Glare Evaluation with Evalglare: Influence of Parameters and Methods on the Accuracy of Discomfort Glare Prediction",
    venue:
      "International Radiance Workshop, Loughborough, UK, Sept. 03-04, 2018",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Workshops available on Radiance-Online",
        url: "https://www.radiance-online.org/community/workshops/2018-loughborough/",
      },
      {
        label: "Download presentation (PDF)",
        url: "https://www.radiance-online.org/community/workshops/2018-loughborough/presentations/25-EvalglareParameters.pdf",
      },
      {
        label: "Download recorded audio (MP3)",
        url: "https://www.radiance-online.org/community/workshops/2018-loughborough/audio/25-Clotilde_Pierson.mp3",
      },
    ],
  },
  {
    authors: ["Pierson C.", "Wienold J.", "Bodart M."],
    year: 2018,
    title:
      "Daylight Discomfort Glare Evaluation with Evalglare: Influence of Parameters and Methods on the Accuracy of Discomfort Glare Prediction",
    venue: "Buildings",
    volume: "8(8)",
    pages: "94",
    doi: "10.3390/buildings8080094",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: ["Pierson C.", "Wienold J.", "Bodart M."],
    year: 2018,
    title:
      "Review of Factors Influencing Discomfort Glare Perception from Daylight",
    venue: "LEUKOS",
    volume: "14(3)",
    pages: "111-148",
    doi: "10.1080/15502724.2018.1428617",
    url: null,
    type: "journal",
    links: [
      {
        label: "Accepted manuscript available on DIAL",
        url: "http://hdl.handle.net/2078.1/196098",
      },
    ],
  },
  {
    authors: ["Pierson C."],
    year: 2018,
    title:
      "Discomfort Glare from Daylighting: Study of Factors Influencing Discomfort Glare Perception and Validation of a Universal Discomfort Glare Index",
    venue: "LumeNet, Copenhagen, Denmark, Aug. 16-17, 2018",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: ["Pierson C.", "Wienold J."],
    year: 2018,
    title:
      "High Dynamic Range Images Calibration for Luminance Maps Creation",
    venue:
      "CIE Expert Tutorial and Workshop on Research Methods for Human Factors in Lighting, Copenhagen, Denmark, Aug. 13-14, 2018",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  {
    authors: [
      "Pierson C.",
      "Wienold J.",
      "Altomonte S.",
      "Bodart M.",
    ],
    year: 2018,
    title:
      "Evaluation of Discomfort Glare through Glare Scales: What are we Really Measuring?",
    venue:
      "CIE Expert Tutorial and Workshop on Research Methods for Human Factors in Lighting, Copenhagen, Denmark, Aug. 13-14, 2018",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  // 2017
  {
    authors: ["Pierson C.", "Piderit M.B.", "Wienold J.", "Bodart M."],
    year: 2017,
    title:
      "Discomfort Glare from Daylighting: Influence of Culture on Discomfort Glare Perception",
    venue:
      "CIE Midterm Session, Jeju, South Korea, Oct. 20-28, 2017",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Paper available on Infoscience",
        url: "https://infoscience.epfl.ch/record/274581",
      },
    ],
  },
  {
    authors: ["Pierson C.", "Wienold J.", "Bodart M."],
    year: 2017,
    title:
      "Discomfort Glare Perception in Daylighting: Influencing Factors",
    venue: "Energy Procedia",
    volume: "122",
    pages: "331-336",
    doi: "10.1016/j.egypro.2017.07.332",
    url: null,
    type: "journal",
    links: [],
  },
  {
    authors: ["Pierson C.", "Wienold J.", "Jacobs A.", "Bodart M."],
    year: 2017,
    title:
      "Luminance Maps from High Dynamic Range Imaging: Calibrations and Adjustments for Visual Comfort Assessment",
    venue: "LuxEuropa, Ljubljana, Slovenia, Sept. 18-20, 2017",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Paper available on Infoscience",
        url: "https://infoscience.epfl.ch/record/274400",
      },
    ],
  },
  {
    authors: [
      "Pierson C.",
      "Cauwerts C.",
      "Wienold J.",
      "Bodart M.",
    ],
    year: 2017,
    title:
      "Discomfort Glare from Daylighting: Study of Factors Influencing Discomfort Glare Perception and Validation of a Universal Discomfort Glare Index",
    venue: "VELUX Daylight Symposium, Berlin, Germany, May 02-04, 2017",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Poster available on DIAL",
        url: "http://hdl.handle.net/2078.1/184657",
      },
    ],
  },
  // 2016
  {
    authors: ["Pierson C.", "Bodart M."],
    year: 2016,
    title:
      "Validation and Universalization of Daylight Glare Probability Index",
    venue: "LumeNet, Ghent, Belgium, Apr. 07-08, 2016",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [],
  },
  // 2015
  {
    authors: ["Pierson C.", "Evrard A."],
    year: 2015,
    title:
      "Optimization of Facade Wall Building Systems in Walloon Region",
    venue:
      "International PLEA Conference, Bologna, Italy, Sept. 9-11, 2015",
    volume: null,
    pages: null,
    doi: null,
    url: null,
    type: "conference",
    links: [
      {
        label: "Paper available on DIAL",
        url: "http://hdl.handle.net/2078.1/168040",
      },
    ],
  },
];

export const publicationYears = [
  ...new Set(publications.map((p) => p.year)),
].sort((a, b) => b - a);
```

- [ ] **Step 2: Verify entry count**

```bash
node -e "const { publications } = await import('./lib/publications.js'); console.log(publications.length + ' entries');"
```

Expected output: `40 entries` (or close -- the original page has 40 unique entries after merging the duplicate 2018 Radiance Workshop entry).

- [ ] **Step 3: Commit**

```bash
git add lib/publications.js
git commit -m "feat: extract publications into structured data file"
```

---

## Task 6: Publications Page Render from Data

**Files:**
- Modify: `app/publications/page.js`

- [ ] **Step 1: Rewrite app/publications/page.js**

```jsx
import Image from "next/image";
import backgroundImage from "../../public/background-image-publications.jpg";
import { publications, publicationYears } from "../../lib/publications";

export const metadata = {
  title: "Publications | RadiantLab",
  description:
    "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  openGraph: {
    url: "https://www.clotildepierson.com/publications",
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  },
  twitter: {
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  },
};

function Authors({ authors }) {
  return authors.map((author, i) => (
    <span key={`${author}-${i}`}>
      {i > 0 && ", "}
      {author === "Pierson C." ? <strong>{author}</strong> : author}
    </span>
  ));
}

function PublicationEntry({ pub }) {
  const primaryUrl = pub.doi
    ? `https://doi.org/${pub.doi}`
    : pub.url;

  return (
    <article className="mb-6">
      <p>
        <Authors authors={pub.authors} /> ({pub.year}). {pub.title}.{" "}
        <em>{pub.venue}</em>
        {pub.volume ? `, ${pub.volume}` : ""}
        {pub.pages ? `, ${pub.pages}` : ""}.
        {primaryUrl && (
          <>
            {" "}
            <a href={primaryUrl} target="_blank" rel="noreferrer noopener">
              {pub.doi ? `DOI: ${pub.doi}` : "View"}
            </a>
          </>
        )}
      </p>
      {pub.links.map((link) => (
        <p key={link.url} className="text-sm">
          <a href={link.url} target="_blank" rel="noreferrer noopener">
            {link.label}
          </a>
        </p>
      ))}
    </article>
  );
}

export default function Publications() {
  return (
    <>
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="daylight in a bright library"
          fill={true}
          priority={true}
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[20%_50%]"
        />
      </picture>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Publications</h1>
        {publicationYears.map((year) => (
          <section key={year}>
            <h2>{year}</h2>
            {publications
              .filter((p) => p.year === year)
              .map((pub, i) => (
                <PublicationEntry key={`${year}-${i}`} pub={pub} />
              ))}
          </section>
        ))}
      </div>
    </>
  );
}
```

- [ ] **Step 2: Build check**

```bash
bun run build
```

Expected: No errors. The publications page should render identically to the original.

- [ ] **Step 3: Run axe test for /publications**

```bash
bunx playwright test tests/accessibility/axe.spec.js --grep "publications"
```

Expected: PASS. If it fails, fix before committing.

- [ ] **Step 4: Commit**

```bash
git add app/publications/page.js
git commit -m "feat: render publications from data file with semantic article elements"
```

---

## Task 7: Organization JSON-LD on Homepage

**Files:**
- Modify: `app/page.js`

- [ ] **Step 1: Add Organization schema**

In `app/page.js`, directly after the `export const metadata` block and before `export default function Home()`, add:

```jsx
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Daylighting Research Laboratory (RadiantLab)",
  alternateName: "RadiantLab",
  url: "https://www.clotildepierson.com",
  description:
    "The RadiantLab advances knowledge of daylight in buildings to enhance human health, well-being, and performance while minimizing energy consumption. Based at Oregon State University.",
  logo: "https://www.clotildepierson.com/institution/OSU_horizontal_2C_O_over_W.png",
  founder: {
    "@type": "Person",
    name: "Clotilde Pierson",
    url: "https://www.clotildepierson.com/about",
  },
  parentOrganization: {
    "@type": "EducationalOrganization",
    name: "Oregon State University",
    url: "https://oregonstate.edu",
  },
  sameAs: ["https://cce.oregonstate.edu/people/clotilde-pierson"],
};
```

Then inside the `Home` component's return, as the very first child of the Fragment:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>
```

- [ ] **Step 2: Build check**

```bash
bun run build
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: add Organization JSON-LD to homepage"
```

---

## Task 8: Person JSON-LD on About Page

**Files:**
- Modify: `app/about/page.js`

- [ ] **Step 1: Add Person schema**

In `app/about/page.js`, after the `metadata` export and before the `About` component:

```jsx
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Clotilde Pierson",
  givenName: "Clotilde",
  familyName: "Pierson",
  jobTitle: "Assistant Professor of Architectural Engineering",
  email: "clotilde.pierson@oregonstate.edu",
  url: "https://www.clotildepierson.com/about",
  affiliation: [
    {
      "@type": "EducationalOrganization",
      name: "Oregon State University",
      department: "School of Civil and Construction Engineering",
      url: "https://oregonstate.edu",
    },
    {
      "@type": "ResearchOrganization",
      name: "Daylighting Research Laboratory (RadiantLab)",
      url: "https://www.clotildepierson.com",
    },
  ],
  sameAs: [
    "https://orcid.org/0000-0001-7847-6568",
    "https://scholar.google.com/citations?user=X8aroEgAAAAJ&hl=fr&oi=ao",
    "https://www.researchgate.net/profile/Clotilde-Pierson",
    "https://www.linkedin.com/in/clotilde-pierson/",
    "https://x.com/PiersonClotilde",
    "https://cce.oregonstate.edu/people/clotilde-pierson",
  ],
  knowsAbout: [
    "Daylighting",
    "Architectural Engineering",
    "Circadian Lighting",
    "Building Performance Simulation",
    "Visual Comfort",
    "Glare Research",
    "Non-visual Effects of Light",
  ],
};
```

Add as first child of the Fragment in `About`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
/>
```

- [ ] **Step 2: Build check + commit**

```bash
bun run build
git add app/about/page.js
git commit -m "feat: add Person JSON-LD with ORCID to About page"
```

---

## Task 9: Research Project JSON-LD

**Files:**
- Modify: `app/research/page.js`

- [ ] **Step 1: Add three Project schemas**

In `app/research/page.js`, after the `metadata` export:

```jsx
const researchJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ResearchProject",
      name: "Built Environment to Indoor Light and Visual Conditions",
      description:
        "Investigating how glazing technologies, facade layouts, building geometries, urbanization, and climate change affect indoor light and visual conditions. Develops and validates tools for predicting and optimizing these relationships.",
      funder: [
        {
          "@type": "Organization",
          name: "Nuckolls Fund for Lighting Education",
        },
        {
          "@type": "Organization",
          name: "Oregon Partnership for Alzheimer's Research",
        },
      ],
      member: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
    {
      "@type": "ResearchProject",
      name: "Indoor Light and Visual Conditions to Building Occupant Health",
      description:
        "Studying how light exposure affects physical and mental health, circadian rhythms, comfort, cognitive performance, and dementia risk. Develops models and metrics for optimal daylighting strategies.",
      funder: [
        {
          "@type": "Organization",
          name: "Nuckolls Fund for Lighting Education",
        },
        {
          "@type": "Organization",
          name: "Oregon Partnership for Alzheimer's Research",
        },
      ],
      member: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
    {
      "@type": "ResearchProject",
      name: "Energy Consumption and Daylighting Strategies",
      description:
        "Examining how urbanization and climate change affect lighting energy consumption, the energy efficiency of daylighting technologies, and strategies to reduce energy use while maintaining visual comfort.",
      member: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
  ],
};
```

Add as first child of Fragment in `Research`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }}
/>
```

- [ ] **Step 2: Build check + commit**

```bash
bun run build
git add app/research/page.js
git commit -m "feat: add Project JSON-LD schemas to Research page"
```

---

## Task 10: Software JSON-LD and Alt Text Fix

**Files:**
- Modify: `app/software/page.js`

- [ ] **Step 1: Fix empty alt text on software images**

In `app/software/page.js`, find the two `Image` components with `alt=""` and update:

```jsx
// Lark image: change alt="" to:
alt="Lark Spectral Lighting logo"

// HDRI image: change alt="" to:
alt="HDRI Calibration Interface logo"
```

- [ ] **Step 2: Add SoftwareApplication schemas**

In `app/software/page.js`, after the `metadata` export:

```jsx
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Lark Spectral Lighting v2.0",
      description:
        "Open-source spectral lighting simulation tool for circadian lighting analysis. Computes photopic and non-visual metrics including alpha-opic values across 9 spectral channels. Runs on Rhino/Grasshopper.",
      url: "https://www.food4rhino.com/en/app/lark-spectral-lighting",
      codeRepository:
        "https://github.com/larkspectral/Lark_Spectral_Lighting",
      applicationCategory: "ScientificApplication",
      operatingSystem: "Windows, macOS",
      author: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "HDRI Calibration Interface v3.0.0",
      description:
        "Free, open-source desktop application for merging Low Dynamic Range images and generating calibrated High Dynamic Range (HDR) luminance maps for daylighting research.",
      url: "https://github.com/clopierson/HDRICalibrationTool",
      codeRepository: "https://github.com/clopierson/HDRICalibrationTool",
      applicationCategory: "ScientificApplication",
      operatingSystem: "Windows, macOS, Linux",
      author: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
  ],
};
```

Add as first child of Fragment in `Software`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
/>
```

- [ ] **Step 3: Build check + commit**

```bash
bun run build
git add app/software/page.js
git commit -m "feat: add SoftwareApplication JSON-LD and fix empty alt text on software page"
```

---

## Task 11: ScholarlyArticle JSON-LD on Publications Page

**Files:**
- Modify: `app/publications/page.js`

- [ ] **Step 1: Add ScholarlyArticle JSON-LD**

In `app/publications/page.js`, add this import at the top:

The `publications` array is already imported. After the `metadata` export, add:

```jsx
const publicationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: publications.map((pub, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "ScholarlyArticle",
      name: pub.title,
      author: pub.authors.map((a) => ({ "@type": "Person", name: a })),
      datePublished: String(pub.year),
      ...(pub.doi && {
        identifier: `https://doi.org/${pub.doi}`,
        url: `https://doi.org/${pub.doi}`,
      }),
      ...(pub.url && !pub.doi && { url: pub.url }),
      isPartOf: {
        "@type": pub.type === "journal" ? "Periodical" : "Event",
        name: pub.venue,
      },
    },
  })),
};
```

Add as first child of Fragment in `Publications`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }}
/>
```

- [ ] **Step 2: Build check + commit**

```bash
bun run build
git add app/publications/page.js
git commit -m "feat: add ScholarlyArticle JSON-LD to publications page"
```

---

## Task 12: FAQPage JSON-LD on DIAL Page

**Files:**
- Modify: `app/facilities/dial/page.js`

- [ ] **Step 1: Add FAQPage schema**

In `app/facilities/dial/page.js`, after the `metadata` export:

```jsx
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is electrochromic glazing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Electrochromic glazing is a type of smart glass that can change its tint or opacity in response to an applied voltage. This technology allows for dynamic control of solar heat gain and daylight transmission, enhancing occupant comfort and reducing energy consumption in buildings. In DIAL, the electrochromic windows and skylight can be adjusted from clear to fully tinted, allowing researchers to study the effects of different daylighting conditions on indoor environments and occupant well-being.",
      },
    },
  ],
};
```

Add as first child of Fragment in `DIAL`:

```jsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
/>
```

- [ ] **Step 2: Build check + commit**

```bash
bun run build
git add app/facilities/dial/page.js
git commit -m "feat: add FAQPage JSON-LD to DIAL page"
```

---

## Task 13: llms.txt and llms-full.txt

**Files:**
- Create: `public/llms.txt`
- Create: `public/llms-full.txt`

- [ ] **Step 1: Create public/llms.txt**

```
# Daylighting Research Laboratory (RadiantLab)

> The RadiantLab is a daylighting and architectural lighting research laboratory at Oregon State University, led by Dr. Clotilde Pierson, advancing knowledge on how light in buildings affects human health, well-being, and energy use.

## Principal Investigator

Dr. Clotilde Pierson is an Assistant Professor of Architectural Engineering in the School of Civil and Construction Engineering at Oregon State University.

- ORCID: https://orcid.org/0000-0001-7847-6568
- Google Scholar: https://scholar.google.com/citations?user=X8aroEgAAAAJ
- ResearchGate: https://www.researchgate.net/profile/Clotilde-Pierson
- LinkedIn: https://www.linkedin.com/in/clotilde-pierson/
- Email: clotilde.pierson@oregonstate.edu

## Research Themes

1. Built environment to indoor light: How do building design, glazing technologies, urbanization, and climate change affect indoor light and visual conditions?
2. Indoor light to occupant health: How does light exposure affect circadian rhythms, sleep, cognitive health (including dementia), comfort, and well-being?
3. Energy and daylighting: How can daylighting strategies reduce energy consumption while maintaining occupant comfort?

Current priority: the relationship between light exposure, circadian disruption, and dementia/cognitive decline.

## Facility

The Daylighting Innovation and Analysis Lab (DIAL) is a first-of-its-kind mobile daylighting research facility at Oregon State University. It is a trailer-based, ADA-compliant laboratory with electrochromic windows, spectral sensors, and off-grid solar/battery power.

## Software

- Lark Spectral Lighting v2.0: https://github.com/larkspectral/Lark_Spectral_Lighting
- HDRI Calibration Interface v3.0.0: https://github.com/clopierson/HDRICalibrationTool

## Key Journal Publications

- Orman A., Safranek S., Pierson C. (2025). Evaluation of spectral light simulation tools for prediction of ipRGC-influenced light responses. Journal of Building Performance Simulation. DOI: 10.1080/19401493.2025.2515123
- Quek G. et al., Pierson C. (2023). Comparison of questionnaire items for discomfort glare studies. Lighting Research & Technology, 55(7-8). DOI: 10.1177/14771535231203564
- Pierson C., Aarts M., Andersen M. (2022). Validation of spectral simulation tools for ipRGC-influenced light responses. Journal of Building Performance Simulation, 16(2). DOI: 10.1080/19401493.2022.2125582
- Wienold J. et al., Pierson C. (2019). Cross-Validation and Robustness of Daylight Glare Metrics. Lighting Research & Technology, 51(7). DOI: 10.1177/1477153519826003
- Pierson C., Cauwerts C., Bodart M., Wienold J. (2020). Tutorial: Luminance Maps for Daylighting Studies from HDR Photography. LEUKOS, 14(3). DOI: 10.1080/15502724.2019.1684319

## Team

Current members: Kianoush Vali (PhD, light and sleep/health), Yahya Sogodok (MS, non-visual responses), Nima Ghorbanian Matloob (MS, non-visual effects), Isaiah Pileggi-Epps (undergrad), Keean Balsiger (undergrad)

## Support

Private donations support student research, DIAL operations, and daylighting/health research.
Donate: https://www.clotildepierson.com/give
OSU Foundation designation: Civil & Construction Engineering research Fund, attention: Clotilde Pierson.

## Website

https://www.clotildepierson.com
```

- [ ] **Step 2: Create public/llms-full.txt**

```
# Daylighting Research Laboratory (RadiantLab) -- Full Reference

> The RadiantLab is a daylighting and architectural lighting research laboratory at Oregon State University, led by Dr. Clotilde Pierson, advancing knowledge on how light in buildings affects human health, well-being, and energy use.

## Principal Investigator

Dr. Clotilde Pierson is an Assistant Professor of Architectural Engineering in the School of Civil and Construction Engineering at Oregon State University (OSU). She is the founder and principal investigator of the RadiantLab.

- ORCID: https://orcid.org/0000-0001-7847-6568
- Google Scholar: https://scholar.google.com/citations?user=X8aroEgAAAAJ
- ResearchGate: https://www.researchgate.net/profile/Clotilde-Pierson
- LinkedIn: https://www.linkedin.com/in/clotilde-pierson/
- X/Twitter: https://x.com/PiersonClotilde
- OSU Faculty Profile: https://cce.oregonstate.edu/people/clotilde-pierson
- Email: clotilde.pierson@oregonstate.edu

## Mission

Advance knowledge related to daylight in buildings and the practice of daylighting to enhance people's health, well-being, and performance, while minimizing energy consumption. The lab bridges engineering, architecture, chronobiology, computer science, urban planning, neuroscience, psychophysics, and public health.

## Research Themes

### 1. Built Environment to Indoor Light and Visual Conditions

How do glazing technologies, facade layouts, building geometries, urbanization, and climate change affect indoor light and visual conditions? The lab uses numerical modeling and physical measurements to understand these relationships, developing and validating simulation tools.

### 2. Indoor Light and Visual Conditions to Building Occupant Health

How does light exposure affect physical and mental health, circadian rhythms, alertness, comfort, and cognitive performance? How do window views affect well-being? Current focus: the link between light exposure, circadian disruption, and dementia/cognitive decline. Methods include field studies, laboratory experiments, and observational studies.

### 3. Energy Consumption and Daylighting

How will lighting energy consumption evolve with urbanization and climate change? What is the energy efficiency of alternative daylighting technologies? The lab develops and validates models for estimating energy impacts of daylighting strategies.

## Facility: DIAL (Daylighting Innovation and Analysis Lab)

DIAL is a first-of-its-kind mobile daylighting research facility at Oregon State University. It is housed in a standard shipping container/trailer and can be transported to diverse locations.

### Key Specifications

- Dimensions: 31'-9.5" long x 10'-0" wide (~10 m x 3 m)
- Two symmetrical office test rooms + one observation room
- ADA-compliant
- Off-grid capable: 4.4 kW solar panels, 43.2 kWh battery bank, backup generator

### Glazing

- 9 electrochromic windows + 1 electrochromic skylight per test room (Halio smart-glazing)
- VLT: 68% (clear) to 3% (tinted)
- SHGC: 0.46 (clear) to 0.08 (tinted)

### Sensors

- Rooftop: EKO MS-90 solar monitoring station, JETI Specbos 1211-2 spectroradiometer
- Indoor: JETI Spectraval 15x1 spectroradiometers, Konica Minolta T-10A illuminance meters, Kodak PixPro 360 cameras

More: https://www.clotildepierson.com/facilities/dial

## Software

### Lark Spectral Lighting v2.0

Open-source spectral lighting simulation tool for circadian lighting analysis. Runs on Rhino/Grasshopper. Allows 9-channel spectral simulations computing photopic and non-visual metrics.

- Source: https://github.com/larkspectral/Lark_Spectral_Lighting
- Download: https://www.food4rhino.com/en/app/lark-spectral-lighting

### HDRI Calibration Interface v3.1.0

Free, open-source application for merging Low Dynamic Range images into calibrated High Dynamic Range (HDR) luminance maps. Built with Tauri, Next.js, and Rust.

- Source and executables: https://github.com/clopierson/HDRICalibrationTool

## Full Publication List

### 2025

Sogodok Y., Pierson C. (2025). A review of current recommendations for lighting in buildings for optimal non-visual responses of occupants. IES Annual Conference, Anaheim (CA), USA.

Vali K., Au-Yeung W.-T., Kaye J., Pierson C. (2025). Light exposure of older adults living alone: a pilot study. CIE Midterm Meeting, Vienna, Austria.

Orman A., Safranek S., Pierson C. (2025). Evaluation of spectral light simulation tools for prediction of ipRGC-influenced light responses in real-world offices with electrochromic glazing. Journal of Building Performance Simulation. DOI: 10.1080/19401493.2025.2515123

Knoop M. et al., Pierson C. (2025). Methodology to modify and adapt the standardised spectral power distributions for daylight. Lighting Research & Technology. DOI: 10.1177/14771535251322386

Ko W. H., Suk J. Y., Pierson C., Pokhrel B. (2025). Estimating the visual and non-visual effects of window views. ARCC 2025 Conference.

Knoop M. et al., Pierson C. (2025). Our skies are too grey: Where is the colour? Lighting Research & Technology. DOI: 10.1177/14771535251322618

### 2024

Orman A., Pierson C. (2024). Accuracy of spectral simulation tools in field conditions. IES Annual Conference, New York.

Pierson C. (2024). Teaching daylighting design through experiential learning. IES Annual Conference, New York.

Pierson C. (2024). Experiencing Window Views. 2024 SBSE Retreat, Oracle (AZ).

### 2023

Quek G., Jain S., Karmann C., Pierson C., Wienold J., Andersen M. (2023). Comparison of questionnaire items for discomfort glare studies in daylit spaces. Lighting Research & Technology, 55(7-8), 730-758. DOI: 10.1177/14771535231203564

Orman A., Safranek S., Pierson C. (2023). Implementation of a reconstructed spectral sky definition in a light simulation tool. CIE Quadrennial Session, Ljubljana.

Karmann C., Pierson C. et al. (2023). Variation in photopic and melanopic lighting in Swiss offices. CIE Quadrennial Session, Ljubljana.

Balakrishnan P. et al., Pierson C. (2023). SkySpectra: an opensource data package of worldwide spectral daylight. CIE Quadrennial Session, Ljubljana.

### 2022

Pierson C., Aarts M., Andersen M. (2022). Validation of spectral simulation tools in the context of ipRGC-influenced light responses. Journal of Building Performance Simulation, 16(2), 179-197. DOI: 10.1080/19401493.2022.2125582

Ko W. H., Schiavon S. et al. (2022). Window View Quality: Why It Matters and What We Should Do. LEUKOS, 18:3, 259-267. DOI: 10.1080/15502724.2022.2055428

Gkaintatzi-Masouti M., Pierson C. et al. (2022). A simulation tool for building and lighting design considering ipRGC-influenced light responses. BuildSim Nordic.

Pierson C., Gkaintatzi-Masouti M. (2022). Lark 2.0. IES Annual Conference, New Orleans.

Pierson C. (2022). Validation of Spectral Light Simulation Tools: Dataset. Zenodo. DOI: 10.5281/zenodo.5919054

### 2021

Pierson C. et al. (2021). Validation of Spectral Simulation Tools for Indoor Electric Light Exposure. CIE Midterm Session. DOI: 10.25039/x48.2021.OP05

Pierson C., Soto Magan V., Aarts M., Andersen M. (2021). A Conceptual Simulation Workflow for Daylight Effects on Alertness. Journal of Physics: Conference Series 2042. DOI: 10.1088/1742-6596/2042/1/012116

Pierson C., Aarts M., Andersen M. (2021). Validation of Spectral Simulation Tools for Indoor Daylight Exposure. Building Simulation 2021, Bruges.

### 2020

Andersen M., Soto Magan V., Webler F., Pierson C. (2020). Light Hygiene in the Built Environment. ANFA Conference.

Pierson C., Aarts M., Andersen M. (2020). Applicability of Spectral Simulation to Predict Non-Visual Response to Daylight. EuroTech Postdoc Workshop.

Pierson C., Cauwerts C., Bodart M., Wienold J. (2020). Tutorial: Luminance Maps for Daylighting Studies from HDR Photography. LEUKOS, 14(3), 111-148. DOI: 10.1080/15502724.2019.1684319

### 2019

Pierson C. (2019). Discomfort glare perception from daylight: influence of the socio-environmental context. [Doctoral dissertation, UCLouvain]. http://hdl.handle.net/2078.1/222924

Pierson C., Wienold J., Bodart M. (2019). Is Daylight Glare Perceived Differently by People from Different Cultures? VELUX Daylight Symposium, Paris.

Wienold J. et al., Pierson C. (2019). Cross-Validation and Robustness of Daylight Glare Metrics. Lighting Research & Technology, 51(7), 983-1013. DOI: 10.1177/1477153519826003

Pierson C., Sarey Khanie M., Bodart M., Wienold J. (2019). Discomfort Glare Cut-Off Values from Field and Laboratory Studies. CIE Quadrennial Session, Washington D.C.

### 2018

Pierson C., Wienold J., Bodart M. (2018). Daylight Discomfort Glare Evaluation with Evalglare. International Radiance Workshop, Loughborough.

Pierson C., Wienold J., Bodart M. (2018). Daylight Discomfort Glare Evaluation with Evalglare. Buildings, 8(8), 94. DOI: 10.3390/buildings8080094

Pierson C., Wienold J., Bodart M. (2018). Review of Factors Influencing Discomfort Glare Perception from Daylight. LEUKOS, 14(3), 111-148. DOI: 10.1080/15502724.2018.1428617

Pierson C. (2018). Discomfort Glare from Daylighting. LumeNet, Copenhagen.

Pierson C., Wienold J. (2018). HDR Images Calibration for Luminance Maps Creation. CIE Expert Workshop, Copenhagen.

Pierson C., Wienold J., Altomonte S., Bodart M. (2018). Evaluation of Discomfort Glare through Glare Scales. CIE Expert Workshop, Copenhagen.

### 2017

Pierson C., Piderit M.B., Wienold J., Bodart M. (2017). Discomfort Glare from Daylighting: Influence of Culture. CIE Midterm Session, Jeju.

Pierson C., Wienold J., Bodart M. (2017). Discomfort Glare Perception in Daylighting: Influencing Factors. Energy Procedia, 122, 331-336. DOI: 10.1016/j.egypro.2017.07.332

Pierson C., Wienold J., Jacobs A., Bodart M. (2017). Luminance Maps from HDR Imaging. LuxEuropa, Ljubljana.

Pierson C., Cauwerts C., Wienold J., Bodart M. (2017). Discomfort Glare Study and Universal Glare Index. VELUX Daylight Symposium, Berlin.

### 2016

Pierson C., Bodart M. (2016). Validation and Universalization of Daylight Glare Probability Index. LumeNet, Ghent.

### 2015

Pierson C., Evrard A. (2015). Optimization of Facade Wall Building Systems in Walloon Region. PLEA Conference, Bologna.

## Team

### Current

- Kianoush Vali (PhD, Civil Engineering): lighting effects on sleep and health of building occupants
- Yahya Sogodok (MS, Civil Engineering): non-visual responses to light under daylight conditions
- Nima Ghorbanian Matloob (MS, Civil Engineering): non-visual effects of daylight and energy
- Isaiah Pileggi-Epps (BS, Civil Engineering): lighting conditions and viewing experience
- Keean Balsiger (BS, Architectural Engineering): non-visual effects of light and well-being

### Alumni

Alfiya Orman (MS) -- now at Pacific Northwest National Laboratory (PNNL)

## Support

Private donations support student research stipends, DIAL operations, and daylighting/health research.
Donate: https://www.clotildepierson.com/give
OSU Foundation designation: Civil & Construction Engineering research Fund, attention: Clotilde Pierson.
For partnerships or major gifts: clotilde.pierson@oregonstate.edu
```

- [ ] **Step 3: Verify files are accessible**

```bash
bun run build && bun run start &
curl http://localhost:3000/llms.txt | head -5
curl http://localhost:3000/llms-full.txt | head -5
```

Expected: Both files return their first lines correctly.

- [ ] **Step 4: Commit**

```bash
git add public/llms.txt public/llms-full.txt
git commit -m "feat: add llms.txt and llms-full.txt for AI agent discoverability"
```

---

## Task 14: Fix Accessibility Violations

**Files:**
- Modify: `styles/globals.css`
- Modify: any files with violations from the axe baseline run

- [ ] **Step 1: Run the full axe test suite and read the output**

```bash
bun run build && bun run test:a11y 2>&1 | tee /tmp/axe-violations.txt
cat /tmp/axe-violations.txt
```

Expected: Some tests fail. The output lists each violation with its page, element, and WCAG criterion. This is the authoritative fix list.

- [ ] **Step 2: Fix Focus Not Obscured (WCAG 2.4.11)**

The fixed "back to top" button can overlap focused elements near the bottom of the page. In `styles/globals.css`, add after the existing rules:

```css
html {
  scroll-padding-bottom: 80px;
}
```

- [ ] **Step 3: Fix all remaining violations from axe output**

For each violation in `/tmp/axe-violations.txt`:
- Read the violation description and the failing selector
- Navigate to the file containing that element
- Apply the minimum fix that satisfies the rule
- Re-run the specific page test to confirm the fix:

```bash
bunx playwright test tests/accessibility/axe.spec.js --grep "<route>"
```

Common fixes to expect (in addition to scroll-padding already done):
- Focus ring contrast: add `focus-visible:ring-2 focus-visible:ring-osu-beaver-orange` to interactive elements lacking visible focus indicators
- Target size: add `min-h-[24px] min-w-[24px]` to any interactive elements below 24x24px
- Any color contrast failures: adjust text color or background to meet 4.5:1 (normal text) or 3:1 (large text)

- [ ] **Step 4: Run full suite until all tests pass**

```bash
bun run test:a11y
```

Expected: All 8 page tests PASS.

- [ ] **Step 5: Commit**

```bash
git add styles/globals.css
# add any other modified files
git commit -m "fix: resolve all WCAG 2.2 AA violations surfaced by axe-core"
```

---

## Task 15: GitHub Actions CI Gate

**Files:**
- Create: `.github/workflows/accessibility.yml`

- [ ] **Step 1: Create .github/workflows directory if needed**

```bash
mkdir -p .github/workflows
```

- [ ] **Step 2: Create .github/workflows/accessibility.yml**

```yaml
name: Accessibility

on:
  pull_request:
    branches: [main]

jobs:
  accessibility:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install

      - name: Install Playwright browsers
        run: bunx playwright install chromium --with-deps

      - name: Build
        run: bun run build

      - name: Run accessibility tests
        run: bun run test:a11y
```

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/accessibility.yml
git commit -m "ci: add GitHub Actions accessibility gate for WCAG 2.2 AA"
```

- [ ] **Step 4: Verify the workflow triggers**

Push to a branch and open a PR against main. Confirm the `Accessibility` check appears in the PR checks list and passes.

---

## Task 16: Tech Cleanup

**Files:**
- Delete: `components/layout.js`
- Modify: `app/research/page.js` (dark mode shadow fix)
- Modify: `CLAUDE.md`

- [ ] **Step 1: Delete dead layout component**

```bash
git rm components/layout.js
```

- [ ] **Step 2: Fix dark mode shadow on research details elements**

In `app/research/page.js`, each `<details>` element currently has `className="rounded-md p-4 my-4 -mx-4 shadow-md dark:shadow-neutral-700"`. The `shadow-md` utility in Tailwind v4 renders using `oklch` colors which can appear invisible on some dark backgrounds. Replace the shadow classes on all three `<details>` elements with an explicit dark-mode shadow:

```
shadow-md dark:shadow-[0_1px_3px_0_rgb(0,0,0,0.6),0_4px_6px_-2px_rgb(0,0,0,0.5)]
```

- [ ] **Step 3: Add test:a11y to CLAUDE.md**

In `CLAUDE.md`, update the Commands section to add:

```bash
bun run test:a11y  # run WCAG 2.2 AA accessibility tests (requires build first: bun run build)
```

- [ ] **Step 4: Commit**

```bash
git add CLAUDE.md
git commit -m "chore: remove dead layout component, document test:a11y command"
```

# Give Page + Supporters Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the Give page for higher conversion impact, install shadcn/ui and migrate the mobile nav, add a Supporters marquee, clean up the research page, and enhance DIAL FAQ structured data.

**Architecture:** shadcn/ui is installed first and provides `Button` and `Sheet` used throughout. The mobile nav `Dialog` is replaced with a new `MobileNav` component (Sheet-based, trigger in the header). The Give page is restructured with multiple section wrappers to allow the "How to Give" block and marquee to break out of the prose column. CSS-only `@keyframes` powers the marquee with no new JS dependencies.

**Tech Stack:** Next.js 16 App Router, Tailwind CSS v4, shadcn/ui (button, sheet), React 19, Radix UI

---

## File Map

**Created:**
- `components/ui/button.jsx` — shadcn Button component (generated)
- `components/ui/sheet.jsx` — shadcn Sheet component (generated)
- `lib/utils.js` — shadcn `cn` utility (generated)
- `components.json` — shadcn config (generated)
- `jsconfig.json` — `@/` path alias for shadcn imports
- `components/mobileNav.js` — Sheet-based mobile nav (burger in header)
- `components/SupportersMarquee.js` — horizontal scrolling supporters banner

**Modified:**
- `styles/globals.css` — shadcn CSS vars + marquee keyframe
- `components/navigation.js` — remove Dialog/Sheet/back-to-top; add Give Button; desktop only
- `components/header.js` — import MobileNav; add burger to header grid
- `app/give/page.js` — full redesign: hero, how-to-give section, card grid
- `app/page.js` — Give link → Button
- `app/research/page.js` — Give link → Button; remove `<details>`; add ToC
- `app/facilities/dial/page.js` — FAQ JSON-LD only

---

## Task 1: shadcn/ui initialization

**Files:**
- Create: `jsconfig.json`
- Create: `components.json` (via shadcn CLI)
- Create: `lib/utils.js` (via shadcn CLI)
- Modify: `styles/globals.css` (shadcn appends CSS vars)

- [ ] **Step 1: Create jsconfig.json for `@/` path alias**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

- [ ] **Step 2: Run shadcn init**

```bash
npx shadcn@latest init
```

Answer the prompts:
- Style: **Default**
- Base color: **Neutral**
- CSS variables: **Yes**
- `globals.css` path: **styles/globals.css**
- Components path: **components/ui**
- utils path: **lib/utils**

shadcn creates `components.json`, `lib/utils.js`, and appends its `:root` CSS variable block to `styles/globals.css`.

- [ ] **Step 3: Install Button and Sheet**

```bash
npx shadcn@latest add button sheet
```

This installs `class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot`, `@radix-ui/react-dialog`, and `lucide-react`, and creates `components/ui/button.jsx` and `components/ui/sheet.jsx`.

- [ ] **Step 4: Verify the build compiles**

```bash
bun run build
```

Expected: successful build with no errors. If shadcn's CSS vars conflict with the existing `@theme` block in `globals.css`, they will appear as separate `:root { ... }` rules that coexist fine.

- [ ] **Step 5: Commit**

```bash
git add jsconfig.json components.json lib/utils.js components/ui/ styles/globals.css package.json bun.lock
git commit -m "feat: install shadcn/ui with button and sheet components"
```

---

## Task 2: Create MobileNav component

**Files:**
- Create: `components/mobileNav.js`

- [ ] **Step 1: Create `components/mobileNav.js`**

```jsx
"use client";
import Link from "next/link";
import { Menu } from "react-feather";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuItems } from "./navigation";
import InstitutionLogo from "./InstitutionLogo";
import RadiantLab from "./radiantLab";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col justify-end gap-4 p-10">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation links</SheetDescription>
          <div className="w-24">
            <InstitutionLogo orientation="vertical" />
          </div>
          <SheetClose asChild>
            <div>
              <RadiantLab link="/" />
            </div>
          </SheetClose>
          {MenuItems.map((link) =>
            link.highlight ? (
              <SheetClose asChild key={link.name}>
                <Button
                  asChild
                  className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900 w-full capitalize"
                >
                  <Link href={link.link}>{link.name}</Link>
                </Button>
              </SheetClose>
            ) : (
              <SheetClose asChild key={link.name}>
                <Link
                  href={link.link}
                  className="capitalize hover:text-osu-luminance text-base"
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
```

Note: `SheetTrigger` is imported from `@/components/ui/sheet`. Check the generated file exports it — shadcn Sheet exports `Sheet`, `SheetContent`, `SheetClose`, `SheetTrigger`, `SheetTitle`, `SheetDescription`.

- [ ] **Step 2: Verify the build compiles**

```bash
bun run build
```

Expected: no errors. MobileNav is not yet imported anywhere, so it doesn't appear in the UI yet.

- [ ] **Step 3: Commit**

```bash
git add components/mobileNav.js
git commit -m "feat: add MobileNav component using shadcn Sheet"
```

---

## Task 3: Migrate navigation.js — remove Dialog, back-to-top; add Give Button

**Files:**
- Modify: `components/navigation.js`

- [ ] **Step 1: Replace `components/navigation.js` entirely**

```jsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RadiantLab from "./radiantLab.js";

export const MenuItems = [
  { link: "/research", name: "research" },
  { link: "/software", name: "software" },
  { link: "/facilities/dial", name: "facilities" },
  { link: "/publications", name: "publications" },
  { link: "/team", name: "team" },
  { link: "/about", name: "about" },
  { link: "/give", name: "give", highlight: true },
];

export default function Navigation() {
  return (
    <nav className="hidden lg:flex lg:items-center lg:gap-4">
      <div className="text-sm md:text-base">
        <RadiantLab link="/" />
      </div>
      {MenuItems.map((link) =>
        link.highlight ? (
          <Button
            key={link.name}
            asChild
            size="sm"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900 capitalize"
          >
            <Link href={link.link}>{link.name}</Link>
          </Button>
        ) : (
          <div
            key={link.name}
            className="capitalize text-sm md:text-base hover:text-osu-luminance"
          >
            <Link href={link.link}>{link.name}</Link>
          </div>
        )
      )}
    </nav>
  );
}
```

This removes: the `open` state, `handleLinkClick`, all Dialog imports, both back-to-top `<a>` elements, the floating hamburger trigger, and the `ChevronUp`/`X`/`Menu`/`Dialog` imports. `MenuItems` stays exported so `mobileNav.js` can import it.

- [ ] **Step 2: Verify build**

```bash
bun run build
```

Expected: no errors. The mobile menu will be broken until Task 4 wires up MobileNav in the header.

- [ ] **Step 3: Commit**

```bash
git add components/navigation.js
git commit -m "refactor: simplify Navigation to desktop-only; add Give Button; remove back-to-top"
```

---

## Task 4: Update header.js — add MobileNav burger

**Files:**
- Modify: `components/header.js`

- [ ] **Step 1: Replace `components/header.js`**

```jsx
import Navigation from "./navigation";
import MobileNav from "./mobileNav";
import InstitutionLogo from "./InstitutionLogo";
import RadiantLab from "./radiantLab";

export default function Header() {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-10 my-4 z-10">
      <a
        href="#main-content"
        className="sr-only z-50 focus:absolute bg-blue-600 text-white focus:p-2 rounded focus:not-sr-only top-4 left-4"
      >
        Skip to main content
      </a>
      <div className="grid grid-cols-4 grid-rows-1 items-center">
        <div className="col-span-4 justify-self-center md:justify-self-start md:col-span-1">
          <div className="flex place-content-center items-center gap-6">
            <InstitutionLogo />
            <span className="md:hidden">
              <RadiantLab link="/" />
            </span>
          </div>
        </div>
        <div className="col-start-3 col-span-2 justify-self-end flex items-center gap-2">
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
```

Changes from original: `justify-self-center md:justify-self-end` → `justify-self-end`; added `flex items-center gap-2`; imported and rendered `MobileNav`.

- [ ] **Step 2: Verify build and test mobile nav manually**

```bash
bun run dev
```

Open `http://localhost:3000` in a browser. Narrow the viewport below `lg` (1024px). The burger icon should appear in the header top-right. Clicking it should open the Sheet from the right with all nav links. Clicking a link should close the Sheet and navigate. Verify the Give link renders as an orange button.

On wide screens (≥1024px): the burger should be invisible, the desktop nav should show with Give as an orange button. The old floating back-to-top button should be gone.

- [ ] **Step 3: Commit**

```bash
git add components/header.js
git commit -m "feat: move mobile nav burger to header; wire up MobileNav Sheet"
```

---

## Task 5: Add marquee animation + SupportersMarquee component

**Files:**
- Modify: `styles/globals.css`
- Create: `components/SupportersMarquee.js`

- [ ] **Step 1: Add marquee keyframe to `styles/globals.css`**

Inside the existing `@theme { ... }` block, add after the existing animations:

```css
  --animate-marquee: marquee 30s linear infinite;

  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
```

The full `@theme` block after the edit should look like:

```css
@theme {
  --color-osu-beaver-orange: #D73F09;
  --color-osu-luminance: #FFB500;
  --color-osu-candela: #FDD26E;
  --color-osu-pine-stand: #4A773C;

  --animate-slide-in: slide-in 500ms ease 200ms both;
  --animate-fade-in: fade-in 200ms;
  --animate-fade-in-slow: fade-in 600ms ease 400ms both;
  --animate-marquee: marquee 30s linear infinite;

  @keyframes slide-in {
    0% { transform: translateX(100%); }
    100% { transform: translateX(0%); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes marquee {
    from { transform: translateX(0); }
    to { transform: translateX(-50%); }
  }
}
```

- [ ] **Step 2: Create `components/SupportersMarquee.js`**

```jsx
"use client";

const supporters = [
  { name: "Medical Research Foundation New Investigator Grant", amount: 50000 },
  { name: "Oregon Partnership for Alzheimer's Research Grant", amount: 35000 },
];

function formatAmount(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function SupportersMarquee() {
  const items = [...supporters, ...supporters];

  return (
    <div className="my-6 overflow-hidden bg-neutral-100 dark:bg-neutral-800 py-3 ml-[calc(50%-50vw)] w-screen [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((supporter, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-300"
          >
            {supporter.name}
            {supporter.amount != null && ` · ${formatAmount(supporter.amount)}`}
          </span>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify the build compiles**

```bash
bun run build
```

Expected: no errors. The component is not yet used on any page.

- [ ] **Step 4: Commit**

```bash
git add styles/globals.css components/SupportersMarquee.js
git commit -m "feat: add SupportersMarquee component with CSS marquee animation"
```

---

## Task 6: Redesign Give page

**Files:**
- Modify: `app/give/page.js`

- [ ] **Step 1: Replace `app/give/page.js`**

```jsx
import RadiantLab from "../../components/radiantLab";
import SupportersMarquee from "../../components/SupportersMarquee";
import { Button } from "@/components/ui/button";

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
      {/* Impact hero */}
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Support Daylighting Research</h1>
        <p className="font-semibold">
          Light shapes how we sleep, think, learn, work, and age — yet most
          buildings are designed with little understanding of how their lighting
          environments affect human health.
        </p>
        <p>
          The <RadiantLab /> at Oregon State University studies how daylight
          and electric lighting influence human biology, behavior, and
          well-being. Private support helps us pursue innovative research,
          educate the next generation of scientists, and accelerate discoveries
          that improve lives.
        </p>
        <div className="not-prose flex justify-center mt-6">
          <Button
            asChild
            size="lg"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900"
          >
            <a href="#how-to-give">Give Now</a>
          </Button>
        </div>
      </div>

      {/* How to Give */}
      <section
        id="how-to-give"
        className="bg-orange-50 dark:bg-neutral-800 rounded-lg py-10 px-6 my-8"
      >
        <div className="max-w-prose mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-neutral-900 dark:text-neutral-100">
            How to Give
          </h2>
          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Donations are processed through the Oregon State University
            Foundation, ensuring your gift is tax-deductible and directed to
            support <RadiantLab /> research.
          </p>
          <ol className="space-y-4 mb-8 list-none p-0">
            {[
              <>
                Visit the OSU Foundation giving page.
              </>,
              <>
                In the <strong>Designation</strong> field, search for and
                select{" "}
                <strong>Civil &amp; Construction Engineering Research Fund</strong>.
              </>,
              <>
                In the <strong>Comments or special instructions</strong> field,
                enter <strong>Clotilde Pierson</strong> to direct your gift to
                the <RadiantLab />.
              </>,
              <>Complete your gift amount and payment information.</>,
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-osu-beaver-orange text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-neutral-800 dark:text-neutral-200 pt-1">
                  {step}
                </span>
              </li>
            ))}
          </ol>
          <Button
            asChild
            size="lg"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900"
          >
            <a
              href="https://give.fororegonstate.org/PL1Uv3Fkug"
              target="_blank"
              rel="noreferrer noopener"
            >
              Give on OSU Foundation ↗
            </a>
          </Button>
        </div>
      </section>

      {/* Supporters */}
      <SupportersMarquee />

      {/* What Your Gift Funds */}
      <div className="my-8 max-w-prose mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
          What Your Gift Funds
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-neutral-900 dark:text-neutral-100">
              Student Researchers
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Graduate students are at the heart of the lab&apos;s work. Gifts
              support research assistantships, field studies, data analysis, and
              scientific training that develops future leaders in building
              science.
            </p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-neutral-900 dark:text-neutral-100">
              Research Equipment
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Sophisticated tools expand the scope and quality of our research:
              wearable sensors, advanced spectroradiometers, environmental
              monitoring equipment, and new technologies that enable larger,
              more diverse studies.
            </p>
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6">
            <h3 className="font-bold text-lg mb-3 text-neutral-900 dark:text-neutral-100">
              Daylighting Research
            </h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm">
              Unrestricted gifts fund pilot studies, participant recruitment,
              and exploratory research on circadian health, cognitive
              performance, aging, dementia risk, and health equity in the built
              environment.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters + Partnerships */}
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h2>Why Private Support Matters</h2>
        <p>
          Many of the most innovative research ideas begin before traditional
          funding is available. Private gifts bridge that gap — supporting
          early-stage studies, new technologies, and exploratory projects that
          lead to larger research programs and real improvements in how
          buildings are designed for human health.
        </p>

        <h2>Partnerships and Major Gifts</h2>
        <p>
          We welcome conversations with industry partners, foundations, and
          individual donors interested in advancing research on healthy
          buildings and human health. Support may include sponsored research,
          equipment donations, student fellowships, collaborative projects, or
          multi-year philanthropic commitments.
        </p>
        <p>
          Contact Dr. Pierson at{" "}
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

- [ ] **Step 2: Test the Give page visually**

```bash
bun run dev
```

Open `http://localhost:3000/give`. Verify:
- Hero section: h1, intro paragraph, orange "Give Now" button centered below
- Clicking "Give Now" scrolls to the "How to Give" section
- "How to Give" section: warm orange-tinted background, numbered steps with orange circles, "Give on OSU Foundation" button
- Supporters marquee: scrolling horizontally, fades at edges, pauses on hover
- Three funding cards in a grid (1 col mobile, 3 col desktop)
- Prose sections for "Why Private Support Matters" and "Partnerships"

- [ ] **Step 3: Commit**

```bash
git add app/give/page.js
git commit -m "feat: redesign Give page with impact hero, highlighted how-to section, and card grid"
```

---

## Task 7: Give button on home page

**Files:**
- Modify: `app/page.js`

- [ ] **Step 1: Update home page give link in `app/page.js`**

Find the existing footer note paragraph (lines 151–158 in the original):

```jsx
<p className="text-sm border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-8">
  The RadiantLab relies on private support to advance this work.{" "}
  <a href="/give">
    Support daylighting research
  </a>{" "}
  through the OSU Foundation.
</p>
```

Replace with:

```jsx
<div className="not-prose border-t border-neutral-200 dark:border-neutral-700 pt-4 mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
  <p className="text-sm text-neutral-600 dark:text-neutral-400">
    The RadiantLab relies on private support to advance this work.
  </p>
  <Button
    asChild
    size="sm"
    className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900 flex-shrink-0"
  >
    <a href="/give">Support this research</a>
  </Button>
</div>
```

Add the import at the top of `app/page.js`:

```jsx
import { Button } from "@/components/ui/button";
```

- [ ] **Step 2: Verify home page visually**

```bash
bun run dev
```

Check `http://localhost:3000`. The bottom "Support daylighting research" plain link should now be a small orange button next to a caption text line.

- [ ] **Step 3: Commit**

```bash
git add app/page.js
git commit -m "feat: replace plain give link with Button on home page"
```

---

## Task 8: Research page — remove details, add table of contents

**Files:**
- Modify: `app/research/page.js`

- [ ] **Step 1: Add Button import to `app/research/page.js`**

At the top of `app/research/page.js`, add:

```jsx
import { Button } from "@/components/ui/button";
```

- [ ] **Step 2: Replace the three `<details>` blocks with always-visible sections and add a ToC**

The prose `<div>` in `app/research/page.js` starts at line 71. Replace the content from the intro paragraph through the end of the third `<details>` block (line 181) with the following. This preserves all existing content but removes the `<details>`/`<summary>` wrappers, shortens the headings, adds `id` anchors, and inserts a ToC after the intro.

```jsx
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Research</h1>
        <p>
          Our research is generously supported by a number of sources, such as
          the Nuckolls Fund for Lighting Education and the Oregon Partnership
          for Alzheimer&apos;s Research. The main topics that our research
          focuses on include:
        </p>
        <div className="not-prose mb-4">
          <Button
            asChild
            size="sm"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900"
          >
            <a href="/give">Support this research</a>
          </Button>
        </div>

        {/* Table of Contents */}
        <nav className="not-prose flex flex-wrap gap-2 my-6" aria-label="Research topics">
          <a
            href="#natural-built-environment"
            className="px-3 py-1 rounded-full text-sm border border-osu-beaver-orange text-osu-beaver-orange hover:bg-osu-beaver-orange hover:text-white dark:border-osu-luminance dark:text-osu-luminance dark:hover:bg-osu-luminance dark:hover:text-gray-900 transition-colors"
          >
            Natural &amp; Built Environment
          </a>
          <a
            href="#light-and-occupants"
            className="px-3 py-1 rounded-full text-sm border border-osu-beaver-orange text-osu-beaver-orange hover:bg-osu-beaver-orange hover:text-white dark:border-osu-luminance dark:text-osu-luminance dark:hover:bg-osu-luminance dark:hover:text-gray-900 transition-colors"
          >
            Light &amp; Occupant Health
          </a>
          <a
            href="#energy-and-environment"
            className="px-3 py-1 rounded-full text-sm border border-osu-beaver-orange text-osu-beaver-orange hover:bg-osu-beaver-orange hover:text-white dark:border-osu-luminance dark:text-osu-luminance dark:hover:bg-osu-luminance dark:hover:text-gray-900 transition-colors"
          >
            Energy &amp; Environment
          </a>
        </nav>

        <h2 id="natural-built-environment">
          Natural &amp; Built Environment and Indoor Light
        </h2>
        <ResearchDiagram diagram="rel1" />
        <p>
          How do new glazing technologies, façade layouts, building
          geometries, urbanization, or climate change affect our indoor light
          and visual conditions? How can we modify our windows, buildings, or
          cities to produce the desired indoor light and visual conditions?
        </p>
        <p>
          We use numerical modeling or physical measurements to understand
          these relations. We develop, improve, or validate tools and methods
          to predict them. We investigate strategies or technologies to
          optimize them.
        </p>
        <ProjectCard
          projectName="Validation of spectral simulation tools in the context of ipRGC-influenced light responses of building occupants."
          projectDescription="Spectral simulation workflows offer a high potential in evaluating building occupants&#39; ipRGC-influenced light (IIL) responses in a prospective way (e.g., in predicting what may be the most impactful design decisions when it comes to affecting such responses). In view of the relative novelty of research in this area, only a few simulation tools are available but have not been validated yet. This study compared laboratory measurements to simulation outputs to determine whether we can rely on spectral simulation tools (i.e., ALFA and Lark) to evaluate building occupants&#39; IIL responses and guide the design process. The results indicate that Lark outperforms ALFA in most cases and shows a simulation error in the &#177;20% range for point-in-time indicators."
        />

        <h2 id="light-and-occupants">
          Light, Views, and Occupant Health
        </h2>
        <ResearchDiagram diagram="rel2" />
        <p>
          How does our light exposure affect our physical and mental health,
          as well as our comfort? How do window views affect our cognitive
          performance and mental health? What are the optimal indoor light and
          visual conditions in daylit spaces to enhance people&#39;s health,
          well-being, and performance? How does building occupants&#39;
          behavior impact indoor light and visual conditions?
        </p>
        <p>
          We rely on experimental and observational studies to understand
          these relations. We develop, improve, or validate models and metrics
          to quantify them. We investigate strategies or technologies to
          optimize them.
        </p>
        <ProjectCard
          projectName="Influence of the socio-environmental context on discomfort due to glare from daylight"
          projectDescription="To harvest the benefits of daylight indoors, there is a need to predict discomfort from daylight glare. While more than 20 models for predicting discomfort from daylight glare have been developed, none accurately do it. The inclusion of additional factors in the models may improve the predictions. One such factor is the socio-environmental context of the observer. This study compared the evaluation of discomfort from daylight glare of building occupants in four socio-environmental contexts: Chile, Belgium, Japan, and Switzerland. The results do not show evidence of an influence of socio-environmental context on discomfort from daylight glare."
        />

        <h2 id="energy-and-environment">
          Energy Consumption and Daylighting
        </h2>
        <ResearchDiagram diagram="rel3" />
        <p>
          How will our lighting energy consumption evolve in the future, given
          that our access to daylight is likely to change with urbanization
          and climate change? What is the energy efficiency (including
          embodied and operational energy) of alternative daylighting
          technologies? How do we maintain the visual comfort of building
          occupants to reduce their impact on the building energy consumption?
        </p>
        <p>
          We use numerical modeling and measurements as well as experimental
          and observational studies to understand these relations. We develop,
          improve, or validate models and methods to estimate them. We
          investigate strategies or technologies to optimize them.
        </p>
        <p>
          Our research is rooted in architectural engineering and lighting
          science but has a large interdisciplinary component to it. To study
          those relations, we rely on and interact with the fields of
          engineering, architecture, chronobiology, computer science, urban
          planning, neuroscience, psychophysics, and public health.
        </p>
      </div>
```

- [ ] **Step 3: Verify the research page visually**

```bash
bun run dev
```

Open `http://localhost:3000/research`. Verify:
- Three pill-shaped anchor links below the intro paragraph
- Clicking each pill scrolls smoothly to the corresponding section heading
- All three research sections are fully visible (no collapsed content)
- Each section has its diagram and project card (the third section has no project card — correct)
- The orange "Support this research" button appears below the intro text

- [ ] **Step 4: Commit**

```bash
git add app/research/page.js
git commit -m "feat: replace research page details elements with always-visible sections and ToC"
```

---

## Task 9: Update DIAL FAQ JSON-LD

**Files:**
- Modify: `app/facilities/dial/page.js`

- [ ] **Step 1: Replace `faqJsonLd` in `app/facilities/dial/page.js`**

Find the existing `faqJsonLd` constant (lines 24–37) and replace it:

```js
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is DIAL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIAL (Daylighting Innovation and Analysis Lab) is a state-of-the-art mobile laboratory platform at Oregon State University dedicated to advancing the science and application of daylighting in the built environment. It contains two symmetrical office rooms equipped with electrochromic windows and skylight, dimmable LED lighting, and a suite of environmental sensors, plus an observation room for experimenters.",
      },
    },
    {
      "@type": "Question",
      name: "Where is DIAL located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIAL is currently located at Oregon State University in Corvallis, Oregon. As a trailer-based facility housed within a standard shipping container, it can be transported and deployed to diverse locations and climates.",
      },
    },
    {
      "@type": "Question",
      name: "What research can be done in DIAL?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIAL supports interdisciplinary research on the impact of daylighting on human health, productivity, and well-being, including circadian rhythm and sleep health, cognitive function, aging, and indoor environmental quality. Researchers can also test new technologies and materials such as electrochromic glazing and advanced lighting systems.",
      },
    },
    {
      "@type": "Question",
      name: "Is DIAL ADA-compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The DIAL facility is fully ADA-compliant.",
      },
    },
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

- [ ] **Step 2: Verify build**

```bash
bun run build
```

Expected: no errors. No visual changes to the DIAL page.

- [ ] **Step 3: Commit**

```bash
git add app/facilities/dial/page.js
git commit -m "feat: expand DIAL FAQ JSON-LD with four additional structured data entries"
```

---

## Task 10: Build verification and accessibility tests

**Files:** None — verification only.

- [ ] **Step 1: Run production build**

```bash
bun run build
```

Expected: successful build with no errors or warnings about missing modules. Check that shadcn's CSS variables and the existing `@theme` tokens both appear in the output.

- [ ] **Step 2: Run accessibility tests**

```bash
bun run test:a11y
```

Expected: all WCAG 2.2 AA tests pass. Common issues to watch for:
- The Sheet's `SheetTitle` must be present (it's set to `sr-only` in MobileNav) — this satisfies the dialog accessible name requirement
- The marquee `<div>` has no interactive role but its `hover:` pause is a bonus; the moving content should not cause failures
- The numbered step `<ol>` in the Give page uses `list-none p-0` which can remove list semantics in some screen readers — if the a11y test flags this, add `role="list"` to the `<ol>`

- [ ] **Step 3: Fix any accessibility failures**

If `bun run test:a11y` fails:

For the `<ol>` list semantics issue:
```jsx
<ol className="space-y-4 mb-8 list-none p-0" role="list">
```

For any missing label on the Sheet close button (shadcn generates an `X` icon button) — check `components/ui/sheet.jsx` and verify the close button has an `aria-label`. shadcn's generated Sheet includes a `<SheetClose>` with a visually hidden "Close" span; verify it's present.

- [ ] **Step 4: Final commit (if fixes were needed)**

```bash
git add -p
git commit -m "fix: accessibility corrections from a11y test suite"
```

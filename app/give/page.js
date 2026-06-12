import { Button } from "@/components/ui/button";
import RadiantLab from "../../components/radiant-lab";
// import SupportersMarquee from "../../components/supporters-marquee";
import { createPageMetadata } from "../../lib/metadata";

const title = "Support Daylighting Research | RadiantLab";
const description =
  "Support the RadiantLab's research on daylight, circadian health, and dementia at Oregon State University through the OSU Foundation.";

const givingSteps = [
  {
    id: "visit-foundation",
    content: <>Visit the OSU Foundation giving page.</>,
  },
  {
    id: "select-designation",
    content: (
      <>
        In the <strong>Designation</strong> field, search for and select{" "}
        <strong>Civil &amp; Construction Engineering Research Fund</strong>.
      </>
    ),
  },
  {
    id: "add-instructions",
    content: (
      <>
        In the <strong>Comments or special instructions</strong> field, enter{" "}
        <strong>Clotilde Pierson</strong> to direct your gift to the{" "}
        <RadiantLab />.
      </>
    ),
  },
  {
    id: "complete-gift",
    content: <>Complete your gift amount and payment information.</>,
  },
];

export const metadata = createPageMetadata({
  title,
  description,
  path: "/give",
  image: "/og/give.jpg",
  imageAlt: "Support RadiantLab daylighting research",
});

export default function Give() {
  return (
    <>
      {/* Impact hero */}
      <div className="prose prose-neutral dark:prose-invert mx-auto my-8">
        <h1>Support Daylighting Research</h1>
        <p className="font-semibold">
          Light shapes how we sleep, think, learn, work, and age — yet most
          buildings are designed with little understanding of how their lighting
          environments affect human health.
        </p>
        <p>
          The <RadiantLab /> at Oregon State University studies how daylight and
          electric lighting influence human biology, behavior, and well-being.
          Private support helps us pursue innovative research, educate the next
          generation of scientists, and accelerate discoveries that improve
          lives.
        </p>
      </div>

      {/* How to Give */}
      <section
        className="my-8 rounded-lg bg-neutral-50 px-6 py-10 dark:bg-neutral-800"
        id="how-to-give"
      >
        <div className="mx-auto max-w-prose">
          <h2 className="mb-2 font-bold text-2xl text-neutral-900 dark:text-neutral-100">
            How to Give
          </h2>
          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Donations are processed through the Oregon State University
            Foundation, ensuring your gift is tax-deductible and directed to
            support <RadiantLab /> research.
          </p>
          <ol className="mb-8 list-none space-y-4 p-0">
            {givingSteps.map((step, i) => (
              <li className="my-4 flex items-center gap-3" key={step.id}>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-osu-beaver-orange font-bold text-sm text-white">
                  {i + 1}
                </span>
                <span className="text-neutral-800 dark:text-neutral-200">
                  {step.content}
                </span>
              </li>
            ))}
          </ol>
          <Button
            asChild
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-neutral-900"
            size="lg"
          >
            <a
              href="https://give.fororegonstate.org/PL1Uv3Fkug"
              rel="noreferrer noopener"
              target="_blank"
            >
              Give on OSU Foundation ↗
            </a>
          </Button>
        </div>
      </section>

      {/* Supporters */}
      {/* <SupportersMarquee /> */}

      {/* What Your Gift Funds */}
      <div className="mx-auto my-8 max-w-prose">
        <h2 className="mb-6 font-bold text-2xl text-neutral-900 dark:text-neutral-100">
          What Your Gift Funds
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-700">
            <h3 className="mb-3 font-bold text-lg text-neutral-900 dark:text-neutral-100">
              Student Researchers
            </h3>
            <p className="text-neutral-700 text-sm dark:text-neutral-300">
              Graduate students are at the heart of the lab&apos;s work. Gifts
              support research assistantships, field studies, data analysis, and
              scientific training that develops future leaders in building
              science.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-700">
            <h3 className="mb-3 font-bold text-lg text-neutral-900 dark:text-neutral-100">
              Research Equipment
            </h3>
            <p className="text-neutral-700 text-sm dark:text-neutral-300">
              Sophisticated tools expand the scope and quality of our research:
              wearable sensors, advanced spectroradiometers, environmental
              monitoring equipment, and new technologies that enable larger,
              more diverse studies.
            </p>
          </div>
          <div className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-700">
            <h3 className="mb-3 font-bold text-lg text-neutral-900 dark:text-neutral-100">
              Daylighting Research
            </h3>
            <p className="text-neutral-700 text-sm dark:text-neutral-300">
              Unrestricted gifts fund pilot studies, participant recruitment,
              and exploratory research on circadian health, cognitive
              performance, aging, dementia risk, and health equity in the built
              environment.
            </p>
          </div>
        </div>
      </div>

      {/* Why It Matters + Partnerships */}
      <div className="prose prose-neutral dark:prose-invert mx-auto my-8">
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

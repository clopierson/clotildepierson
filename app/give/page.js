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
      </div>

      {/* How to Give */}
      <section
        id="how-to-give"
        className="bg-white dark:bg-neutral-800 rounded-lg py-10 px-6 my-8"
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
          <ol className="space-y-4 mb-8 list-none p-0" role="list">
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
              <li key={i} className="flex items-center gap-3 my-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-osu-beaver-orange text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <span className="text-neutral-800 dark:text-neutral-200">
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

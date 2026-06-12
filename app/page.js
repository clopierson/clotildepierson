import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FactCard from "../components/fact-card";
import RadiantLab from "../components/radiant-lab";
import ResearchDiagram from "../components/research-diagram";
import StructuredData from "../components/structured-data";
// import SupportersMarquee from "../components/supporters-marquee";
import { createPageMetadata } from "../lib/metadata";
import backgroundImage from "../public/background-image.jpg";

const title = "Daylighting Research Laboratory | RadiantLab";
const description =
  "The Daylighting Research Laboratory is a cutting-edge lighting research center currently based in Oregon State University and led by Dr. Clotilde Pierson.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/",
  image: "/og/home.jpg",
  imageAlt: "RadiantLab daylighting research at Oregon State University",
});

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

export default function Home() {
  return (
    <>
      <StructuredData data={organizationJsonLd} />
      <picture className="absolute right-0 left-0 h-[70vh] w-screen overflow-hidden">
        <Image
          alt="Urban Daylight"
          className="object-cover object-[30%_30%]"
          fill={true}
          placeholder="blur"
          priority={true}
          sizes="100vw"
          src={backgroundImage}
        />
      </picture>
      <div className="absolute top-[36%] right-0 left-0 mx-auto w-fit bg-neutral-200/70 px-4 py-2 text-center backdrop-blur-sm sm:px-7 sm:py-3 lg:px-12 lg:py-5 dark:bg-neutral-700/70">
        <p className="text-2xl sm:text-3xl lg:text-5xl">
          <RadiantLab />
        </p>
        <p>Daylighting&nbsp;Research</p>
      </div>
      <div className="h-[70vh]" />
      <div className="prose prose-neutral dark:prose-invert mx-auto my-8">
        <h1 className="sr-only">Daylighting Research Laboratory</h1>
        <p>
          The <RadiantLab /> is led by{" "}
          <Link href="/about">Dr. Clotilde Pierson</Link>
          {", "}
          an Assistant Professor of Architectural Engineering in the College of
          Engineering at Oregon State University.
        </p>
        <p>
          Our mission is to advance knowledge related to daylight in buildings
          and the practice of daylighting to enhance people&#39;s health,
          well-being, and performance, while minimizing energy consumption.
        </p>
        {/* Supporters */}
        {/* <SupportersMarquee /> */}
        <p>
          Today, we spend on average 90% of our time indoors. This completely
          flips our exposure to light, compared to our ancient outdoor
          lifestyle. We get much less light during the daytime, and much more in
          the evening. The spectral content and distribution of light in our
          field of view are also considerably different.
        </p>
        <p>
          By 2050, 68% of the global population is expected to live in cities. A
          strong urban densification is taking place. Buildings become
          increasingly taller. Homes are more compact and sit closer together.
          This densification is expected to reduce our access to daylight even
          further and impact our window views.
        </p>
        <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2">
          <div>
            <FactCard
              alt="two people sitting at their desk and facing their computer screens"
              description="time spent indoors"
              fact="90%"
              illustration="/card_indoor_light.svg"
            />
          </div>
          <div>
            <FactCard
              alt="cityscape with high buildings and trees"
              description="living in cities by 2050"
              fact="68%"
              illustration="/card_city_light.svg"
            />
          </div>
        </div>
        <p>
          Mounting evidence shows that these changes in our lighting and visual
          environment affect our health, well-being, and performance.
        </p>
        <p>
          Light induces visual and non-visual responses in humans. It enables us
          to see, it regulates our body internal clock (circadian rhythm), and
          it affects our alertness level, among other things. A window view also
          offers benefits. It helps us create cognitive maps to improve memory
          formation and retrieval and it provides a mental portal to help
          relieve stress and prevent the onset of mental illnesses, for
          instance.
        </p>
        <p>
          Besides the human-related aspects, daylighting can greatly reduce
          buildings&#39; climate impact when correctly implemented. By avoiding
          demand for electric lighting, which accounts for around 19% of global
          electricity consumption, daylighting can bring significant energy
          performance improvements and cost reductions.
        </p>
        <p>
          The <RadiantLab /> brings together insights from different
          disciplines, including engineering, architecture, chronobiology,
          computer science, urban planning, neuroscience, psychophysics, or
          public health, to further understand and optimize relations between:
        </p>
        <ul>
          <li>the natural and built environment,</li>
          <li>indoor light and visual conditions,</li>
          <li>building occupants, and</li>
          <li>energy consumption.</li>
        </ul>
        <ResearchDiagram diagram="full" />
        <p>
          To that end, we use both field and laboratory studies, as well as
          numerical modeling. Our goal is to translate fundamental knowledge
          about human responses to light and views and the need to reduce energy
          consumption into strategies for the development of a more sustainable
          built environment and innovative daylighting solutions.
        </p>
        <div className="not-prose mt-8 mb-0 flex flex-col items-center gap-3 border-neutral-200 border-t pt-16 dark:border-neutral-700">
          <p className="text-neutral-600 text-sm dark:text-neutral-400">
            The <RadiantLab /> relies on public and private support to advance
            this work.
          </p>
          <Button
            asChild
            className="shrink-0 bg-osu-beaver-orange text-white! hover:bg-osu-luminance hover:text-neutral-900!"
            size="sm"
          >
            <a href="/give">Help Fund Breakthroughs</a>
          </Button>
        </div>
      </div>
    </>
  );
}

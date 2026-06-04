import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../public/background-image.jpg";
import FactCard from "../components/factCard";
import RadiantLab from "../components/radiantLab";
import ResearchDiagram from "../components/researchDiagram";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Daylighting Research Laboratory | RadiantLab",
  description:
    "The Daylighting Research Laboratory is a cutting-edge lighting research center currently based in Oregon State University and led by Dr. Clotilde Pierson.",
  openGraph: {
    url: "https://www.clotildepierson.com",
    title: "Daylighting Research Laboratory | RadiantLab",
    description:
      "The Daylighting Research Laboratory is a cutting-edge lighting research center currently based in Oregon State University and led by Dr. Clotilde Pierson.",
  },
  twitter: {
    title: "Daylighting Research Laboratory | RadiantLab",
    description:
      "The Daylighting Research Laboratory is a cutting-edge lighting research center currently based in Oregon State University and led by Dr. Clotilde Pierson.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Daylighting Research Laboratory (RadiantLab)",
  alternateName: "RadiantLab",
  url: "https://www.clotildepierson.com",
  description: "The RadiantLab advances knowledge of daylight in buildings to enhance human health, well-being, and performance while minimizing energy consumption. Based at Oregon State University.",
  logo: "https://www.clotildepierson.com/institution/OSU_horizontal_2C_O_over_W.png",
  founder: { "@type": "Person", name: "Clotilde Pierson", url: "https://www.clotildepierson.com/about" },
  parentOrganization: { "@type": "EducationalOrganization", name: "Oregon State University", url: "https://oregonstate.edu" },
  sameAs: ["https://cce.oregonstate.edu/people/clotilde-pierson"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          fill={true}
          priority={true}
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[30%_30%]"
        />
      </picture>
      <div className="absolute left-0 right-0 w-fit mx-auto text-center top-[36%] py-2 px-4 sm:py-3 sm:px-7 lg:py-5 lg:px-12 backdrop-blur-sm bg-gray-200/70 dark:bg-gray-700/70">
        <p className="text-2xl sm:text-3xl lg:text-5xl">
          <RadiantLab />
        </p>
        <p>Daylighting&nbsp;Research</p>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1 className="sr-only">Daylighting Research Laboratory</h1>
        <p>
          The <RadiantLab /> is led by{" "}
          <Link href="/about">
            Dr. Clotilde Pierson
          </Link>
          {", "}
          an Assistant Professor of Architectural Engineering in the College of
          Engineering at Oregon State University.
        </p>
        <p>
          Our mission is to advance knowledge related to daylight in buildings
          and the practice of daylighting to enhance people&#39;s health,
          well-being, and performance, while minimizing energy consumption.
        </p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <div>
            <FactCard
              illustration="/card_indoor_light.svg"
              fact="90%"
              description="time spent indoors"
              alt="two people sitting at their desk and facing their computer screens"
            />
          </div>
          <div>
            <FactCard
              illustration="/card_city_light.svg"
              fact="68%"
              description="living in cities by 2050"
              alt="cityscape with high buildings and trees"
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
      </div>
    </>
  );
}

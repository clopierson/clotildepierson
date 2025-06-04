import Layout from "../components/layout";
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../public/background-image.jpg";
import FactCard from "../components/factCard";
import RadiantLab from "../components/radiantLab";
import ResearchDiagram from "../components/researchDiagram";

// TODO: fix overflow on really narrow screen (e.g. galaxy fold), e.g. publications

export default function Home() {
  return (
    <Layout
      pageTitle="Daylighting Research Laboratory | RadiantLab"
      pageDescription="The Daylighting Research Laboratory is a cutting-edge lighting research center currently based in Oregon State University and led by Dr. Clotilde Pierson."
      pageUrl="https://www.clotildepierson.com"
      heroImageAuthorUrl="http://www.karlmaasdam.com/"
      heroImageUrl="https://oregonstate.edu/"
      heroImageAuthor="Karl Maasdam"
    >
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          fill={true}
          priority={true}
          className="object-cover object-[30%_30%]"
        ></Image>
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
        <p className="font-bold">
          The <RadiantLab /> is led by{" "}
          <Link href="/about" className="font-bold hover:font-bold">
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
      </div>
    </Layout>
  );
}

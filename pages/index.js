import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image.jpg";
import FactCard from "../components/factCard";

export default function Home() {
  return (
    <Layout
      pageTitle="Integrated Research on Daylighting Lab"
      pageDescription="The Integrated Research on Daylighting Laboratory (IRRADIANT LAB) is a cutting-edge lighting research center currently based in Oregon State University and headed by Dr. Clotilde Pierson."
    >
      <div class="overflow-hidden absolute top-18 left-0 w-screen h-[70vh] -z-1 ">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          placeholder="blur"
          layout="fill"
          objectFit="cover"
          quality={100}
        ></Image>
      </div>
      <div class="absolute top-18 left-0 right-0 w-max mx-auto text-center top-1/3 bg-white/50 dark:bg-black/50 p-4 rounded">
        <p class="text-xl sm:text-2xl uppercase tracking-widest">
          irradiant lab
        </p>
        <p>Integrated Research on Daylighting</p>
      </div>
      <div class="h-[70vh]"></div>
      <div class="my-8 prose dark:prose-invert mx-auto">
        <h1>Integrated Research on Daylighting</h1>
        <p>
          Our mission is to advance knowledge of daylighting in buildings to
          enhance people's health, well-being, and performance, while minimizing
          energy consumption.
        </p>
        <p>
          Today, we spend on average 90% of our time indoors. This completely
          flips our relationship to light, compared to an outdoor lifestyle. We
          get much less light during the daytime, and much more in the evening.
          The spectral content and distribution of light also change, as we are
          exposed to mostly electric sources.
        </p>
        <p>
          By 2050, 68% of the global population is expected to live in cities. A
          strong urban densification is taking place. Buildings become
          increasingly taller. Homes are more compact and sit closer together.
          This densification reduces our access to daylight, and impacts our
          window views.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <div class="col-start-1 ">
            <FactCard
              illustration="/undraw_handcrafts_house.svg"
              size="60"
              fact="90%"
              description="time spent indoors"
            />
          </div>
          <div class="col-start-2">
            <FactCard
              illustration="/undraw_handcrafts_city.svg"
              size="112"
              fact="68%"
              description="living in cities by 2050"
            />
          </div>
        </div>
        <p>
          Light causes visual and non-visual responses in humans through
          photoreceptors in the eye. It lets us see. It regulates our body
          internal clock (circadian rhythm). It affects our alertness level.
        </p>
        <p>
          A window view helps us create cognitive maps to avoid disorientation
          and improve memory formation and retrieval. It provides a mental
          portal that can help relive stress and prevent the onset of mental
          illnesses. It reduces the lifetime risk of developing myopia in
          children.
        </p>
        <p>
          The IRRADIANT lab brings together different disciplines to further
          understand how:
          <ul>
            <li>
              buildings, cities, and climate affect our visual environment, and
            </li>
            <li>our visual environment affects us.</li>
          </ul>
          To that end, we use both field and laboratory experiments, and
          numerical modeling.
        </p>
        <blockquote>
          Engineering, architecture, chronobiology, computer science, urban
          planning, neuroscience, psychophysics, and public health are all
          contributing disciplines to the field of daylight.
        </blockquote>
        <p>
          Our long-term goal is to translate fundamental knowledge about human
          responses to light and the need to reduce energy consumption into{" "}
          <strong>
            strategies for the development of a more sustainable built
            environment through innovative daylighting solutions
          </strong>
          .
        </p>
      </div>
    </Layout>
  );
}

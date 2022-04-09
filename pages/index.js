import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image.jpg";
import FactCard from "../components/factCard";
import IrradiantLab from "../components/irradiantLab";
import PictureCopyright from "../components/pictureCopyright";

// TODO: fix overflow on really narrow screen (e.g. galaxy fold), e.g. publications

export default function Home() {
  return (
    <Layout
      pageTitle="Laboratory of Integrated Research on Daylighting | IrradiantLab"
      pageDescription="The Laboratory of Integrated Research on Daylighting is a cutting-edge lighting research center currently based in Oregon State University and headed by Dr. Clotilde Pierson."
      pageUrl="https://clotildepierson.com"
    >
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          placeholder="blur"
          layout="fill"
          priority="true"
          objectFit="cover"
        ></Image>
      </picture>
      <div className="absolute left-0 right-0 w-fit mx-auto text-center top-[36%] py-2 px-4 sm:py-3 sm:px-7 lg:py-5 lg:px-12 backdrop-blur-sm bg-gray-200/70 dark:bg-gray-700/70">
        <p className="font-bold text-xl sm:text-3xl lg:text-5xl">
          <IrradiantLab />
        </p>
        <p>
          Laboratory&nbsp;of&nbsp;Integrated Research&nbsp;on&nbsp;Daylighting
        </p>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose dark:prose-invert mx-auto">
        <h1>Laboratory of Integrated Research on Daylighting</h1>
        <p>
          Our mission is to advance knowledge of daylighting in buildings to
          enhance people&#39;s health, well-being, and performance, while
          minimizing energy consumption.
        </p>
        <p>
          Today, we spend on average 90% of our time indoors. This completely
          flips our relationship to light, compared to an outdoor lifestyle. We
          get much less light during the daytime, and much more in the evening.
          Other aspects of our visual environments have also changed, such as
          the spectral content and distribution of light.
        </p>
        <p>
          By 2050, 68% of the global population is expected to live in cities. A
          strong urban densification is taking place. Buildings become
          increasingly taller. Homes are more compact and sit closer together.
          This densification reduces our access to daylight and impacts our
          window views.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-start-1 ">
            <FactCard
              illustration="/undraw_handcrafts_house.svg"
              fact="90%"
              description="time spent indoors"
            />
          </div>
          <div className="col-start-2">
            <FactCard
              illustration="/undraw_handcrafts_city.svg"
              fact="68%"
              description="living in cities by 2050"
            />
          </div>
        </div>
        <p>
          Mounting evidence shows that these changes in our visual environment
          affect our health, well-being, and performance.
        </p>
        <p>
          Light induces visual and non-visual responses in humans through
          different photoreceptors in the eye. It enables us to see, it
          regulates our body internal clock (circadian rhythm), and it affects
          our alertness level, among other things.
        </p>
        <p>
          A window view also offers many benefits. For instance, it helps us
          create cognitive maps to avoid disorientation and improve memory
          formation and retrieval. It provides a mental portal that can help
          relieve stress and prevent the onset of mental illnesses. It reduces
          the lifetime risk of developing myopia in children.
        </p>
        <p>
          The <IrradiantLab /> brings together insights from different
          disciplines, including engineering, architecture, chronobiology,
          computer science, urban planning, neuroscience, psychophysics, or
          again public health, to further understand and optimize how:
        </p>
        <ul>
          <li>
            windows, buildings, cities, and climate affect our visual
            environment, and
          </li>
          <li>our visual environment affects us.</li>
        </ul>
        {/* TODO: add illustrations */}
        <p>
          To that end, we use both field and laboratory experiments, as well as
          numerical modeling. Our goal is to translate fundamental knowledge
          about human responses to light and the need to reduce energy
          consumption into strategies for the development of a more sustainable
          built environment and innovative daylighting solutions.
        </p>
        <p className=" -mb-14">
          <PictureCopyright
            authorName="rur"
            authorUrl="https://unsplash.com/@issrur"
            pictureUrl="https://unsplash.com/photos/b3TVjgXWSkI"
          />
        </p>
      </div>
    </Layout>
  );
}

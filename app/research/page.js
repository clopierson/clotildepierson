import Image from "next/image";
import backgroundImage from "../../public/background-image-research.jpg";
import ResearchDiagram from "../../components/researchDiagram";
import ProjectCard from "../../components/projectCard";

export const metadata = {
  title: "Research | RadiantLab",
  description:
    "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson focuses on advancing knowledge of daylighting in buildings.",
  openGraph: {
    url: "https://www.clotildepierson.com/research",
    title: "Research | RadiantLab",
    description:
      "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson focuses on advancing knowledge of daylighting in buildings.",
  },
  twitter: {
    title: "Research | RadiantLab",
    description:
      "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson focuses on advancing knowledge of daylighting in buildings.",
  },
};

export default function Research() {
  return (
    <>
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="inside kelley engineering building with large windows and daylight"
          fill={true}
          priority={true}
          placeholder="blur"
          className="object-cover object-[50%_30%]"
        ></Image>
      </picture>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Research</h1>
        <p>
          Our research is generously supported by a number of sources, such as
          the Nuckolls Fund for Lighting Education and the Oregon Partnership
          for Alzheimer&#39;s Research. The main topics that our research
          focuses on include:
        </p>

        <details className="rounded-md p-4 my-4 -mx-4 shadow-md dark:shadow-neutral-700">
          <summary>
            the relation between the natural and built environment and indoor
            light and visual conditions
          </summary>
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
            projectName="Validation of
              spectral simulation tools in the context of ipRGC-influenced light
              responses of building occupants."
            projectDescription="Spectral simulation workflows offer a high potential in evaluating
              building occupants&#39; ipRGC-influenced light (IIL) responses in a
              prospective way (e.g., in predicting what may be the most impactful
              design decisions when it comes to affecting such responses). In view
              of the relative novelty of research in this area, only a few
              simulation tools are available but have not been validated yet. This
              study compared laboratory measurements to simulation outputs to
              determine whether we can rely on spectral simulation tools (i.e., ALFA
              and Lark) to evaluate building occupants&#39; IIL responses and guide
              the design process. The results indicate that Lark outperforms ALFA in
              most cases and shows a simulation error in the &#177;20% range for
              point-in-time indicators."
          />
        </details>

        <details className="rounded-md p-4 my-4 -mx-4 shadow-md dark:shadow-neutral-700">
          <summary>
            the relation between indoor light and visual conditions and building
            occupants
          </summary>
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
            projectDescription="To harvest the benefits of daylight indoors, there is a need to
              predict discomfort from daylight glare. While more than 20 models for
              predicting discomfort from daylight glare have been developed, none
              accurately do it. The inclusion of additional factors in the models
              may improve the predictions. One such factor is the
              socio-environmental context of the observer. This study compared the
              evaluation of discomfort from daylight glare of building occupants in
              four socio-environmental contexts: Chile, Belgium, Japan, and
              Switzerland. The results do not show evidence of an influence of
              socio-environmental context on discomfort from daylight glare."
          />
        </details>

        <details className="rounded-md p-4 my-4 -mx-4 shadow-md dark:shadow-neutral-700">
          <summary>
            the relation between energy consumption and the building occupants
            or the natural and built environment
          </summary>
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
        </details>
      </div>
    </>
  );
}

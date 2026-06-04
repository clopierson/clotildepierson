import Image from "next/image";
import backgroundImage from "../../public/background-image-research.jpg";
import ResearchDiagram from "../../components/researchDiagram";
import ProjectCard from "../../components/projectCard";
import { Button } from "@/components/ui/button";

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

const researchJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ResearchProject",
      name: "Built Environment to Indoor Light and Visual Conditions",
      description: "Investigating how glazing technologies, facade layouts, building geometries, urbanization, and climate change affect indoor light and visual conditions. Develops and validates tools for predicting and optimizing these relationships.",
      funder: [
        { "@type": "Organization", name: "Nuckolls Fund for Lighting Education" },
        { "@type": "Organization", name: "Oregon Partnership for Alzheimer's Research" },
      ],
      member: { "@type": "Person", name: "Clotilde Pierson", url: "https://www.clotildepierson.com/about" },
    },
    {
      "@type": "ResearchProject",
      name: "Indoor Light and Visual Conditions to Building Occupant Health",
      description: "Studying how light exposure affects physical and mental health, circadian rhythms, comfort, cognitive performance, and dementia risk. Develops models and metrics for optimal daylighting strategies.",
      funder: [
        { "@type": "Organization", name: "Nuckolls Fund for Lighting Education" },
        { "@type": "Organization", name: "Oregon Partnership for Alzheimer's Research" },
      ],
      member: { "@type": "Person", name: "Clotilde Pierson", url: "https://www.clotildepierson.com/about" },
    },
    {
      "@type": "ResearchProject",
      name: "Energy Consumption and Daylighting Strategies",
      description: "Examining how urbanization and climate change affect lighting energy consumption, the energy efficiency of daylighting technologies, and strategies to reduce energy use while maintaining visual comfort.",
      member: { "@type": "Person", name: "Clotilde Pierson", url: "https://www.clotildepierson.com/about" },
    },
  ],
};

export default function Research() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(researchJsonLd) }} />
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="inside kelley engineering building with large windows and daylight"
          fill={true}
          priority={true}
          sizes="100vw"
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
          for Alzheimer&apos;s Research. The main topics that our research
          focuses on include:
        </p>
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
        <div className="not-prose flex justify-center my-6">
          <Button
            asChild
            size="lg"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900"
          >
            <a href="/give">Support this research</a>
          </Button>
        </div>

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
        <div className="not-prose flex justify-center my-6">
          <Button
            asChild
            size="lg"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900"
          >
            <a href="/give">Support this research</a>
          </Button>
        </div>

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
        <div className="not-prose flex justify-center my-6">
          <Button
            asChild
            size="lg"
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900"
          >
            <a href="/give">Support this research</a>
          </Button>
        </div>
      </div>
    </>
  );
}

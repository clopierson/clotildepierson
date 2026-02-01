import Image from "next/image";
import backgroundImage from "../../../public/background-image-dial.jpg";
import dialFacadeImage from "../../../public/dial/dial-facade.jpg";
import dialFacadeLegendImage from "../../../public/dial/dial-facade-legend.png";
import dialFloorPlanImage from "../../../public/dial/dial-floor-plan.jpg";
import dialRooftopSensors from "../../../public/dial/dial-rooftop-sensors.jpg";

export const metadata = {
  title: "Daylighting Innovation and Analysis Lab (DIAL) | RadiantLab",
  description:
    "",
  openGraph: {
    url: "https://www.clotildepierson.com/research",
    title: "Daylighting Innovation and Analysis Lab (DIAL) | RadiantLab",
    description:
      "",
  },
  twitter: {
    title: "Daylighting Innovation and Analysis Lab (DIAL) | RadiantLab",
    description:
      "",
  },
};

export default function DIAL() {
  return (
    <>
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="inside kelley engineering building with large windows and daylight"
          fill={true}
          priority={true}
          placeholder="blur"
          className="object-cover object-[50%_50%]"
        ></Image>
      </picture>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Daylighting Innovation and Analysis Lab (DIAL)</h1>
        <p>
          The Daylighting Innovation and Analysis Lab (DIAL) is the first-of-its-kind research facility dedicated to advancing the science and application of daylighting in the built environment. Currently located at Oregon State University, DIAL provides a unique platform for interdisciplinary research, education, and collaboration in the field of daylighting.
        </p>
        <h2>What is DIAL?</h2>
        <p>
            DIAL is a <strong>state-of-the-art mobile laboratory platform</strong> that enables researchers to conduct experiments and gather data on daylighting strategies in real-world settings.
        </p>
        <p>
            DIAL contains two symmetrical temparture-regulated office rooms each equipped with nine electrochromic windows and one electrochromic skylight, dimmable LED lighting, and a suite of sensors to monitor environmental conditions and occupant responses.
        </p>
        <p>Each office room supports up to </p>
        <figure className="my-4">
          <Image
            src={dialFacadeLegendImage}
            alt="exterior view of DIAL facility showing electrochromic windows"
            placeholder="blur"
            className="rounded-md shadow-md dark:shadow-neutral-700"
          ></Image>
          <figcaption className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-300">
            Exterior view of DIAL showing the electrochromic windows.
          </figcaption>
        </figure>
        <details className="rounded-md p-4 my-4 -mx-4 shadow-md dark:shadow-neutral-700">
          <summary>
            What is electrochromic glazing?
          </summary>
            <p>
                Electrochromic glazing is a type of smart glass that can change its tint or opacity in response to an applied voltage. This technology allows for dynamic control of solar heat gain and daylight transmission, enhancing occupant comfort and reducing energy consumption in buildings.
            </p>
            <p>
                In DIAL, the electrochromic windows and skylight can be adjusted to various states, from clear to fully tinted, allowing researchers to study the effects of different daylighting conditions on indoor environments and occupant well-being.
            </p>
          </details>
        <p>
            One observation room allows for experimenters to control and monitor the conditions within the test rooms. The entire facility is housed within a standard shipping container, allowing for easy transportation and deployment to various locations.
        </p>
        <figure className="my-4">
          <Image
            src={dialFloorPlanImage}
            alt="floor plan of DIAL facility showing layout of test rooms and observation room"
            placeholder="blur"
            className="rounded-md shadow-md dark:shadow-neutral-700"
          ></Image>
          <figcaption className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-300">
            Floor plan of DIAL showing the test rooms and observation room.
          </figcaption>
        </figure>
        <p>
            The facility will be able to operate fully off-grid using solar panels and battery storage, allowing for deployment in diverse locations and climates. Networking is provided either through cellular or satellite internet connections, allowing experimenters and participants to work remotely.
        </p>
        <h2>Research Opportunities</h2>
        <p>
            DIAL offers a wide range of research opportunities for exploring the impact of daylighting on human health, productivity, and well-being. Researchers can investigate various daylighting strategies, including window design, shading systems, and lighting controls, to optimize indoor environmental quality.
        </p>
        <p>
            The facility also provides opportunities for testing new technologies and materials related to daylighting, such as electrochromic glazing and advanced lighting systems.
        </p>
        <h2>Collaboration and Education</h2>
        <p>
            DIAL serves as a hub for collaboration among researchers, industry professionals, and educators interested in daylighting and sustainable building design. The facility offers opportunities for interdisciplinary research projects, workshops, and training programs.
        </p>
        <h2>
            Technical Specifications
        </h2>
        <h3>Dimensions</h3>
        <h3>Climate Controls</h3>
        <ul>
          <li><strong>Two independent mini splits:</strong> separately condition each office room</li>
          <li><strong>Heat recovery ventilation (HRV):</strong> Lunos e2 ductless unit for fresh air with efficient heat recovery</li>
        </ul>
        <h3>Rooftop Sensors</h3>
        <ul>
          <li><strong>Solar Monitoring Station (EKO's MS-90 Sensor and MS-80SH Pyranometer):</strong> collects high-quality solar irradiance data such a Direct Normal Irradiance (DNI) and Global Horizontal Irradiance (GHI)</li>
          <li><strong>Spectroradiometer (JETI's Specbos 1211-2):</strong> collects spectral irradiance data in the 300-1100 nm range, allowing accurate daylight spectral measurements</li>
        </ul>
        <figure className="my-4">
          <Image
            src={dialRooftopSensors}
            alt="rooftop sensors on DIAL facility including solar monitoring station and spectroradiometer"
            placeholder="blur"
            className="rounded-md shadow-md dark:shadow-neutral-700"
          ></Image>
          <figcaption className="mt-2 text-sm text-center text-neutral-600 dark:text-neutral-300">
            Rooftop instrumentation on DIAL, including the solar monitoring station and spectroradiometer.
          </figcaption>
        </figure>
        <h3>Indoor Sensors</h3>
        <ul>
          <li><strong>Spectroradiometers (JETI's Spectraval 15x1):</strong> measure not just how much light there is, but what kind of light it is, i.e., how much of each "color" (wavelength) is present (spectral irradiance)</li>
          <li><strong>Illuminance Meters (Konica Minolta's T-10A):</strong> measure how bright the light is for people (the light level your eyes perceive), from very dim to extremely bright (photopic illuminance)</li>
          <li><strong>Cameras (Kodak's PixPro 360):</strong> these 235° field of view cameras are used to monitor rooms and skylights</li>
        </ul>
        <h3>Power</h3>
        <ul>
          <li>Wired/corded power (grid/shore power connection)</li>
          <li>Solar Panels (coming soon)</li>
          <li>Battery Storage (coming soon)</li>
        </ul>
      </div>
    </>
  );
}

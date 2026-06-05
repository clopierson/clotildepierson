import Image from "next/image";
import RadiantLab from "../../components/radiant-lab";
import StructuredData from "../../components/structured-data";
import { createPageMetadata } from "../../lib/metadata";
import backgroundImage from "../../public/background-image-software.jpg";
import hdriImage from "../../public/software/hdri.png";
import larkImage from "../../public/software/lark.png";

const title = "Software | RadiantLab";
const description =
  "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson provides open-source software to advance research.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/software",
  image: "/og/software.jpg",
  imageAlt: "RadiantLab open-source daylighting research software",
});
const softwareJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Lark Spectral Lighting v2.0",
      description:
        "Open-source spectral lighting simulation tool for circadian lighting analysis. Computes photopic and non-visual metrics including alpha-opic values across 9 spectral channels. Runs on Rhino/Grasshopper.",
      url: "https://www.food4rhino.com/en/app/lark-spectral-lighting",
      codeRepository: "https://github.com/larkspectral/Lark_Spectral_Lighting",
      applicationCategory: "ScientificApplication",
      operatingSystem: "Windows, macOS",
      author: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "HDRI Calibration Interface v3.1.0",
      description:
        "Free, open-source desktop application for merging Low Dynamic Range images and generating calibrated High Dynamic Range (HDR) luminance maps for daylighting research.",
      url: "https://github.com/clopierson/HDRICalibrationTool",
      codeRepository: "https://github.com/clopierson/HDRICalibrationTool",
      applicationCategory: "ScientificApplication",
      operatingSystem: "Windows, macOS, Linux",
      author: {
        "@type": "Person",
        name: "Clotilde Pierson",
        url: "https://www.clotildepierson.com/about",
      },
    },
  ],
};

export default function Software() {
  return (
    <>
      <StructuredData data={softwareJsonLd} />
      <picture className="absolute right-0 left-0 h-[70vh] w-screen overflow-hidden">
        <Image
          alt="computer screens with code, keyboard"
          className="object-cover object-[50%_30%]"
          fill={true}
          placeholder="blur"
          priority={true}
          sizes="100vw"
          src={backgroundImage}
        />
      </picture>
      <div className="h-[70vh]" />
      <div className="prose prose-neutral dark:prose-invert mx-auto my-8">
        <h1>Software</h1>
        <p>
          The <RadiantLab /> is dedicated to developing open-source software and
          open-access research. This list includes code that has been authored
          or contributed by team members.
        </p>
        {/* LARK */}
        <article className="my-6 flex flex-col gap-0 border-t border-t-neutral-300 pt-4 sm:flex-row sm:gap-8 sm:pt-0">
          <div className="my-2 sm:mt-8 sm:basis-72">
            <Image
              alt="Lark Spectral Lighting logo"
              height={150}
              placeholder="blur"
              sizes="150px"
              src={larkImage}
              width={150}
            />
          </div>
          <div>
            <h2 className="mt-2 sm:mt-8">Lark v2.0</h2>
            <span className="rounded-full border px-2 py-1 text-xs">
              Rhino/Grasshopper
            </span>{" "}
            <span className="rounded-full border px-2 py-1 text-xs">
              Python
            </span>
            <p>
              The objective of Lark Spectral Lighting is to make circadian
              lighting analysis more accessible to architects, lighting
              designers, researchers, and other interested parties. The
              simulation engine is{" "}
              <a
                href="https://github.com/LBNL-ETA/Radiance"
                rel="noopener noreferrer"
                target="_blank"
              >
                Radiance
              </a>
              . Lark allows for simulations in 9 channels and computes photopic
              (luminance and illuminance values) and circadian/non-visual
              metrics (e.g, alpha-opic values).
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/larkspectral/Lark_Spectral_Lighting"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source code on GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.food4rhino.com/en/app/lark-spectral-lighting"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  User Objects on Food4Rhino
                </a>
              </li>
            </ul>
            <p className="text-sm italic">
              Lark is originally developed as a collaboration between Mehlika
              Inanici, Ph.D. (University of Washington) and ZGF Architects LLP.
              Modifications and new features in Lark Spectral Lighting v2.0 were
              developed by Clotilde Pierson, Ph.D. (EPFL, Oregon State
              University) and Myrta Gkaintatzi-Masouti, M.Sc. (Eindhoven
              University of Technology), with contributions from ZGF Architects
              LLP for the electric lighting simulation workflow and
              contributions from Priji Balakrishnan, Ph.D. and Alstan J.
              Jakubiec, Ph.D. for the implementation of the Perez sky model.
            </p>
          </div>
        </article>
        {/* HDRI Calibation Tool */}
        <article className="my-6 flex flex-col gap-0 border-t border-t-neutral-300 pt-4 sm:flex-row sm:gap-8 sm:pt-0">
          <div className="my-2 sm:mt-8 sm:basis-72">
            <Image
              alt="HDRI Calibration Interface logo"
              height={150}
              placeholder="blur"
              sizes="150px"
              src={hdriImage}
              width={150}
            />
          </div>
          <div>
            <h2 className="mt-2 sm:mt-8">HDRI Calibration Interface v3.1.0</h2>
            <span className="rounded-full border px-2 py-1 text-xs">Tauri</span>{" "}
            <span className="rounded-full border px-2 py-1 text-xs">
              Next.js
            </span>{" "}
            <span className="rounded-full border px-2 py-1 text-xs">Rust</span>
            <p>
              The HDRI Calibration Tool was designed to automate and facilitate
              the process of merging multiple Low Dynamic Range (LDR) images
              together and generating a calibrated High Dynamic Range (HDR)
              image. The tool serves as a user-friendly GUI that runs a pipeline
              of{" "}
              <a
                href="https://www.libraw.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LibRaw
              </a>
              {", "}
              <a
                href="https://github.com/radiance-org/hdrgen"
                rel="noopener noreferrer"
                target="_blank"
              >
                hdrgen
              </a>
              {" and "}
              <a
                href="https://github.com/LBNL-ETA/Radiance"
                rel="noopener noreferrer"
                target="_blank"
              >
                Radiance
              </a>{" "}
              commands so that people of varying technological experiences can
              generate their own calibrated HDR images or luminance maps.
            </p>
            <ul>
              <li>
                <a
                  href="https://github.com/clopierson/HDRICalibrationTool"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Source code and executables on GitHub
                </a>
              </li>
            </ul>
            <p className="text-sm italic">
              The HDRI Calibration Tool is an entirely free, open-sourced
              application developed by a small group of undergraduate Computer
              Science students under the supervision of Dr. Clotilde Pierson at
              Oregon State University. To read more about the process of
              generating an HDR image from LDR image input,{" "}
              <a
                href="https://www.tandfonline.com/doi/full/10.1080/15502724.2019.1684319"
                rel="noopener noreferrer"
                target="_blank"
              >
                check the publication
              </a>
              .
            </p>
          </div>
        </article>
      </div>
    </>
  );
}

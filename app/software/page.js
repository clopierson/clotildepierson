import Image from "next/image";
import backgroundImage from "../../public/background-image-software.jpg";
import larkImage from "../../public/software/lark.png";
import hdriImage from "../../public/software/hdri.png";
import RadiantLab from "../../components/radiantLab";

export const metadata = {
  title: "Software | RadiantLab",
  description:
    "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson provides open-source software to advance research.",
  openGraph: {
    url: "https://www.clotildepierson.com/software",
    title: "Software | RadiantLab",
    description:
      "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson provides open-source software to advance research.",
  },
  twitter: {
    title: "Software | RadiantLab",
    description:
      "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson provides open-source software to advance research.",
  },
};
export default function Software() {
  return (
    <>
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="computer screens with code, keyboard"
          fill={true}
          priority={true}
          placeholder="blur"
          className="object-cover object-[50%_30%]"
        ></Image>
      </picture>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Software</h1>
        <p>
          The <RadiantLab /> is dedicated to developing open-source software and
          open-access research. This list includes code that has been authored
          or contributed by team members.
        </p>
        {/* LARK */}
        <article className="flex flex-col sm:flex-row gap-0 sm:gap-8 border-t border-t-neutral-300 pt-4 sm:pt-0 my-6">
          <div className="sm:basis-72 my-2 sm:mt-8">
            <Image
              src={larkImage}
              alt=""
              placeholder="blur"
              width={150}
              height={150}
            />
          </div>
          <div>
            <h2 className="mt-2 sm:mt-8">Lark v2.0</h2>
            <span className="border rounded-full py-1 px-2 text-xs">
              Rhino/Grasshopper
            </span>{" "}
            <span className="border rounded-full py-1 px-2 text-xs">
              Python
            </span>
            <p>
              The objective of Lark Spectral Lighting is to make circadian
              lighting analysis more accessible to architects, lighting
              designers, researchers, and other interested parties. The
              simulation engine is{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LBNL-ETA/Radiance"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/larkspectral/Lark_Spectral_Lighting"
                >
                  Source code on GitHub
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.food4rhino.com/en/app/lark-spectral-lighting"
                >
                  User Objects on Food4Rhino
                </a>
              </li>
            </ul>
            <p className="italic text-sm">
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
        <article className="flex flex-col sm:flex-row gap-0 sm:gap-8 border-t border-t-neutral-300 pt-4 sm:pt-0 my-6">
          <div className="sm:basis-72 my-2 sm:mt-8">
            <Image
              src={hdriImage}
              alt=""
              placeholder="blur"
              width={150}
              height={150}
            />
          </div>
          <div>
            <h2 className="mt-2 sm:mt-8">HDRI Calibration Interface v3.0.0</h2>
            <span className="border rounded-full py-1 px-2 text-xs">
              Tauri
            </span>{" "}
            <span className="border rounded-full py-1 px-2 text-xs">
              Next.js
            </span>{" "}
            <span className="border rounded-full py-1 px-2 text-xs">Rust</span>
            <p>
              The HDRI Calibration Tool was designed to automate and facilitate
              the process of merging multiple Low Dynamic Range (LDR) images
              together and generating a calibrated High Dynamic Range (HDR)
              image. The tool serves as a user-friendly GUI that runs a pipeline
              of{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.libraw.org/"
              >
                LibRaw
              </a>
              {", "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/radiance-org/hdrgen"
              >
                hdrgen
              </a>
              {" and "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LBNL-ETA/Radiance"
              >
                Radiance
              </a>{" "}
              commands so that people of varying technological experiences can
              generate their own calibrated HDR images or luminance maps.
            </p>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/clopierson/HDRICalibrationTool"
                >
                  Source code and executables on GitHub
                </a>
              </li>
            </ul>
            <p className="italic text-sm">
              The HDRI Calibration Tool is an entirely free, open-sourced
              application developed by a small group of undergraduate Computer
              Science students under the supervision of Dr. Clotilde Pierson at
              Oregon State University. To read more about the process of
              generating an HDR image from LDR image input,{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tandfonline.com/doi/full/10.1080/15502724.2019.1684319"
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

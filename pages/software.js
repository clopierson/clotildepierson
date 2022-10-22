import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-software.jpg";
import larkImage from "../public/software/lark.png";
import RadiantLab from "../components/radiantLab";

export default function Research() {
  return (
    <Layout
      pageTitle="Software | RadiantLab"
      pageDescription="The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson works and provides open-source software to advance research."
      pageUrl="https://www.clotildepierson.com/software"
      heroImageAuthorUrl="https://unsplash.com/@ffstop"
      heroImageUrl="https://unsplash.com/photos/DuHKoV44prg"
      heroImageAuthor="Fotis Fotopoulos"
    >
      <div className="overflow-hidden absolute top-18 left-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="computer screens with code, keyboard"
          placeholder="blur"
          layout="fill"
          priority="true"
          objectFit="cover"
          objectPosition="50% 30%"
        ></Image>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Software</h1>
        <p>
          The <RadiantLab /> is dedicated to developing open-source software and
          open-access research. This list includes code that has been authored
          or contributed by team members.
        </p>
        {/* LARK */}
        <article className="flex flex-col sm:flex-row gap-0 sm:gap-8 border-t-[1px] border-t-neutral-300 pt-4 sm:pt-0">
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
            <span className="border-[1px] rounded-full py-1 px-2 text-xs">
              Rhino/Grasshopper
            </span>{" "}
            <span className="border-[1px] rounded-full py-1 px-2 text-xs">
              Python
            </span>
            <p>
              The objective of Lark Spectral Lighting is to make circadian
              lighting analysis more accessible to architects, lighting
              designers, researchers, and other interested parties. The
              simulation engine is Radiance. Lark allows for simulations in 9
              channels and computes photopic (luminance and illuminance values)
              and circadian/non-visual metrics (e.g, alpha-opic values).
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
      </div>
    </Layout>
  );
}

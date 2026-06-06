import Image from "next/image";
import Experience from "../../components/experience";
import RadiantLab from "../../components/radiant-lab";
import Services from "../../components/service";
import Socials from "../../components/socials";
import StructuredData from "../../components/structured-data";
import Teaching from "../../components/teaching";
import { createPageMetadata } from "../../lib/metadata";
import profilePic from "../../public/team/pierson.jpg";

const title = "Clotilde Pierson | RadiantLab";
const description =
  "Summary of Dr. Clotilde Pierson: education, work history, teaching, and services. Clotilde is the head of the Daylighting Research Laboratory (RadiantLab).";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/about",
  image: "/og/about.jpg",
  imageAlt: "Portrait of Dr. Clotilde Pierson",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Clotilde Pierson",
  givenName: "Clotilde",
  familyName: "Pierson",
  jobTitle: "Assistant Professor of Architectural Engineering",
  email: "clotilde.pierson@oregonstate.edu",
  url: "https://www.clotildepierson.com/about",
  affiliation: [
    {
      "@type": "EducationalOrganization",
      name: "Oregon State University",
      department: "School of Civil and Construction Engineering",
      url: "https://oregonstate.edu",
    },
    {
      "@type": "ResearchOrganization",
      name: "Daylighting Research Laboratory (RadiantLab)",
      url: "https://www.clotildepierson.com",
    },
  ],
  sameAs: [
    "https://orcid.org/0000-0001-7847-6568",
    "https://scholar.google.com/citations?user=X8aroEgAAAAJ&hl=fr&oi=ao",
    "https://www.researchgate.net/profile/Clotilde-Pierson",
    "https://www.linkedin.com/in/clotilde-pierson/",
    "https://x.com/PiersonClotilde",
    "https://cce.oregonstate.edu/people/clotilde-pierson",
  ],
  knowsAbout: [
    "Daylighting",
    "Architectural Engineering",
    "Circadian Lighting",
    "Building Performance Simulation",
    "Visual Comfort",
    "Glare Research",
    "Non-visual Effects of Light",
  ],
};

export default function About() {
  return (
    <>
      <StructuredData data={personJsonLd} />
      <div className="mt-6 grid grid-flow-row auto-rows-min items-center sm:grid-cols-10 sm:grid-rows-1">
        <div className="row-start-1 sm:col-span-5 sm:col-start-1 md:col-span-4 md:col-start-2">
          <div className="prose prose-neutral dark:prose-invert">
            <h1>Clotilde Pierson</h1>
            <p>
              Dr. Pierson is the Principal Investigator of the&nbsp;
              <RadiantLab /> and an Assistant Professor of Architectural
              Engineering in the School of Civil and Construction Engineering at{" "}
              <a
                href="https://cce.oregonstate.edu/people/clotilde-pierson"
                rel="noreferrer noopener"
                target="_blank"
              >
                Oregon State University
              </a>
              .
            </p>
            <div className="text-sm">
              <Socials />
            </div>
          </div>
        </div>
        <div className="row-start-2 mt-6 place-self-center sm:col-span-4 sm:col-start-7 sm:row-start-1 md:col-start-6">
          <Image
            alt="picture of Dr. Clotilde Pierson"
            className="rounded-full"
            height={200}
            placeholder="blur"
            sizes="200px"
            src={profilePic}
            width={200}
          />
        </div>
        <div className="row-start-3 mt-6 self-start sm:col-span-10 sm:col-start-1 sm:row-start-2 md:col-span-8 md:col-start-2">
          <div className="prose prose-neutral dark:prose-invert">
            <h2>In a Nutshell</h2>
            <ul>
              <li>
                Advocate for daylighting in buildings{" "}
                <span aria-label="sun emoji" role="img">
                  ☀️
                </span>
              </li>
              <li>
                Committed to lifelong learning{" "}
                <span aria-label="female teacher and student emoji" role="img">
                  👩‍🏫
                </span>
              </li>
              <li>
                Passionate about using innovative technologies in teaching and
                research{" "}
                <span aria-label="female coder emoji" role="img">
                  👩‍💻
                </span>
              </li>
              <li>
                Excited about data analysis and statistics{" "}
                <span aria-label="bar chart emoji" role="img">
                  📊
                </span>
              </li>
              <li>
                Belgian roots, strong research collaborations with EU network{" "}
                <span aria-label="belgian and european flags" role="img">
                  🇧🇪 🇪🇺
                </span>
              </li>
              <li>
                Yogi, hiker, skier{" "}
                <span aria-label="om symbol" role="img">
                  🕉️
                </span>
              </li>
              <li>
                Historical and realist literature/movie geek{" "}
                <span aria-label="movies and books emojis" role="img">
                  🎬 📚
                </span>
              </li>
            </ul>
            <Experience />
            <Teaching />
            <Services />
          </div>
        </div>
      </div>
    </>
  );
}

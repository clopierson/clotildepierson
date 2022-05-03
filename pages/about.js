import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../public/team/pierson.jpg";
import Teaching from "../components/teaching";
import Experience from "../components/experience";
import Services from "../components/service";
import Socials from "../components/socials";
import RadiantLab from "../components/radiantLab";

export default function About() {
  return (
    <Layout
      pageTitle="Clotilde Pierson | RadiantLab"
      pageDescription="Summary of Dr. Clotilde Pierson: education, work history, teaching, and services. Clotilde is the head of the Daylighting Research Laboratory (RadiantLab)."
      pageUrl="https://www.clotildepierson.com/about"
    >
      <div className="grid auto-rows-min grid-flow-row sm:grid-cols-10 sm:grid-rows-1 items-center mt-6">
        <div className="row-start-1 sm:col-start-1 sm:col-span-5 md:col-start-2 md:col-span-4">
          <div className="prose prose-neutral dark:prose-invert">
            <h1>Clotilde Pierson</h1>
            <p>
              Dr. Pierson is the Principal Investigator of the&nbsp;
              <RadiantLab /> and an Assistant Professor of Architectural
              Engineering in the School of Civil and Construction Engineering at{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://cce.oregonstate.edu/people/clotilde-pierson"
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
        <div className="mt-6 row-start-2 sm:row-start-1 sm:col-start-7 sm:col-span-4 md:col-start-6 place-self-center">
          <Image
            className="rounded-full"
            src={profilePic}
            alt="picture of Dr. Clotilde Pierson"
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
        <div className="row-start-3 sm:row-start-2 sm:col-start-1 sm:col-span-10 md:col-start-2 md:col-span-8mt-2 self-start mt-6">
          <div className="prose prose-neutral dark:prose-invert">
            <h2>In a Nutshell</h2>
            <ul>
              <li>
                Advocate for daylighting in buildings{" "}
                <span role="img" aria-label="sun emoji">
                  ☀️
                </span>
              </li>
              <li>
                Committed to lifelong learning{" "}
                <span role="img" aria-label="female teacher and student emoji">
                  👩‍🏫
                </span>
              </li>
              <li>
                Passionate about using innovative technologies in teaching and
                research{" "}
                <span role="img" aria-label="female coder emoji">
                  👩‍💻
                </span>
              </li>
              <li>
                Excited about data analysis and statistics{" "}
                <span role="img" aria-label="bar chart emoji">
                  📊
                </span>
              </li>
              <li>
                Belgian roots, strong research collaborations with EU network{" "}
                <span role="img" aria-label="belgian and european flags">
                  🇧🇪 🇪🇺
                </span>
              </li>
              <li>
                Yogi, hiker, skier{" "}
                <span role="img" aria-label="om symbol">
                  🕉️
                </span>
              </li>
              <li>
                Historical and realist literature/movie geek{" "}
                <span role="img" aria-label="movies and books emojis">
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
    </Layout>
  );
}

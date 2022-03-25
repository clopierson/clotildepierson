import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../public/clopierson2022.jpg";
import Teaching from "../components/teaching";

export default function About() {
  return (
    <Layout
      pageTitle="Clotilde Pierson | Integrated Research on Daylighting Lab"
      pageDescription="Short summary of Clotilde Pierson and her work"
    >
      <div class="grid auto-rows-min grid-flow-row sm:grid-cols-10 sm:grid-rows-1 items-center mt-6">
        <div class="row-start-1 sm:col-start-1 sm:col-span-5 md:col-start-2 md:col-span-4">
          <div class="prose dark:prose-invert">
            <h1>Clotilde Pierson</h1>
            <p>
              Dr. Pierson is the Principal Investigator of the Irradiant Lab and
              an Assistant Professor of Architectural Engineering in the School
              of Civil and Construction Engineering at Oregon State University.
            </p>
            <p>
              <a
                href="https://goo.gl/maps/5w7bn4iLvLNsjUjM6"
                target="_blank"
                rel="noreferrer noopener"
              >
                Office Owen 305
              </a>
            </p>
            <p>
              <a href="mailto:clotilde.pierson@oregonstate.edu">Email</a> ·{" "}
              <a
                href="https://www.linkedin.com/in/clotilde-pierson/"
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>{" "}
              ·{" "}
              <a
                href="https://twitter.com/PiersonClotilde"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </p>
          </div>
        </div>
        <div class="mt-6 row-start-2 sm:row-start-1 sm:col-start-7 sm:col-span-4 md:col-start-6 place-self-center">
          <Image
            class="rounded-full"
            src={profilePic}
            alt="Picture of Clotilde Pierson"
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
        <div class="row-start-3 sm:row-start-2 sm:col-start-1 sm:col-span-10 md:col-start-2 md:col-span-8mt-2 self-start mt-6">
          <div class="prose dark:prose-invert">
            <h2>In a Nutshell</h2>
            <ul>
              <li>
                Advocate for daylighting in buildings{" "}
                <span role="img" aria-label="sun emoji">
                  ☀️
                </span>
              </li>
              <li>
                Passionate about learning new skills and using innovative
                technologies (especially in teaching){" "}
                <span role="img" aria-label="female coder emoji">
                  👩‍💻
                </span>
                {/* TODO: rework teaching bit */}
              </li>
              <li>
                Excited about data analysis and statistics{" "}
                <span role="img" aria-label="bar chart emoji">
                  📊
                </span>
              </li>
              <li>
                Belgian roots, with European research collaborations{" "}
                {/* TODO: rework */}
                <span role="img" aria-label="belgian and european flags">
                  🇧🇪 🇪🇺
                </span>
              </li>
              {/* <li>
                <a href="https://www.epfl.ch/labs/lipid/">EPFL</a> and{" "}
                <a href="https://uclouvain.be/en/research-institutes/lab/archi-cli">
                  UCLouvain
                </a>{" "}
                Alumni
              </li>
              <li>Based in the Pacific Northwest (US)</li> */}
              <li>Yogi, Hiker, Skier</li> {/* TODO: rework + add movies books*/}
            </ul>
            <h2>Education and Work History</h2>
            <p>Todo..</p>
            <Teaching />
            <h2>Service</h2>
            <p>Todo..</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

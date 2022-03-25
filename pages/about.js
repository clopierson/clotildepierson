import Socials from "../components/socials";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../public/clopierson2022.jpg";

export default function About() {
  return (
    <Layout
      pageTitle="Clotilde Pierson | Integrated Research on Daylighting Lab"
      pageDescription="Short summary of Clotilde Pierson and her work"
    >
      <div class="grid auto-rows-min grid-flow-row sm:grid-cols-10 sm:grid-rows-1 items-center mt-6">
        <div class="row-start-1 sm:col-start-1 sm:col-span-5 md:col-start-2 md:col-span-4">
          <div class="prose prose-h1:mt-2 prose-p:my-2 prose-sm dark:prose-invert">
            <h1 class="text-2xl my-2">Hi! I'm Clotilde.</h1>
            <p>Assistant Professor in Architectural Engineering</p>
            <p>Culbertson Faculty Scholar</p>
            <p>
              School of Civil and Construction Engineering, Oregon State
              University
            </p>
            <p>
              <a
                href="https://goo.gl/maps/5w7bn4iLvLNsjUjM6"
                target="_blank"
                rel="noreferrer noopener"
              >
                Office Owen 305
              </a>{" "}
              · <a href="mailto:clotilde.pierson@oregonstate.edu">Email</a>
            </p>
            <Socials />
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
        <div class="row-start-3 sm:row-start-2 sm:col-start-1 sm:col-span-10 md:col-start-2 md:col-span-8mt-2 self-start mt-2">
          <div class="prose prose-sm dark:prose-invert">
            <h2 class="mt-6">In a Nutshell</h2>
            <ul class="list-disc list-inside">
              <li>Daylight and Built Environment researcher</li>
              <li>Architectural Engineering teacher</li>
              <li>
                Head of the <b>Holistic Urban Daylight Laboratory</b> (HUDL)
              </li>
              <li>
                <a href="https://www.epfl.ch/labs/lipid/">EPFL</a> and{" "}
                <a href="https://uclouvain.be/en/research-institutes/lab/archi-cli">
                  UCLouvain
                </a>{" "}
                Alumni
              </li>
              <li>Based in the Pacific Northwest (US)</li>
              <li>Yogi, Runner, Hiker, Skier</li>
            </ul>
            <h2>Teaching</h2>
            <p>Todo..</p>
            <h2>Education and Work History</h2>
            <p>Todo..</p>
            <h2>Affiliations</h2>
            <p>Todo..</p>
            <h2>Service and Awards</h2>
            <p>Todo..</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

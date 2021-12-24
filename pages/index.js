import Socials from "../components/socials";
import Layout from "../components/layout";
import Image from "next/image";
import profilePic from "../public/clopierson.jpeg";

export default function Home() {
  return (
    <Layout
      pageTitle="Clotilde Pierson"
      pageDescription="Short summary of Clotilde Pierson and her work"
    >
      <div class="grid grid-cols-3 grid-rows-1 items-center justify-items-center my-4">
        <div class="col-start-1 col-span-2">
          <h1 class="text-xl my-2">Hi! I'm Clotilde.</h1>
          <Socials />
        </div>
        <div class="col-start-3 col-span-1">
          <Image class="rounded-full"
            src={profilePic}
            alt="Picture of Clotilde Pierson"
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
      </div>

      <p>
        I am an Assistant Professor in Lighting Design at Oregon State
        University.
      </p>
    </Layout>
  );
}

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
      <div class="grid grid-cols-1 grid-rows-3 sm:grid-cols-10 sm:grid-rows-1 items-center justify-items-center sm:justify-items-start my-4">
        <div class="row-start-1 sm:col-start-1 sm:col-span-5 md:col-start-2 md:col-span-3">
          <h1 class="text-2xl my-2">Hi! I'm Clotilde.</h1>
          <p class="text-sm">Assistant Professor in Lighting Design</p>
          <p class="mb-2 text-sm">Oregon State University</p>
          <Socials />
        </div>
        <div class="row-start-2 sm:row-start-1 sm:col-start-7 sm:col-span-4 md:col-start-6 place-self-center">
          <Image
            class="rounded-full"
            src={profilePic}
            alt="Picture of Clotilde Pierson"
            placeholder="blur"
            width={200}
            height={200}
          />
        </div>
        <div class="row-start-3 sm:row-start-2 sm:col-start-1 sm:col-span-10 md:col-start-2 md:col-span-8mt-2">
          <p>
            About stuff.
          </p>
        </div>
      </div>
    </Layout>
  );
}

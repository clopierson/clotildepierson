import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-research.jpg";

export default function Research() {
  return (
    <Layout
      pageTitle="Research | Integrated Research on Daylighting Lab"
      pageDescription="Research focus and topics of the Integrated Research on Daylighting Lab."
      pageUrl="https://clotildepierson.com/research"
    >
      <div className="overflow-hidden absolute top-18 left-0 w-screen h-[70vh] -z-1 ">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          placeholder="blur"
          layout="fill"
          priority="true"
          objectFit="cover"
          quality={100}
        ></Image>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose dark:prose-invert mx-auto">
        <h1>Research Focus</h1>
        <p>Coming soon!</p>
      </div>
    </Layout>
  );
}

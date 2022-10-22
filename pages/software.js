import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-software.jpg";
import larkImage from "../public/software/lark.png";

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
        <article className="grid grid-cols-2">
          <div>
            <Image src={larkImage} />
          </div>
          <div>
            <h2>Lark Spectral Lighting</h2>
            <p></p>
          </div>
        </article>
      </div>
    </Layout>
  );
}

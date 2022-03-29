import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-team.jpg";
import PictureCopyright from "../components/pictureCopyright";

// import Recruiting from "../components/recruiting";

export default function ReseTeamarch() {
  return (
    <Layout
      pageTitle="Team | Integrated Research on Daylighting Lab"
      pageDescription="Lists current and former staff of the Integrated Research on Daylighting Lab (irradiant lab)."
      pageUrl="https://clotildepierson.com/team"
    >
      <div className="overflow-hidden absolute top-18 left-0 w-screen h-[70vh] -z-1 ">
        <Image
          src={backgroundImage}
          alt="Urban Daylight"
          placeholder="blur"
          priority="true"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose dark:prose-invert mx-auto">
        <h1>Team</h1>
        <p>Coming soon!</p>
        <p className=" -mb-14">
          <PictureCopyright
            authorName="Chang Duong"
            authorUrl="https://unsplash.com/@iamchang"
            pictureUrl="https://unsplash.com/photos/Sj0iMtq_Z4w"
          />
        </p>
      </div>
    </Layout>
  );
}

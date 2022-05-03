import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-team.jpg";
import Recruiting from "../components/phdPositions2022";
import SpontaneousApplication from "../components/spontaneousApplication";
import TeamCard from "../components/teamCard";

// default pictures if none:
// "/team-male.svg"
// "/team-female.svg"

// TODO: make placeholder="blur" work in TeamCard (problem is that image is not considered static import)

export const principalInvestigator = [
  {
    name: "Clotilde Pierson",
    description: "/about",
    picture: "/team/pierson.jpg",
  },
];
export const postdocs = [];
export const phdStudents = [];
export const masterStudents = [];
export const undergradStudents = [
  {
    name: "Paul Peter Matipwiri",
    email: "matipwpa@oregonstate.edu",
    description:
      "Paul is completing his Architectural Engineering degree with subspecialty in lighting and HVAC design, in the College of Engineering at Oregon State University. His interest in lighting lies in leveraging architectural spaces/buildings to determine suitable lighting systems that will enhance the user-experience of those spaces. His project involves working on window-view quality analysis by studying datasets of office worker&#39;s field of view.",
    picture: "/team/matipwiri.jpg",
  },
  {
    name: "Spencer Kime",
    email: "kimesp@oregonstate.edu",
    description:
      "Spencer is completing his Architectural Engineering degree with a focus on lighting design, in the College of Engineering at Oregon State University. He has a broad field of study with occupant comfort in terms of lighting, HVAC, and envelope design, and is assisting research focused on lighting design and user experience. He uses field of view data sets to determine window view quality and its effects on building occupants.",
    picture: "/team-male.svg",
  },
];

export default function ReseTeamarch() {
  return (
    <Layout
      pageTitle="Team | RadiantLab"
      pageDescription="Current openings (jobs), and current and former staff of the Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson."
      pageUrl="https://www.clotildepierson.com/team"
      heroImageAuthorUrl="http://www.karlmaasdam.com/"
      heroImageUrl="https://oregonstate.edu/"
      heroImageAuthor="Karl Maasdam"
    >
      <div className="overflow-hidden absolute top-18 left-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="teammates walking on campus, talking"
          placeholder="blur"
          priority="true"
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Team</h1>
        <Recruiting />
        {principalInvestigator.length !== 0 && (
          <div>
            <h2>Principal Investigator</h2>
            {principalInvestigator.map((pi) => (
              <TeamCard
                key={pi.name}
                name={pi.name}
                description={pi.description}
                email={pi.email}
                picture={pi.picture}
              />
            ))}
          </div>
        )}
        {postdocs.length !== 0 && (
          <div>
            <h2>Postdocs</h2>
            {postdocs.map((postdoc) => (
              <TeamCard
                key={postdoc.name}
                name={postdoc.name}
                description={postdoc.description}
                email={postdoc.email}
                picture={postdoc.picture}
              />
            ))}
          </div>
        )}
        {phdStudents.length !== 0 && (
          <div>
            <h2>PhD Candidates</h2>
            {phdStudents.map((phd) => (
              <TeamCard
                key={phd.name}
                name={phd.name}
                description={phd.description}
                email={phd.email}
                picture={phd.picture}
              />
            ))}
          </div>
        )}
        {masterStudents.length !== 0 && (
          <div>
            <h2>Master Students</h2>
            {masterStudents.map((master) => (
              <TeamCard
                key={master.name}
                name={master.name}
                description={master.description}
                email={master.email}
                picture={master.picture}
              />
            ))}
          </div>
        )}
        {undergradStudents.length !== 0 && (
          <div>
            <h2>Undergraduate Students</h2>
            {undergradStudents.map((undergrad) => (
              <TeamCard
                key={undergrad.name}
                name={undergrad.name}
                description={undergrad.description}
                email={undergrad.email}
                picture={undergrad.picture}
              />
            ))}
          </div>
        )}
        <div className="my-12"></div>
        <SpontaneousApplication />
      </div>
    </Layout>
  );
}

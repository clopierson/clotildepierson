import Layout from "../components/layout";
import Image from "next/image";
import backgroundImage from "../public/background-image-team.jpg";
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
    pronouns: "She/Her",
    picture: "/team/pierson_alt.jpg",
  },
];
export const postdocs = [];
export const phdStudents = [];
export const masterStudents = [
  {
    name: "Alfiya Orman",
    email: "ormanova@oregonstate.edu",
    pronouns: "She/They",
    description:
      "Alfiya is working on her master's degree in Civil Engineering with focus on lighting in built spaces. She researches the validation of spectral simulation tools and integration of daylighting and electric lighting systems in living spaces. They are interested in the effects of lighting on human health and energy consumption.",
    picture: "/team/orman.jpg",
  },
];
export const undergradStudents = [];
export const alumni = [
  {
    name: "Paul Peter Matipwiri",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/matipwiri.jpg",
  },
  {
    name: "Spencer Kime",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/kime.jpg",
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
          objectPosition="40% 90%"
        ></Image>
      </div>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Team</h1>
        {principalInvestigator.length !== 0 && (
          <div>
            <h2>Principal Investigator</h2>
            {principalInvestigator.map((pi) => (
              <TeamCard
                key={pi.name}
                name={pi.name}
                pronouns={pi.pronouns}
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
                pronouns={postdoc.pronouns}
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
                pronouns={phd.pronouns}
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
                pronouns={master.pronouns}
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
                pronouns={undergrad.pronouns}
                description={undergrad.description}
                email={undergrad.email}
                picture={undergrad.picture}
              />
            ))}
          </div>
        )}
        <div className="my-12"></div>
        <SpontaneousApplication />
        {alumni.length !== 0 && (
          <div>
            <h2>Alumni</h2>
            {alumni.map((alumni) => (
              <TeamCard
                key={alumni.name}
                name={alumni.name}
                pronouns={alumni.pronouns}
                description={alumni.description}
                picture={alumni.picture}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

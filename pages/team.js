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
export const phdStudents = [
  {
    name: "Kianoush Vali",
    email: "valik@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "Kianoush has a background in building engineering (B.Sc. in Architectural Engineering). He is now working on his Ph.D. degree in Civil Engineering (Architectural Engineering concentration) focusing on lighting in buildings. His research aims to determine the impact of architectural lighting design, and especially daylighting design, on the sleep and health of building occupants.",
    picture: "/team/vali.jpg",
  },
];
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
export const undergradStudents = [
  {
    name: "Hunter Elliott",
    email: "elliothu@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "Hunter is studying toward a B.Sc. in Architectural Engineering with a specialty in lighting design at Oregon State University. His interests are in creating lighting solutions for buildings that properly balance aesthetic lighting design with human-centric lighting design. As a research assistant, Hunter is working on developing new learning materials to study daylighting design as part of a Nuckolls Fund Grant.",
    picture: "/team/elliott.jpg",
  },
  {
    name: "Lia Larson",
    email: "larsolia@oregonstate.edu",
    pronouns: "She/Her",
    description:
      "Lia is an undergraduate student pursuing a major in Architectural Engineering with a specialized focus in lighting design. With a strong dedication to her field, she works towards enhancing architectural designs by maximizing natural lighting solutions that are both sustainable and visually appealing. As a research assistant, Lia is working on developing new learning materials to study daylighting design as part of a Nuckolls Fund Grant.",
    picture: "/team/larson.jpg",
  },
  {
    name: "Colin Peterson",
    email: "petecoli@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "As an undergraduate student at Oregon State University, Colin is currently pursuing a degree in Architectural Engineering. Having a natural inclination towards being a night owl, he has had the opportunity to witness firsthand how light has the ability to completely transform a dark and seemingly lifeless space. This phenomenon has sparked his curiosity and fueled his passion for delving deeper into the intricate relationship between light and shade, and exploring how it can be harnessed to create dynamic and captivating environments. As a research assistant, Colin is developing new learning materials to study daylighting design as part of a Nuckolls Fund Grant.",
    picture: "/team/peterson.jpg",
  },
];
export const alumni = [
  {
    name: "Spencer Kime",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/kime.jpg",
  },
  {
    name: "Paul Peter Matipwiri",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/matipwiri.jpg",
  },
  {
    name: "Logan Verplancke",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/verplancke.jpg",
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
            <h2>PhD Students</h2>
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

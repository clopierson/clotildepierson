import Image from "next/image";
import SpontaneousApplication from "../../components/spontaneous-application";
import TeamCard from "../../components/team-card";
import { createPageMetadata } from "../../lib/metadata";
import backgroundImage from "../../public/backgroung-image-team.jpg";

// default pictures if none:
// "/team-male.svg"
// "/team-female.svg"

const title = "Team | RadiantLab";
const description =
  "Current openings (jobs), and current and former staff of the Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/team",
  image: "/og/team.jpg",
  imageAlt: "RadiantLab team at Oregon State University",
});

export const principalInvestigator = [
  {
    name: "Clotilde Pierson",
    description: "/about",
    pronouns: "She/Her",
    picture: "/team/pierson.jpg",
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
    name: "Yahya Sogodok",
    email: "sogodoky@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "Yahya holds an MS degree in Electrical Engineering and is currently pursuing another MS in the field of Civil Engineering, with a concentration in Architectural Engineering. His research is focused on studying the non-visual responses to light of building occupants under daylight conditions, with an overarching goal to enhance the health and well-being of individuals who reside or work in buildings.",
    picture: "/team/sogodok.jpg",
  },
  {
    name: "Nima Ghorbanian Matloob",
    email: "ghorbann@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "Nima holds a BS degree in Sustainable Building Engineering from Sapienza University of Rome, Italy, and is currently pursuing a MS degree in Civil Engineering, with a concentration area in Architectural Engineering. His research focuses on studying the non-visual effects of daylight on building occupants and energy consumption.",
    picture: "/team/ghorbanian.jpg",
  },
];
export const undergradStudents = [
  {
    name: "Isaiah Pileggi-Epps",
    email: "pileggis@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "Isaiah is working on his bachelor's degree in Civil Engineering. He is interested in examining the relationships between humans and the built environment, specifically the human experience within built structures. In his research project, Isaiah focuses on how the lighting conditions and viewing experience affect the building occupants.",
    picture: "/team/pileggi-epps.jpg",
  },
  {
    name: "Keean Balsiger",
    email: "balsigke@oregonstate.edu",
    pronouns: "He/Him",
    description:
      "Keean is a bachelors student studying architectural engineering with a focus in lighting design. He is interested in the interface between the built environment and human health. He looks forward to researching the non-visual effects of light and peoples well-being.",
    picture: "/team/balsiger.jpg",
  },
];
export const alumni = [
  {
    name: "Alfiya Orman",
    pronouns: "She/They",
    description:
      "Graduated with a MS in Civil Engineering. Started working for the Pacific Northwest National Laboratory (PNNL).",
    picture: "/team/orman.jpg",
  },
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
  {
    name: "Hunter Elliott",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/elliott.jpg",
  },
  {
    name: "Lia Larson",
    pronouns: "She/Her",
    description: "Undergraduate Research Assistant",
    picture: "/team/larson.jpg",
  },
  {
    name: "Colin Peterson",
    pronouns: "He/Him",
    description: "Undergraduate Research Assistant",
    picture: "/team/peterson.jpg",
  },
];

export default function Team() {
  return (
    <>
      <picture className="absolute right-0 left-0 h-[70vh] w-screen overflow-hidden">
        <Image
          alt="teammates smiling, talking about project"
          className="object-cover object-[50%_20%]"
          fill={true}
          placeholder="blur"
          priority={true}
          sizes="100vw"
          src={backgroundImage}
        />
      </picture>
      <div className="h-[70vh]" />
      <div className="prose prose-neutral dark:prose-invert mx-auto my-8">
        <h1>Team</h1>
        {principalInvestigator.length !== 0 && (
          <div>
            <h2>Principal Investigator</h2>
            {principalInvestigator.map((pi) => (
              <TeamCard
                description={pi.description}
                email={pi.email}
                key={pi.name}
                name={pi.name}
                picture={pi.picture}
                pronouns={pi.pronouns}
              />
            ))}
          </div>
        )}
        {postdocs.length !== 0 && (
          <div>
            <h2>Postdocs</h2>
            {postdocs.map((postdoc) => (
              <TeamCard
                description={postdoc.description}
                email={postdoc.email}
                key={postdoc.name}
                name={postdoc.name}
                picture={postdoc.picture}
                pronouns={postdoc.pronouns}
              />
            ))}
          </div>
        )}
        {phdStudents.length !== 0 && (
          <div>
            <h2>PhD Students</h2>
            {phdStudents.map((phd) => (
              <TeamCard
                description={phd.description}
                email={phd.email}
                key={phd.name}
                name={phd.name}
                picture={phd.picture}
                pronouns={phd.pronouns}
              />
            ))}
          </div>
        )}
        {masterStudents.length !== 0 && (
          <div>
            <h2>Master Students</h2>
            {masterStudents.map((master) => (
              <TeamCard
                description={master.description}
                email={master.email}
                key={master.name}
                name={master.name}
                picture={master.picture}
                pronouns={master.pronouns}
              />
            ))}
          </div>
        )}
        {undergradStudents.length !== 0 && (
          <div>
            <h2>Undergraduate Students</h2>
            {undergradStudents.map((undergrad) => (
              <TeamCard
                description={undergrad.description}
                email={undergrad.email}
                key={undergrad.name}
                name={undergrad.name}
                picture={undergrad.picture}
                pronouns={undergrad.pronouns}
              />
            ))}
          </div>
        )}
        <div className="my-12" />
        <SpontaneousApplication />
        {alumni.length !== 0 && (
          <div>
            <h2>Alumni</h2>
            {alumni.map((alumni) => (
              <TeamCard
                description={alumni.description}
                key={alumni.name}
                name={alumni.name}
                picture={alumni.picture}
                pronouns={alumni.pronouns}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

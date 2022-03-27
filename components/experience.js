import ExperienceCard from "./experienceCard";

export const phdMobility = [
  {
    name: "École polytechnique fédérale de Lausanne",
    location: "Switzerland",
    length: "one year",
  },
  {
    name: "Universidad del Bío-Bío",
    location: "Chile",
    length: "one month",
  },
  {
    name: "Tokai University",
    location: "Japan",
    length: "one month",
  },
];

export const postdocMobility = [
  {
    name: "Technische Universiteit Eindhoven",
    location: "Netherlands",
    length: "four months",
  },
];

export default function Experience() {
  return (
    <section>
      <h2>Education and Work History</h2>
      <ExperienceCard
        experience="Assistant Professor in Architectural Engineering"
        altExpertience="Culbertson Faculty Scholar"
        department="School of Civil and Construction Engineering"
        institution="Oregon State University"
        institutionShort="OSU"
        location="Corvallis, Oregon, USA"
        startDate="Jan 2022"
        endDate="Today"
      />
      <ExperienceCard
        experience="Guest Professor"
        institution="Vrije Universiteit Brussel"
        institutionShort="VUB"
        location="Brussels, Belgium"
        startDate="Mar 2021"
        endDate="Dec 2021"
        responsibilities="teach the graduate course “Daylighting in Buildings”"
      />
      <ExperienceCard
        experience="Postdoc Researcher"
        institution="École polytechnique fédérale de Lausanne"
        institutionShort="EPFL"
        department="Faculté de l'environnement naturel, architectural et construit (ENAC)"
        location="Lausanne, Switzerland"
        startDate="Dec 2019"
        endDate="Dec 2021"
        mobility={postdocMobility}
      />
      <ExperienceCard
        experience="PhD Engineering Sciences and Technology"
        institution="Université catholique de Louvain"
        institutionShort="UCLouvain"
        department="Faculté d'architecture, d'ingénierie architecturale, d'urbanisme (LOCI)"
        location="Louvain-la-Neuve, Belgium"
        startDate="Oct 2015"
        endDate="Nov 2019"
        mobility={phdMobility}
      />
      <ExperienceCard
        experience="Architect"
        institution="La Verte Voie - Collectif d'Architectes"
        location="Ottignies, Belgium"
        startDate="Jan 2015"
        endDate="Sep 2015"
      />
      <ExperienceCard
        experience="Research Assistant"
        institution="Université catholique de Louvain"
        institutionShort="UCLouvain"
        department="Faculté d'architecture, d'ingénierie architecturale, d'urbanisme (LOCI)"
        location="Louvain-la-Neuve, Belgium"
        startDate="Oct 2014"
        endDate="Sept 2015"
      />
      <ExperienceCard
        experience="MSc Architectural Engineering"
        institution="Université catholique de Louvain"
        institutionShort="UCLouvain"
        location="Louvain-la-Neuve, Belgium"
        startDate="Sep 2012"
        endDate="Jun 2014"
      />
      <ExperienceCard
        experience="BSc Architectural Engineering"
        institution="Université catholique de Louvain"
        institutionShort="UCLouvain"
        location="Louvain-la-Neuve, Belgium"
        startDate="Sep 2009"
        endDate="Jun 2012"
      />
    </section>
  );
}

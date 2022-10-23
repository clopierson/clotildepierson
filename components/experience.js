import ExperienceCard from "./experienceCard";

export const phdMobility = [
  {
    name: "École polytechnique fédérale de Lausanne (EPFL)",
    location: "Switzerland",
    length: "one year",
  },
  {
    name: "Universidad del Bío-Bío (UBioBio)",
    location: "Chile",
    length: "one month",
  },
  {
    name: "Tokai University (UTokai)",
    location: "Japan",
    length: "one month",
  },
];

export const postdocMobility = [
  {
    name: "Technische Universiteit Eindhoven (TU/e)",
    location: "Netherlands",
    length: "four months",
  },
];

export default function Experience() {
  return (
    <section>
      <h2>Education and Work History</h2>
      <ExperienceCard
        experience="Assistant Professor of Architectural Engineering"
        altExpertience="Culbertson Faculty Scholar"
        department="School of Civil and Construction Engineering (CCE)"
        institution="Oregon State University"
        institutionShort="OSU"
        location="Corvallis, Oregon, USA"
        startDate="Jan 2022"
        endDate="Today"
      />
      <details>
        <summary>Show More</summary>
        <ExperienceCard
          experience="Guest Professor"
          department="Electrical Engineering and Energy Technology Department (ETEC)"
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
          //department="Faculté de l&#39;environnement naturel, architectural et construit (ENAC)"
          department="Laboratory of Integrated Performance in Design (LIPID)"
          location="Lausanne, Switzerland"
          startDate="Dec 2019"
          endDate="Dec 2021"
          mobility={postdocMobility}
        />
        <ExperienceCard
          experience="PhD Engineering Sciences and Technology"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          // department="Faculté d&#39;architecture, d&#39;ingénierie architecturale, d&#39;urbanisme (LOCI)"
          department="Architecture et Climat"
          location="Louvain-la-Neuve, Belgium"
          startDate="Oct 2015"
          endDate="Nov 2019"
          mobility={phdMobility}
        />
        <ExperienceCard
          experience="Junior Architect"
          institution="La Verte Voie - Collectif d&#39;Architectes"
          location="Ottignies, Belgium"
          startDate="Jan 2015"
          endDate="Sep 2015"
        />
        <ExperienceCard
          experience="Research Assistant"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          // department="Faculté d&#39;architecture, d&#39;ingénierie architecturale, d&#39;urbanisme (LOCI)"
          department="Architecture et Climat"
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
      </details>
    </section>
  );
}

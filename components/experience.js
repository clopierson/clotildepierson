import ExperienceCard from "./experience-card";

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
        department="School of Civil and Construction Engineering (CCE)"
        endDate="Today"
        experience="Assistant Professor of Architectural Engineering"
        institution="Oregon State University"
        institutionShort="OSU"
        location="Corvallis, Oregon, USA"
        startDate="Jan 2022"
      />
      <details>
        <summary>Show More</summary>
        <ExperienceCard
          department="Electrical Engineering and Energy Technology Department (ETEC)"
          endDate="Dec 2021"
          experience="Guest Professor"
          institution="Vrije Universiteit Brussel"
          institutionShort="VUB"
          location="Brussels, Belgium"
          responsibilities="teach the graduate course “Daylighting in Buildings”"
          startDate="Mar 2021"
        />
        <ExperienceCard
          //department="Faculté de l&#39;environnement naturel, architectural et construit (ENAC)"
          department="Laboratory of Integrated Performance in Design (LIPID)"
          endDate="Dec 2021"
          experience="Postdoc Researcher"
          institution="École polytechnique fédérale de Lausanne"
          institutionShort="EPFL"
          location="Lausanne, Switzerland"
          mobility={postdocMobility}
          startDate="Dec 2019"
        />
        <ExperienceCard
          // department="Faculté d&#39;architecture, d&#39;ingénierie architecturale, d&#39;urbanisme (LOCI)"
          department="Architecture et Climat"
          endDate="Nov 2019"
          experience="PhD Engineering Sciences and Technology"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          location="Louvain-la-Neuve, Belgium"
          mobility={phdMobility}
          startDate="Oct 2015"
        />
        <ExperienceCard
          endDate="Sep 2015"
          experience="Junior Architect"
          institution="La Verte Voie - Collectif d&#39;Architectes"
          location="Ottignies, Belgium"
          startDate="Jan 2015"
        />
        <ExperienceCard
          // department="Faculté d&#39;architecture, d&#39;ingénierie architecturale, d&#39;urbanisme (LOCI)"
          department="Architecture et Climat"
          endDate="Sept 2015"
          experience="Research Assistant"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          location="Louvain-la-Neuve, Belgium"
          startDate="Oct 2014"
        />
        <ExperienceCard
          endDate="Jun 2014"
          experience="MSc Architectural Engineering"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          location="Louvain-la-Neuve, Belgium"
          startDate="Sep 2012"
        />
        <ExperienceCard
          endDate="Jun 2012"
          experience="BSc Architectural Engineering"
          institution="Université catholique de Louvain"
          institutionShort="UCLouvain"
          location="Louvain-la-Neuve, Belgium"
          startDate="Sep 2009"
        />
      </details>
    </section>
  );
}

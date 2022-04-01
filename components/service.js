import ServiceCard from "../components/serviceCard";

export const CIECommittees = [
  {
    id: "Technical Committee 2-86",
    name: "Glare Measurement by Imaging Luminance Measurement Device",
    role: "Member",
  },
  {
    id: "Technical Committee 3-56",
    name: "Assessment of Discomfort Glare from Daylight in Buildings",
    role: "Member",
  },
  {
    id: "Technical Committee 3-60",
    name: "Spectral Daylight Characteristics",
    role: "Member",
  },
];

export const IBECommittees = [
  {
    id: "Work Group B",
    name: "Light Applications",
    role: "Member",
  },
];

export const JournalItems = [
  {
    name: "Architectural Science Review",
    url: "",
  },
  {
    name: "Building and Environment",
    url: "",
  },
  {
    name: "Building Simulation",
    url: "",
  },
  {
    name: "Indoor and Built Environment",
    url: "",
  },
  {
    name: "Journal of Building Performance Simulation",
    url: "",
  },
  {
    name: "Journal of Environmental Psychology",
    url: "",
  },
  {
    name: "LEUKOS",
    url: "",
  },
  {
    name: "Lighting Research & Technology",
    url: "",
  },
];

export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <ServiceCard
        experience="International Committee Member"
        institutionShort="CIE"
        institution="International Commission on Illumination"
        committee={CIECommittees}
      />
      <ServiceCard
        experience="National Committee Member"
        institutionShort="IBE-BIV"
        institution="Belgian Institute on Illumination"
        committee={IBECommittees}
      />
      <ServiceCard
        experience="Reviewer for Scientific Journals"
        startDate="Dec 2016"
        endDate="Today"
        journals={JournalItems}
      />
    </section>
  );
}

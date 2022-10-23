import ServiceCard from "./serviceCard";

export const InternationalCommittees = [
  {
    institution: "International Commission on Illumination (CIE)",
    url: "https://cie.co.at/",
    committees: [
      {
        name: "Technical Committee 2-86 · Glare Measurement by Imaging Luminance Measurement Device",
      },
      {
        name: "Technical Committee 3-56 · Assessment of Discomfort Glare from Daylight in Buildings",
      },
      {
        name: "Technical Committee 3-60 · Spectral Daylight Characteristics",
      },
    ],
  },
  {
    institution: "Illumination Engineering Society (IES)",
    url: "https://www.ies.org/",
    committees: [
      {
        name: "Daylight Metrics",
        role: "Member",
      },
    ],
  },
];

export const NationalCommittees = [
  {
    institution: "Belgian Institute on Illumination (IBE-BIV)",
    url: "https://ibe-biv.be/",
    committees: [
      {
        name: "Work Group B Light Applications",
      },
    ],
  },
];

export const ECBEItems = [
  {
    name: "Building and Environment",
    url: "https://www.sciencedirect.com/journal/building-and-environment/about/editorial-board",
  },
];

export const JournalItems = [
  {
    name: "Architectural Science Review",
    // url: "",
  },
  {
    name: "Building and Environment",
    // url: "",
  },
  {
    name: "Building Simulation",
    // url: "",
  },
  {
    name: "Indoor and Built Environment",
    // url: "",
  },
  {
    name: "Journal of Building Performance Simulation",
    // url: "",
  },
  {
    name: "Journal of Environmental Psychology",
    // url: "",
  },
  {
    name: "LEUKOS",
    // url: "",
  },
  {
    name: "Lighting Research & Technology",
    // url: "",
  },
  {
    name: "Solar Energy",
    // url: "",
  },
];

export default function Services() {
  return (
    <section>
      <h2>Services</h2>
      <ServiceCard
        experience="International Committee Member"
        committees={InternationalCommittees}
      />
      <ServiceCard
        experience="National Committee Member"
        committees={NationalCommittees}
      />
      <ServiceCard
        experience="Early Career Board Member (ECBE)"
        startDate="Oct 2022"
        endDate="Today"
        journals={ECBEItems}
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

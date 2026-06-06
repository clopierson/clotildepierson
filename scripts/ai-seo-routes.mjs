export const siteUrl = "https://www.clotildepierson.com";

export const publicRoutes = [
  {
    path: "/",
    page: "app/page.js",
    title: "Daylighting Research Laboratory | RadiantLab",
    description:
      "The Daylighting Research Laboratory is a cutting-edge lighting research center currently based in Oregon State University and led by Dr. Clotilde Pierson.",
    image: "/og/home.jpg",
    imageAlt: "RadiantLab daylighting research at Oregon State University",
    structuredDataTypes: ["ResearchOrganization"],
  },
  {
    path: "/about",
    page: "app/about/page.js",
    title: "Clotilde Pierson | RadiantLab",
    description:
      "Summary of Dr. Clotilde Pierson: education, work history, teaching, and services. Clotilde is the head of the Daylighting Research Laboratory (RadiantLab).",
    image: "/og/about.jpg",
    imageAlt: "Portrait of Dr. Clotilde Pierson",
    structuredDataTypes: ["Person"],
  },
  {
    path: "/research",
    page: "app/research/page.js",
    title: "Research | RadiantLab",
    description:
      "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson focuses on advancing knowledge of daylighting in buildings.",
    image: "/og/research.jpg",
    imageAlt: "Daylight in an Oregon State University engineering building",
    structuredDataTypes: ["ResearchProject"],
  },
  {
    path: "/publications",
    page: "app/publications/page.js",
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
    image: "/og/publications.jpg",
    imageAlt: "RadiantLab daylighting research publications",
    structuredDataTypes: ["ScholarlyArticle"],
  },
  {
    path: "/software",
    page: "app/software/page.js",
    title: "Software | RadiantLab",
    description:
      "The Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson provides open-source software to advance research.",
    image: "/og/software.jpg",
    imageAlt: "RadiantLab open-source daylighting research software",
    structuredDataTypes: ["SoftwareApplication"],
  },
  {
    path: "/team",
    page: "app/team/page.js",
    title: "Team | RadiantLab",
    description:
      "Current openings (jobs), and current and former staff of the Daylighting Research Laboratory (RadiantLab) at Oregon State University led by Dr. Clotilde Pierson.",
    image: "/og/team.jpg",
    imageAlt: "RadiantLab team at Oregon State University",
    structuredDataTypes: [],
  },
  {
    path: "/facilities/dial",
    page: "app/facilities/dial/page.js",
    title: "Daylighting Innovation and Analysis Lab (DIAL) | RadiantLab",
    description:
      "Explore the Daylighting Innovation and Analysis Lab (DIAL), a mobile daylighting research facility at Oregon State University with electrochromic glazing, advanced sensors, and off-grid capabilities.",
    image: "/og/dial.jpg",
    imageAlt: "DIAL mobile daylighting research facility",
    structuredDataTypes: ["FAQPage"],
  },
  {
    path: "/give",
    page: "app/give/page.js",
    title: "Support Daylighting Research | RadiantLab",
    description:
      "Support the RadiantLab's research on daylight, circadian health, and dementia at Oregon State University through the OSU Foundation.",
    image: "/og/give.jpg",
    imageAlt: "Support RadiantLab daylighting research",
    structuredDataTypes: [],
  },
];

export const llmsFiles = [
  {
    file: "public/llms.txt",
    anchors: [
      "# Daylighting Research Laboratory (RadiantLab)",
      "## Principal Investigator",
      "## Research Themes",
      "## Facility",
      "## Support",
      "Private donations support",
      "Donate: https://www.clotildepierson.com/give",
      "OSU Foundation designation:",
      "Civil & Construction Engineering research Fund",
      "Clotilde Pierson",
    ],
  },
  {
    file: "public/llms-full.txt",
    anchors: [
      "# Daylighting Research Laboratory (RadiantLab) -- Full Reference",
      "## Principal Investigator",
      "## Research Themes",
      "## Facility: DIAL (Daylighting Innovation and Analysis Lab)",
      "## Full Publication List",
      "## Support",
      "Private donations support",
      "Donate: https://www.clotildepierson.com/give",
      "OSU Foundation designation:",
      "Civil & Construction Engineering research Fund",
      "For partnerships or major gifts: clotilde.pierson@oregonstate.edu",
    ],
  },
];

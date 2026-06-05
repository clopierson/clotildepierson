export const siteUrl = "https://www.clotildepierson.com";

export const siteName = "Daylighting Research Laboratory (RadiantLab)";

export const defaultDescription =
  "The Daylighting Research Laboratory advances research on daylight, health, well-being, and energy performance in buildings.";

const metadataBase = new URL(siteUrl);

const defaultImage = {
  url: "/og/home.jpg",
  width: 1200,
  height: 630,
  alt: "RadiantLab daylighting research at Oregon State University",
};

export const rootMetadata = {
  metadataBase,
  applicationName: siteName,
  title: {
    default: "Daylighting Research Laboratory | RadiantLab",
    template: "%s",
  },
  description: defaultDescription,
  keywords: [
    "Daylight",
    "Daylighting",
    "Research",
    "Urban",
    "Light",
    "Environment",
    "Laboratory",
    "Oregon",
  ],
  authors: [{ name: "Clotilde Pierson", url: "/about" }],
  creator: "Clotilde Pierson",
  publisher: siteName,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName,
    url: "/",
    title: "Daylighting Research Laboratory | RadiantLab",
    description: defaultDescription,
    images: [defaultImage],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@PiersonClotilde",
    title: "Daylighting Research Laboratory | RadiantLab",
    description: defaultDescription,
    images: [defaultImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage.url,
  imageAlt = defaultImage.alt,
}) {
  const images = [
    {
      url: image,
      width: 1200,
      height: 630,
      alt: imageAlt,
    },
  ];

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      siteName,
      url: path,
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      creator: "@PiersonClotilde",
      title,
      description,
      images,
    },
  };
}

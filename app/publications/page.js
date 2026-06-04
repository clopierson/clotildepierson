import Image from "next/image";
import backgroundImage from "../../public/background-image-publications.jpg";
import { publications, publicationYears } from "../../lib/publications";

export const metadata = {
  title: "Publications | RadiantLab",
  description:
    "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  openGraph: {
    url: "https://www.clotildepierson.com/publications",
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  },
  twitter: {
    title: "Publications | RadiantLab",
    description:
      "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.",
  },
};

const publicationsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: publications.map((pub, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "ScholarlyArticle",
      name: pub.title,
      author: pub.authors.map((a) => ({ "@type": "Person", name: a })),
      datePublished: String(pub.year),
      ...(pub.doi && { identifier: `https://doi.org/${pub.doi}`, url: `https://doi.org/${pub.doi}` }),
      ...(pub.url && !pub.doi && { url: pub.url }),
      isPartOf: {
        "@type": pub.type === "journal" ? "Periodical" : "Event",
        name: pub.venue,
      },
    },
  })),
};

function Authors({ authors }) {
  return authors.map((author, i) => (
    <span key={`${author}-${i}`}>
      {i > 0 && ", "}
      {author === "Pierson C." ? <strong>{author}</strong> : author}
    </span>
  ));
}

function PublicationEntry({ pub }) {
  const primaryUrl = pub.doi ? `https://doi.org/${pub.doi}` : pub.url;

  return (
    <article className="mb-6">
      <p className="mb-1">
        <Authors authors={pub.authors} /> ({pub.year}). {pub.title}.{" "}
        <em>{pub.venue}</em>
        {pub.volume ? `, ${pub.volume}` : ""}
        {pub.pages ? `, ${pub.pages}` : ""}.
        {primaryUrl && (
          <>
            {" "}
            <a href={primaryUrl} target="_blank" rel="noreferrer noopener">
              {pub.doi ? `DOI: ${pub.doi}` : "View"}
            </a>
          </>
        )}
      </p>
      {pub.links.map((link) => (
        <p key={link.url} className="text-sm mb-1 mt-1">
          <a href={link.url} target="_blank" rel="noreferrer noopener">
            {link.label}
          </a>
        </p>
      ))}
    </article>
  );
}

export default function Publications() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationsJsonLd) }} />
      <picture className="overflow-hidden absolute left-0 right-0 w-screen h-[70vh]">
        <Image
          src={backgroundImage}
          alt="daylight in a bright library"
          fill={true}
          priority={true}
          sizes="100vw"
          placeholder="blur"
          className="object-cover object-[20%_50%]"
        />
      </picture>
      <div className="h-[70vh]"></div>
      <div className="my-8 prose prose-neutral dark:prose-invert mx-auto">
        <h1>Publications</h1>
        {publicationYears.map((year) => (
          <section key={year}>
            <h2>{year}</h2>
            {publications
              .filter((p) => p.year === year)
              .map((pub, i) => (
                <PublicationEntry key={`${year}-${i}`} pub={pub} />
              ))}
          </section>
        ))}
      </div>
    </>
  );
}

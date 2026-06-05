import Image from "next/image";
import StructuredData from "../../components/structured-data";
import { createPageMetadata } from "../../lib/metadata";
import { publications, publicationYears } from "../../lib/publications";
import backgroundImage from "../../public/background-image-publications.jpg";

const title = "Publications | RadiantLab";
const description =
  "Peer-reviewed journal/conference papers, conferences/workshops contributions, and datasets by the Daylighting Research Laboratory (RadiantLab) at Oregon State University.";

export const metadata = createPageMetadata({
  title,
  description,
  path: "/publications",
  image: "/og/publications.jpg",
  imageAlt: "RadiantLab daylighting research publications",
});

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
      ...(pub.doi && {
        identifier: `https://doi.org/${pub.doi}`,
        url: `https://doi.org/${pub.doi}`,
      }),
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
    <span key={author}>
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
            <a href={primaryUrl} rel="noreferrer noopener" target="_blank">
              {pub.doi ? `DOI: ${pub.doi}` : "View"}
            </a>
          </>
        )}
      </p>
      {pub.links.map((link) => (
        <p className="mt-1 mb-1 text-sm" key={link.url}>
          <a href={link.url} rel="noreferrer noopener" target="_blank">
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
      <StructuredData data={publicationsJsonLd} />
      <picture className="absolute right-0 left-0 h-[70vh] w-screen overflow-hidden">
        <Image
          alt="daylight in a bright library"
          className="object-cover object-[20%_50%]"
          fill={true}
          placeholder="blur"
          priority={true}
          sizes="100vw"
          src={backgroundImage}
        />
      </picture>
      <div className="h-[70vh]" />
      <div className="prose prose-neutral dark:prose-invert mx-auto my-8">
        <h1>Publications</h1>
        {publicationYears.map((year) => (
          <section key={year}>
            <h2>{year}</h2>
            {publications
              .filter((p) => p.year === year)
              .map((pub) => (
                <PublicationEntry
                  key={pub.doi ?? pub.url ?? pub.title}
                  pub={pub}
                />
              ))}
          </section>
        ))}
      </div>
    </>
  );
}

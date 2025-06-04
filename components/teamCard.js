import Image from "next/legacy/image";
import Link from "next/link";

export default function TeamCard({
  name,
  description,
  pronouns,
  email,
  picture,
}) {
  var href = "mailto:" + email;
  var alt = "Picture of " + name;
  return (
    <article className="text-sm my-5 grid auto-rows-min sm:grid-cols-3 items-center">
      <div className="my-2 row-span-1 justify-self-center sm:col-span-1 sm:justify-self-start">
        {picture.includes("svg") ? (
          <Image
            className="rounded-full"
            src={picture}
            alt={alt}
            width={150}
            height={150}
          />
        ) : (
          <Image
            className="rounded-full"
            src={picture}
            alt={alt}
            width={150}
            height={150}
          />
        )}{" "}
      </div>
      <div className="row-span-1 sm:col-span-2 text-center sm:text-left">
        <h3 className="text-base m-0">
          {name} <span className="text-sm font-light">({pronouns})</span>
        </h3>
        {description === "/about" ? (
          <Link href="/about">Learn more</Link>
        ) : (
          <p className="my-1 text-center sm:text-justify">{description}</p>
        )}
        <p className="my-1">
          <a href={href}>{email}</a>
        </p>
      </div>
    </article>
  );
}

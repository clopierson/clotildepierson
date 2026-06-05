import Image from "next/image";
import Link from "next/link";

export default function TeamCard({
  name,
  description,
  pronouns,
  email,
  picture,
}) {
  const href = `mailto:${email}`;
  const alt = `Picture of ${name}`;
  return (
    <article className="my-5 grid auto-rows-min items-center text-sm sm:grid-cols-3">
      <div className="row-span-1 my-2 justify-self-center sm:col-span-1 sm:justify-self-start">
        {picture.includes("svg") ? (
          <Image
            alt={alt}
            className="rounded-full"
            height={150}
            sizes="150px"
            src={picture}
            width={150}
          />
        ) : (
          <Image
            alt={alt}
            className="rounded-full"
            height={150}
            sizes="150px"
            src={picture}
            width={150}
          />
        )}{" "}
      </div>
      <div className="row-span-1 text-center sm:col-span-2 sm:text-left">
        <h3 className="m-0 text-base">
          {name} <span className="font-light text-sm">({pronouns})</span>
        </h3>
        {description === "/about" ? (
          <Link href="/about">Learn more</Link>
        ) : (
          <p className="my-1 text-center sm:text-justify">{description}</p>
        )}
        {email && (
          <p className="my-1">
            <a href={href}>{email}</a>
          </p>
        )}
      </div>
    </article>
  );
}

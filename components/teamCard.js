import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ name, description, email, picture }) {
  var href = "mailto:" + email;
  var alt = "Picture of " + name;
  return (
    <div className="grid grid-cols-2 my-2 items-center text-sm">
      <div>
        <h3 className="text-base m-0">{name}</h3>
        {description === "/about" ? (
          <Link href="/about">Learn more about Clotilde</Link>
        ) : (
          <span>{description}</span>
        )}
        <br></br>
        <a href={href}>{email}</a>
      </div>
      <div>
        <Image
          className="rounded-full"
          src={picture}
          alt={alt}
          width={100}
          height={100}
        />{" "}
      </div>
    </div>
  );
}

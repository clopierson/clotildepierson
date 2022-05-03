import Link from "next/link";

export default function RadiantLab({ link }) {
  const irradiant = "radiant";
  const lab = "lab";
  return (
    <span className="font-[Spartan] font-bold inline">
      {typeof link === "string" && (
        <Link href={link}>
          <a>
            <span className="text-inherit">{irradiant}</span>
            <span className="text-osu-beaver-orange">{lab}</span>{" "}
          </a>
        </Link>
      )}
      {typeof link === "undefined" && (
        <span>
          <span className="text-inherit">{irradiant}</span>
          <span className="text-osu-beaver-orange">{lab}</span>
        </span>
      )}
    </span>
  );
}

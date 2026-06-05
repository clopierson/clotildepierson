import Link from "next/link";

export default function RadiantLab({ link }) {
  const irradiant = "radiant";
  const lab = "lab";
  return (
    <span className="inline font-[Spartan] font-bold">
      {typeof link === "string" && (
        <Link href={link}>
          <span className="text-inherit">{irradiant}</span>
          <span className="text-osu-beaver-orange dark:text-osu-luminance">
            {lab}
          </span>{" "}
        </Link>
      )}
      {typeof link === "undefined" && (
        <span>
          <span className="text-inherit">{irradiant}</span>
          <span className="text-osu-beaver-orange dark:text-osu-luminance">
            {lab}
          </span>
        </span>
      )}
    </span>
  );
}

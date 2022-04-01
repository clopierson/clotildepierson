import Link from "next/link";

export default function IrradiantLab({ link }) {
  const irradiant = "irradiant";
  const lab = "lab";
  return (
    <span className="font-[Spartan] font-bold inline">
      {typeof link === "string" && (
        <Link href={link}>
          <a>
            <span className="text-inherit">{irradiant}</span>
            <span className="text-blue-400">{lab}</span>{" "}
          </a>
        </Link>
      )}
      {typeof link === "undefined" && (
        <span>
          <span className="text-inherit">{irradiant}</span>
          <span className="text-blue-400">{lab}</span>
        </span>
      )}
    </span>
  );
}

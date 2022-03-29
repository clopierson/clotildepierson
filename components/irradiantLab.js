import Link from "next/link";

export default function IrradiantLab({ link }) {
  return (
    <span className="font-[Spartan] font-bold inline">
      {typeof link === "string" && (
        <Link href={link}>
          <a>
            <span className="dark:text-white text-gray-900">irradiant</span>
            <span className="text-blue-400">lab</span>{" "}
          </a>
        </Link>
      )}
      {typeof link === "undefined" && (
        <span>
          <span className="dark:text-white text-gray-900">irradiant</span>
          <span className="text-blue-400">lab</span>
        </span>
      )}
    </span>
  );
}

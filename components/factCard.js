import Image from "next/image";

export default function FactCard({ illustration, fact, description }) {
  // SVGR does not load SVGs on mobile devices (tried on safari and brave ios)
  return (
    <div className="text-center rounded bg-slate-100 dark:bg-slate-700 p-4 max-w-xs h-full shadow-inner dark:shadow-black/50">
      <span className="aspect-[3/2] max-h-24">
        <Image
          className="invert-0 dark:invert dark:grayscale dark:brightness-50"
          src={illustration}
          alt=""
          layout="intrinsic"
          width={150}
          height={100}
        />
      </span>
      <div className="text-2xl font-bold">{fact}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
}

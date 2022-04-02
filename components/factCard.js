import Image from "next/image";

export default function FactCard({ illustration, fact, description }) {
  // SVGR does not load SVGs on mobile devices (tried on safari and brave ios)
  return (
    <div className="animate-slide-in text-center rounded bg-slate-100 dark:bg-slate-700 p-4 max-w-xs h-full shadow-md dark:shadow-black/50">
      <div className="flex justify-center mx-auto aspect-[3/2] max-h-24">
        <Image
          className="invert-0 dark:invert dark:grayscale dark:brightness-50"
          src={illustration}
          alt=""
          layout="intrinsic"
          width={300}
          height={200}
        />
      </div>
      <div className="text-2xl font-bold">{fact}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
}

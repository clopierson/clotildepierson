import Image from "next/image";

export default function FactCard({ illustration, fact, description }) {
  // SVGR does not load SVGs on mobile devices (tried on safari and brave ios)
  return (
    <div className="text-center rounded bg-gray-100 p-4 max-w-xs h-full dark:prose hover:shadow-md dark:hover:shadow-gray-500">
      <div className="flex justify-center mx-auto aspect-[3/2] max-h-24">
        <Image
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

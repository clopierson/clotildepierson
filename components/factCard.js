import Image from "next/image";

export default function FactCard({ illustration, size, fact, description }) {
  // if (size > 111) {
  //     throw new Error(`Size cannot exceed 112px.`);
  //   }
  // TODO: Try NOT using next/image for SVGs.
  return (
    <div className="text-center rounded bg-gray-100 p-4 pb-8 max-w-xs h-full dark:prose hover:shadow-md dark:hover:shadow-gray-500">
      <div className="flex justify-center mx-auto">
        <Image
          src={illustration}
          alt=""
          layout="fixed"
          height={112}
          width={size}
        />
      </div>
      <div className="text-2xl font-bold">{fact}</div>
      <div className="text-xs">{description}</div>
    </div>
  );
}

import Image from "next/image";

export default function FactCard({ illustration, fact, description, alt }) {
  return (
    <article className="text-center p-4 max-w-xs h-full dark:text-white text-neutral-900">
      <Image
        src={illustration}
        alt={alt}
        width={150}
        height={150}
        className="mt-0"
      />
      <div className="mt-2 text-xl font-[Spartan] font-bold">{fact}</div>
      <div className="font-[Spartan] text-sm font-bold">{description}</div>
    </article>
  );
}

import Image from "next/image";

export default function FactCard({ illustration, fact, description, alt }) {
  return (
    <article className="h-full max-w-xs p-4 text-center text-neutral-900 dark:text-white">
      <Image
        alt={alt}
        className="mt-0"
        height={150}
        sizes="150px"
        src={illustration}
        width={150}
      />
      <div className="mt-2 font-[Spartan] font-bold text-xl">{fact}</div>
      <div className="font-[Spartan] font-bold text-sm">{description}</div>
    </article>
  );
}

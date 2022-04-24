import Image from "next/image";

export default function FactCard({ illustration, fact, description }) {
  return (
    <article className="text-center p-4 max-w-xs h-full dark:text-white text-slate-900">
      <Image
        src={illustration}
        alt=""
        layout="intrinsic"
        width={150}
        height={150}
      />
      <div className="mt-2 text-xl font-[Spartan] font-bold">{fact}</div>
      <div className="font-[Spartan] text-sm font-bold">{description}</div>
    </article>
  );
}

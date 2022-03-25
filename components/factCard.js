import Image from "next/image";

export default function FactCard({ illustration, size, fact, description }) {
  // if (size > 111) {
  //     throw new Error(`Size cannot exceed 112px.`);
  //   }
  return (
    <div class="text-center rounded bg-blue-100 p-4 max-w-xs h-full dark:prose">
      <div class="flex h-28 w-28 justify-center mx-auto">
        <Image src={illustration} height={size} width={size} />
      </div>
      <div class="text-2xl font-bold">{fact}</div>
      <div class="text-xs">{description}</div>
    </div>
  );
}

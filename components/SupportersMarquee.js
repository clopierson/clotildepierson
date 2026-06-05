"use client";

const supporters = [
  { name: "Culbertson Faculty Scholar", amount: 250000 },
  { name: "Medical Research Foundation New Investigator Grant", amount: 50000 },
  { name: "Oregon Partnership for Alzheimer's Research Grant", amount: 35000 },
];

function formatAmount(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function SupportersMarquee() {
  const items = [...supporters, ...supporters];

  return (
    <div className="my-6 overflow-hidden bg-neutral-100 dark:bg-neutral-800 py-3 ml-[calc(50%-50vw)] w-screen mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div className="flex gap-12 w-max animate-marquee hover:paused">
        {items.map((supporter, i) => (
          <div
            key={`${supporter.name}-${i}`}
            className="flex flex-col whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-300"
          >
            <span className="text-center">{supporter.name}</span>
            <span className="text-center">{supporter.amount != null && formatAmount(supporter.amount) }</span>
          </div>
        ))}
      </div>
    </div>
  );
}

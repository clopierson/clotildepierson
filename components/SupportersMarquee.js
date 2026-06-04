"use client";

const supporters = [
  { name: "Medical Research Foundation New Investigator Grant", amount: 50000 },
  { name: "Oregon Partnership for Alzheimer's Research Grant", amount: 35000 },
];

function formatAmount(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function SupportersMarquee() {
  const items = [...supporters, ...supporters];

  return (
    <div className="my-6 overflow-hidden bg-neutral-100 dark:bg-neutral-800 py-3 ml-[calc(50%-50vw)] w-screen [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
      <div className="flex gap-12 w-max animate-marquee hover:[animation-play-state:paused]">
        {items.map((supporter, i) => (
          <span
            key={i}
            className="whitespace-nowrap text-sm text-neutral-600 dark:text-neutral-300"
          >
            {supporter.name}
            {supporter.amount != null && ` · ${formatAmount(supporter.amount)}`}
          </span>
        ))}
      </div>
    </div>
  );
}

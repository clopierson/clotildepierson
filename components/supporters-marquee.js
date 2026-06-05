"use client";

// TODO: add a supporter title above the marquee but it should stay fixed while the marquee scrolls.

const supporters = [
  { name: "Culbertson Faculty Scholar" },
  { name: "Medical Research Foundation New Investigator Grant" }, // 50,000
  { name: "Oregon Partnership for Alzheimer's Research Grant" }, // 35,000
];

function formatAmount(amount) {
  return `$${amount.toLocaleString("en-US")}`;
}

export default function SupportersMarquee() {
  const items = [
    ...supporters.map((supporter) => ({
      ...supporter,
      id: `primary-${supporter.name}`,
    })),
    ...supporters.map((supporter) => ({
      ...supporter,
      id: `repeat-${supporter.name}`,
    })),
  ];

  return (
    <div className="mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] my-6 ml-[calc(50%-50vw)] w-screen overflow-hidden bg-neutral-100 py-3 [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] dark:bg-neutral-800">
      <div className="hover:paused flex w-max animate-marquee gap-12">
        {items.map((supporter) => (
          <div
            className="flex flex-col whitespace-nowrap text-neutral-600 text-sm dark:text-neutral-300"
            key={supporter.id}
          >
            <span className="text-center">{supporter.name}</span>
            <span className="text-center">
              {supporter.amount != null && formatAmount(supporter.amount)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

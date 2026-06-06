"use client";

const supporters = [
  { name: "Culbertson Faculty Scholarship" },
  { name: "Medical Research Foundation (New Investigator Grant)" }, // 50,000
  { name: "Oregon Partnership for Alzheimer's Research" }, // 35,000
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
    <section
      aria-label="Supporters"
      className="my-6 ml-[calc(50%-50vw)] flex w-screen flex-col gap-2 overflow-hidden bg-neutral-100 py-3 dark:bg-neutral-800"
    >
      <div className="text-center font-semibold text-neutral-900 text-sm uppercase tracking-[0.08em] dark:text-neutral-100">
        Backed By
      </div>
      <div className="mask-[linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)] overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
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
    </section>
  );
}

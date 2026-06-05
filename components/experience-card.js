export default function ExperienceCard({
  experience,
  altExpertience,
  institution,
  institutionShort,
  department,
  location,
  startDate,
  endDate,
  mobility,
}) {
  return (
    <article className="not-prose my-4">
      <p className="mb-0 font-bold">{experience}</p>
      {typeof altExpertience === "string" && (
        <p className="-mt-1 font-bold">{altExpertience}</p>
      )}
      {typeof department === "string" && (
        <p className="text-sm">{department}</p>
      )}
      <p className="text-sm">
        {institution}
        {typeof institutionShort === "string" && (
          <span> ({institutionShort})</span>
        )}
      </p>
      {typeof location === "string" && (
        <p className="text-neutral-500 text-sm dark:text-neutral-400">
          {location}
        </p>
      )}
      <p className="text-neutral-500 text-sm dark:text-neutral-400">
        {startDate} &mdash; {endDate}
      </p>
      {typeof mobility === "string" && (
        <p className="mt-1 text-sm">
          {" "}
          <span className="font-bold">Mobility</span> · {mobility}
        </p>
      )}
      {typeof mobility === "object" && (
        <div>
          <p className="mt-1 font-bold text-sm">Mobility</p>
          <ul className="text-sm marker:text-neutral-300 dark:marker:text-neutral-600">
            {mobility.map((item) => (
              <li className="list-inside list-disc" key={item.name}>
                {item.name}
                {/* {item.name} ({item.location}, {item.length}) */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

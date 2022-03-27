export default function ServiceCard({
  experience,
  institution,
  institutionShort,
  committee,
  journals,
}) {
  return (
    <div className="not-prose my-4">
      {typeof experience === "string" && (
        <p className="font-bold">{experience}</p>
      )}
      <p className="text-sm">
        {institution}
        {typeof institutionShort === "string" && (
          <span> ({institutionShort})</span>
        )}
      </p>
      {typeof committee === "object" && (
        <ul className="text-sm mt-1 marker:text-neutral-300 dark:marker:text-slate-600">
          {committee.map((item) => (
            <li className="list-disc list-inside" key={item.id}>
              {item.id} · {item.name}
            </li>
          ))}
        </ul>
      )}
      {typeof journals === "object" && (
        <ul className="text-sm mt-1 marker:text-neutral-300 dark:marker:text-slate-600">
          {journals.map((journal) => (
            <li className="list-disc list-inside" key={journal.name}>
              {/* <a href={journal.url}>{journal.name}</a> */}
              {journal.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

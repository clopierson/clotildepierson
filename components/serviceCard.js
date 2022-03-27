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

      {typeof committee === "string" && (
        <p className="text-sm">
          <span className="font-bold">Committee</span> · {committee}
        </p>
      )}
      {typeof committee === "object" && (
        <p className="text-sm mt-1">
          <span className="font-bold">Committees</span>
          <ul>
            {committee.map((item) => (
              <li className="list-disc list-inside" key={item.id}>
                {item.id} · {item.name}
              </li>
            ))}
          </ul>
        </p>
      )}
      {typeof journals === "object" && (
        <p className="text-sm mt-1">
          <span className="font-bold">Journals</span>
          <ul>
            {journals.map((journal) => (
              <li className="list-disc list-inside" key={journal.name}>
                <a href={journal.url}>{journal.name}</a>
              </li>
            ))}
          </ul>
        </p>
      )}
    </div>
  );
}

export default function ServiceCard({ experience, committees, journals }) {
  return (
    <article className="not-prose my-4">
      {typeof experience === "string" && (
        <h3 className="font-bold">{experience}</h3>
      )}
      {typeof committees === "object" && (
        <div>
          {committees.map((item) => (
            <div key={item.institution}>
              <h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={item.url}
                  className="text-sm text-osu-beaver-orange hover:text-osu-luminance"
                >
                  {item.institution}
                </a>
              </h4>
              <ul className="text-sm mt-1 marker:text-neutral-300 dark:marker:text-neutral-600">
                {item.committees.map((jtem) => (
                  <li className="list-disc list-inside" key={jtem.name}>
                    {jtem.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {typeof journals === "object" && (
        <ul className="text-sm mt-1 marker:text-neutral-300 dark:marker:text-neutral-600">
          {journals.map((journal) => (
            <li className="list-disc list-inside" key={journal.name}>
              {typeof journal.url === "string" ? (
                <a
                  className="text-osu-beaver-orange hover:text-osu-luminance"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={journal.url}
                >
                  {journal.name}
                </a>
              ) : (
                journal.name
              )}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

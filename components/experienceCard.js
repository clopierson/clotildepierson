import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";

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
    <div className="not-prose my-4">
      <p className="font-bold">
        {experience}
        {typeof altExpertience === "string" && (
          <Tooltip label={altExpertience}>
            <button className="hidden lg:inline font-bold text-blue-400 hover:text-blue-300">
              *
            </button>
          </Tooltip>
        )}
      </p>

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
        <p className="text-sm text-neutral-400 dark:text-slate-500">
          {location}
        </p>
      )}
      <p className="text-sm text-neutral-400 dark:text-slate-500">
        {startDate} &mdash; {endDate}
      </p>
      {typeof mobility === "string" && (
        <p className="text-sm mt-1">
          {" "}
          <span className="font-bold">Mobility</span> · {mobility}
        </p>
      )}
      {typeof mobility === "object" && (
        <div>
          <p className="text-sm mt-1 font-bold">Mobility</p>
          <ul className="text-sm marker:text-neutral-300 dark:marker:text-slate-600">
            {mobility.map((item) => (
              <li className="list-disc list-inside" key={item.name}>
                {item.name}
                {/* {item.name} ({item.location}, {item.length}) */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Recruiting() {
  return (
    <article className="rounded bg-slate-100 dark:bg-slate-700 p-3 sm:p-6 shadow-inner dark:shadow-black/50">
      <h1 className="mt-0 text-lg">Open Ph.D. Positions</h1>
      <p>
        We have two (2) open Ph.D. positions for Fall 2022. The research
        projects are (click the link to open the corrresponding position
        description):
      </p>
      <ol>
        <li>
          <a
            href="/files/PositionDescription_UrbanVisualEnvironment.pdf"
            alt="phd position description pdf file"
            target="_blank"
            rel="noopener noreferrer"
          >
            Present and future indoor visual environments in urban areas
          </a>
        </li>
        <li>
          <a
            href="/files/PositionDescription_DaylightIILResponses.pdf"
            alt="phd position description pdf file"
            target="_blank"
            rel="noopener noreferrer"
          >
            ipRGC-influenced light response of building occupants from daylight
          </a>
        </li>
      </ol>
      <p className="mb-0">
        Please submit your application by{" "}
        <a
          href="https://airtable.com/shrnQFJihLL8YU878"
          alt="2022 irradiantlab PhD application form"
          target="_blank"
          rel="noopener noreferrer"
        >
          completing the form
        </a>
        .
      </p>
    </article>
  );
}

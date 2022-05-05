export default function Recruiting() {
  return (
    <article className="rounded bg-neutral-100 dark:bg-neutral-800 p-3 sm:p-6 shadow-inner dark:shadow-black/50">
      <h2 className="mt-0 text-lg">Open Ph.D. Position</h2>
      <p>
        We have one (1) open Ph.D. position for Fall 2022. The Ph.D. student
        will be working on the following project (click the link to open the
        position description):
      </p>
      <ol>
        <li>
          <a
            href="/files/PositionDescription_UrbanVisualEnvironment.pdf"
            alt="phd position description pdf file"
            target="_blank"
            rel="noopener noreferrer"
          >
            Present and future indoor light and visual conditions in urban areas
          </a>
        </li>
      </ol>
      <p className="mb-0">
        Please submit your application by{" "}
        <a
          href="https://airtable.com/shrnQFJihLL8YU878"
          alt="2022 RadiantLab PhD application form"
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

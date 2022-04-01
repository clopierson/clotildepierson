import IrradiantLab from "./irradiantLab";

export default function SpontaneousApplication() {
  return (
    <article className="rounded bg-blue-100 prose p-3 sm:p-6 dark:prose hover:shadow-md dark:hover:shadow-gray-500">
      <h1 className="m-0 text-lg">Spontaneous Applications</h1>
      <p>
        If you are interested in doing research with me or the <IrradiantLab />{" "}
        at Oregon State University, please visit:
      </p>
      <ul>
        <li>
          <a href="https://cce.oregonstate.edu/future-students">
            the future students page for URA, MS, and PhD
          </a>
          ,
        </li>
        <li>
          <a href="https://gradschool.oregonstate.edu/postdocs/">
            the grad school page for postdocs
          </a>
          .
        </li>
      </ul>
      <p>
        After that{" "}
        <a href="mailto:clotilde.pierson@oregonstate.edu">send me an email</a>{" "}
        so that we can discuss opportunities.
      </p>
      <p>
        Please include a description of your interests and how they fit with our
        work, along with an up-to-date resume.
      </p>
    </article>
  );
}

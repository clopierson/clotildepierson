export default function ProjectCard({ projectName, projectDescription }) {
  return (
    <article className="rounded bg-neutral-100 dark:bg-neutral-800 p-3 sm:p-6 shadow-inner dark:shadow-black/50">
      <p className="my-0 uppercase text-xs">selected project</p>
      <h2 className="my-2 text-base">{projectName}</h2>
      <p className="my-0">{projectDescription}</p>
    </article>
  );
}

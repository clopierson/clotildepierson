export default function ProjectCard({ projectName, projectDescription }) {
  return (
    <article className="rounded bg-neutral-100 p-3 shadow-inner sm:p-6 dark:bg-neutral-800 dark:shadow-black/50">
      <p className="my-0 text-xs uppercase">selected project</p>
      <h2 className="my-2 text-base">{projectName}</h2>
      <p className="my-0">{projectDescription}</p>
    </article>
  );
}

export default function ProjectCard({ projectName, projectDescription }) {
  return (
    <article className="rounded bg-slate-100 dark:bg-slate-700 p-3 sm:p-6 shadow-inner dark:shadow-black/50">
      <p className="my-0 uppercase text-xs">selected project</p>
      <h1 className="my-2 text-base">{projectName}</h1>
      <p className="my-0">{projectDescription}</p>
    </article>
  );
}

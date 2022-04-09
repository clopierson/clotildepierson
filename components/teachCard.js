export default function TeachCard({
  position,
  institution,
  institutionShort,
  courseId,
  courseName,
  degree,
  nStudents,
}) {
  return (
    <article className="not-prose my-4">
      <p className="font-bold">{position}</p>
      <p className="text-sm">
        {institution}
        {typeof institutionShort === "string" && (
          <span> ({institutionShort})</span>
        )}
      </p>
      <p className="text-sm">
        {typeof courseId === "string" && <span> {courseId} · </span>}
        {courseName}
      </p>
      <p className="text-sm">
        {degree} (±{nStudents} students)
      </p>
    </article>
  );
}

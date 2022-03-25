export default function TeachCard({
  position,
  location,
  courseId,
  courseName,
  degree,
  nStudents,
}) {
  return (
    <div class="not-prose my-4">
      <p class="font-bold">{position}</p>
      {/* <p class="text-sm">{location}</p> */}
      <p class="text-sm">
        {courseId} · {courseName}
      </p>
      <p class="text-sm">
        {degree} (±{nStudents} students) · {location}
      </p>
    </div>
  );
}

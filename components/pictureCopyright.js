export default function PictureCopyright({
  authorName,
  authorUrl,
  pictureUrl,
  websiteName = "Unsplash",
}) {
  return (
    <span className="text-xs italic text-gray-600 dark:text-gray-300">
      Photo by <a href={authorUrl}>{authorName}</a> on{" "}
      <a href={pictureUrl}>{websiteName}</a>
    </span>
  );
}

export default function PictureCopyright({
  authorName,
  authorUrl,
  pictureUrl,
  websiteName = "Unsplash",
}) {
  return (
    <span className="text-xs italic text-gray-600 dark:text-gray-300">
      Main photo by{" "}
      <a target="_blank" rel="noopener noreferrer" href={authorUrl}>
        {authorName}
      </a>{" "}
      on{" "}
      <a target="_blank" rel="noopener noreferrer" href={pictureUrl}>
        {websiteName}
      </a>
    </span>
  );
}

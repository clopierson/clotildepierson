export default function PictureCopyright({
  authorName,
  authorUrl,
  pictureUrl,
  websiteName = "Unsplash",
}) {
  return (
    <span>
      {authorName !== undefined && (
        <span className="text-gray-600 dark:text-gray-300">
          Banner photo by{" "}
          <a target="_blank" rel="noopener noreferrer" href={authorUrl}>
            {authorName}
          </a>{" "}
          at{" "}
          <a target="_blank" rel="noopener noreferrer" href={pictureUrl}>
            {websiteName}
          </a>
          .
        </span>
      )}
    </span>
  );
}

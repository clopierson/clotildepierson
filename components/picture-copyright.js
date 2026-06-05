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
          <a href={authorUrl} rel="noopener noreferrer" target="_blank">
            {authorName}
          </a>{" "}
          at{" "}
          <a href={pictureUrl} rel="noopener noreferrer" target="_blank">
            {websiteName}
          </a>
          .
        </span>
      )}
    </span>
  );
}

import { formatPressDate, pressMentions } from "../lib/press";

export default function PressList() {
  return (
    <section>
      <h2>In the Press</h2>
      {pressMentions.map(({ outlet, title, author, date, url, summary }) => (
        <article
          className="not-prose grid gap-2 border-neutral-200 border-b py-5 text-sm first-of-type:border-t sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-x-6 dark:border-neutral-700"
          key={url}
        >
          <p className="flex items-baseline gap-2.5 sm:flex-col sm:items-start sm:gap-0">
            <span className="wrap-anywhere max-w-full font-[Spartan] font-bold text-base text-neutral-900 dark:text-white">
              {outlet}
            </span>
            <time
              className="shrink-0 text-neutral-600 dark:text-neutral-400"
              dateTime={date}
            >
              {formatPressDate(date, "short")}
            </time>
          </p>
          <div className="flex flex-col gap-1">
            <h3 className="text-base">
              <a href={url} rel="noreferrer noopener" target="_blank">
                {title} <span aria-hidden="true">↗</span>
              </a>
            </h3>
            {summary && <p>{summary}</p>}
            {author && (
              <p className="text-neutral-600 dark:text-neutral-400">
                By {author}
              </p>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}

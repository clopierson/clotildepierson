import {
  featuredPressMention,
  formatPressDate,
  splitHighlight,
} from "../lib/press";

export default function PressQuote() {
  if (!featuredPressMention) {
    return null;
  }

  const { outlet, title, date, url, quote } = featuredPressMention;
  const { before, match, after } = splitHighlight(quote.text, quote.highlight);

  return (
    <figure className="not-prose my-10 border-neutral-200 border-y py-8 dark:border-neutral-700">
      <blockquote className="font-[Spartan] font-bold text-[1.75rem] text-neutral-900 leading-tight sm:text-4xl dark:text-white">
        “{before}
        {match && (
          <span className="text-osu-beaver-orange dark:text-osu-luminance">
            {match}
          </span>
        )}
        {after}”
      </blockquote>
      <figcaption className="mt-4 flex flex-col gap-1 text-neutral-600 text-sm dark:text-neutral-400">
        <span>
          Dr. Clotilde Pierson, quoted by {outlet},{" "}
          {formatPressDate(date, "long")}
        </span>
        <a
          className="w-fit"
          href={url}
          rel="noreferrer noopener"
          target="_blank"
        >
          {title} <span aria-hidden="true">↗</span>
        </a>
      </figcaption>
    </figure>
  );
}

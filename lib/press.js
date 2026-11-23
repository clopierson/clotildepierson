const isoDay = /^\d{4}-\d{2}-\d{2}$/;

// Fails the build on a bad date. Unchecked, a typo sorts wrong or publishes the
// wrong month.
export function checkDates(mentions) {
  for (const { date, url } of mentions) {
    const day = new Date(date);
    const isRealDay =
      isoDay.test(date) &&
      !Number.isNaN(day.getTime()) &&
      day.toISOString().slice(0, 10) === date;

    if (!isRealDay) {
      throw new RangeError(`Press mention ${url} has an invalid date: ${date}`);
    }
  }

  return mentions;
}

export function newestFirst(mentions) {
  return [...mentions].sort((a, b) => b.date.localeCompare(a.date));
}

// Dates are calendar days. Without UTC, the 1st of a month formats as the
// previous month in Oregon.
export function formatPressDate(date, month) {
  return new Intl.DateTimeFormat("en-US", {
    month,
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function splitHighlight(text, highlight) {
  const start = highlight ? text.indexOf(highlight) : -1;

  if (start === -1) {
    return { before: text, match: "", after: "" };
  }

  return {
    before: text.slice(0, start),
    match: highlight,
    after: text.slice(start + highlight.length),
  };
}

// Required: outlet, title, date (YYYY-MM-DD), url.
// Optional: author, summary, quote.
const mentions = [
  {
    outlet: "AARP",
    title: "6 Ways to Get Your Circadian Rhythm Back on Track",
    author: "Lynne Peeples",
    date: "2026-11-19",
    url: "https://www.aarp.org/health/healthy-living/reset-circadian-rhythm/",
    summary:
      "Dr. Pierson on why older adults need brighter days and darker nights.",
    quote: {
      text: "Light is becoming more important as we age.",
      highlight: "Light",
    },
  },
];

export const pressMentions = newestFirst(checkDates(mentions));

export const featuredPressMention = pressMentions.find(
  (mention) => mention.quote?.text
);

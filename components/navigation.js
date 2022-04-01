import React from "react";
import Link from "next/link";
import { ChevronUp } from "react-feather";
import VisuallyHidden from "@reach/visually-hidden";

// https://courses.joshwcomeau.com/css-for-js/video-archive/005-youtube-sidebar
// https://codesandbox.io/s/youtube-sidebar-dwvdf

export const MenuItems = [
  {
    link: "/research",
    name: "research",
  },
  {
    link: "/publications",
    name: "publications",
  },
  {
    link: "/team",
    name: "team",
  },
  {
    link: "/about",
    name: "about",
  },
  // {
  //   link: "/contact",
  //   name: "contact",
  // },
];

export default function Navigation() {
  return (
    <nav>
      {/* <div className="grid grid-cols-4 grid-rows-1 justify-items-center"> */}
      <div className="flex gap-4 justify-center sm:justify-end">
        <div className="capitalize text-sm no-underline sm:text-base sm:hidden hover:text-blue-500">
          <Link href="/">home</Link>
        </div>
        {MenuItems.map((link) => (
          <div
            className="capitalize text-sm no-underline sm:text-base inline hover:text-blue-500"
            key={link.name}
          >
            <Link href={link.link}>{link.name}</Link>
          </div>
        ))}
      </div>
      <a
        href="#top"
        aria-label="back to the top of the page"
        className="px-2 py-2 text-sm fixed bottom-6 right-6 sm:block text-center rounded opacity-100 text-gray-800 bg-gray-300 hover:text-gray-50 hover:bg-blue-500 hidden shadow-md dark:shadow-gray-500"
      >
        Back to Top
      </a>
      <a
        href="#top"
        aria-label="back to the top of the page"
        className="px-2 py-2 text-sm fixed bottom-6 right-6 block text-center rounded opacity-100 text-gray-800 bg-gray-300 hover:text-gray-50 hover:bg-blue-500 sm:hidden shadow-md dark:shadow-gray-500"
      >
        <VisuallyHidden>Back to Top</VisuallyHidden>
        <ChevronUp />
      </a>
    </nav>
  );
}

import React from "react";
import Link from "next/link";

// https://courses.joshwcomeau.com/css-for-js/video-archive/005-youtube-sidebar
// https://codesandbox.io/s/youtube-sidebar-dwvdf

export const MenuItems = [
  {
    link: "/about",
    name: "about",
  },
  {
    link: "/research",
    name: "research",
  },
  {
    link: "/team",
    name: "team",
  },
  {
    link: "/teaching",
    name: "teaching",
  },
  // {
  //   link: "/contact",
  //   name: "contact",
  // },
];

export default function Navigation() {
  return (
    <nav>
      {/* <div class="grid grid-cols-4 grid-rows-1 justify-items-center"> */}
      <div class="flex gap-4 justify-center sm:justify-end">
        <div class="text-sm sm:text-base  sm:hidden">
          <Link class="no-underline capitalize hover:text-blue-300" href="/">
            Home
          </Link>
        </div>
        {MenuItems.map((link) => (
          <div
            class="text-sm sm:text-base inline capitalize hover:text-blue-300"
            key={link.name}
          >
            <Link
              class="no-underline capitalize hover:text-blue-300"
              href={link.link}
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

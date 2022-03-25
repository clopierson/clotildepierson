import React from "react";
import Link from "next/link";

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
  //   link: "/teaching",
  //   name: "teaching",
  // },
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
        <div class="capitalize text-sm no-underline sm:text-base sm:hidden hover:text-blue-300">
          <Link href="/">home</Link>
        </div>
        {MenuItems.map((link) => (
          <div
            class="capitalize text-sm no-underline sm:text-base inline hover:text-blue-300"
            key={link.name}
          >
            <Link href={link.link}>{link.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}

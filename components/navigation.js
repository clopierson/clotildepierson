import React from "react"
import Link from 'next/link'

// https://courses.joshwcomeau.com/css-for-js/video-archive/005-youtube-sidebar
// https://codesandbox.io/s/youtube-sidebar-dwvdf

export const MenuItems = [
  {
    link: "/",
    name: "about",
  },
  {
    link: "/research",
    name: "research",
  },
  {
    link: "/teaching",
    name: "teaching",
  },
  {
    link: "/contact",
    name: "contact",
  },
];

export default function Navigation() {
  return (
    <nav>
      <div class="grid grid-cols-4 grid-rows-1 justify-items-center">
        {MenuItems.map((link) => (
          <div class="inline capitalize" key={link.name}>
            <Link class="no-underline capitalize" href={link.link}>{link.name}</Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
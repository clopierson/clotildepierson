"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RadiantLab from "./radiant-lab.js";

export const MenuItems = [
  { link: "/research", name: "research" },
  { link: "/software", name: "software" },
  { link: "/facilities/dial", name: "facilities" },
  { link: "/publications", name: "publications" },
  { link: "/team", name: "team" },
  { link: "/about", name: "about" },
  { link: "/give", name: "give", highlight: true },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden lg:flex lg:items-center lg:gap-4"
    >
      <div className="text-sm md:text-base">
        <RadiantLab link="/" />
      </div>
      {MenuItems.map((link) =>
        link.highlight ? (
          <Button
            asChild
            className="h-auto bg-osu-beaver-orange px-3 py-1 text-sm text-white capitalize hover:bg-osu-luminance hover:text-gray-900 md:text-base"
            key={link.name}
          >
            <Link href={link.link}>{link.name}</Link>
          </Button>
        ) : (
          <div
            className="text-sm capitalize hover:text-osu-luminance md:text-base"
            key={link.name}
          >
            <Link href={link.link}>{link.name}</Link>
          </div>
        )
      )}
    </nav>
  );
}

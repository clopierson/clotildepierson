"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import RadiantLab from "./radiantLab.js";

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
    <nav aria-label="Main navigation" className="hidden lg:flex lg:items-center lg:gap-4">
      <div className="text-sm md:text-base">
        <RadiantLab link="/" />
      </div>
      {MenuItems.map((link) =>
        link.highlight ? (
          <Button
            key={link.name}
            asChild
            className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900 capitalize text-sm md:text-base h-auto px-3 py-1"
          >
            <Link href={link.link}>{link.name}</Link>
          </Button>
        ) : (
          <div
            key={link.name}
            className="capitalize text-sm md:text-base hover:text-osu-luminance"
          >
            <Link href={link.link}>{link.name}</Link>
          </div>
        )
      )}
    </nav>
  );
}

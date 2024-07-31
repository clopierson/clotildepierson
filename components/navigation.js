import React from "react";
import Link from "next/link";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ChevronUp, X, Menu } from "react-feather";
import VisuallyHidden from "@reach/visually-hidden";
import RadiantLab from "./radiantLab.js";
import InstitutionLogo from "./InstitutionLogo";

export const MenuItems = [
  // {
  //   link: "/",
  //   name: "home",
  // },
  {
    link: "/research",
    name: "research",
  },
  {
    link: "/software",
    name: "software",
  },
  // {
  //   link: "/facilities",
  //   name: "facilities",
  // },
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
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <nav>
      {/* Non-Mobile Menu */}
      <div className="hidden md:flex md:justify-end md:gap-4">
        <div className="text-sm no-underline md:text-base inline" key="home">
          <RadiantLab link="/" />
        </div>
        {MenuItems.map((link) => (
          <div
            className="capitalize text-sm no-underline md:text-base inline hover:text-osu-luminance"
            key={link.name}
          >
            <Link href={link.link}>{link.name}</Link>
          </div>
        ))}
      </div>
      {/* Back to top Non-Mobile */}
      <a
        href="#top"
        aria-label="back to the top of the page"
        className="select-none hidden md:block fixed px-3 py-3 text-sm bottom-6 right-6 text-center rounded shadow-md text-gray-800 bg-gray-300 hover:bg-osu-luminance  dark:shadow-black/50"
      >
        Back to Top
      </a>
      {/* Back to top Mobile */}
      <a
        href="#top"
        aria-label="back to the top of the page"
        className="select-none px-3 py-3 text-sm fixed bottom-6 right-20 block text-center rounded text-gray-800 bg-gray-300 hover:bg-osu-luminance md:hidden shadow-md dark:shadow-black/50"
      >
        <VisuallyHidden>Back to Top</VisuallyHidden>
        <ChevronUp />
      </a>
      {/* Open menu on Mobile */}
      <button
        className="select-none px-3 py-3 text-sm fixed bottom-6 right-6 block text-center rounded text-gray-800 bg-gray-300 hover:bg-osu-luminance md:hidden shadow-md dark:shadow-black/50"
        onClick={open}
      >
        {/* tailwindcss offer sr-only utility class instead */}
        <VisuallyHidden>Open Navigation Menu</VisuallyHidden>
        <Menu />
      </button>
      {/* Mobile menu overlay */}
      <DialogOverlay
        isOpen={showDialog}
        onDismiss={close}
        className="animate-fade-in z-20"
      >
        <DialogContent
          aria-label="mobile navigation menu"
          className="fixed top-0 right-0 !m-0 h-full !w-[75%] dark:!bg-neutral-800 motion-safe:animate-slide-in"
        >
          <div className="grid gap-4 h-full content-end motion-safe:animate-fade-in-slow">
            <div className="w-24">
              <InstitutionLogo orientation="vertical" />
            </div>
            <RadiantLab link="/" />
            {MenuItems.map((link) => (
              <div
                className="capitalize no-underline md:text-base inline hover:text-osu-luminance"
                key={link.name}
              >
                <Link href={link.link}>{link.name}</Link>
              </div>
            ))}
          </div>
          <button
            className="select-none px-3 py-3 text-sm fixed bottom-6 right-6 block text-center rounded text-gray-800 bg-gray-300 hover:bg-osu-luminance md:hidden shadow-md dark:shadow-black/50"
            onClick={close}
          >
            <VisuallyHidden>Close Navigation Menu</VisuallyHidden>
            <X />
          </button>{" "}
        </DialogContent>
      </DialogOverlay>
    </nav>
  );
}

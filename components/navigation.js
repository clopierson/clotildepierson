import React from "react";
import Link from "next/link";
import { ChevronUp, X, Menu } from "react-feather";
import RadiantLab from "./radiantLab.js";
import InstitutionLogo from "./InstitutionLogo";
import { Dialog } from "radix-ui";

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
        <span className="sr-only">Back to Top</span>
        <ChevronUp />
      </a>
      {/* Open menu on Mobile + Overlay*/}
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="select-none px-3 py-3 text-sm fixed bottom-6 right-6 block text-center rounded text-gray-800 bg-gray-300 hover:bg-osu-luminance md:hidden shadow-md dark:shadow-black/50">
            <span className="sr-only">Open Navigation Menu</span>
            <Menu />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="animate-fade-in z-20 fixed inset-0 bg-black/50 dark:bg-black/70" />
          <Dialog.Content
            aria-label="mobile navigation menu"
            className="z-50 fixed top-0 right-0 p-10 m-0! h-full w-[75%]! bg-white  dark:bg-neutral-800! motion-safe:animate-slide-in"
          >
            <div className="grid gap-4 h-full content-end motion-safe:animate-fade-in-slow">
              <Dialog.Title className="w-24">
                <InstitutionLogo orientation="vertical" />
              </Dialog.Title>
              <Dialog.Description className=""></Dialog.Description>
              <RadiantLab link="/" />
              {MenuItems.map((link) => (
                <div
                  className="capitalize no-underline md:text-base inline hover:text-osu-luminance"
                  key={link.name}
                >
                  <Link href={link.link}>{link.name}</Link>
                </div>
              ))}
              <Dialog.Close asChild>
                <button className="select-none px-3 py-3 text-sm fixed bottom-6 right-6 block text-center rounded text-gray-800 bg-gray-300 hover:bg-osu-luminance md:hidden shadow-md dark:shadow-black/50">
                  <span className="sr-only">Close Navigation Menu</span>
                  <X />
                </button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </nav>
  );
}

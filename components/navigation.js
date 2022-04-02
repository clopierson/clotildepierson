import React from "react";
import Link from "next/link";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ChevronUp, X, Menu } from "react-feather";
import VisuallyHidden from "@reach/visually-hidden";
import IrradiantLab from "./irradiantLab.js";

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
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);
  return (
    <nav>
      {/* Non-Mobile Memu */}
      <div className="hidden sm:flex sm:justify-end sm:gap-4">
        {MenuItems.map((link) => (
          <div
            className="capitalize text-sm no-underline sm:text-base inline hover:text-blue-300"
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
        className="hidden sm:block fixed px-2 py-2 text-sm bottom-6 right-6 text-center rounded shadow-md text-gray-800 bg-gray-300 hover:text-gray-50 hover:bg-blue-300  dark:shadow-black/50"
      >
        Back to Top
      </a>
      {/* Back to top Mobile */}
      <a
        href="#top"
        aria-label="back to the top of the page"
        className="px-2 py-2 text-sm fixed bottom-6 right-20 block text-center rounded text-gray-800 bg-gray-300 hover:text-gray-50 hover:bg-blue-300 sm:hidden shadow-md dark:shadow-black/50"
      >
        <VisuallyHidden>Back to Top</VisuallyHidden>
        <ChevronUp />
      </a>
      {/* Open menu on Mobile */}
      <button
        className="px-2 py-2 text-sm fixed bottom-6 right-6 block text-center rounded text-gray-800 bg-gray-300 hover:text-gray-50 hover:bg-blue-300 sm:hidden shadow-md dark:shadow-black/50"
        onClick={open}
      >
        <VisuallyHidden>Open Navigation Menu</VisuallyHidden>
        <Menu />
      </button>
      {/* Mobile menu overlay */}
      <DialogOverlay
        isOpen={showDialog}
        onDismiss={close}
        className="animate-fade-in"
      >
        <DialogContent
          aria-label="mobile navigation menu"
          className="fixed top-0 right-0 !m-0 h-full !w-[75%] dark:!bg-slate-800 motion-safe:animate-slide-in"
        >
          <div className="grid gap-4 h-full content-end motion-safe:animate-fade-in-slow">
            <div className="no-underline sm:text-base sm:hidden hover:text-blue-300">
              <IrradiantLab link="/" />
            </div>
            {MenuItems.map((link) => (
              <div
                className="capitalize no-underline sm:text-base inline hover:text-blue-300"
                key={link.name}
              >
                <Link href={link.link}>{link.name}</Link>
              </div>
            ))}
          </div>
          <button
            className="px-2 py-2 text-sm fixed bottom-6 right-6 block text-center rounded text-gray-800 bg-gray-300 hover:text-gray-50 hover:bg-blue-300 sm:hidden shadow-md dark:shadow-black/50"
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

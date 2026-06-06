"use client";
import Link from "next/link";
import { Menu } from "react-feather";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import InstitutionLogo from "./institution-logo";
import { MenuItems } from "./navigation";
import RadiantLab from "./radiant-lab";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            aria-label="Open navigation menu"
            className="rounded p-2 hover:bg-neutral-100 dark:hover:bg-neutral-700"
            type="button"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent
          className="flex flex-col justify-end gap-4 p-10 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
          side="right"
        >
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">
            Site navigation links
          </SheetDescription>
          <div className="w-24">
            <InstitutionLogo orientation="vertical" />
          </div>
          <SheetClose asChild>
            <div>
              <RadiantLab link="/" />
            </div>
          </SheetClose>
          {MenuItems.map((link) =>
            link.highlight ? (
              <SheetClose asChild key={link.name}>
                <Button
                  asChild
                  className="w-full bg-osu-beaver-orange text-white capitalize hover:bg-osu-luminance hover:text-neutral-900"
                >
                  <Link href={link.link}>{link.name}</Link>
                </Button>
              </SheetClose>
            ) : (
              <SheetClose asChild key={link.name}>
                <Link
                  className="text-base capitalize hover:text-osu-luminance"
                  href={link.link}
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}

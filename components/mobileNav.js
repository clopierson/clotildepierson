"use client";
import Link from "next/link";
import { Menu } from "react-feather";
import {
  Sheet,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuItems } from "./navigation";
import InstitutionLogo from "./InstitutionLogo";
import RadiantLab from "./radiantLab";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button
            className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-700"
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="flex flex-col justify-end gap-4 p-10 dark:bg-neutral-900 dark:text-gray-100 dark:border-neutral-700">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <SheetDescription className="sr-only">Site navigation links</SheetDescription>
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
                  className="bg-osu-beaver-orange text-white hover:bg-osu-luminance hover:text-gray-900 w-full capitalize"
                >
                  <Link href={link.link}>{link.name}</Link>
                </Button>
              </SheetClose>
            ) : (
              <SheetClose asChild key={link.name}>
                <Link
                  href={link.link}
                  className="capitalize hover:text-osu-luminance text-base"
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

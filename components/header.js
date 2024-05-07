import Navigation from "./navigation";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import InstitutionLogo from "./InstitutionLogo";
import RadiantLab from "./radiantLab";

export default function Header() {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-10 my-4 z-10">
      <SkipNavLink className="dark:!bg-neutral-800" />
      <div className="grid grid-cols-4 grid-rows-1 items-center">
        <div className="col-span-4 justify-self-center md:justify-self-start md:col-span-1">
          <div className="flex place-content-center items-center gap-6">
            <InstitutionLogo />
            <RadiantLab link="/" />
          </div>
        </div>
        <div className="col-start-3 col-span-2 justify-self-center md:justify-self-end">
          <Navigation />
        </div>
        <SkipNavContent />
      </div>
    </div>
  );
}

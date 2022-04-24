import Navigation from "./navigation";
import RadiantLab from "./radiantLab";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";
import InstitutionLogo from "./InstitutionLogo";

export default function Header() {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-10 my-4">
      <SkipNavLink />
      <div className="grid grid-cols-4 grid-rows-1 items-center">
        <div className="inline text-lg col-span-full place-self-center text-center md:text-left md:place-self-start md:col-start-1 md:col-span-2">
          <div className="grid gap-4 grid-cols-2 items-center">
            <div className="w-32 mx-auto mt-2">
              <InstitutionLogo />
            </div>
            <RadiantLab link="/" />
          </div>
        </div>
        <div className="col-span-full md:col-start-3 md:col-span-2">
          <Navigation />
        </div>
        <SkipNavContent />
      </div>
    </div>
  );
}

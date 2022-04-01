import Navigation from "./navigation";
import IrradiantLab from "./irradiantLab";
import { SkipNavLink, SkipNavContent } from "@reach/skip-nav";
import "@reach/skip-nav/styles.css";

export default function Header() {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-10 my-4">
      <SkipNavLink />
      <div className="grid grid-cols-3 grid-rows-1 place-content-evenly">
        <div className="inline text-lg col-span-full place-self-center text-center sm:text-left sm:place-self-start sm:col-start-1 sm:col-span-1">
          <IrradiantLab link="/" />
        </div>
        <div className="col-span-full sm:col-start-2 sm:col-span-2 lg:col-start-3 lg:col-span-1">
          <Navigation />
        </div>
        <SkipNavContent />
      </div>
    </div>
  );
}

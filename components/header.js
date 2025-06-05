import Navigation from "./navigation";
import InstitutionLogo from "./InstitutionLogo";
import RadiantLab from "./radiantLab";

export default function Header() {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-10 my-4 z-10">
      <a
        href="#main-content"
        className="sr-only z-50 focus:absolute bg-blue-600 text-white focus:p-2 rounded focus:not-sr-only top-4 left-4"
      >
        Skip to main content
      </a>
      <div className="grid grid-cols-4 grid-rows-1 items-center">
        <div className="col-span-4 justify-self-center md:justify-self-start md:col-span-1">
          <div className="flex place-content-center items-center gap-6">
            <InstitutionLogo />
            <span className="md:hidden">
              <RadiantLab link="/" />
            </span>
          </div>
        </div>
        <div className="col-start-3 col-span-2 justify-self-center md:justify-self-end">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

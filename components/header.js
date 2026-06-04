import Navigation from "./navigation";
import MobileNav from "./mobileNav";
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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* OSU logo: hidden on sm, visible md+ */}
          <span className="hidden md:block">
            <InstitutionLogo />
          </span>
          {/* RadiantLab: hidden on lg (Navigation renders it there) */}
          <span className="lg:hidden">
            <RadiantLab link="/" />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Navigation />
          <MobileNav />
        </div>
      </div>
    </div>
  );
}

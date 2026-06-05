import InstitutionLogo from "./institution-logo";
import MobileNav from "./mobile-nav";
import Navigation from "./navigation";
import RadiantLab from "./radiant-lab";

export default function Header() {
  return (
    <div className="z-10 col-span-10 col-start-2 row-span-1 row-start-1 my-4">
      <a
        className="sr-only top-4 left-4 z-50 rounded bg-blue-600 text-white focus:not-sr-only focus:absolute focus:p-2"
        href="#main-content"
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

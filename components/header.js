import Navigation from "./navigation";
import IrradiantLab from "./irradiantLab";

export default function Header() {
  return (
    <div className="row-start-1 row-span-1 col-start-2 col-span-10 my-4">
      <div className="grid grid-cols-3 grid-rows-1 place-content-evenly">
        <div className="hidden no-underline sm:inline sm:col-start-1 sm:col-span-1 hover:text-blue-500 w-44 -mb-2 text-lg">
          <IrradiantLab link="/" />
        </div>
        <div className="col-start-1 col-span-3 sm:col-start-2 sm:col-span-2 lg:col-start-3 lg:col-span-1">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

import Navigation from "./navigation";
import Link from "next/link";

export default function Header() {
  return (
    <div class="row-start-1 row-span-1 col-start-2 col-span-10 my-4">
      <div class="grid grid-cols-3 grid-rows-1 place-content-evenly">
        <div class="hidden no-underline uppercase tracking-widest sm:inline sm:col-start-1 sm:col-span-1 hover:text-blue-300 ">
          <Link href="/">irradiant lab</Link>
        </div>
        <div class="col-start-1 col-span-3 sm:col-start-2 sm:col-span-2 lg:col-start-3 lg:col-span-1">
          <Navigation />
        </div>
      </div>
    </div>
  );
}

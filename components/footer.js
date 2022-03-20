import Socials from "./socials";

export default function Footer() {
  return (
    <div class="row-start-3 row-span-1 col-start-2 col-span-10 my-4">
      <hr class="border-1 border-solid border-slate-300 my-4" />
      <div class="grid grid-cols-5 grid-rows-1 place-content-center">
        <div class="col-start-1 col-span-5 sm:col-start-2 sm:col-span-3 text-center prose dark:prose-invert mb-6">
          <Socials />
          <div class="text-sm">Carbon-neutral website.</div>
          <div class="text-sm">Please consider dark-mode to save energy.</div>
        </div>
      </div>
    </div>
  );
}

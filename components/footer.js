import Socials from "./socials";

export default function Footer() {
  // TODO: add vercel, nextjs, and ulbrich ref
  return (
    <div className="row-start-3 row-span-1 col-start-2 col-span-10 my-4">
      <hr className="border-1 border-solid border-slate-300 my-4" />
      <div className="text-center prose dark:prose-invert mx-auto mb-6 text-sm">
        <Socials />
        {/* <div>Carbon-neutral website.</div> */}
        <div>Please consider dark-mode to save energy.</div>
      </div>
    </div>
  );
}

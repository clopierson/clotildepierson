import IrradiantLab from "./irradiantLab";
import Socials from "./socials";

export default function Footer() {
  let date = new Date().getFullYear();
  return (
    <div className="row-start-3 row-span-1 col-start-2 col-span-10 my-4">
      <hr className="border-1 border-solid border-slate-300 my-4" />
      <div className="text-center prose dark:prose-invert mx-auto mb-6 text-sm">
        <Socials />
        <div className="text-xs mt-6">
          Copyright © {date} <IrradiantLab />. All rights reserved.
        </div>
        <div className="text-xs mt-6">
          <div>
            Developed by <a href="https://alexulbrich.com">Alex Ulbrich</a>{" "}
            using <a href="https://nextjs.org">Next.js</a> and{" "}
            <a href="https://tailwindcss.com">tailwindcss</a>. Deployed on{" "}
            <a href="https://vercel.com/">Vercel</a>.
          </div>
          <div>Please consider dark-mode to save energy.</div>
        </div>
      </div>
    </div>
  );
}

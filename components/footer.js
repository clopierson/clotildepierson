import PictureCopyright from "./pictureCopyright";
import RadiantLab from "./radiantLab";
import Socials from "./socials";

export default function Footer({
  heroImageAuthorUrl,
  heroImageUrl,
  heroImageAuthor,
}) {
  let date = new Date().getFullYear();
  return (
    <div className="row-start-3 row-span-1 col-start-2 col-span-10 my-4">
      <hr className="border-1 border-solid border-neutral-300 my-4" />
      <div className="text-center  prose prose-neutral dark:prose-invert mx-auto mb-6 text-sm">
        <Socials />
        <div className="text-xs mt-6">
          Copyright © {date} <RadiantLab />. All rights reserved.
        </div>
        <div>
          <p class="text-xs">
            This work is licensed under{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
              target="_blank"
              rel="license noopener noreferrer"
              class="inline-block"
            >
              CC BY-NC-ND 4.0
              <img
                class="h-4 ml-1 align-bottom inline my-0"
                src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                alt=""
              />
              <img
                class="h-4 ml-1 align-bottom inline my-0"
                src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                alt=""
              />
              <img
                class="h-4 ml-1 align-bottom inline my-0"
                src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                alt=""
              />
              <img
                class="h-4 ml-1 align-bottom inline my-0"
                src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"
                alt=""
              />
            </a>
          </p>
        </div>
        <div className="text-xs mt-6">
          <div>
            Developed by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.alexulbrich.com"
            >
              Alex Ulbrich
            </a>{" "}
            using{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://nextjs.org"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://tailwindcss.com"
            >
              tailwindcss
            </a>
            . Deployed on{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vercel.com/"
            >
              Vercel
            </a>
            .
          </div>
          <div>
            Illustrations adapted from{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://undraw.co"
            >
              unDraw
            </a>
            .{" "}
            <PictureCopyright
              authorName={heroImageAuthor}
              authorUrl={heroImageAuthorUrl}
              pictureUrl={heroImageUrl}
              websiteName="OSU"
            />
          </div>
          <div>Please consider dark-mode to save energy.</div>
        </div>
      </div>
    </div>
  );
}

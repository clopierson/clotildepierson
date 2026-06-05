import Image from "next/image";
import PictureCopyright from "./picture-copyright";
import RadiantLab from "./radiant-lab";
import Socials from "./socials";

const licenseIcons = [
  "/license/cc.png",
  "/license/by.png",
  "/license/nc.png",
  "/license/nd.png",
];

export default function Footer({
  heroImageAuthorUrl,
  heroImageUrl,
  heroImageAuthor,
}) {
  const date = new Date().getFullYear();
  return (
    <div className="col-span-10 col-start-2 row-span-1 row-start-3 my-4">
      <hr className="my-4 border-0.5 border-neutral-300 border-solid" />
      <div className="prose prose-neutral dark:prose-invert mx-auto mb-6 text-center text-sm">
        <Socials />
        <div className="mt-6 text-xs">
          Copyright © {date} <RadiantLab />. All rights reserved.
        </div>
        <div>
          <p className="text-xs">
            This work is licensed under{" "}
            <a
              className="inline-block"
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1"
              rel="license noopener noreferrer"
              target="_blank"
            >
              CC BY-NC-ND 4.0
              {licenseIcons.map((src) => (
                <Image
                  alt=""
                  className="mt-0 mb-0 ml-1 inline h-4 w-auto"
                  height={16}
                  key={src}
                  src={src}
                  width={16}
                />
              ))}
            </a>
          </p>
        </div>
        <div className="mt-6 text-xs">
          <div>
            Developed by{" "}
            <a
              href="https://www.alexulbrich.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Alex Ulbrich
            </a>{" "}
            using{" "}
            <a
              href="https://nextjs.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS
            </a>
            . Deployed on{" "}
            <a
              href="https://vercel.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Vercel
            </a>
            .
          </div>
          <div>
            Illustrations adapted from{" "}
            <a
              href="https://undraw.co"
              rel="noopener noreferrer"
              target="_blank"
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
        </div>
      </div>
    </div>
  );
}

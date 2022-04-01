import Image from "next/image";

export default function SpontaneousApplication() {
  return (
    <div className="rounded bg-blue-100 prose p-3 sm:p-6 dark:prose hover:shadow-md dark:hover:shadow-gray-500">
      <div className="grid grid-cols-2 grid-rows-2 grid-flow-col-dense items-center">
        <div className="row-span-1 col-span-full sm:row-span-full sm:col-span-1 place-self-center sm:place-self-start">
          <h2 className="m-0">Spontaneous Applications</h2>
        </div>
        <div className="mt-2 row-span-2 col-span-full sm:row-span-full sm:col-span-2 place-self-center">
          {/* TODO: remove image or use something else */}
          <Image
            src="/undraw_handcrafts_arrows.svg"
            alt=""
            layout="intrinsic"
            height={30}
            width={100}
          />
        </div>
      </div>
      <p>
        If you are interested in doing research with me at Oregon State
        University, please visit:
      </p>
      <ul>
        <li>
          <a href="https://cce.oregonstate.edu/future-students">
            the future students page for URA, MS, and PhD
          </a>
        </li>
        <li>
          <a href="https://gradschool.oregonstate.edu/postdocs/">
            the grad school page for postdocs
          </a>
        </li>
      </ul>
      <p>
        After that{" "}
        <a href="mailto:clotilde.pierson@oregonstate.edu">send me an email</a>{" "}
        so that we can discuss opportunities. In your email, please include a
        description of your interests and how they fit with our work along with
        an up-to-date resume.
      </p>
    </div>
  );
}

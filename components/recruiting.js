import Image from "next/image";

export default function Recruiting() {
  // TODO: add form to Microsoft forms and files.
  // TODO: make the card collapsible (accordion style)
  return (
    <div className="rounded bg-slate-100 dark:bg-slate-700 p-3 sm:p-6 shadow-md dark:shadow-black/50">
      <h2 className="text-center mt-0">Open Ph.D. Positions! Apply Now!</h2>
      <p>
        We have two open Ph.D. positions in the lab for Fall 2022. The research
        topics revolve around:
      </p>
      <ol>
        <li>
          evaluating the current and future indoor visual conditions in urban
          environment
        </li>
        <li>
          studying the ipRGC-influenced light responses of building occupants
          under daylight conditions.
        </li>
      </ol>

      <p>
        The first topic relies mainly on numerical modeling, and the second on
        experimental methods and user studies.
      </p>
      <div className="grid grid-cols-2 grid-flow-col-dense place-items-center">
        <div>
          <p>
            More information on the positions can be found here (link to
            description page).
          </p>
          <p>
            Please submit your application by completing the following form
            (link to form).
          </p>
        </div>
        <div className="aspect-square max-h-28">
          <Image
            className="invert-0 dark:invert dark:grayscale dark:brightness-50"
            src="/undraw_handcrafts_pinned_file.svg"
            alt=""
            layout="intrinsic"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
}

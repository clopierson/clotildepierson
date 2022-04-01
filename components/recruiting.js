import Image from "next/image";

export default function Recruiting() {
  // TODO: add form to Microsoft forms and files.
  // TODO: make the card collapsible (accordion style)
  return (
    <div className="rounded bg-blue-100 prose p-6 pb-1 dark:prose hover:shadow-md dark:hover:shadow-gray-500">
      <h2 className="text-center">Open Ph.D. Positions! Apply Now!</h2>
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
        <div>
          <Image
            src="/undraw_handcrafts_pinned_file.svg"
            alt=""
            layout="fixed"
            height={112}
            width={112}
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function ResearchDiagram({ diagram }) {
  return (
    <div>
      {/* TODO: add versions for mobile */}
      {diagram === "full" && (
        <div>
          <div className="hidden my-5 justify-center dark:flex">
            <Image
              src="/rel_diag_sm_dark.svg"
              alt="relationships between natural and built environment, indoor light and visual conditions, building occupants, and energy consumption"
              width={645}
              height={344}
            />
          </div>
          <div className="flex my-5 justify-center dark:hidden">
            <Image
              src="/rel_diag_sm_light.svg"
              alt="relationships between natural and built environment, indoor light and visual conditions, building occupants, and energy consumption"
              width={645}
              height={344}
            />
          </div>
        </div>
      )}
      {diagram === "rel1" && (
        <div>
          <div className="hidden my-5 justify-center dark:flex">
            <Image
              src="/rel_env_cond_diag_sm_dark.svg"
              alt="relationship between natural and built environment, and indoor light and visual conditions"
              width={447}
              height={147}
            />
          </div>
          <div className="flex my-5 justify-center dark:hidden">
            <Image
              src="/rel_env_cond_diag_sm_light.svg"
              alt="relationship between natural and built environment, and indoor light and visual conditions"
              width={447}
              height={147}
            />
          </div>
        </div>
      )}
      {diagram === "rel2" && (
        <div>
          <div className="hidden my-5 justify-center dark:flex">
            <Image
              src="/rel_occ_cond_diag_sm_dark.svg"
              alt="relationship between indoor light and visual conditions, and building occupants"
              width={447}
              height={142}
            />
          </div>
          <div className="flex my-5 justify-center dark:hidden">
            <Image
              src="/rel_occ_cond_diag_sm_light.svg"
              alt="relationship between indoor light and visual conditions, and building occupants"
              width={447}
              height={142}
            />
          </div>
        </div>
      )}
      {diagram === "rel3" && (
        <div>
          <div className="hidden my-5 justify-center dark:flex">
            <Image
              src="/rel_ener_diag_sm_dark.svg"
              alt="relationships between natural and built environment, building occupants, and energy consumption"
              width={423}
              height={318}
            />
          </div>
          <div className="flex my-5 justify-center dark:hidden">
            <Image
              src="/rel_ener_diag_sm_light.svg"
              alt="relationships between natural and built environment, building occupants, and energy consumption"
              width={423}
              height={318}
            />
          </div>
        </div>
      )}
    </div>
  );
}

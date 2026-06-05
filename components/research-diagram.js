import Image from "next/image";

export default function ResearchDiagram({ diagram }) {
  return (
    <div>
      {/* TODO: add versions for mobile */}
      {diagram === "full" && (
        <div>
          <div className="my-5 hidden justify-center dark:flex">
            <Image
              alt="relationships between natural and built environment, indoor light and visual conditions, building occupants, and energy consumption"
              height={344}
              sizes="(max-width: 768px) 92vw, 645px"
              src="/rel_diag_sm_dark.svg"
              width={645}
            />
          </div>
          <div className="my-5 flex justify-center dark:hidden">
            <Image
              alt="relationships between natural and built environment, indoor light and visual conditions, building occupants, and energy consumption"
              height={344}
              sizes="(max-width: 768px) 92vw, 645px"
              src="/rel_diag_sm_light.svg"
              width={645}
            />
          </div>
        </div>
      )}
      {diagram === "rel1" && (
        <div>
          <div className="my-5 hidden justify-center dark:flex">
            <Image
              alt="relationship between natural and built environment, and indoor light and visual conditions"
              height={157}
              sizes="(max-width: 768px) 92vw, 447px"
              src="/rel_env_cond_diag_sm_dark.svg"
              width={447}
            />
          </div>
          <div className="my-5 flex justify-center dark:hidden">
            <Image
              alt="relationship between natural and built environment, and indoor light and visual conditions"
              height={157}
              sizes="(max-width: 768px) 92vw, 447px"
              src="/rel_env_cond_diag_sm_light.svg"
              width={447}
            />
          </div>
        </div>
      )}
      {diagram === "rel2" && (
        <div>
          <div className="my-5 hidden justify-center dark:flex">
            <Image
              alt="relationship between indoor light and visual conditions, and building occupants"
              height={142}
              sizes="(max-width: 768px) 92vw, 447px"
              src="/rel_occ_cond_diag_sm_dark.svg"
              width={447}
            />
          </div>
          <div className="my-5 flex justify-center dark:hidden">
            <Image
              alt="relationship between indoor light and visual conditions, and building occupants"
              height={142}
              sizes="(max-width: 768px) 92vw, 447px"
              src="/rel_occ_cond_diag_sm_light.svg"
              width={447}
            />
          </div>
        </div>
      )}
      {diagram === "rel3" && (
        <div>
          <div className="my-5 hidden justify-center dark:flex">
            <Image
              alt="relationships between natural and built environment, building occupants, and energy consumption"
              height={318}
              sizes="(max-width: 768px) 92vw, 423px"
              src="/rel_ener_diag_sm_dark.svg"
              width={423}
            />
          </div>
          <div className="my-5 flex justify-center dark:hidden">
            <Image
              alt="relationships between natural and built environment, building occupants, and energy consumption"
              height={318}
              sizes="(max-width: 768px) 92vw, 423px"
              src="/rel_ener_diag_sm_light.svg"
              width={423}
            />
          </div>
        </div>
      )}
    </div>
  );
}

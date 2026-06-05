import Image from "next/image";
import horizontalLight from "../public/institution/OSU_horizontal_2C_O_over_B.png";
import horizontalDark from "../public/institution/OSU_horizontal_2C_O_over_W.png";
import verticalLight from "../public/institution/OSU_vertical_2C_O_over_B.png";
import verticalDark from "../public/institution/OSU_vertical_2C_O_over_W.png";

export default function InstitutionLogo({ orientation = "horizontal" }) {
  return (
    <div>
      {orientation === "horizontal" ? (
        <div className="h-[40px] w-[125px] sm:h-[64px] sm:w-[200px]">
          <div className="inline-block dark:hidden">
            <Image
              alt="Oregon State University Logo"
              height={64}
              placeholder="blur"
              sizes="(max-width: 640px) 125px, 200px"
              src={horizontalLight}
              width={200}
            />
          </div>
          <div className="hidden dark:inline-block">
            <Image
              alt="Oregon State University Logo"
              height={64}
              placeholder="blur"
              sizes="(max-width: 640px) 125px, 200px"
              src={horizontalDark}
              width={200}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="inline-block dark:hidden">
            <Image
              alt="Oregon State University Logo"
              height={100}
              placeholder="blur"
              sizes="95px"
              src={verticalLight}
              width={95}
            />
          </div>
          <div className="hidden dark:inline-block">
            <Image
              alt="Oregon State University Logo"
              height={100}
              placeholder="blur"
              sizes="95px"
              src={verticalDark}
              width={95}
            />
          </div>
        </div>
      )}
    </div>
  );
}

import Image from "next/image";
import verticalDark from "../public/institution/OSU_vertical_2C_O_over_W.png";
import verticalLight from "../public/institution/OSU_vertical_2C_O_over_B.png";
import horizontalDark from "../public/institution/OSU_horizontal_2C_O_over_W.png";
import horizontalLight from "../public/institution/OSU_horizontal_2C_O_over_B.png";

export default function InstitutionLogo({ orientation = "horizontal" }) {
  return (
    <div>
      {orientation === "horizontal" ? (
        <div className="w-[125px] h-[40px] sm:w-[190px] sm:h-[60px]">
          <div className="inline-block dark:hidden">
            <Image
              src={horizontalLight}
              alt="Oregon State University Logo"
              placeholder="blur"
              width={250}
              height={80}
              layout="intrinsic"
            />
          </div>
          <div className="hidden dark:inline-block">
            <Image
              src={horizontalDark}
              alt="Oregon State University Logo"
              placeholder="blur"
              width={250}
              height={80}
              layout="intrinsic"
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="inline-block dark:hidden">
            <Image
              src={verticalLight}
              alt="Oregon State University Logo"
              placeholder="blur"
              width={95}
              height={100}
              layout="intrinsic"
            />
          </div>
          <div className="hidden dark:inline-block">
            <Image
              src={verticalDark}
              alt="Oregon State University Logo"
              placeholder="blur"
              width={95}
              height={100}
              layout="intrinsic"
            />
          </div>
        </div>
      )}
    </div>
  );
}

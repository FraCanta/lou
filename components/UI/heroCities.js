import Image from "next/image";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const HeroCities = ({ city }) => {
  const [expand, setExpand] = useState({
    background: "bgTour",
    text: "bgText hide",
    arrow: "arrow",
  });
  const handleExpand = () => {
    setExpand((prevData) =>
      prevData.background === "bgTour"
        ? {
            background: "bgTour bgExpand",
            text: "bgText",
            arrow: "arrow arrowRotate",
            before:
              "before:content-[''] before:rounded-none  xl:before:rounded-xl before:absolute before:z-20 before:inset-0 before:bg-[#6F4403] before:bg-opacity-40",
          }
        : { background: "bgTour", text: "bgText hide", arrow: "arrow" }
    );
  };

  return (
    <>
      <div
        className={`container mx-auto w-full xl:w-4/5 ${expand.background} rounded-none xl:rounded-xl text-[1.5rem] xl:text-5xl mb-10 text-white relative hand-pointer overflow-hidden`}
        onClick={handleExpand}
      >
        <div className={`h-full absolute w-full top-0 left-0 ${expand.before}`}>
          <Image
            src={city?.img}
            alt={city?.titleImg}
            // width={1200}
            // height={800}
            fill
            className="min-h-full h-full object-cover w-full"
          />
        </div>
        <Icon
          icon="material-symbols:arrow-drop-down"
          width="60"
          color="#FE6847"
          className={`block xl:hidden absolute right-0 bottom-0 ${expand.arrow}`}
        />

        <div
          className={`absolute bottom-[1.5rem] xl:bottom-10 left-10 bgText ${expand.text} z-20 text-base xl:text-2xl w-3/5 `}
        >
          <cite>{city?.citazione}</cite>
        </div>
      </div>
    </>
  );
};

export default HeroCities;

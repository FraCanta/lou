import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Correlati = ({ city, others }) => {
  return (
    <>
      <div className=" min-h-[38vh] lg:min-h-[40vh] 3xl:min-h-[80vh]  w-full 2xl:p-8 ">
        <div className="container w-11/12 xl:w-4/5 mx-auto">
          <h3 className="text-3xl md:text-[40px] font-medium mt-2 leading-10 text-[#232F37] lg:text-center pb-8 ">
            Ecco per te altre proposte
          </h3>
        </div>
        <div
          className={`hidden xl:flex container mx-auto w-full xl:w-4/5 text-[1.5rem] xl:text-5xl mb-10 text-white hand-pointer overflow-hidden `}
        >
          {others
            ?.filter((el) => el?.title !== city?.titleImg)
            .map((el, i) => (
              <>
                <div className={`  w-[25%]  relative aspect-square `} key={i}>
                  <Link href={el?.link}>
                    <Image
                      src={el?.img}
                      alt={el?.titleImg}
                      // width={1200}
                      // height={800}
                      fill
                      className="min-h-full h-full object-cover w-full absolute p-4 !rounded-[1.5rem] backdrop-contrast-50"
                    />
                  </Link>
                  <div
                    className={`absolute bottom-[1.5rem] xl:bottom-8 left-10 bgText  z-20 text-base xl:text-2xl w-3/5 `}
                  >
                    <p className="leading-4 text-xl">{el?.title}</p>
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
      <div className="min-h-[38vh] w-full 2xl:p-8 lg:hidden ">
        <div className=" carousel carousel-center p-4 space-x-4 ">
          {others
            ?.filter((el) => el?.title !== city?.titleImg)
            .map((el, i) => (
              <>
                <div className="carousel-item w-[180px] h-[180px] relative">
                  <Link href={el?.link}>
                    <Image
                      src={el?.img}
                      alt={el?.titleImg}
                      fill
                      className="rounded-box  h-full w-full absolute"
                    />
                  </Link>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default Correlati;

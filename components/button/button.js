import React from "react";
import { Icon } from "@iconify/react";

function Cta({ children }) {
  return (
    <button className="border-2 px-4 fxl:px-4 2xl:py-[1.2rem] fxl:py-[12rem] text-white 2xl:text-[1.2rem] fxl:text-[1.5rem] font-bold uppercase bg-[#E3494D] border-[#E3494D] rounded-2xl flex justify-evenly 2xl:min-w-[220px]">
      {children} <Icon icon="bi:arrow-right" />
    </button>
  );
}

export default Cta;

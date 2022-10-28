import React from "react";
import { Icon } from "@iconify/react";

function Cta({ children }) {
  return (
    <button className="border-2 px-6 py-3 md:px-8 md:py-[1.2rem] fxl:px-4 2xl:py-[1.2rem] fxl:py-[2rem] text-white 2xl:text-[1.2rem] fxl:text-[1.5rem] font-bold uppercase bg-[#E3494D] border-[#E3494D] rounded-2xl flex justify-between min-w-[150px] md:min-w-[200px] 2xl:min-w-[220px]">
      {children} <Icon icon="bi:arrow-right" />
    </button>
  );
}

export default Cta;

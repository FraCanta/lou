import Image from "next/image";
import Link from "next/link";
import React from "react";
import Lou from "../../public/assets/logo_mobile.png";
import { Icon } from "@iconify/react";

const Menu = () => {
  return (
    <div className="hidden xl:flex w-full bg-white border-b border-black-500 z-20 menu">
      <div className="container mx-auto w-4/5">
        <div className="flex  mx-auto justify-between items-center px-0 py-6">
          <div className="flex items-center justify-center ">
            <Link href="/">
              <Image src={Lou} alt="Lou Logo" width={60} height={60} />
            </Link>
            <div className="flex flex-col mx-2">
              <span className="text-2xl">Lou On Tour</span>
              <span className="text-[0.6rem]">Tailored Tour</span>
            </div>
          </div>
          <nav className="menu-nav text-[#232F37]">
            <ul>
              <li>
                <Link href="/" className="2xl:text-l[12px] fxl:text-[18px]">
                  Inizi da qui!
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  className="2xl:text-l[12px] fxl:text-[18px] "
                >
                  Tours{" "}
                  <Icon
                    icon="bxs:down-arrow"
                    color="#232F37"
                    width="10"
                    className="ml-2"
                  />
                </Link>
              </li>
              <li>
                <Link href="/how" className="2xl:text-l[12px] fxl:text-[18px]">
                  Chi sono
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="2xl:text-l[12px] fxl:text-[18px]"
                >
                  Contatti
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button className="btn lg:text-lg 3xl:text-2xl mr-4">
              <Link href="/contact" className="">
                <Icon
                  icon="entypo-social:facebook"
                  color="#dd602f"
                  width="25"
                />
              </Link>
            </button>
            <button className="btn lg:text-lg 3xl:text-2xl mr-4">
              <Link href="/contact" className="">
                <Icon
                  icon="akar-icons:instagram-fill"
                  color="#dd602f"
                  width="25"
                />
              </Link>
            </button>
            <button className="btn lg:text-lg 3xl:text-2xl">
              <Link href="/contact" className="">
                <Icon icon="entypo-social:youtube" color="#dd602f" width="25" />{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

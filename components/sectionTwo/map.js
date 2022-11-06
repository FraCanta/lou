import React, { useState } from "react";
import Image from "next/image";
import Toscana from "../../public/assets/toscana.svg";
import Choose from "../../public/assets/choose.svg";
import { Icon } from "@iconify/react";

import Button from "../button/button";
import Modal from "../modal/modal";

const Map = ({ translation }) => {
  console.log(translation);
  const [showModal, setShowModal] = useState({
    isOpen: "hide",
    place: null,
    scale: "",
  });
  const openModal = (place) => {
    setShowModal({ isOpen: "", place: place, scale: "scale-modal" });
  };
  const closeModal = () => {
    setShowModal((prevData) => {
      return { ...prevData, isOpen: "hide", scale: "" };
    });
  };
  return (
    <div className="min-h-[70vh] container mx-auto w-full 2xl:w-4/5  ">
      <div className="grid gap-14 md:gap-14 xl:gap-18 grid-cols-1 2xl:grid-cols-2 justify-items-center content-center pt-8  overflow-x-hidden lg:overflow-visible h-full">
        <div className="p-8 2xl:p-0">
          <h4 className="text-[#E3494D]">Tours</h4>
          <h2 className="text-4xl md:text-[64px] font-medium md:leading-none lg:leading-none text-[#232F37]">
            Disegnamo insieme il Tuo Tour
          </h2>
          <p className="text-base sm:text-lg  mt-4 sm:mt-16 mb-8 text-[#515151] ">
            Qui troverai alcuni tra i tour più popolari, che sono piaciuti a
            molti e che io amo spesso fare! Scegli una location sulla mappa qui
            accanto e dai un’occhiata alle mie proposte di tour: ce ne sono per
            tutti i gusti! Ma se cerchi qualcosa che faccia più al caso tuo,
            contattatami e proveremo insieme a creare il tour che meglio
            soddisfi i tuoi gusti e le tue esigenze.
          </p>
          <Button>Contattami</Button>
        </div>

        <div className="pt-0 w-[700px] height-[697.359px] relative ">
          <div className="flex flex-col justify-end text-end absolute -top-10 2xl:right-10 right-40">
            <Image src={Choose} alt="brand" className="w-[120px]" />

            <h3 className="uppercase font-medium pt-2 text-lg  text-[0.7rem] 2xl:text-[1rem] text-[#232F37] w-[80%]">
              Scegli la tua Destinazione
            </h3>
          </div>
          <Image src={Toscana} alt="map" width={700} height={697.359} />
          <Modal showModal={showModal} closeModal={closeModal} />
          {translation?.markers?.map((el, i) => (
            <Icon
              key={i}
              icon="fontisto:map-marker-alt"
              width="40"
              className="absolute  animate-bounce"
              style={
                el?.marker?.top > 0
                  ? {
                      top: `${el?.marker?.top}px`,
                      right: `${el?.marker?.right}px`,
                      color: "#e3494d",
                    }
                  : {
                      bottom: `${el?.marker?.bottom}px`,
                      right: `${el?.marker?.right}px`,
                      color: "#e3494d",
                    }
              }
              id={el?.title}
              onClick={() => openModal(el?.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;

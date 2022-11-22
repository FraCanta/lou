import React, { useState } from "react";
import Image from "next/image";
import ModalGallery from "./modalGallery";

const GalleryTours = ({ imageArray }) => {
  const [showModal, setShowModal] = useState({
    isOpen: "hide",
    scale: "",
    img: "",
  });
  const handleModal = (img) => {
    showModal.isOpen === "hide"
      ? setShowModal({
          isOpen: "",
          scale: "scale-modal",
          img: img,
        })
      : setShowModal((prevData) => {
          return { ...prevData, isOpen: "hide", scale: "" };
        });
  };

  return (
    <div className="min-h-[50vh] ">
      <div className="container mx-auto w-11/12 lg:w-4/5 py-10">
        <h3 className="text-3xl md:text-[40px] font-medium mt-2 leading-10 text-[#232F37] lg:text-center pb-4">
          Gallery
        </h3>
        <div className="w-full h-[1px] bg-black bg-opacity-20"></div>

        <div className="gallery pt-8">
          {imageArray?.map((el, i) => (
            <div className="gallery-item" key={i}>
              <Image
                className="gallery-image"
                src={el}
                alt="foto"
                width={200}
                height={200}
                onClick={() => handleModal(el)}
              />
              <Image
                className="hidden"
                src={el}
                alt={el?.titleImg}
                priority
                width={2000}
                height={2000}
                onClick={() => handleModal(el)}
                onLoadingComplete={() =>
                  console.log("Immagine" + i + " completa")
                }
              />
            </div>
          ))}
          <ModalGallery handleModal={handleModal} showModal={showModal} />
        </div>
      </div>
    </div>
  );
};

export default GalleryTours;

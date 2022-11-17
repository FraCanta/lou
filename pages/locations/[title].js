import Head from "next/head";
import Link from "next/link";
import HeroCities from "../../components/UI/heroCities";
import locations from "../../public/locales/it/it.json";
import Transition from "../../components/transition/transition";
// import gsap from "gsap";
import { Icon } from "@iconify/react";
// import GalleryTours from "../../components/UI/galleryTours";

export default function Tours({ city }) {
  // const tours = gsap.timeline(); // prima timeline per transition della pagina

  return (
    <>
      <Head>
        <title>{`Lou On Tour - ${city?.titleImg}`}</title>
      </Head>
      <div className="w-full xl:w-4/5 min-h-[30vh] container mx-auto flex flex-col xl:flex-row xl:py-8">
        <div className="w-full xl:w-1/2 p-8">
          <h6 className="text-[#FE6847]">Destinations</h6>
          <h2 className="text-4xl sm:text-6xl font-bold font-medium mt-2 leading-10 text-[#232F37]">
            {city?.titleImg}
          </h2>
        </div>
        <div className="w-full xl:w-1/2 p-8">
          <p className="text-base sm:text-xl  mt-0 sm:mt-8 mb-4 text-[#232F37]">
            {city?.descrizione}
          </p>
        </div>
      </div>
      <HeroCities city={city} />
      {/* <div className="w-4/5  container mx-auto flex flex-col xl:flex-row xl:py-8 "> */}
      {/* <p className="text-lg text-black">{city?.descrizione}</p> */}
      {/* </div> */}
      <div className="min-h-[50vh] py-4 ">
        <div className="container w-full md:w-4/5 mx-auto xl:h-full ">
          <div className="flex flex-col xl:flex-row w-full justify-between">
            <div className="w-full xl:w-1/2 px-8 xl:p-4">
              <h3 className="text-3xl md:text-[30px] font-medium mt-2 leading-10 text-[#232F37] pb-8">
                {city?.half}
              </h3>
              <ul className="text-xl md:text-lg font-medium mt-2 leading-10  text-[#232F37] pb-10 elenco_tours">
                {city?.half_elenco?.map((el, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-xl  mt-4 sm:mt-8 text-[#232F37] "
                  >
                    <div dangerouslySetInnerHTML={{ __html: el }}></div>
                  </li>
                ))}
              </ul>
              {!!city?.ticket && (
                <div className="text-xl md:text-lg font-medium mt-2 leading-10  pb-8 ticket">
                  <Link href={city?.ticket} target="_blank" rel="noreferrer">
                    Info
                  </Link>
                </div>
              )}
            </div>
            <div className="w-full xl:w-1/2 px-8 xl:p-4 pt-8 xl:pt-0">
              <h3 className="text-3xl md:text-[30px] font-medium mt-2 leading-10 text-[#232F37] pb-8">
                {city?.full}
              </h3>
              <ul className="text-xl md:text-lg font-medium mt-2 leading-10 text-[#232F37] pb-8 elenco_tours">
                {city?.full_elenco?.map((el, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-xl  mt-0 sm:mt-8 text-[#232F37] pb-2"
                  >
                    <div dangerouslySetInnerHTML={{ __html: el }}></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <GalleryTours /> */}

      {/* <Transition timeline={tours} /> */}
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  let targetObj = locations?.tours?.[params?.title];

  return {
    props: {
      city: targetObj,
    },
  };
}

export async function getStaticPaths() {
  const cities = locations?.tours;
  const arr = Object.keys(cities); // Array dei tours

  const paths = arr?.map((el) => {
    return {
      params: {
        title: el,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

import Head from "next/head";
import dynamic from "next/dynamic";
const DynamicHero = dynamic(() => import("../components/layout/hero"));
const DynamicMission = dynamic(() =>
  import("../components/sectionOne/mission")
);
const DynamicAboutMe = dynamic(() =>
  import("../components/sectionThree/aboutMe")
);
const DynamicMap = dynamic(() => import("../components/sectionTwo/map"));
const DynamicInsta = dynamic(() => import("../components/sectionFour/insta"));
const DynamicBanner = dynamic(() => import("../components/sectionFive/banner"));

import translationIT from "../public/locales/it/it.json";
import translationEN from "../public/locales/en/en.json";
import { useRouter } from "next/router";
import BlogSection from "../components/blogSection/blogSection";
import {
  getPosts,
  getCategories,
  getMedia,
  getTagId,
} from "../utils/wordpress";

export default function Home({ translation, post, category }) {
  const { locale } = useRouter();
  return (
    <div>
      <Head>
        <title>{translation?.head?.title}</title>
        <meta
          name="description"
          content="Guida Turistica abilitata in italiano e in inglese. Propongo tour guidati a Firenze, Volterra, Siena e la sua provincia. Sono a tua disposizione per disegnare il tuo tour su misura, secondo i tuoi gusti e le tue esigenze."
        />
        <meta property="og:url" content="https://www.louontour.it/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lou On Tour - Guida Turistica" />
        <meta
          property="og:description"
          content="Guida Turistica abilitata in italiano e in inglese. Propongo tour guidati a Firenze, Volterra, Siena e la sua provincia. Sono a tua disposizione per disegnare il tuo tour su misura, secondo i tuoi gusti e le tue esigenze."
        />

        <meta
          property="og:image"
          content="https://louontour.it/assets/preview-05.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="louontour.it" />
        <meta property="twitter:url" content="https://www.louontour.it/" />
        <meta name="twitter:title" content="Lou On Tour - Guida Turistica" />
        <meta
          name="twitter:description"
          content="Guida Turistica abilitata in italiano e in inglese. Propongo tour guidati a Firenze, Volterra, Siena e la sua provincia. Sono a tua disposizione per disegnare il tuo tour su misura, secondo i tuoi gusti e le tue esigenze."
        />
        <meta
          name="twitter:image"
          content="https://louontour.it/assets/preview-05.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicHero translation={translation?.hero} />
      <DynamicMission translation={translation?.mission} />
      <DynamicMap translation={translation?.map} />
      <DynamicAboutMe translation={translation?.about} />
      <DynamicInsta translation={translation?.socialLou} />
      <BlogSection post={post} translation={translation?.blogSection} />

      <DynamicBanner translation={translation?.banner} />
    </div>
  );
}
export async function getStaticProps({ locale }) {
  const idLocale = await getTagId(locale); // recupera id della lingua attuale
  const post = await getPosts(idLocale); //recupera post nella lingua attuale
  const category = await getCategories();
  const media = await getMedia();

  let obj;

  switch (locale) {
    case "it":
      obj = translationIT;
      break;

    case "en":
      obj = translationEN;
      break;
    default:
      obj = translationIT;
      break;
  }

  return {
    props: {
      translation: obj?.home,
      post: post.sort((a, b) => a?.date > b?.date).filter((el, i) => i < 4),
      category: category,
      media: media,
    },
    revalidate: 60,
  };
}

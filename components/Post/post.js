import Link from "next/link";
import Image from "next/image";
//to use Image with an external url, add some config on next.config.js
//for more info, check out these docs https://nextjs.org/docs/basic-features/image-optimization
import Siena from "../../public/assets/locationTour/siena/siena2.jpg";

import { getDate } from "../../utils/utils";
import Cta from "../button/button";

export default function Post({ post, featuredMedia }) {
  // console.log(featuredMedia?.["media_details"]?.sizes?.full?.["source_url"]);
  return (
    <div className="card w-full lg:w-96  shadow-xl mb-4 lg:mb-0 !pt-0 bg-white">
      <Link href={`/posts/${post?.slug}`}>
        <figure>
          <Image
            src={
              featuredMedia?.["media_details"]?.sizes?.full?.["source_url"] ||
              Siena
            }
            width={461}
            height={420}
            alt={featuredMedia?.["alt_text"] || "LouOnTour image"}
            className="w-full h-auto md:h-[450px] lg:h-[300px] object-cover rounded-t-lg object-top "
            priority
            quality={70}
          />
        </figure>
      </Link>

      <div className="card-body justify-between !p-[1.5rem]">
        <div className="py-2">
          <small className="badge bg-second border-transparent badge-lg text-white">
            {getDate(post?.date)}
          </small>
        </div>
        <Link href={`/posts/${post?.slug}`} target="_blank">
          <h5
            className="card-title text-[#2c395b] pb-2 hover:underline"
            dangerouslySetInnerHTML={{ __html: post?.title?.rendered }}
          ></h5>
        </Link>
        <div
          dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
          className="line-clamp text-[#2c395b]"
        ></div>
        {/* <div className="card-actions justify-end">
          <Link href={`/posts/${post?.slug}`} target="_blank">
            <Cta>See more</Cta>
          </Link>
        </div> */}
      </div>
    </div>
  );
}

import Link from "next/link";

import {
  getPost,
  getPosts,
  getSlugs,
  getTags,
  getTagId,
  getTagNameList,
} from "../../utils/wordpress";
import Head from "next/head";
import Image from "next/image";
import Siena from "../../public/assets/locationTour/siena/siena2.jpg";

export default function PostPage({
  post,
  modifiedContent,
  featuredMedia,
  tags,
  nextPrevPost,
}) {
  return (
    <>
      <Head>
        <title>{`Lou On Tour - ${post.title.rendered}`}</title>
        <meta
          property="og:image"
          content={post?.yoast_head_json?.og_image?.url}
        />
        <meta property="og:image:width" content="1200" />

        <meta property="og:image:height" content="630" />
        <meta
          property="og:description"
          content={post?.yoast_head_json?.description}
        />
      </Head>

      <div className="container mx-auto pt-5 w-11/12 2xl:w-4/5 text-[#2C395B]">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/" className="text-[#2C395B]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-[#2C395B]">
                Blog
              </Link>
            </li>
            <li
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              className="font-bold underline text-[#2C395B]"
            ></li>
          </ul>
        </div>

        <h1
          className="text-center py-8 text-3xl 2xl:text-5xl text-[#2C395B] l-article"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        ></h1>
        {/* <figure>
          <Image
            src={
              featuredMedia?.["media_details"]?.sizes?.full?.["source_url"] ||
              Siena
            }
            width={1000}
            height={1000}
            alt={featuredMedia?.["alt_text"] || "LouOnTour image"}
            className="w-full h-[550px] object-cover rounded-lg py-8 object-top"
            priority
          />
        </figure> */}

        <div
          className="text-[#2C395B] text-base lg:text-xl l-article"
          dangerouslySetInnerHTML={{ __html: modifiedContent }}
        ></div>
      </div>
      <div className="btn-group grid grid-cols-2 mt-8">
        <button className="btn btn-outline flex flex-col ">
          {!!nextPrevPost?.prevSlug ? (
            <Link href={`/posts/${nextPrevPost?.prevSlug}`}>
              <div className="mb-2 capitalize">Articolo Precedente</div>
              <div
                className="text-[#2C395B]"
                dangerouslySetInnerHTML={{ __html: nextPrevPost?.prevTitle }}
              ></div>
            </Link>
          ) : (
            "Questo è già l'articolo più recente"
          )}
        </button>

        <button className="btn btn-outline  flex flex-col">
          <Link href={`/posts/${nextPrevPost?.nextSlug}`}>
            <div className="mb-2 capitalize">Articolo Successivo</div>
            <div
              className="text-[#2C395B]"
              dangerouslySetInnerHTML={{ __html: nextPrevPost?.nexTitle }}
            ></div>
          </Link>
        </button>
      </div>
      <div className="w-11/12 lg:w-4/5 mx-auto py-12">
        <h6>Tags</h6>
        {tags.map((el, i) => (
          <div className="badge badge-warning mr-2 text-white" key={i}>
            {el}
          </div>
        ))}
      </div>
    </>
  );
}

//hey Next, these are the possible slugs
export async function getStaticPaths() {
  const paths = await getSlugs("posts");

  return {
    paths,
    //this option below renders in the server (at request time) pages that were not rendered at build time
    //e.g when a new blogpost is added to the app
    fallback: "blocking",
  };
}

//access the router, get the id, and get the data for that post
export async function getStaticProps({ params, locale }) {
  const post = await getPost(params?.slug);
  const idLocale = await getTagId(locale); // recupera id della lingua attuale
  const allPosts = await getPosts(idLocale);
  const postArrayIndex = allPosts?.findIndex((el) => el.id === post?.id);
  const nextPrevPost = {
    prevTitle: allPosts[postArrayIndex - 1]?.title?.rendered || null,
    nexTitle: allPosts[postArrayIndex + 1]?.title?.rendered || null,
    prevSlug: allPosts[postArrayIndex - 1]?.slug || null,
    nextSlug: allPosts[postArrayIndex + 1]?.slug || null,
  };

  const modifiedContent = post?.content?.rendered?.replace(
    "data-src-fg",
    "src"
  );
  const featuredMedia = post?.["_embedded"]?.["wp:featuredmedia"][0];
  const tags = await getTagNameList(post?.tags);

  return {
    props: {
      post,
      modifiedContent: modifiedContent,
      featuredMedia: featuredMedia,
      tags: tags,
      nextPrevPost: nextPrevPost,
    },
    revalidate: 10, // In seconds
  };
}

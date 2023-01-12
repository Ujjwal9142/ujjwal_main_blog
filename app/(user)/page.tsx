import { groq } from "next-sanity";
import { PreviewSuspense } from "next-sanity/preview";
import { previewData } from "next/headers";
import React from "react";
import BlogList from "../../components/BlogList";
import PreviewBlogList from "../../components/PreviewBlogList";
import { client } from "../../lib/sanity.client";

type Props = {};

export const revalidate = 3600; // revalidate this page every 1 hour

const query = groq`
*[_type=='post']{
...,
author->,
categories[]->
} | order(publishedAt desc)
`;

const HomePage = async (props: Props) => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A] ">
              Loading preview data
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;

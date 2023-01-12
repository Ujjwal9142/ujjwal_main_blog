import React from "react";
import ClientSideRoute from "./ClientSideRoute";
import SinglePost from "./SinglePost";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {posts?.map((post) => {
          return (
            <ClientSideRoute
              route={`/post/${post.slug.current}`}
              key={post._id}
            >
              <SinglePost post={post} />
            </ClientSideRoute>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;

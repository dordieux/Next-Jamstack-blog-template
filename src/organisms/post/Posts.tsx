import React from "react";
import { css } from "@emotion/react";

import { Post } from "../../lib/types";
import PostCard from "./PostCard";

type Props = {
  posts: Post[];
};

export default function Posts({ posts }: Props) {
  return (
    <div css={girdContainer}>
      {posts.map((post) => {
        return <PostCard post={post} key={post.slug} />;
      })}
    </div>
  );
}

const girdContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 45px;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

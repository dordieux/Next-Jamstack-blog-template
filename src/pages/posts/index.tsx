import React from "react";

import { Post } from "../../lib/types";
import Header from "../../organisms/common/Header";
import Footer from "../../organisms/common/Footer";
import { GetStaticPropsResult } from "next";
import { css } from "@emotion/react";
import { getPosts } from "../../lib/contentful";

type Props = {
  posts: Post[];
};

export default function PostsPage({ posts }: Props) {
  return (
    <>
      <Header />
      <div css={container}>
        <div>
          {posts.map((post) => {
            return <p>{post.title}</p>;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const posts = await getPosts();

  return { props: { posts } };
}

const container = css`
  width: 90%;
  margin: 0 auto 40px;

  padding-top: 150px;
  @media screen and (max-width: 600px) {
    padding-top: 130px;
  }
`;

import { css } from "@emotion/react";
import React from "react";

import { getPostBySlug, getSlugs } from "../../lib/contentful";
import { Post } from "../../lib/types";
import Footer from "../../organisms/common/Footer";
import Header from "../../organisms/common/Header";

type Props = {
  post: Post;
  title: string;
};

export default function PostPage({ post }: Props) {
  return (
    <>
      <Header />
      <div css={container}>
        <p>{post.publishedAt}</p>
        <p>{post.title}</p>
        <p>{post.subtitle}</p>
        <p>{post.body}</p>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps({ params }) {
  const res = await getPostBySlug(params.slug);
  return {
    props: {
      post: res,
    },
  };
}

export async function getStaticPaths() {
  const slugs: string[] = await getSlugs();
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

const container = css`
  padding-top: 150px;
  margin: 0px auto 50px;
  width: 60%;
`;

import React from "react";
import { css } from "@emotion/react";
import { GetStaticPropsResult, NextPage } from "next";

import { getPostBySlug, getSlugs } from "../../lib/contentful";
import { Post } from "../../lib/types";
import { Headline } from "../../molecules/post/Headline";
import { Footer } from "../../organisms/common/Footer";
import { Header } from "../../organisms/common/Header";
import { PostBody } from "../../organisms/post/PostBody";

type Props = {
  post: Post;
};

const PostPage: NextPage<Props> = ({ post }) => {
  return (
    <>
      <Header />
      <div css={container}>
        <Headline post={post} />
        <PostBody>{post.body}</PostBody>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;

export async function getStaticProps({ params }): Promise<GetStaticPropsResult<Props>> {
  const res = await getPostBySlug(params.slug);
  return {
    props: {
      post: res,
    },
  };
}

export async function getStaticPaths() {
  const slugs = await getSlugs();
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
  @media screen and (max-width: 900px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    padding-top: 130px;
    width: 90%;
  }
`;

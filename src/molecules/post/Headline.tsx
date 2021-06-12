import React, { VFC } from "react";
import { css } from "@emotion/react";

import { Post } from "../../lib/types";

type Props = {
  post: Post;
};

export const Headline: VFC<Props> = ({ post }) => {
  return (
    <>
      <p css={publishedAt}>{post.publishedAt.split("T")[0]}</p>
      <h1 css={title}>{post.title}</h1>
      <p css={subtitle}>{post.subtitle}</p>
      <figure css={figure}>
        <img src={post.image} width="100%" height="100%" />
      </figure>
    </>
  );
};

const publishedAt = css`
  color: #757575;
  margin: 0px 0px 10px 0px;
  line-height: 1.2;
  font-size: 1.5rem;
`;

const title = css`
  margin: 0;
  text-align: left;
  font-size: 4rem;
  @media screen and (max-width: 900px) {
    font-size: 3.3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const subtitle = css`
  color: #757575;
  font-size: 2rem;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const figure = css`
  margin: 0;
  aspect-ratio: 16 / 9;
`;

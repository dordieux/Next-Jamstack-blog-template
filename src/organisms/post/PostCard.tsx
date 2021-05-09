import React from "react";

import Link from "next/link";
import { css } from "@emotion/react";
import { Post } from "../../lib/types";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div>
      <Link href={`/posts/${post.slug}`} passHref>
        <a css={card}>
          <figure css={figure}>
            <img css={img} src={post.image} alt={post.slug} />
          </figure>
          <div css={text}>
            <p css={subText}>{post.publishedAt.split("T")[0]}</p>
            <p css={title}>{post.title}</p>
            <p css={subtitle}>{post.subtitle}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

const card = css`
  cursor: pointer;
  text-decoration: none;
  color: #111111;

  &:hover {
    color: #00cdac;
    opacity: 0.9;
    img {
      transform: scale(1.1, 1.1);
    }
  }
`;

const figure = css`
  margin: 0;
  aspect-ratio: 16 / 9;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const img = css`
  width: 100%;
  transition: 0.5s;
`;

const title = css`
  font-size: 20px;
  font-weight: 900;
  margin: 0px;
`;

const subtitle = css`
  color: #757575;
  font-size: 16px;
  line-height: 1.4;
  margin: 5px 0px 0px 0px;
`;

const text = css`
  width: auto;
  height: auto;
  padding: 30px 20px 20px;

  @media screen and (max-width: 600px) {
    padding: 20px 10px 10px;
  }
`;

const subText = css`
  color: #757575;
  margin: 0px 0px 10px 0px;
  line-height: 1.2;
  font-size: 1.5rem;
`;

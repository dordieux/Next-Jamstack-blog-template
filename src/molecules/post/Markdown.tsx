import React, { VFC } from "react";
import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";

import { CodeBlock } from "../../atoms/post/CodeBlock";

type Props = {
  children: string;
};

export const Markdown: VFC<Props> = ({ children }) => {
  return (
    <div css={markdown}>
      <ReactMarkdown components={{ code: CodeBlock }}>{children}</ReactMarkdown>
    </div>
  );
};

const h2 = css`
  h2 {
    color: #111111;
    font-size: 2.5rem;
    margin: 60px 0px 20px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;

    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const h3 = css`
  h3 {
    font-size: 2.2rem;
    margin: 40px 0px 10px 0px;

    @media screen and (max-width: 600px) {
      font-size: 1.7rem;
      margin: 30px 0px 10px 0px;
    }
  }
`;

const h4 = css`
  h4 {
    font-size: 2rem;
    margin: 30px 0px 10px 0px;

    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
      margin: 20px 0px 10px 0px;
    }
  }
`;

const p = css`
  p {
    color: #424242;
    font-size: 1.7rem;
    line-height: 2.2;
    margin: 15px 0px 15px 0px;
    white-space: pre-wrap;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
      line-height: 2;
    }
  }
`;

const a = css`
  a {
    color: #00cdac;
    text-decoration: none;
    :hover {
      color: #02aab0;
    }
  }
`;

const list = css`
  ul,
  ol {
    margin: 0;

    li {
      font-size: 1.6rem;
      margin: 10px 0;
    }
  }
`;

const code = css`
  p > code {
    background-color: #eee;
    color: #333;
    padding: 0.1em 0.4em;
  }
`;

const blockquote = css`
  blockquote {
    font-size: 1rem;
    margin: 15px 0;
    border-left: 3px solid #b3bfc7;
    padding: 2px 1.5rem;
    color: #626e77;

    p {
      margin: 0;
    }
  }
`;

const markdown = css`
  margin-top: 50px;
  ${[h2, h3, h4, p, a, list, code, blockquote]}
`;

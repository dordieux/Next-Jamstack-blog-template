import React, { VFC } from "react";

import { LinkButton } from "../common/LinkButton";
import { GitHubLink } from "../common/GithubLink";
import { css } from "@emotion/react";

export const HeaderLinks: VFC = () => {
  return (
    <ul css={list}>
      <li css={item}>
        <LinkButton to="/">HOME</LinkButton>
      </li>

      <li css={item}>
        <LinkButton to="/posts">POST</LinkButton>
      </li>

      <li css={item}>
        <GitHubLink />
      </li>
    </ul>
  );
};

const list = css`
  margin: 0;
  padding: 0;
`;

const item = css`
  float: left;
  position: relative;
  display: block;
  width: auto;
  padding: 0;
`;

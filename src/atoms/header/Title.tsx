import React, { VFC } from "react";
import { css } from "@emotion/react";

export const Title: VFC = () => {
  return <span css={title}>Your Name Blog</span>;
};

const title = css`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 30px;
  font-size: 18px;
`;

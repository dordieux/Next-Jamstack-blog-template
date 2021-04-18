import React from "react";
import { css } from "@emotion/react";

export default function Title() {
  return <span css={title}>Your Name Blog</span>;
}

const title = css`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 30px;
  font-size: 18px;
`;

import React, { VFC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: string;
};

export const Text: VFC<Props> = ({ children }) => {
  return <p css={text}>{children}</p>;
};

const text = css`
  font-size: 2rem;
  line-height: 1.3;
  width: 60%;
  @media screen and (max-width: 600px) {
    font-size: 1.7rem;
    width: 100%;
  }
`;

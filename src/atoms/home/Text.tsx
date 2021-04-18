import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: string;
};

export default function Text(props: Props) {
  return <p css={text}>{props.children}</p>;
}

const text = css`
  font-size: 2rem;
  line-height: 1.3;
  width: 60%;
  @media screen and (max-width: 600px) {
    font-size: 1.7rem;
    width: 100%;
  }
`;

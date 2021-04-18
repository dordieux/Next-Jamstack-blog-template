import React from "react";
import { css } from "@emotion/react";

type Props = {
  color?: string;
  children: string;
};

export default function Title(props: Props) {
  const color = props.color === "white" ? white : gray;
  return <h2 css={[title, color]}>{props.children}</h2>;
}

const title = css`
  font-size: 3.5rem;
  margin: 0px 0px 20px 0px;

  @media screen and (max-width: 900px) {
    font-size: 3rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

const gray = css`
  color: #777777;
`;

const white = css`
  color: rgba(255, 255, 255, 0.8);
`;

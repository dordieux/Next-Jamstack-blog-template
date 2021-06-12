import React, { VFC } from "react";
import { css } from "@emotion/react";

type Props = {
  color?: string;
  children: string;
};

export const Title: VFC<Props> = ({ color, children }) => {
  const font = color === "white" ? white : gray;
  return <h2 css={[title, font]}>{children}</h2>;
};

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

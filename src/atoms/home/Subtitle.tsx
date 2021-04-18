import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: string;
};

export default function Subtitle(props: Props) {
  return <h3 css={subtitle}>{props.children}</h3>;
}

const subtitle = css`
  font-size: 6.5rem;
  line-height: 1;
  margin: 0px 0px 30px 0px;

  @media screen and (max-width: 900px) {
    font-size: 5.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

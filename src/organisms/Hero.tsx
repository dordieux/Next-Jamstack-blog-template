import React from "react";
import { css } from "@emotion/react";

import Intro from "../molecules/Intro";

export default function Hero() {
  return (
    <section css={section}>
      <div css={container}>
        <Intro />
      </div>
    </section>
  );
}

const section = css`
  display: flex;
  height: 100vh;
  align-items: center;
  margin-left: 130px;

  @media screen and (max-width: 900px) {
    margin: 0rem 30px;
  }
  @media screen and (max-width: 600px) {
    margin: 0rem 16px;
  }
`;

const container = css`
  width: 100%;
`;


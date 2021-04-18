import React from "react";
import { css } from "@emotion/react";

export default function Intro() {
  return (
    <h1 css={hero}>
      Hi, my name is <span css={name}>Your Name</span>
      <br />
      I'm Developer.
    </h1>
  );
}

const hero = css`
  font-size: 5.6rem;
  font-weight: 700;
  margin: 0 0 32px 0;

  @media screen and (max-width: 1200px) {
    font-size: 5rem;
  }
  @media screen and (max-width: 900px) {
    text-align: center;
    font-size: 3.6rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 320px) {
    font-size: 2.8rem;
  }
`;

const name = css`
  background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

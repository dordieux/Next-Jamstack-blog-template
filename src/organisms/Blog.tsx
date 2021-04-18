import React from "react";
import { css } from "@emotion/react";

import Title from "../atoms/home/Title";
import Subtitle from "../atoms/home/Subtitle";
import Text from "../atoms/home/Text";
import Scroll from "../atoms/common/Scroll";

export default function Blog() {
  return (
    <section id="blog" css={section}>
      <div css={container}>
        <Title>This blog</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </Text>
        <div css={buttonWrapper}>
          <Scroll to="contact">MORE</Scroll>
        </div>
      </div>
    </section>
  );
}

const section = css`
  padding: 150px 0 100px;
  @media screen and (max-width: 900px) {
    padding-top: 100px;
  }
`;

const container = css`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    width: 85%;
  }
`;

const buttonWrapper = css`
  margin-top: 2rem;
  margin-bottom: 1rem;
  & a {
    margin-right: 10px;
  }
`;

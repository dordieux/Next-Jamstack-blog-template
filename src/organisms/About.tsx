import React from "react";
import { css } from "@emotion/react";

import Title from "../atoms/home/Title";
import Subtitle from "../atoms/home/Subtitle";
import Text from "../atoms/home/Text";
import Scroll from "../atoms/common/Scroll";

export default function About() {
  return (
    <section id="about" css={section}>
      <div css={container}>
        <Title color="white">About me</Title>
        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam.
        </Text>

        <div css={buttonWrapper}>
          <Scroll to="blog" color="white">
            MORE
          </Scroll>
        </div>
      </div>
    </section>
  );
}

const section = css`
  background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
  color: white;
  padding: 150px 0 100px;
  @media screen and (max-width: 900px) {
    padding-top: 100px;
  }
`;

const container = css`
  width: 75%;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
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

import React from "react";
import { css } from "@emotion/react";

import AnimatedLinkButton from "../../molecules/common/AnimatedLinkButton";

export default function Contact() {
  return (
    <section id="contact" css={section}>
      <div css={continaer}>
        <h3 css={title}>CONTACT</h3>
        <p>Would you like to work with me? Awesome!</p>
        <AnimatedLinkButton to="mailto:email@gmail.com" color="white">
          Let's Talk!
        </AnimatedLinkButton>
      </div>
    </section>
  );
}

const section = css`
  background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
  padding: 5rem 0rem;
  color: white;
  text-align: center;
  font-size: 2rem;
`;

const continaer = css`
  width: 75%;
  margin: auto;
`;

const title = css`
  margin: 0;
  margin-bottom: 2.5rem;
  font-size: 4rem;
  @media screen and (max-width: 900px) {
    font-size: 3.5rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }
`;

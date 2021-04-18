import React from "react";
import { css } from "@emotion/react";

import ScrollToTop from "../atoms/common/ScrollToTop";
import GitHubLink from "../molecules/common/GithubLink";
import LinkedInLink from "../molecules/common/LinkedInLink";

export default function Footer() {
  return (
    <footer css={footer}>
      <div css={scrollToTop}>
        <ScrollToTop />
      </div>

      <div css={social}>
        <LinkedInLink />
        <GitHubLink />
      </div>

      <p>Developed by Your Name</p>
    </footer>
  );
}

const footer = css`
  background-color: #333333;
  padding: 3rem 0rem;
  color: white;

  & p {
    color: gray;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const scrollToTop = css`
  display: flex;
  justify-content: center;
`;

const social = css`
  display: flex;
  justify-content: center;
  & svg {
    width: 30px;
    height: 30px;
  }
`;

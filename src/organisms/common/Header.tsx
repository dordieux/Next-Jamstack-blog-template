import React from "react";
import { css } from "@emotion/react";

import StyledHeader from "../../atoms/header/Header";
import Title from "../../atoms/header/Title";
import HeaderLinks from "../../molecules/header/HeaderLinks";

export default function Header() {
  return (
    <StyledHeader>
      <div css={container}>
        <nav css={navBar}>
          <div css={flex}>
            <Title />
          </div>
          <div css={link}>
            <HeaderLinks />
          </div>
        </nav>
      </div>
    </StyledHeader>
  );
}

const container = css`
  box-sizing: border-box;
  padding: 0 16px;
  margin: 0 auto;

  @media screen and (min-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const navBar = css`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const flex = css`
  flex: 1;
`;

const link = css`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

import React, { VFC, useState } from "react";
import { css } from "@emotion/react";

import { Header as StyledHeader } from "../../atoms/header/Header";
import { Title } from "../../atoms/header/Title";
import { HeaderLinks } from "../../molecules/header/HeaderLinks";
import { MdMenu } from "react-icons/md";
import { SimpleButton } from "../../atoms/common/SimpleButton";
import { SideNavBar } from "../../molecules/header/SideNavBar";

export const Header: VFC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebarOpenToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <StyledHeader>
        <div css={container}>
          <nav css={navBar}>
            <div css={flex}>
              <Title />
            </div>
            <div css={link}>
              <HeaderLinks />
            </div>
            <div css={menu} onClick={handleSidebarOpenToggle}>
              <SimpleButton>
                <MdMenu size="24" />
              </SimpleButton>
            </div>
          </nav>
        </div>
      </StyledHeader>
      <SideNavBar isOpen={isSidebarOpen} onClose={handleSidebarOpenToggle} />
    </>
  );
};

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

const menu = css`
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
  }
`;

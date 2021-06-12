import React, { VFC } from "react";
import { css } from "@emotion/react";
import { animateScroll } from "react-scroll";
import { MdExpandLess } from "react-icons/md";

const scrollToTop = () => {
  animateScroll.scrollToTop();
};

export const ScrollToTop: VFC = () => {
  return <MdExpandLess onClick={scrollToTop} css={style} />;
};

const style = css`
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  margin-bottom: 10px;

  &:hover {
    transform: translateY(-3px);
  }
`;

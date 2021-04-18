import React from "react";
import { css } from "@emotion/react";

import HeaderLinks from "./HeaderLinks";
import Backdrop from "../../atoms/header/Backdrop";

type Props = {
  isOpen: Boolean;
  onClose: any;
};

export default function SideNavBar(props: Props) {
  const classes = props.isOpen ? [sideNavBar, open] : sideNavBar;
  return (
    <>
      <nav css={classes}>
        <HeaderLinks />
      </nav>
      {props.isOpen ? <Backdrop onClose={props.onClose} /> : null}
    </>
  );
}

const sideNavBar = css`
  position: fixed;
  height: 100%;
  right: 0px;
  width: 200px;
  background: white;
  z-index: 1000;
  transform: translateX(100%);
  transition: transform 0.4s;

  ul {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;

    span {
      width: calc(100% - 30px);
    }
  }
`;

const open = css`
  transform: translateX(0);
`;

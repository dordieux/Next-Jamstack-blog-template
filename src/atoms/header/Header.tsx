import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

export default function Header(props: Props) {
  const [isTop, setIsTop] = useState(true);

  function onScroll() {
    const position = window.pageYOffset;
    position < 80 ? setIsTop(true) : setIsTop(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = isTop ? [header, transparent] : header;

  return <header css={styles}>{props.children}</header>;
}

const header = css`
  position: fixed;
  width: 100%;
  color: #555;
  background-color: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding: 1rem 0;
  z-index: 10;
  box-shadow: 0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15);
  transition: all 150ms ease 0s;
`;

const transparent = css`
  background-color: transparent !important;
  box-shadow: none;
  padding-top: 20px;
`;

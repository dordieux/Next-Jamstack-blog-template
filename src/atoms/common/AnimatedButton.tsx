import React, { VFC } from "react";
import { css } from "@emotion/react";

type Props = {
  color?: "main" | "white";
  children: string;
};

export const AnimatedButton: VFC<Props> = ({ color = "main", children }) => {
  const action = color === "main" ? main : white;
  return <span css={[button, action]}>{children}</span>;
};

const button = css`
  font-size: 1.5rem;
  display: inline-block;
  position: relative;
  padding: 1.2rem 1.6rem;
  font-weight: bold;
  line-height: 1;
  z-index: 1;
  cursor: pointer;
  transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.6s;

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0px;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all cubic-bezier(0.19, 1, 0.22, 1) 0.3s;
  }
`;

const main = css`
  background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
  border-image-slice: 1;
  cursor: pointer;

  &::after {
    background-image: linear-gradient(135deg, #02aab0 0%, #00cdac 100%);
  }

  &:hover {
    -webkit-text-fill-color: white;

    &::after {
      width: 100%;
    }
  }
`;

const white = css`
  color: white;
  border: 2px solid white;

  &::after {
    background: white;
  }

  &:hover {
    color: #00cdac;
    &::after {
      width: 100%;
    }
  }
`;

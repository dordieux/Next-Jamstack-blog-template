import React from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

export default function SimpleButton(props: Props) {
  return <span css={style}>{props.children}</span>;
}

const style = css`
  display: inline-flex;
  padding: 15px;
  border-radius: 4px;
  line-height: 1.75;

  &:hover {
    background: rgba(200, 200, 200, 0.2);
  }
`;

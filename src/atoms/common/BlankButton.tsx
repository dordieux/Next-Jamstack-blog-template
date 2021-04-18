import React from "react";
import { css } from "@emotion/react";

import SimpleButton from "./SimpleButton";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function BlankButton(props: Props) {
  return (
    <a href={props.to} css={style} target="_blank">
      <SimpleButton>{props.children}</SimpleButton>
    </a>
  );
}

const style = css`
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

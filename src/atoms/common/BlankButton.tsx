import React, { VFC } from "react";
import { css } from "@emotion/react";

import { SimpleButton } from "./SimpleButton";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const BlankButton: VFC<Props> = ({ to, children }) => {
  return (
    <a href={to} css={style} target="_blank">
      <SimpleButton>{children}</SimpleButton>
    </a>
  );
};

const style = css`
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

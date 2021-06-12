import React, { VFC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

export const SimpleButton: VFC<Props> = ({ children }) => {
  return <span css={style}>{children}</span>;
};

const style = css`
  display: inline-flex;
  padding: 15px;
  border-radius: 4px;
  line-height: 1.75;

  &:hover {
    background: rgba(200, 200, 200, 0.2);
  }
`;

import React, { VFC } from "react";
import Link from "next/link";
import { css } from "@emotion/react";

import { SimpleButton } from "../../atoms/common/SimpleButton";

type Props = {
  to: string;
  children: React.ReactNode;
};

export const LinkButton: VFC<Props> = ({ to, children }) => {
  return (
    <Link href={to} passHref>
      <a css={link}>
        <SimpleButton>{children}</SimpleButton>
      </a>
    </Link>
  );
};

const link = css`
  font-size: 14px;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: inherit;
`;

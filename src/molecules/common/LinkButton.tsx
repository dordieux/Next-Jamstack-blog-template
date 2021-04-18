import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";

import SimpleButton from "../../atoms/common/SimpleButton";

type Props = {
  to: string;
  children: React.ReactNode;
};

export default function LinkButton(props: Props) {
  return (
    <Link href={props.to} passHref>
      <a css={link}>
        <SimpleButton>{props.children}</SimpleButton>
      </a>
    </Link>
  );
}

const link = css`
  font-size: 14px;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  text-decoration: none;
  color: inherit;
`;

import React, { VFC } from "react";
import Link from "next/link";

import { AnimatedButton } from "../../atoms/common/AnimatedButton";

type Props = {
  color?: "main" | "white";
  to: string;
  children: string;
  blank?: boolean;
};

export const AnimatedLink: VFC<Props> = ({ color, to, children, blank }) => {
  return (
    <Link href={to}>
      <a target={blank ? "_blank" : undefined}>
        <AnimatedButton color={color}>{children}</AnimatedButton>
      </a>
    </Link>
  );
};

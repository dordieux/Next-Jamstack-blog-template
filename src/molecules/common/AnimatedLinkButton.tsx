import React from "react";
import Link from "next/link";

import AnimatedButton from "../../atoms/common/AnimatedButton";

export default function AnimatedLink(props: Props) {
  return (
    <Link href={props.to}>
      <a target={props.blank ? "_blank" : null}>
        <AnimatedButton color={props.color}>{props.children}</AnimatedButton>
      </a>
    </Link>
  );
}

type Props = {
  color?: "main" | "white";
  to: string;
  children: string;
  blank?: boolean;
};

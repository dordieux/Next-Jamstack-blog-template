import React, { VFC } from "react";
import { Link } from "react-scroll";
import { AnimatedButton } from "./AnimatedButton";

type Props = {
  color?: "main" | "white";
  to: string;
  children: string;
};

export const Scroll: VFC<Props> = ({ color = "main", to, children }: Props) => {
  return (
    <Link to={to} smooth duration={1000}>
      <AnimatedButton color={color}>{children}</AnimatedButton>
    </Link>
  );
};

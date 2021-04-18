import React from "react";
import { Link } from "react-scroll";
import AnimatedButton from "./AnimatedButton";

export default function Scroll({ color = "main", ...props }: Props) {
  return (
    <Link to={props.to} smooth duration={1000}>
      <AnimatedButton color={color}>{props.children}</AnimatedButton>
    </Link>
  );
}

type Props = {
  color?: "main" | "white";
  to: string;
  children: string;
};

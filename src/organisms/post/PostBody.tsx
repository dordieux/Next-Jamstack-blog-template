import React, { VFC } from "react";
import { Markdown } from "../../molecules/post/Markdown";

type Props = {
  children: string;
};

export const PostBody: VFC<Props> = ({ children }) => {
  return <Markdown>{children}</Markdown>;
};

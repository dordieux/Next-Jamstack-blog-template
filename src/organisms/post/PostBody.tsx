import React from "react";
import Markdown from "../../molecules/post/Markdown";

type Props = {
  children: string;
};

export default function PostBody({ children }: Props) {
  return (
    <div>
      <Markdown>{children}</Markdown>
    </div>
  );
}

import React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

type Props = {
  children: string;
};

export default function Markdown(props: Props) {
  return <ReactMarkdown plugins={[gfm]}>{props.children}</ReactMarkdown>;
}

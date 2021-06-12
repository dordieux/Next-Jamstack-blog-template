import React, { VFC } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import type { CodeComponent } from "react-markdown/src/ast-to-react";

type CodeProps = Parameters<CodeComponent>[0];

export const CodeBlock: VFC<CodeProps> = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      style={hybrid}
      language={match[1]}
      PreTag="div"
      children={String(children).replace(/\n$/, "")}
      customStyle={{ padding: "1em", margin: "0.5em 0", lineHeight: 1.5, borderRadius: "10px", fontSize: "1.5rem" }}
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

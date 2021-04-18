import React from "react";
import { FaGithub } from "react-icons/fa";

import BlankButton from "../../atoms/common/BlankButton";

export default function GitHubLink() {
  return (
    <BlankButton to="https://github.com">
      <FaGithub size="24" />
    </BlankButton>
  );
}

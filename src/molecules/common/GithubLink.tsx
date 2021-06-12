import React, { VFC } from "react";
import { FaGithub } from "react-icons/fa";

import { BlankButton } from "../../atoms/common/BlankButton";

export const GitHubLink: VFC = () => {
  return (
    <BlankButton to="https://github.com">
      <FaGithub size="24" />
    </BlankButton>
  );
};

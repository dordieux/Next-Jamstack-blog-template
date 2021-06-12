import React, { VFC } from "react";
import { FaLinkedin } from "react-icons/fa";

import { BlankButton } from "../../atoms/common/BlankButton";

export const LinkedInLink: VFC = () => {
  return (
    <BlankButton to="https://www.linkedin.com/">
      <FaLinkedin size="24" />
    </BlankButton>
  );
};

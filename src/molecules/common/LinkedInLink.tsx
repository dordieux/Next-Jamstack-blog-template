import React from "react";
import { FaLinkedin } from "react-icons/fa";

import BlankButton from "../../atoms/common/BlankButton";

export default function LinkedInLink() {
  return (
    <BlankButton to="https://www.linkedin.com/">
      <FaLinkedin size="24" />
    </BlankButton>
  );
}

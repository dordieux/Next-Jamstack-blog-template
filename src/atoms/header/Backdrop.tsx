import React, { VFC } from "react";
import { css } from "@emotion/react";

type Props = {
  onClose: () => void;
};

export const Backdrop: VFC<Props> = ({ onClose }) => {
  return <div onClick={onClose} css={style} />;
};

const style = css`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 900;
`;

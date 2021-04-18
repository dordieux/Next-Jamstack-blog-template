import React from "react";
import { AppProps } from "next/app";
import { css, Global } from "@emotion/react";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Global styles={global} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

const global = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    font-family: -apple-system, Segoe UI, Helvetica Neue, Hiragino Kaku Gothic ProN, "メイリオ", meiryo, sans-serif;
  }
`;

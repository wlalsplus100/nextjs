import { Inter } from "next/font/google";
import { css } from "@emotion/react";
import Main from "@/components/main";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const pink = css`
  color: hotpink;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>오누이</title>
        <style>
          @import
          url(`https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap`);
        </style>
      </Head>
      <Main />
    </>
  );
}

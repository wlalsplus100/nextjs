import { Inter } from "next/font/google";
import { css } from "@emotion/react";
import Head from "next/head";
import Timeline from "@/components/TimeLine";

const inter = Inter({ subsets: ["latin"] });

const pink = css`
  color: hotpink;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>오누이</title>
      </Head>
      <Timeline />
    </>
  );
}

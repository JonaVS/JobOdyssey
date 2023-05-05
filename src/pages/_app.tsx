import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Providers from "@/components/Providers/Providers";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Job Odyssey</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Providers>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Providers>
    </>
  );
}

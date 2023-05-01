import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import useColorSchemeConfig from "@/hooks/useColorSchemeConfig";
import Layout from "@/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  const { colorScheme, toggleColorScheme } = useColorSchemeConfig();

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

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

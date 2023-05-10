import usePageWithAuth from "@/hooks/usePageWithAuth";
import Head from "next/head";

export default function Dashboard() {
  const user = usePageWithAuth();

  if (!user) return null

  return (
    <>
      <Head>
        <title>Board name here</title>
      </Head>
      Board with job applications will go here
    </>
  );
}
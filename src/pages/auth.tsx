import Head from "next/head";
import AuthPanel from "@/components/AuthPanel/AuthPanel";

export default function Auth() {
  return (
    <>
      <Head>
        <title>Login | Register</title>
      </Head>
      <AuthPanel />
    </>
  );
}
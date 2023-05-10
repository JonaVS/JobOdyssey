/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import AuthPanel from "@/components/AuthPanel/AuthPanel";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useRouter } from "next/router";
import { selectUser } from "@/store/slices/userAuthSlice";
import { useEffect } from "react";

export default function Auth() {
  const user = useAppSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);

  if (user) return null;

  return (
    <>
      <Head>
        <title>Login | Register</title>
      </Head>
      <AuthPanel />
    </>
  );
}
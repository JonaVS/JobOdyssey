/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { selectUser } from "@/store/slices/userAuthSlice";
import { useRouter } from "next/router";
import { useAppSelector } from "./reduxHooks";

function usePageWithAuth() {
  const user = useAppSelector(selectUser);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth");
    }
  }, [user]);

  return user;
}

export default usePageWithAuth
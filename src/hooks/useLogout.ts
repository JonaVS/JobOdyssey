import { useState } from "react";
import { logout } from "@/store/slices/userAuthSlice";
import { useAppDispatch } from "./reduxHooks";

function useLogout() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  async function handleLogout() {
    setIsLoading(true);
    try {
      await dispatch(logout()).unwrap();
    } catch (error) {
      /* do nothing */
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, handleLogout };
}

export default useLogout;
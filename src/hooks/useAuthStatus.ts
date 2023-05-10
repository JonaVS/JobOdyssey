import { useEffect, useState } from "react";
import { isAuthenticated } from "@/store/slices/userAuthSlice";
import { useAppDispatch } from "./reduxHooks";

function useAuthStatus() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await dispatch(isAuthenticated()).unwrap();
      } catch (error) 
      { 
        /* do nothing */ 
      } 
      finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [dispatch]);

  return {
    isLoading,
  };
}

export default useAuthStatus;
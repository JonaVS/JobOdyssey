import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getUserJobBoards, selectBoards } from "@/store/slices/jobBoardsSlice";
import { useEffect, useState } from "react";

function useUserBoards() {
  const [isLoading, setIsLoading] = useState(true);
  const userBoards = useAppSelector(selectBoards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchUserBoards = async () => {
      try {
        await dispatch(getUserJobBoards()).unwrap();
      } catch (error) {
        /* pending logic */
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserBoards();
  }, [dispatch]);

  return {isLoading, userBoards}
}

export default useUserBoards;
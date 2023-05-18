/* eslint-disable react-hooks/exhaustive-deps */
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getUserJobBoards, selectBoards } from "@/store/slices/jobBoardsSlice";
import { useEffect, useState } from "react";

function useUserBoards() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const userBoards = useAppSelector(selectBoards);
  const dispatch = useAppDispatch();

  const fetchUserBoards = async () => {
    setIsLoading(true);
    try {
      await dispatch(getUserJobBoards()).unwrap();
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserBoards();
  }, []);

  return { isLoading, error, userBoards, fetchUserBoards };
}

export default useUserBoards;
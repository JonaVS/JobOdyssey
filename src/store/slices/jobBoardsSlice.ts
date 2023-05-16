/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import type { JobBoard } from "@/models/jobBoard/jobBoardModels";
import type { RootState } from "../store";

type JobBoardsState = {
  boards: JobBoard[],
  currentBoardId: string | null
};

const initialState: JobBoardsState = {
  boards: [],
  currentBoardId: null
};

export const jobBoardsSlice = createSlice({
  name: "jobBoards",
  initialState,
  reducers: {},
});

export const selectBoards = (state: RootState) => state.jobBoards.boards;
export const selectCurrentBoard = (state: RootState) => state.jobBoards.currentBoardId;

export default jobBoardsSlice.reducer;
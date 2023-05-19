/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { CreateJobBoard, JobBoard } from "@/models/jobBoard/jobBoardModels";
import apiAgent from "@/api/agent";
import { getApiError } from "@/utils/apiErrorExtractor";
import type { RootState } from "../store";

type JobBoardsState = {
  boards: JobBoard[];
  currentBoardId: string | null;
};

const initialState: JobBoardsState = {
  boards: [],
  currentBoardId: null,
};

export const getUserJobBoards = createAsyncThunk(
  "jobBoards/get",
  async (_, { rejectWithValue }) => {
    try {
      const jobBoards = await apiAgent.jobBoards.getUserBoards();
      return jobBoards;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  }
);

export const createJobBoard = createAsyncThunk(
  "jobBoards/create",
  async (createData: CreateJobBoard, { rejectWithValue }) => {
    try {
      const jobBoard = await apiAgent.jobBoards.createBoard(createData);
      return jobBoard;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  }
);

export const jobBoardsSlice = createSlice({
  name: "jobBoards",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserJobBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
    })
    builder.addCase(createJobBoard.fulfilled, (state, action) => {
      state.boards.push(action.payload);
    })
  },
});

export const selectBoards = (state: RootState) => state.jobBoards.boards;
export const selectCurrentBoard = (state: RootState) => state.jobBoards.currentBoardId;

export default jobBoardsSlice.reducer;
import { configureStore } from "@reduxjs/toolkit";
import userAuthReducer from "./slices/userAuthSlice"
import jobBoardsReducer from "./slices/jobBoardsSlice"

const store = configureStore({
  reducer: {
    userAuth: userAuthReducer,
    jobBoards: jobBoardsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
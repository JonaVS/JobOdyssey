/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { RegisterRequest, User } from "@/models/auth/authModels";
import apiAgent from "@/api/agent";
import { getApiError } from "@/utils/apiErrorExtractor";

type UserAuthState = {
  user: User | null;
};

const initialState: UserAuthState = {
  user: null,
};

export const register = createAsyncThunk(
  "userAuth/register",
  async (registerData: RegisterRequest, {rejectWithValue}) => {
    try {
      const response = await apiAgent.auth.register(registerData);
      const user: User = {
        displayName: response.displayName,
        email: response.email,
      };
      return user;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  }
);

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload as User;
    });
  },
});

export const selectUser = (state: RootState) => state.userAuth.user;

export default userAuthSlice.reducer;

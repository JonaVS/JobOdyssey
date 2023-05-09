/* eslint-disable no-param-reassign */
import { AuthResponse, LoginRequest, RegisterRequest, User } from "@/models/auth/authModels";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiAgent from "@/api/agent";
import { getApiError } from "@/utils/apiErrorExtractor";
import type { RootState } from "../store";

type UserAuthState = {
  user: User | null;
};

const initialState: UserAuthState = {
  user: null,
};

function createUserFromResponse(response: AuthResponse ): User {
  return {
    displayName: response.displayName,
    email: response.email,
  };
}

export const register = createAsyncThunk(
  "userAuth/register",
  async (registerData: RegisterRequest, {rejectWithValue}) => {
    try {
      const response = await apiAgent.auth.register(registerData);
      const user = createUserFromResponse(response);
      return user;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  }
);

export const login = createAsyncThunk(
  "userAuth/login",
  async (loginData: LoginRequest, {rejectWithValue}) => {
    try {
      const response = await apiAgent.auth.login(loginData);
      const user = createUserFromResponse(response);
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

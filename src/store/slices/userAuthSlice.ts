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

function storeJWT(token: string): void {
  localStorage.setItem("jwt", token);
}

function removeJWT(): void {
  localStorage.removeItem("jwt");
}

export const register = createAsyncThunk(
  "userAuth/register",
  async (registerData: RegisterRequest, {rejectWithValue}) => {
    try {
      const response = await apiAgent.auth.register(registerData);
      const user = createUserFromResponse(response);
      storeJWT(response.token)
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
      storeJWT(response.token)
      return user;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  }
);

export const isAuthenticated = createAsyncThunk(
  "userAuth/isAuthenticated",
  async (_, { rejectWithValue }) => {
    try {
      const user = await apiAgent.auth.isAuthenticated();
      return user;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }
  }
);

// This is needed to revoke refresh token stored in http only cookie
export const logout = createAsyncThunk(
  "userAuth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await apiAgent.auth.logout();
      return true;
    } catch (error) {
      return rejectWithValue(getApiError(error));
    }finally {
      // Even if API call fails, JWT from local storage needs to be removed.
      removeJWT();
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
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload as User;
    });
    builder.addCase(isAuthenticated.fulfilled, (state, action) => {
      state.user = action.payload as User;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
    // If logout API call fails, still set user to null 
    builder.addCase(logout.rejected, (state) => {
      state.user = null;
    });
  },
});

export const selectUser = (state: RootState) => state.userAuth.user;

export default userAuthSlice.reducer;

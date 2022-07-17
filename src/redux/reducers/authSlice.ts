import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../types/redux/state/auth";
import { CurrentUser } from "../../types/users";

export const initialState: AuthState = {
  currentUser: null,
  error: undefined,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser | null>) => {
      state.currentUser = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
  },
});

export const { setCurrentUser, setError, setToken } = authSlice.actions;

export default authSlice.reducer;

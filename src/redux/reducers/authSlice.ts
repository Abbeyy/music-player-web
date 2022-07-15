import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../../types/redux/state/auth";

export const initialState: AuthState = {
  token: null,
  error: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string | null>) => {
      state.token = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setToken, setError } = authSlice.actions;

export default authSlice.reducer;

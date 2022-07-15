import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Topic, WelcomeState } from "../../types/redux/state/welcome";

export const initialState: WelcomeState = {
  topic: Topic.HOME,
};

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    setTopic: (state, action: PayloadAction<Topic>) => {
      state.topic = action.payload;
    },
  },
});

export const { setTopic } = welcomeSlice.actions;

export default welcomeSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOPIC } from "../../types";
import { WelcomeState } from "../../types/redux/state/welcome";

export const initialState: WelcomeState = {
  topic: TOPIC.HOME,
};

export const welcomeSlice = createSlice({
  name: "welcome",
  initialState,
  reducers: {
    setTopic: (state, action: PayloadAction<TOPIC>) => {
      state.topic = action.payload;
    },
  },
});

export const { setTopic } = welcomeSlice.actions;

export default welcomeSlice.reducer;

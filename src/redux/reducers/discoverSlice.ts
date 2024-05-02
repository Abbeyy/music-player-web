import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TOPIC } from "../../types";
import { DiscoverState } from "../../types/redux/state/discover";

export const initialState: DiscoverState = {
  topic: TOPIC.HOME,
};

export const DiscoverSlice = createSlice({
  name: "discover",
  initialState,
  reducers: {
    setTopic: (state, action: PayloadAction<TOPIC>) => {
      state.topic = action.payload;
    },
  },
});

export const { setTopic } = DiscoverSlice.actions;

export default DiscoverSlice.reducer;

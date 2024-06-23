import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  TrackRecommendations,
  TrackState,
} from "../../types/redux/state/track";

export const initialState: TrackState = {
  recommendations: {
    seeds: [],
    tracks: [],
  },
};

export const tracksSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setRecommendations: (
      state,
      action: PayloadAction<TrackRecommendations | null>
    ) => {
      state.recommendations = action.payload;
    },
  },
});

export const { setRecommendations } = tracksSlice.actions;

export default tracksSlice.reducer;

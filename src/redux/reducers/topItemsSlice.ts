import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopItemsState } from "../../types/redux/state/topItems";
import { TopArtists, TopTracks } from "../../types/redux/topItems";

export const initialState: TopItemsState = {
  tracks: null,
  artists: null,
};

export const topItemsSlice = createSlice({
  name: "topItems",
  initialState,
  reducers: {
    setTopTracks: (state, action: PayloadAction<TopTracks | null>) => {
      state.tracks = action.payload;
    },
    setTopArtists: (state, action: PayloadAction<TopArtists | null>) => {
      state.artists = action.payload;
    },
  },
});

export const { setTopTracks, setTopArtists } = topItemsSlice.actions;

export default topItemsSlice.reducer;

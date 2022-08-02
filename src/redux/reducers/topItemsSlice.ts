import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TopItemsState } from "../../types/redux/state/topItems";
import { TopTracks } from "../../types/top-items/topTracks";

export const initialState: TopItemsState = {
  tracks: null,
  //   artists: null,
};

export const topItemsSlice = createSlice({
  name: "topItems",
  initialState,
  reducers: {
    setTopTracks: (state, action: PayloadAction<TopTracks | null>) => {
      state.tracks = action.payload;
    },
    // setTopArtists: (state, action: PayloadAction<TopTracks | null>) => {
    //     state.currentUser = action.payload;
    //   },
  },
});

export const { setTopTracks } = topItemsSlice.actions;

export default topItemsSlice.reducer;

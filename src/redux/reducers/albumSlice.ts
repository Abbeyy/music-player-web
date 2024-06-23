import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AlbumState, NewReleases } from "../../types/redux/state/album";

export const initialState: AlbumState = {
  newReleases: {
    href: "",
    limit: 0,
    next: "",
    offset: 0,
    previous: "",
    total: 0,
    items: [],
  },
};

export const albumSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setNewReleaseAlbums: (state, action: PayloadAction<NewReleases | null>) => {
      state.newReleases = action.payload;
    },
  },
});

export const { setNewReleaseAlbums } = albumSlice.actions;

export default albumSlice.reducer;

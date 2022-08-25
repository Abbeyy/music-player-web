import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist } from "../../types/artist";
import { ArtistState } from "../../types/redux/state/artist";

export const initialState: ArtistState = {
  artist: null,
};

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtist: (state, action: PayloadAction<Artist | null>) => {
      state.artist = action.payload;
    },
  },
});

export const { setArtist } = artistSlice.actions;

export default artistSlice.reducer;

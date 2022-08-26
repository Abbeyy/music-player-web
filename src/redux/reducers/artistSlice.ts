import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Album } from "../../types/album";
import { Artist } from "../../types/artist";
import { ArtistState } from "../../types/redux/state/artist";

export const initialState: ArtistState = {
  artist: null,
  albums: null,
};

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtist: (state, action: PayloadAction<Artist | null>) => {
      state.artist = action.payload;
    },
    setArtistsAlbums: (state, action: PayloadAction<Album[] | null>) => {
      state.albums = action.payload;
    },
  },
});

export const { setArtist, setArtistsAlbums } = artistSlice.actions;

export default artistSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Album } from "../../types/album";
import { Artist } from "../../types/artist";
import { SearchState } from "../../types/redux/state/search";
import { Track } from "../../types/track";

export const initialState: SearchState = {
  albums: [],
  artists: [],
  loading: false,
  tracks: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setAlbumsSearch: (state, action: PayloadAction<Album[]>) => {
      state.albums = action.payload;
    },
    setArtistsSearch: (state, action: PayloadAction<Artist[]>) => {
      state.artists = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setTracksSearch: (state, action: PayloadAction<Track[]>) => {
      state.tracks = action.payload;
    },
  },
});

export const {
  setAlbumsSearch,
  setArtistsSearch,
  setLoading,
  setTracksSearch,
} = searchSlice.actions;

export default searchSlice.reducer;

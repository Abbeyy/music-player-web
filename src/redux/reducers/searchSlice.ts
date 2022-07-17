import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist } from "../../types/artist";
import { SearchState } from "../../types/redux/state/search";

export const initialState: SearchState = {
  artists: [],
  loading: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setArtistsSearch: (state, action: PayloadAction<Artist[]>) => {
      state.artists = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setArtistsSearch, setLoading } = searchSlice.actions;

export default searchSlice.reducer;

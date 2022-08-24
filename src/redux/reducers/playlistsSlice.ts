import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Playlist } from "../../types/playlist";
import { PlaylistState } from "../../types/redux/state/playlist";

export const initialState: PlaylistState = {
  currentUsersPlaylists: null,
};

export const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentUsersPlaylists: (
      state,
      action: PayloadAction<Playlist[] | null>
    ) => {
      state.currentUsersPlaylists = action.payload;
    },
  },
});

export const { setCurrentUsersPlaylists } = playlistSlice.actions;

export default playlistSlice.reducer;

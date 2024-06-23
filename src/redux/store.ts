import { configureStore } from "@reduxjs/toolkit";

import ArtistReducer from "./reducers/artistSlice";
import AlbumReducer from "./reducers/albumSlice";
import AuthReducer from "./reducers/authSlice";
import PlaylistReducer from "./reducers/playlistsSlice";
import SearchReducer from "./reducers/searchSlice";
import TopItemsReducer from "./reducers/topItemsSlice";
import TrackReducer from "./reducers/tracksSlice";

export const store = configureStore({
  reducer: {
    artist: ArtistReducer,
    album: AlbumReducer,
    auth: AuthReducer,
    playlist: PlaylistReducer,
    search: SearchReducer,
    topItems: TopItemsReducer,
    tracks: TrackReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

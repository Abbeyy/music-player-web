import { configureStore } from "@reduxjs/toolkit";

import ArtistReducer from "./reducers/artistSlice";
import AuthReducer from "./reducers/authSlice";
import PlaylistReducer from "./reducers/playlistsSlice";
import SearchReducer from "./reducers/searchSlice";
import TopItemsReducer from "./reducers/topItemsSlice";
import DiscoverReducer from "./reducers/discoverSlice";

export const store = configureStore({
  reducer: {
    artist: ArtistReducer,
    auth: AuthReducer,
    playlist: PlaylistReducer,
    search: SearchReducer,
    topItems: TopItemsReducer,
    discover: DiscoverReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

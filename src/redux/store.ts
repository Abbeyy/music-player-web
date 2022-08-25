import { configureStore } from "@reduxjs/toolkit";

import ArtistReducer from "./reducers/artistSlice";
import AuthReducer from "./reducers/authSlice";
import PlaylistReducer from "./reducers/playlistsSlice";
import SearchReducer from "./reducers/searchSlice";
import TopItemsReducer from "./reducers/topItemsSlice";
import WelcomeReducer from "./reducers/welcomeSlice";

export const store = configureStore({
  reducer: {
    artist: ArtistReducer,
    auth: AuthReducer,
    playlist: PlaylistReducer,
    search: SearchReducer,
    topItems: TopItemsReducer,
    welcome: WelcomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

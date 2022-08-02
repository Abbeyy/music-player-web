import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./reducers/authSlice";
import SearchReducer from "./reducers/searchSlice";
import TopItemsReducer from "./reducers/topItemsSlice";
import WelcomeReducer from "./reducers/welcomeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    search: SearchReducer,
    topItems: TopItemsReducer,
    welcome: WelcomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

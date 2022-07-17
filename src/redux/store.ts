import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./reducers/authSlice";
import SearchReducer from "./reducers/searchSlice";
import WelcomeReducer from "./reducers/welcomeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    search: SearchReducer,
    welcome: WelcomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

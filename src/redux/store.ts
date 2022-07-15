import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./reducers/authSlice";
import WelcomeReducer from "./reducers/welcomeSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    welcome: WelcomeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

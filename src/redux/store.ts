import { configureStore } from "@reduxjs/toolkit";

import AuthReducer from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

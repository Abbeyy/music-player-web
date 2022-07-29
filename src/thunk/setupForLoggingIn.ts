import { setToken } from "../redux/reducers/authSlice";
import { AppThunk } from "../types/redux/store";
import { getUser } from "./getUser";

export const setupForLoggingIn = (): AppThunk => async (dispatch) => {
  try {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
      const hashExtracted = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));

      token = hashExtracted?.split("=")[1] ?? null;

      if (token) {
        window.location.hash = "";
        window.localStorage.setItem("token", token);

        dispatch(setToken(token));
        dispatch(getUser(token));
      } else {
        console.warn("Error when extracting token.");
        dispatch(setToken(null));
      }
    }

    if (token) {
      dispatch(setToken(token));
      dispatch(getUser(token));
    }
  } catch (e: any) {
    console.warn("Failed Log User In Thunk: ", e);
    dispatch(setToken(null));
  }
};

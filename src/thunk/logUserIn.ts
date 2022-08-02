import {
  AUTH_ENDPOINT,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPES,
} from "../constants/auth";
import { AppThunk } from "../types/redux/store";

export const takeUserToExternalAuthentication = (): AppThunk => async () => {
  try {
    window.location.replace(
      `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`
    );
  } catch (e: any) {
    console.warn("Failed Log User Out Thunk: ", e);
  }
};

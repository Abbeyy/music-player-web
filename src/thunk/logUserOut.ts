import { setCurrentUser, setToken } from "../redux/reducers/authSlice";
import { AppThunk } from "../types/redux/store";

export const logUserOut = (): AppThunk => async (dispatch) => {
  try {
    window.localStorage.removeItem("token");
    dispatch(setToken(null));

    dispatch(setCurrentUser(null));
  } catch (e: any) {
    console.warn("Failed Log User Out Thunk: ", e);
  }
};
